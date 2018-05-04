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
   Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

   China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
   Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

  Once you've read this, go ahead and try to implement this function, then return to the console.

Execution: 

Example string: '343456789012345'

1) Store string length in variable.  
2) Store first two characters of string in variable, convert to number
3) If string length is 14 and first two characters = 38 OR 39, return 'Diner's Club', othwerwise:
4) If string length is 15 and first two characters = 34 or 37, return 'American Express';

*/

function checkForChinaUnionPayPrefix(firstThreeCardDigits, firstFourCardDigits, firstSixCardDigits){
  var isChinaUnionPayPrefix = false;
  var chinaUnionPayPrefixes = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];

  if(chinaUnionPayPrefixes.includes(firstThreeCardDigits)){
    isChinaUnionPayPrefix = true;
  } 

  if(chinaUnionPayPrefixes.includes(firstFourCardDigits)){
    isChinaUnionPayPrefix = true; 
  }

  if((parseInt(firstSixCardDigits) >= 622126) && (parseInt(firstSixCardDigits) <= 622925)){
    isChinaUnionPayPrefix = true;
  }
  
  return isChinaUnionPayPrefix;
}

var detectNetwork = function(cardNumber) {

  var cardNumberLength = cardNumber.length; 

  var firstCardDigit = cardNumber[0];
  var firstTwoCardDigits= cardNumber[0] + cardNumber[1];
  var firstThreeCardDigits = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var firstFourCardDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var firstFiveCardDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4];
  var firstSixCardDigits = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5];

  var dinersClubPrefixes = ['38', '39'];
  var americanExpressPrefixes = ['34', '37'];
  var visaPrefixes = ['4'];
  var masterCardPrefixes = ['51', '52', '53', '54', '55'];
  var discoverCardPrefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maestroCardPrefixes = ['5018', '5020', '5038', '6304'];
  var switchPayPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6759', '6333'];
  var chinaUnionPayPrefixes = checkForChinaUnionPayPrefix(firstThreeCardDigits, firstFourCardDigits, firstSixCardDigits);

  if(dinersClubPrefixes.includes(firstTwoCardDigits)){
  	if(cardNumberLength === 38 | 39){
  	  return 'Diner\'s Club';
  	}

  } else if(americanExpressPrefixes.includes(firstTwoCardDigits)){
  	  if(cardNumberLength === 15){
  	    return 'American Express';
  	  }
  	  	  
  } else if(visaPrefixes.includes(firstCardDigit)){
      if(cardNumberLength === 13 || 16 || 19){
        return 'Visa';
      }
      	  
  } else if(masterCardPrefixes.includes(firstTwoCardDigits)){
  	  if(cardNumberLength === 16){
  	    return 'MasterCard';
  	  }
  	  	  
  } else if(discoverCardPrefixes.includes(firstTwoCardDigits) || discoverCardPrefixes.includes(firstThreeCardDigits) || discoverCardPrefixes.includes(firstFourCardDigits)){
      if(cardNumberLength === 16 || 19){
        return 'Discover';
      }
      	 
  } else if(maestroCardPrefixes.includes(firstFourCardDigits)){
  	  if(cardNumberLength >= 12 && cardNumberLength <=19){
  	    return 'Maestro';
  	  }

  } else if(chinaUnionPayPrefixes){
  	  if(cardNumberLength >= 16 && cardNumberLength <= 19){
  	  	return 'China UnionPay';
  	  }
  }
};

