/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      //console.log('initNum = ' + initNum);
      //console.log('initUnit = ' + initUnit) ;
      var returnNum = convertHandler.convert(initNum, initUnit);
      //console.log('returnNum = ' + returnNum) ;
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      //console.log('returnUnit = ' + returnUnit) ;
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      var error = '' ;
    
      if (initNum == undefined) error = 'invalid number' ;
      if (initUnit == undefined) error = 'invalid unit' ;
      if (initNum == undefined && initUnit == undefined) error = 'invalid number and unit' ;
    
      if (error == '') {
        res.json({initNum: initNum, 
                  initUnit: initUnit, 
                  returnNum: returnNum, 
                  returnUnit: returnUnit, 
                  string: toString
                 }) ;
      }
      else {
        res.json({error: error}) ;
      }
    });
  
    
};
