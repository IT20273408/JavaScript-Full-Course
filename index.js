//Hour 
//If hour is 6am - 12pm - gm
//if it is 12pm - 6am -ga
//otherwise ge

let hour =13;

if (hour >= 6 && hour < 12) 
    console.log('GM');

else if (hour >= 12 && hour < 18) 
    console.log('GA');

 else 
 console.log('GE');