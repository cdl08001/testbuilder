/* 
Given a credit card number, this function should return a string with the 
name of a network, like 'MasterCard' or 'American Express'
Example: detectNetwork('343456789012345') should return 'American Express'

How can you tell one card network from another? Easy! 
  There are two indicators:
   1. The first few numbers (called the prefix)
   2. The number of digits in the number (called the length)



Function Notes: 
  Note: `cardNumber` will always be a string

   Diner's Club network always starts with a 38 or 39 and is 14 digits long
   American Express network always starts with a 34 or 37 and is 15 digits long
   Visa always has a prefix of 4 and a length of 13, 16, or 19.
   MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
   Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

  Once you've read this, go ahead and try to implement this function, then return to the console.

Execution: 

Example string: '343456789012345'

1) Store string length in variable.  
2) Store first two characters of string in variable, convert to number
3) If string length is 14 and first two characters = 38 OR 39, return 'Diner's Club', othwerwise:
4) If string length is 15 and first two characters = 34 or 37, return 'American Express';

*/

var detectNetwork = function(cardNumber) {

  var cardNumberLength = cardNumber.length; 
  var firstCardDigit = cardNumber[0];
  var firstTwoCardDigits= cardNumber[0] + cardNumber[1];
  var firstThreeCardDigits = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var firstFourCardDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];

  var dinersClubPrefixes = ['38', '39'];
  var americanExpressPrefixes = ['34', '37'];
  var visaPrefixes = ['4'];
  var masterCardPrefixes = ['51', '52', '53', '54', '55'];

  if(cardNumberLength === 14){
  	if(dinersClubPrefixes.includes(firstTwoCardDigits)){
  	  return 'Diner\'s Club';
  	}

  } else if(cardNumberLength === 15){
  	  if(americanExpressPrefixes.includes(firstTwoCardDigits)){
  	    return 'American Express';
  	  }

  } else if(cardNumberLength === 13 || 16 || 19){
      if(visaPrefixes.includes(firstCardDigit)){
      	return 'Visa';
      } else if(cardNumberLength === 16 || 19){
          if(masterCardPrefixes.includes(firstTwoCardDigits)){
          	return 'MasterCard';
          } else if(firstTwoCardDigits === '65'){
          	return 'Discover';
          } else if(firstThreeCardDigits === ('644' || '645' || '646' || '647' || '648' || '649')){
          	return 'Discover';
          } else if(firstFourCardDigits === '6011'){
          	return 'Discover';
          }
      }
  }  
};