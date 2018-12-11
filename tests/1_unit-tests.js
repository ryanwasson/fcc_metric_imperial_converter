/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '.15gal'
      assert.equal(convertHandler.getNum(input),0.15) ;
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '12/3mi'
      assert.equal(convertHandler.getNum(input),4) ;
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '10.5/3.5kg'
      assert.equal(convertHandler.getNum(input),3) ;
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '12/3/2L'
      assert.isUndefined(convertHandler.getNum(input)) ;
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'km' ;
      assert.equal(convertHandler.getNum(input),1) ;
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //assert
        assert.equal(convertHandler.getUnit('15' + ele),ele == 'L' ? ele : ele.toLowerCase()) ;
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.isUndefined(convertHandler.getUnit('15dummyUnit')) ;
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele,i) {
        assert.equal(convertHandler.spellOutUnit(ele),expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'l'];
      var expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [9, 'mi'];
      var expected = 14.484096;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [9, 'km'];
      var expected = 5.592341;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [150,'lbs'];
      var expected = 68.0389 ;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [68.0389,'kg'];
      var expected = 150;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
  });

});
