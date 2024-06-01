const crypto = require('crypto');

export function roll(data:string) {
  // create hash using server seed as key and client seed as message
  const hash = crypto.createHmac('sha256', data).digest('hex');
  // console.log('result hash', hash);

  let index = 0;
  let lucky = 0;
  let compute = 0;
  while (index < 4) {
    lucky = parseInt(hash.substring(index * 2, index * 2 + 2), 16);
    lucky = lucky / Math.pow(256, index + 1);
    compute = compute + lucky;
    index++;
  }
  compute *= 10001 / 100;

  return compute;
}
// test the function with a random number as server seed and client seed
// const numServerSeed = crypto.randomUUID();
// const numClientSeed = crypto.randomUUID();

// console.log(`server seed is ${numServerSeed}`)
// console.log(`client seed is ${numClientSeed}`)

// let result = roll(numClientSeed + numServerSeed)
// console.log(`roll with both seeds: ${result.toFixed()}\n`)

