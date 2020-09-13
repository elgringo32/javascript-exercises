const leapYears = function(year) {
    let divByFour = year % 4;
    let divbyOneHundred = year % 100;
    let divByFourHundred = year % 400;
    if (divByFour === 0 && divbyOneHundred != 0 && divByFourHundred != 0) {
        return true;
    } 
    else if (divByFour === 0 && divbyOneHundred === 0 && divByFourHundred === 0) {
        return true;
    }
    else if ( divByFour === 0 && divbyOneHundred === 0 && divByFourHundred != 0) {
        return false;
    }
    else {
        return false;
    }
   
}
module.exports = leapYears
