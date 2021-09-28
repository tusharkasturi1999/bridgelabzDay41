let year = 2000;
let leap = false;
// condition to check leap year
if(year % 4 == 0) { 
    if(year % 100 == 0) {
        if(year % 400 == 0) 
            leap = true;
        else
            leap = false;  
    }
    else
        leap = true;
    }
 else
    leap =false;
//print leap year or not
if(leap == true) {
    console.log(`${year} is a leap year`);
    }else{
    console.log(`${year} is not a leap year`);
}