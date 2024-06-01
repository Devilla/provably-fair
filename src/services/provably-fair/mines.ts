const crypto = require('crypto');

// Maximum limit of game tiles.
const MAX_MINES = 25;


export function mines(data: string, x: number, y: number): number {
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
    // console.log("lucky: ", lucky);
  
    compute *= MAX_MINES / 100;
    // console.log("compute: ", compute);
  
    return compute;
  }