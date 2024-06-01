import * as crypto from 'crypto'

interface NumHashPair {
  num: number
  hash: string
}

export function seedGenerator(hash: string, salt: string): string {
  // const hmac = HmacSHA256(CryptoJS.enc.Hex.parse(hash), salt);
  // return hmac.toString(CryptoJS.enc.Hex);
  const hmac = crypto.createHmac('sha256', hash).digest('hex')
  return hmac
}

export function createNums(allNums: number[], hash: string): NumHashPair[] {
  const nums: NumHashPair[] = []
  // let h = SHA256(hash).toString(CryptoJS.enc.Hex);
  let h = crypto.createHmac('sha256', hash).digest('hex')

  allNums.forEach((c) => {
    nums.push({
      num: c,
      hash: h
    })
    h = h.substring(1) + h.charAt(0)
  })
  nums.sort((o1, o2) => {
    if (o1.hash < o2.hash) {
      return -1
    } else if (o1.hash === o2.hash) {
      return 0
    } else {
      return 1
    }
  })
  return nums
}

export function keno(hash: string): number[] {
  const salt = '000000000000000000076973be291d219d283d4af9135601ff37df46491cca7e'
  const allNums: number[] = [
    1, 30, 11, 40, 2, 29, 12, 39, 3, 28, 13, 38, 4, 27, 14, 37, 5, 26, 15, 36, 6, 25, 16, 35, 7, 24, 17, 34,
    8, 23, 18, 33, 9, 22, 19, 32, 10, 21, 20, 31
  ]
  let seed = seedGenerator(hash, salt)
  let finalNums = createNums(allNums, seed)
  // seed = String(SHA256(seed));
  seed = String(crypto.createHmac('sha256', seed).digest('hex'))
  finalNums = createNums(
    finalNums.map((m) => m.num),
    seed
  )
  return finalNums.slice(0, 10).map((m) => m.num)
}
