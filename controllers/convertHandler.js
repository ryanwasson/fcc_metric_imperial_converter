/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var charIndexAt = /[a-zA-Z]/.exec(input).index ;
    var result = input.substr(0,charIndexAt);
    if (/^[0-9\.]/.test(result) && /[+-]/.test(result) == false && /\/.*\//.test(result) == false) result = eval(result);
    else if (result == '') result = 1 ;
    else result = undefined ;
    
    return result ;
    
  };
  
  this.getUnit = function(input) {
    var charIndexAt = /[a-zA-Z]/.exec(input).index ;
    var result = input.substr(charIndexAt);
    
    var re = /gal|lbs|l|kg|mi|km/i.exec(result) ;
    if (re != null && re[0].toLowerCase() == result.toLowerCase()) return result == 'L' ? result : result.toLowerCase() ;
    else return undefined ;
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit == undefined) return undefined ;
    
    var result;
    initUnit = initUnit.toLowerCase() ;
    
    if (initUnit == 'gal') result = 'L' ;
    else if (initUnit == 'l') result = 'gal' ;
    else if (initUnit == 'lbs') result = 'kg' ;
    else if (initUnit == 'kg') result = 'lbs' ;
    else if (initUnit == 'mi') result = 'km' ;
    else if (initUnit == 'km') result = 'mi' ;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    if (unit == undefined) return undefined ;
    
    var result = undefined;
    unit = unit.toLowerCase() ;
    
    if (unit == 'gal') result = 'gallons' ;
    else if (unit == 'l') result = 'liters' ;
    else if (unit == 'lbs') result = 'pounds' ;
    else if (unit == 'kg') result = 'kilograms' ;
    else if (unit == 'mi') result = 'miles' ;
    else if (unit == 'km') result = 'kilometers';
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum == undefined || initUnit == undefined) return undefined ;
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
  
    var result = initNum;
    initUnit = initUnit.toLowerCase() ;
    
    if (initUnit == 'gal') result *= galToL ;
    else if (initUnit == 'l') result /= galToL ;
    else if (initUnit == 'lbs') result *= lbsToKg ;
    else if (initUnit == 'kg') result /= lbsToKg ;
    else if (initUnit == 'mi') result *= miToKm ;
    else if (initUnit == 'km') result /= miToKm ;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;
