import * as crypto from 'crypto';

export const limbo = function (data: string): number | string {
    // create Hash using server hash as key and client hash as message
    let hash: string = crypto.createHash('sha256').update(data).digest('hex');
    console.log('result hash', hash);

    const nBits: number = 52;
    hash = hash.slice(0, nBits / 4);
    const r: number = parseInt(hash, 16);
    let X: number = r / Math.pow(2, nBits);
    X = 99 / (1 - X);
    const result: number = Math.floor(X);
    return hash ? Math.max(1, result / 100) : '';
}

// test the function with a random number as server seed and client seed
const numServerSeed = crypto.randomUUID();
const numClientSeed = crypto.randomUUID();

console.log(`server seed is ${numServerSeed}`);
console.log(`client seed is ${numClientSeed}`);

let result = limbo(numClientSeed + numServerSeed);
console.log(`Result with both seeds: ${result}\n`);
