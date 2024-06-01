import crypto from 'crypto';

// Maximum limit of each game result in bytes.
const MAX_ROLL = 9000;
const MAX_ROULETTE = 36;
const MAX_CHARTBET = 36;

export function roll(data: string) {
  // create hash using server seed as key and client seed as message
  const hash = crypto.createHmac('sha256', data).digest('hex');
  console.log('result hash', hash);

  let index = 0;
  let lucky = 0;
  let compute = 0;
  while (index < 4) {
    lucky = parseInt(hash.substring(index * 2, index * 2 + 2), 16);
    lucky = lucky / Math.pow(256, index + 1);
    compute = compute + lucky;
    index++;
  }
  console.log("lucky: ", lucky);

  compute *= MAX_ROLL / 100;
  console.log("compute: ", compute);

  return compute;
}

export function rollDice(data: string) {
  // create hash using server seed as key and client seed as message
  const hash = crypto.createHmac('sha256', data).digest('hex');
  console.log('result hash', hash);

  let index = 0;
  let lucky = 0;
  let compute = 0;
  while (index < 4) {
    lucky = parseInt(hash.substring(index * 2, index * 2 + 2), 16);
    lucky = lucky / Math.pow(256, index + 1);
    compute = compute + lucky;
    index++;
  }
  console.log("lucky: ", lucky);

  compute *= 6 / 100;
  console.log("compute: ", compute);

  return compute;
}

export function roulette(data: string) {
  // create hash using server seed as key and client seed as message
  const hash = crypto.createHmac('sha256', data).digest('hex');
  console.log('result hash', hash);

  let index = 0;
  let lucky = 0;
  let compute = 0;
  while (index < 4) {
    lucky = parseInt(hash.substring(index * 2, index * 2 + 2), 16);
    lucky = lucky / Math.pow(256, index + 1);
    compute = compute + lucky;
    index++;
  }
  console.log("lucky: ", lucky);

  compute *= MAX_ROULETTE / 100;
  console.log("compute: ", compute);

  return compute;
}

export function chartbet(data: string) {
  // create hash using server seed as key and client seed as message
  const hash = crypto.createHmac('sha256', data).digest('hex');
  console.log('result hash', hash);

  let index = 0;
  let lucky = 0;
  let compute = 0;
  while (index < 4) {
    lucky = parseInt(hash.substring(index * 2, index * 2 + 2), 16);
    lucky = lucky / Math.pow(256, index + 1);
    compute = compute + lucky;
    index++;
  }
  console.log("lucky: ", lucky);

  compute *= MAX_CHARTBET / 100;
  console.log("compute: ", compute);

  return compute;
}