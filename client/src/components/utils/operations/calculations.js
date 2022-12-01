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


export function timeSince(date) {

   var seconds = Math.floor((new Date() - date) / 1000);
 
   var interval = seconds / 31536000;
 
   if (interval > 1) {
     return Math.floor(interval) + " years";
   }
   interval = seconds / 2592000;
   if (interval > 1) {
     return Math.floor(interval) + " months";
   }
   interval = seconds / 86400;
   if (interval > 1) {
     return Math.floor(interval) + " days";
   }
   interval = seconds / 3600;
   if (interval > 1) {
     return Math.floor(interval) + " hours";
   }
   interval = seconds / 60;
   if (interval > 1) {
     return Math.floor(interval) + " minutes";
   }
   return Math.floor(seconds) + " seconds";
 }