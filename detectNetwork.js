/* 
Given a credit card number, this function should return a string with the 
name of a network, like 'MasterCard' or 'American Express'
Example: detectNetwork('343456789012345') should return 'American Express'

How can you tell one card network from another? Easy! 
  There are two indicators:
   1. The first few numbers (called the prefix)
   2. The number of digits in the number (called the length)

Function Notes: 
   Note: `cardNumber` = string

   Diner's Club Prefix: 38, 39 
   Diner's Club Length: 14

   American Express Prefix: 34, 37
   American Express Length: 15

   Visa Prefix: 4
   Visa Length: 13, 16, 19

   MasterCard Prefix: 51, 52, 53, 54, 55
   MasterCard Length: 16

   Discover Prefix: 6011, 644-649, 65
   Discover Length: 16, 19

   Maestro Prefix: 5018, 5020, 5038, 6304
   Maestro Length: 12-19

   China UnionPay Prefix: 622126-622925, 624-626,6282-6288 
   China UnionPay Length: 16-19

   Switch Prefix: 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759
   Switch Length: 16, 18, or 19

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

  } else if(switchPayPrefixes.includes(firstFourCardDigits) || switchPayPrefixes.includes(firstSixCardDigits)){
  	  if(cardNumberLength === 16 || 18 || 19){
  	  	return 'Switch';
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

