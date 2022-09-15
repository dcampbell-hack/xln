// import { deployerAddress, tokenPrice } from '../../../../../../server/config/config.js';

export function convertXLNToUSD({  balance, tokenPrice }){
     const conversion = balance / tokenPrice;
    return conversion;
}


export function formatNumbers(int){
   const formatter = Intl.NumberFormat('en', { notation: 'compact' });

   let n = formatter.format(int);

   return n;
}