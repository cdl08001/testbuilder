/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  //it('Throws an error so it fails', function() {
  //  throw new Error('Delete me!');
  //});

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  //it('has a prefix of 38 and a length of 14', function() {
  //  throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901233') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  }
)});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa')
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa')
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa')
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011385729572087').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011284620583768393').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6582947581098573').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6582947581098500073').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function(){
    detectNetwork('6442947581098573').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function(){
    detectNetwork('6442947581098500073').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function(){
    detectNetwork('6452947581098573').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function(){
    detectNetwork('6452947581098500073').should.equal('Discover');
  });

    it('has a prefix of 646 and a length of 16', function(){
    detectNetwork('6462947581098573').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function(){
    detectNetwork('6462947581098500073').should.equal('Discover');
  });

    it('has a prefix of 647 and a length of 16', function(){
    detectNetwork('6472947581098573').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function(){
    detectNetwork('6472947581098500073').should.equal('Discover');
  });

    it('has a prefix of 648 and a length of 16', function(){
    detectNetwork('6482947581098573').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function(){
    detectNetwork('6482947581098500073').should.equal('Discover');
  });

    it('has a prefix of 649 and a length of 16', function(){
    detectNetwork('6492947581098573').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function(){
    detectNetwork('6492947581098500073').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();

  it('has a prefix of 5018 and a length of 12', function(){
    detectNetwork('501823957209').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function(){
    detectNetwork('5018239557209').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function(){
    detectNetwork('50182395720932').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function(){
    detectNetwork('501823957290347').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function(){
    detectNetwork('5018239572584909').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function(){
    detectNetwork('50182395725849094').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function(){
    detectNetwork('501823957258490443').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function(){
    detectNetwork('5018239572093227498').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function(){
    detectNetwork('502023957209').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function(){
    detectNetwork('5020239557209').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function(){
    detectNetwork('50202395720932').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function(){
    detectNetwork('502023957290347').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function(){
    detectNetwork('5020239572584909').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function(){
    detectNetwork('50202395725849094').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function(){
    detectNetwork('502023957258490443').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function(){
    detectNetwork('5020239572093227498').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function(){
    detectNetwork('503823957209').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function(){
    detectNetwork('5038239557209').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function(){
    detectNetwork('50382395720932').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function(){
    detectNetwork('503823957290347').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function(){
    detectNetwork('5038239572584909').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function(){
    detectNetwork('50382395725849094').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function(){
    detectNetwork('503823957258490443').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function(){
    detectNetwork('5038239572093227498').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function(){
    detectNetwork('630423957209').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function(){
    detectNetwork('6304239557209').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function(){
    detectNetwork('63042395720932').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function(){
    detectNetwork('630423957290347').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function(){
    detectNetwork('6304239572584909').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function(){
    detectNetwork('63042395725849094').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function(){
    detectNetwork('630423957258490443').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function(){
    detectNetwork('6304239572093227498').should.equal('Maestro');
  });
});

describe('should support China UnionPay', function(){
  var should = chai.should();

  it('has a prefix of 622126 and a length of 16', function(){
    detectNetwork('6221267623523858').should.equal('China UnionPay')
  })

  it('has a prefix of 622127 and a length of 16', function(){
    detectNetwork('6221277501180474').should.equal('China UnionPay')
  })

  it('has a prefix of 622128 and a length of 16', function(){
    detectNetwork('6221280603825487').should.equal('China UnionPay')
  })

  it('has a prefix of 622129 and a length of 16', function(){
    detectNetwork('6221297430523521').should.equal('China UnionPay')
  })

  it('has a prefix of 622130 and a length of 16', function(){
    detectNetwork('6221301783066768').should.equal('China UnionPay')
  })

  it('has a prefix of 622131 and a length of 16', function(){
    detectNetwork('6221314157553018').should.equal('China UnionPay')
  })

  it('has a prefix of 622132 and a length of 16', function(){
    detectNetwork('6221327300665126').should.equal('China UnionPay')
  })

  it('has a prefix of 622133 and a length of 16', function(){
    detectNetwork('6221338200828671').should.equal('China UnionPay')
  })

  it('has a prefix of 622134 and a length of 16', function(){
    detectNetwork('6221344884306011').should.equal('China UnionPay')
  })

  it('has a prefix of 622135 and a length of 16', function(){
    detectNetwork('6221357174038878').should.equal('China UnionPay')
  })

  it('has a prefix of 622136 and a length of 16', function(){
    detectNetwork('6221360560363533').should.equal('China UnionPay')
  })

  it('has a prefix of 622137 and a length of 16', function(){
    detectNetwork('6221375558765331').should.equal('China UnionPay')
  })

  it('has a prefix of 622138 and a length of 16', function(){
    detectNetwork('6221382108863151').should.equal('China UnionPay')
  })

  it('has a prefix of 622139 and a length of 16', function(){
    detectNetwork('6221390677638645').should.equal('China UnionPay')
  })

  it('has a prefix of 622140 and a length of 16', function(){
    detectNetwork('6221406405814453').should.equal('China UnionPay')
  })

  it('has a prefix of 622141 and a length of 16', function(){
    detectNetwork('6221415841242520').should.equal('China UnionPay')
  })

  it('has a prefix of 622142 and a length of 16', function(){
    detectNetwork('6221428417542838').should.equal('China UnionPay')
  })

  it('has a prefix of 622143 and a length of 16', function(){
    detectNetwork('6221436353880645').should.equal('China UnionPay')
  })

  it('has a prefix of 622144 and a length of 16', function(){
    detectNetwork('6221448076702245').should.equal('China UnionPay')
  })

  it('has a prefix of 622145 and a length of 16', function(){
    detectNetwork('6221457370866148').should.equal('China UnionPay')
  })

  it('has a prefix of 622146 and a length of 16', function(){
    detectNetwork('6221464052431348').should.equal('China UnionPay')
  })

  it('has a prefix of 622147 and a length of 16', function(){
    detectNetwork('6221478488277368').should.equal('China UnionPay')
  })

  it('has a prefix of 622148 and a length of 16', function(){
    detectNetwork('6221484727800065').should.equal('China UnionPay')
  })

  it('has a prefix of 622149 and a length of 16', function(){
    detectNetwork('6221490543144027').should.equal('China UnionPay')
  })

  it('has a prefix of 622150 and a length of 16', function(){
    detectNetwork('6221504881408268').should.equal('China UnionPay')
  })

  it('has a prefix of 622151 and a length of 16', function(){
    detectNetwork('6221511246621520').should.equal('China UnionPay')
  })

  it('has a prefix of 622152 and a length of 16', function(){
    detectNetwork('6221524847168784').should.equal('China UnionPay')
  })

  it('has a prefix of 622153 and a length of 16', function(){
    detectNetwork('6221534561081500').should.equal('China UnionPay')
  })

  it('has a prefix of 622154 and a length of 16', function(){
    detectNetwork('6221548485431751').should.equal('China UnionPay')
  })

  it('has a prefix of 622155 and a length of 16', function(){
    detectNetwork('6221554525245465').should.equal('China UnionPay')
  })

  it('has a prefix of 622156 and a length of 16', function(){
    detectNetwork('6221563410154885').should.equal('China UnionPay')
  })

  it('has a prefix of 622157 and a length of 16', function(){
    detectNetwork('6221576483077854').should.equal('China UnionPay')
  })

  it('has a prefix of 622158 and a length of 16', function(){
    detectNetwork('6221584580713443').should.equal('China UnionPay')
  })

  it('has a prefix of 622159 and a length of 16', function(){
    detectNetwork('6221590017453727').should.equal('China UnionPay')
  })

  it('has a prefix of 622160 and a length of 16', function(){
    detectNetwork('6221605052501251').should.equal('China UnionPay')
  })

  it('has a prefix of 622161 and a length of 16', function(){
    detectNetwork('6221613141038755').should.equal('China UnionPay')
  })

  it('has a prefix of 622162 and a length of 16', function(){
    detectNetwork('6221620115764251').should.equal('China UnionPay')
  })

  it('has a prefix of 622163 and a length of 16', function(){
    detectNetwork('6221635726825480').should.equal('China UnionPay')
  })

  it('has a prefix of 622164 and a length of 16', function(){
    detectNetwork('6221646105826358').should.equal('China UnionPay')
  })

  it('has a prefix of 622165 and a length of 16', function(){
    detectNetwork('6221652446756511').should.equal('China UnionPay')
  })

  it('has a prefix of 622166 and a length of 16', function(){
    detectNetwork('6221668748152716').should.equal('China UnionPay')
  })

  it('has a prefix of 622167 and a length of 16', function(){
    detectNetwork('6221673257553652').should.equal('China UnionPay')
  })

  it('has a prefix of 622168 and a length of 16', function(){
    detectNetwork('6221683142280452').should.equal('China UnionPay')
  })

  it('has a prefix of 622169 and a length of 16', function(){
    detectNetwork('6221694682328402').should.equal('China UnionPay')
  })

  it('has a prefix of 622170 and a length of 16', function(){
    detectNetwork('6221706542472270').should.equal('China UnionPay')
  })

  it('has a prefix of 622171 and a length of 16', function(){
    detectNetwork('6221713203370881').should.equal('China UnionPay')
  })

  it('has a prefix of 622172 and a length of 16', function(){
    detectNetwork('6221723555581418').should.equal('China UnionPay')
  })

  it('has a prefix of 622173 and a length of 16', function(){
    detectNetwork('6221737714722350').should.equal('China UnionPay')
  })

  it('has a prefix of 622174 and a length of 16', function(){
    detectNetwork('6221741675808035').should.equal('China UnionPay')
  })

  it('has a prefix of 622175 and a length of 16', function(){
    detectNetwork('6221752350586007').should.equal('China UnionPay')
  })

  it('has a prefix of 622176 and a length of 16', function(){
    detectNetwork('6221765223325722').should.equal('China UnionPay')
  })

  it('has a prefix of 622177 and a length of 16', function(){
    detectNetwork('6221772357306481').should.equal('China UnionPay')
  })

  it('has a prefix of 622178 and a length of 16', function(){
    detectNetwork('6221785021087882').should.equal('China UnionPay')
  })

  it('has a prefix of 622179 and a length of 16', function(){
    detectNetwork('6221790543668123').should.equal('China UnionPay')
  })

  it('has a prefix of 622180 and a length of 16', function(){
    detectNetwork('6221801135106323').should.equal('China UnionPay')
  })

  it('has a prefix of 622181 and a length of 16', function(){
    detectNetwork('6221816584370564').should.equal('China UnionPay')
  })

  it('has a prefix of 622182 and a length of 16', function(){
    detectNetwork('6221828438641286').should.equal('China UnionPay')
  })

  it('has a prefix of 622183 and a length of 16', function(){
    detectNetwork('6221834831658853').should.equal('China UnionPay')
  })

  it('has a prefix of 622184 and a length of 16', function(){
    detectNetwork('6221844128873277').should.equal('China UnionPay')
  })

  it('has a prefix of 622185 and a length of 16', function(){
    detectNetwork('6221853003210075').should.equal('China UnionPay')
  })

  it('has a prefix of 622186 and a length of 16', function(){
    detectNetwork('6221866340083502').should.equal('China UnionPay')
  })

  it('has a prefix of 622187 and a length of 16', function(){
    detectNetwork('6221873748651688').should.equal('China UnionPay')
  })

  it('has a prefix of 622188 and a length of 16', function(){
    detectNetwork('6221886781658671').should.equal('China UnionPay')
  })

  it('has a prefix of 622189 and a length of 16', function(){
    detectNetwork('6221893421562572').should.equal('China UnionPay')
  })

  it('has a prefix of 622190 and a length of 16', function(){
    detectNetwork('6221902346581400').should.equal('China UnionPay')
  })

  it('has a prefix of 622191 and a length of 16', function(){
    detectNetwork('6221910545046422').should.equal('China UnionPay')
  })

  it('has a prefix of 622192 and a length of 16', function(){
    detectNetwork('6221924058663144').should.equal('China UnionPay')
  })

  it('has a prefix of 622193 and a length of 16', function(){
    detectNetwork('6221935126353466').should.equal('China UnionPay')
  })

  it('has a prefix of 622194 and a length of 16', function(){
    detectNetwork('6221942816625420').should.equal('China UnionPay')
  })

  it('has a prefix of 622195 and a length of 16', function(){
    detectNetwork('6221952177704415').should.equal('China UnionPay')
  })

  it('has a prefix of 622196 and a length of 16', function(){
    detectNetwork('6221965065564317').should.equal('China UnionPay')
  })

  it('has a prefix of 622197 and a length of 16', function(){
    detectNetwork('6221973346010404').should.equal('China UnionPay')
  })

  it('has a prefix of 622198 and a length of 16', function(){
    detectNetwork('6221985483087118').should.equal('China UnionPay')
  })

  it('has a prefix of 622199 and a length of 16', function(){
    detectNetwork('6221993221007610').should.equal('China UnionPay')
  })

  it('has a prefix of 622200 and a length of 16', function(){
    detectNetwork('6222005110057507').should.equal('China UnionPay')
  })

  it('has a prefix of 622201 and a length of 16', function(){
    detectNetwork('6222013838762086').should.equal('China UnionPay')
  })

  it('has a prefix of 622202 and a length of 16', function(){
    detectNetwork('6222021458355840').should.equal('China UnionPay')
  })

  it('has a prefix of 622203 and a length of 16', function(){
    detectNetwork('6222033832378400').should.equal('China UnionPay')
  })

  it('has a prefix of 622204 and a length of 16', function(){
    detectNetwork('6222042143240518').should.equal('China UnionPay')
  })

  it('has a prefix of 622205 and a length of 16', function(){
    detectNetwork('6222058043801842').should.equal('China UnionPay')
  })

  it('has a prefix of 622206 and a length of 16', function(){
    detectNetwork('6222062682770520').should.equal('China UnionPay')
  })

  it('has a prefix of 622207 and a length of 16', function(){
    detectNetwork('6222072016002241').should.equal('China UnionPay')
  })

  it('has a prefix of 622208 and a length of 16', function(){
    detectNetwork('6222080017155742').should.equal('China UnionPay')
  })

  it('has a prefix of 622209 and a length of 16', function(){
    detectNetwork('6222096507814210').should.equal('China UnionPay')
  })

  it('has a prefix of 622210 and a length of 16', function(){
    detectNetwork('6222103620831387').should.equal('China UnionPay')
  })

  it('has a prefix of 622211 and a length of 16', function(){
    detectNetwork('6222111536034171').should.equal('China UnionPay')
  })

  it('has a prefix of 622212 and a length of 16', function(){
    detectNetwork('6222125518680454').should.equal('China UnionPay')
  })

  it('has a prefix of 622213 and a length of 16', function(){
    detectNetwork('6222136611271085').should.equal('China UnionPay')
  })

  it('has a prefix of 622214 and a length of 16', function(){
    detectNetwork('6222145835452184').should.equal('China UnionPay')
  })

  it('has a prefix of 622215 and a length of 16', function(){
    detectNetwork('6222156381556875').should.equal('China UnionPay')
  })

  it('has a prefix of 622216 and a length of 16', function(){
    detectNetwork('6222163654561768').should.equal('China UnionPay')
  })

  it('has a prefix of 622217 and a length of 16', function(){
    detectNetwork('6222178660776743').should.equal('China UnionPay')
  })

  it('has a prefix of 622218 and a length of 16', function(){
    detectNetwork('6222188225817164').should.equal('China UnionPay')
  })

  it('has a prefix of 622219 and a length of 16', function(){
    detectNetwork('6222196821654216').should.equal('China UnionPay')
  })

  it('has a prefix of 622220 and a length of 16', function(){
    detectNetwork('6222206246755465').should.equal('China UnionPay')
  })

  it('has a prefix of 622221 and a length of 16', function(){
    detectNetwork('6222213662558108').should.equal('China UnionPay')
  })

  it('has a prefix of 622222 and a length of 16', function(){
    detectNetwork('6222220862035653').should.equal('China UnionPay')
  })

  it('has a prefix of 622223 and a length of 16', function(){
    detectNetwork('6222235330334881').should.equal('China UnionPay')
  })

  it('has a prefix of 622224 and a length of 16', function(){
    detectNetwork('6222247261480050').should.equal('China UnionPay')
  })

  it('has a prefix of 622225 and a length of 16', function(){
    detectNetwork('6222254064730134').should.equal('China UnionPay')
  })

  it('has a prefix of 622226 and a length of 16', function(){
    detectNetwork('6222264603683105').should.equal('China UnionPay')
  })

  it('has a prefix of 622227 and a length of 16', function(){
    detectNetwork('6222276078165860').should.equal('China UnionPay')
  })

  it('has a prefix of 622228 and a length of 16', function(){
    detectNetwork('6222284352637077').should.equal('China UnionPay')
  })

  it('has a prefix of 622229 and a length of 16', function(){
    detectNetwork('6222295703123327').should.equal('China UnionPay')
  })

  it('has a prefix of 622230 and a length of 16', function(){
    detectNetwork('6222308563578318').should.equal('China UnionPay')
  })

  it('has a prefix of 622231 and a length of 16', function(){
    detectNetwork('6222315456718426').should.equal('China UnionPay')
  })

  it('has a prefix of 622232 and a length of 16', function(){
    detectNetwork('6222320225030452').should.equal('China UnionPay')
  })

  it('has a prefix of 622233 and a length of 16', function(){
    detectNetwork('6222337483246455').should.equal('China UnionPay')
  })

  it('has a prefix of 622234 and a length of 16', function(){
    detectNetwork('6222346421230626').should.equal('China UnionPay')
  })

  it('has a prefix of 622235 and a length of 16', function(){
    detectNetwork('6222352441650272').should.equal('China UnionPay')
  })

  it('has a prefix of 622236 and a length of 16', function(){
    detectNetwork('6222366616268102').should.equal('China UnionPay')
  })

  it('has a prefix of 622237 and a length of 16', function(){
    detectNetwork('6222370355708365').should.equal('China UnionPay')
  })

  it('has a prefix of 622238 and a length of 16', function(){
    detectNetwork('6222382415844312').should.equal('China UnionPay')
  })

  it('has a prefix of 622239 and a length of 16', function(){
    detectNetwork('6222397240828882').should.equal('China UnionPay')
  })

  it('has a prefix of 622240 and a length of 16', function(){
    detectNetwork('6222400364648158').should.equal('China UnionPay')
  })

  it('has a prefix of 622241 and a length of 16', function(){
    detectNetwork('6222410041075863').should.equal('China UnionPay')
  })

  it('has a prefix of 622242 and a length of 16', function(){
    detectNetwork('6222425404563150').should.equal('China UnionPay')
  })

  it('has a prefix of 622243 and a length of 16', function(){
    detectNetwork('6222436103103660').should.equal('China UnionPay')
  })

  it('has a prefix of 622244 and a length of 16', function(){
    detectNetwork('6222441285407333').should.equal('China UnionPay')
  })

  it('has a prefix of 622245 and a length of 16', function(){
    detectNetwork('6222452021828538').should.equal('China UnionPay')
  })

  it('has a prefix of 622246 and a length of 16', function(){
    detectNetwork('6222468873524577').should.equal('China UnionPay')
  })

  it('has a prefix of 622247 and a length of 16', function(){
    detectNetwork('6222477633605203').should.equal('China UnionPay')
  })

  it('has a prefix of 622248 and a length of 16', function(){
    detectNetwork('6222485700882788').should.equal('China UnionPay')
  })

  it('has a prefix of 622249 and a length of 16', function(){
    detectNetwork('6222498251831448').should.equal('China UnionPay')
  })

  it('has a prefix of 622250 and a length of 16', function(){
    detectNetwork('6222501035625432').should.equal('China UnionPay')
  })

  it('has a prefix of 622251 and a length of 16', function(){
    detectNetwork('6222516778823274').should.equal('China UnionPay')
  })

  it('has a prefix of 622252 and a length of 16', function(){
    detectNetwork('6222527422708805').should.equal('China UnionPay')
  })

  it('has a prefix of 622253 and a length of 16', function(){
    detectNetwork('6222531045550307').should.equal('China UnionPay')
  })

  it('has a prefix of 622254 and a length of 16', function(){
    detectNetwork('6222544425861257').should.equal('China UnionPay')
  })

  it('has a prefix of 622255 and a length of 16', function(){
    detectNetwork('6222556706036422').should.equal('China UnionPay')
  })

  it('has a prefix of 622256 and a length of 16', function(){
    detectNetwork('6222561533310742').should.equal('China UnionPay')
  })

  it('has a prefix of 622257 and a length of 16', function(){
    detectNetwork('6222578326567443').should.equal('China UnionPay')
  })

  it('has a prefix of 622258 and a length of 16', function(){
    detectNetwork('6222583814243857').should.equal('China UnionPay')
  })

  it('has a prefix of 622259 and a length of 16', function(){
    detectNetwork('6222590865888573').should.equal('China UnionPay')
  })

  it('has a prefix of 622260 and a length of 16', function(){
    detectNetwork('6222601343217400').should.equal('China UnionPay')
  })

  it('has a prefix of 622261 and a length of 16', function(){
    detectNetwork('6222611477174165').should.equal('China UnionPay')
  })

  it('has a prefix of 622262 and a length of 16', function(){
    detectNetwork('6222626720366865').should.equal('China UnionPay')
  })

  it('has a prefix of 622263 and a length of 16', function(){
    detectNetwork('6222637857587655').should.equal('China UnionPay')
  })

  it('has a prefix of 622264 and a length of 16', function(){
    detectNetwork('6222641216671636').should.equal('China UnionPay')
  })

  it('has a prefix of 622265 and a length of 16', function(){
    detectNetwork('6222650183337803').should.equal('China UnionPay')
  })

  it('has a prefix of 622266 and a length of 16', function(){
    detectNetwork('6222666571146657').should.equal('China UnionPay')
  })

  it('has a prefix of 622267 and a length of 16', function(){
    detectNetwork('6222677574623446').should.equal('China UnionPay')
  })

  it('has a prefix of 622268 and a length of 16', function(){
    detectNetwork('6222685206101362').should.equal('China UnionPay')
  })

  it('has a prefix of 622269 and a length of 16', function(){
    detectNetwork('6222692707637557').should.equal('China UnionPay')
  })

  it('has a prefix of 622270 and a length of 16', function(){
    detectNetwork('6222705701205141').should.equal('China UnionPay')
  })

  it('has a prefix of 622271 and a length of 16', function(){
    detectNetwork('6222710661062478').should.equal('China UnionPay')
  })

  it('has a prefix of 622272 and a length of 16', function(){
    detectNetwork('6222728834842261').should.equal('China UnionPay')
  })

  it('has a prefix of 622273 and a length of 16', function(){
    detectNetwork('6222731000156627').should.equal('China UnionPay')
  })

  it('has a prefix of 622274 and a length of 16', function(){
    detectNetwork('6222746826122864').should.equal('China UnionPay')
  })

  it('has a prefix of 622275 and a length of 16', function(){
    detectNetwork('6222758331534135').should.equal('China UnionPay')
  })

  it('has a prefix of 622276 and a length of 16', function(){
    detectNetwork('6222762704223710').should.equal('China UnionPay')
  })

  it('has a prefix of 622277 and a length of 16', function(){
    detectNetwork('6222770026368888').should.equal('China UnionPay')
  })

  it('has a prefix of 622278 and a length of 16', function(){
    detectNetwork('6222782425848453').should.equal('China UnionPay')
  })

  it('has a prefix of 622279 and a length of 16', function(){
    detectNetwork('6222791481573507').should.equal('China UnionPay')
  })

  it('has a prefix of 622280 and a length of 16', function(){
    detectNetwork('6222807342431423').should.equal('China UnionPay')
  })

  it('has a prefix of 622281 and a length of 16', function(){
    detectNetwork('6222814625083220').should.equal('China UnionPay')
  })

  it('has a prefix of 622282 and a length of 16', function(){
    detectNetwork('6222822634734188').should.equal('China UnionPay')
  })

  it('has a prefix of 622283 and a length of 16', function(){
    detectNetwork('6222838241471786').should.equal('China UnionPay')
  })

  it('has a prefix of 622284 and a length of 16', function(){
    detectNetwork('6222845877180216').should.equal('China UnionPay')
  })

  it('has a prefix of 622285 and a length of 16', function(){
    detectNetwork('6222857301351653').should.equal('China UnionPay')
  })

  it('has a prefix of 622286 and a length of 16', function(){
    detectNetwork('6222868554383322').should.equal('China UnionPay')
  })

  it('has a prefix of 622287 and a length of 16', function(){
    detectNetwork('6222877676023138').should.equal('China UnionPay')
  })

  it('has a prefix of 622288 and a length of 16', function(){
    detectNetwork('6222884763150762').should.equal('China UnionPay')
  })

  it('has a prefix of 622289 and a length of 16', function(){
    detectNetwork('6222894040265348').should.equal('China UnionPay')
  })

  it('has a prefix of 622290 and a length of 16', function(){
    detectNetwork('6222908730672642').should.equal('China UnionPay')
  })

  it('has a prefix of 622291 and a length of 16', function(){
    detectNetwork('6222914207021588').should.equal('China UnionPay')
  })

  it('has a prefix of 622292 and a length of 16', function(){
    detectNetwork('6222922107401166').should.equal('China UnionPay')
  })

  it('has a prefix of 622293 and a length of 16', function(){
    detectNetwork('6222931350250504').should.equal('China UnionPay')
  })

  it('has a prefix of 622294 and a length of 16', function(){
    detectNetwork('6222945581712078').should.equal('China UnionPay')
  })

  it('has a prefix of 622295 and a length of 16', function(){
    detectNetwork('6222953312637138').should.equal('China UnionPay')
  })

  it('has a prefix of 622296 and a length of 16', function(){
    detectNetwork('6222964360787461').should.equal('China UnionPay')
  })

  it('has a prefix of 622297 and a length of 16', function(){
    detectNetwork('6222976050201166').should.equal('China UnionPay')
  })

  it('has a prefix of 622298 and a length of 16', function(){
    detectNetwork('6222983610852037').should.equal('China UnionPay')
  })

  it('has a prefix of 622299 and a length of 16', function(){
    detectNetwork('6222995282846061').should.equal('China UnionPay')
  })

  it('has a prefix of 622300 and a length of 16', function(){
    detectNetwork('6223001384680432').should.equal('China UnionPay')
  })

  it('has a prefix of 622301 and a length of 16', function(){
    detectNetwork('6223018571837603').should.equal('China UnionPay')
  })

  it('has a prefix of 622302 and a length of 16', function(){
    detectNetwork('6223022525788454').should.equal('China UnionPay')
  })

  it('has a prefix of 622303 and a length of 16', function(){
    detectNetwork('6223034701342641').should.equal('China UnionPay')
  })

  it('has a prefix of 622304 and a length of 16', function(){
    detectNetwork('6223047288034333').should.equal('China UnionPay')
  })

  it('has a prefix of 622305 and a length of 16', function(){
    detectNetwork('6223055374305825').should.equal('China UnionPay')
  })

  it('has a prefix of 622306 and a length of 16', function(){
    detectNetwork('6223064783320666').should.equal('China UnionPay')
  })

  it('has a prefix of 622307 and a length of 16', function(){
    detectNetwork('6223075114171844').should.equal('China UnionPay')
  })

  it('has a prefix of 622308 and a length of 16', function(){
    detectNetwork('6223087656735416').should.equal('China UnionPay')
  })

  it('has a prefix of 622309 and a length of 16', function(){
    detectNetwork('6223095140260461').should.equal('China UnionPay')
  })

  it('has a prefix of 622310 and a length of 16', function(){
    detectNetwork('6223102275240524').should.equal('China UnionPay')
  })

  it('has a prefix of 622311 and a length of 16', function(){
    detectNetwork('6223115706576218').should.equal('China UnionPay')
  })

  it('has a prefix of 622312 and a length of 16', function(){
    detectNetwork('6223124683682444').should.equal('China UnionPay')
  })

  it('has a prefix of 622313 and a length of 16', function(){
    detectNetwork('6223135017520454').should.equal('China UnionPay')
  })

  it('has a prefix of 622314 and a length of 16', function(){
    detectNetwork('6223148302114428').should.equal('China UnionPay')
  })

  it('has a prefix of 622315 and a length of 16', function(){
    detectNetwork('6223152718023326').should.equal('China UnionPay')
  })

  it('has a prefix of 622316 and a length of 16', function(){
    detectNetwork('6223167851516804').should.equal('China UnionPay')
  })

  it('has a prefix of 622317 and a length of 16', function(){
    detectNetwork('6223178801800252').should.equal('China UnionPay')
  })

  it('has a prefix of 622318 and a length of 16', function(){
    detectNetwork('6223186043332231').should.equal('China UnionPay')
  })

  it('has a prefix of 622319 and a length of 16', function(){
    detectNetwork('6223194280583614').should.equal('China UnionPay')
  })

  it('has a prefix of 622320 and a length of 16', function(){
    detectNetwork('6223201074662616').should.equal('China UnionPay')
  })

  it('has a prefix of 622321 and a length of 16', function(){
    detectNetwork('6223210612805551').should.equal('China UnionPay')
  })

  it('has a prefix of 622322 and a length of 16', function(){
    detectNetwork('6223228748806060').should.equal('China UnionPay')
  })

  it('has a prefix of 622323 and a length of 16', function(){
    detectNetwork('6223232751515827').should.equal('China UnionPay')
  })

  it('has a prefix of 622324 and a length of 16', function(){
    detectNetwork('6223242888286732').should.equal('China UnionPay')
  })

  it('has a prefix of 622325 and a length of 16', function(){
    detectNetwork('6223255061845422').should.equal('China UnionPay')
  })

  it('has a prefix of 622326 and a length of 16', function(){
    detectNetwork('6223267833647683').should.equal('China UnionPay')
  })

  it('has a prefix of 622327 and a length of 16', function(){
    detectNetwork('6223273704605352').should.equal('China UnionPay')
  })

  it('has a prefix of 622328 and a length of 16', function(){
    detectNetwork('6223281752202310').should.equal('China UnionPay')
  })

  it('has a prefix of 622329 and a length of 16', function(){
    detectNetwork('6223293566084867').should.equal('China UnionPay')
  })

  it('has a prefix of 622330 and a length of 16', function(){
    detectNetwork('6223306588135283').should.equal('China UnionPay')
  })

  it('has a prefix of 622331 and a length of 16', function(){
    detectNetwork('6223316138251660').should.equal('China UnionPay')
  })

  it('has a prefix of 622332 and a length of 16', function(){
    detectNetwork('6223326268625684').should.equal('China UnionPay')
  })

  it('has a prefix of 622333 and a length of 16', function(){
    detectNetwork('6223332070025680').should.equal('China UnionPay')
  })

  it('has a prefix of 622334 and a length of 16', function(){
    detectNetwork('6223345714335563').should.equal('China UnionPay')
  })

  it('has a prefix of 622335 and a length of 16', function(){
    detectNetwork('6223356408571163').should.equal('China UnionPay')
  })

  it('has a prefix of 622336 and a length of 16', function(){
    detectNetwork('6223362036331061').should.equal('China UnionPay')
  })

  it('has a prefix of 622337 and a length of 16', function(){
    detectNetwork('6223372761126176').should.equal('China UnionPay')
  })

  it('has a prefix of 622338 and a length of 16', function(){
    detectNetwork('6223382882312634').should.equal('China UnionPay')
  })

  it('has a prefix of 622339 and a length of 16', function(){
    detectNetwork('6223394670268026').should.equal('China UnionPay')
  })

  it('has a prefix of 622340 and a length of 16', function(){
    detectNetwork('6223402443028021').should.equal('China UnionPay')
  })

  it('has a prefix of 622341 and a length of 16', function(){
    detectNetwork('6223418017201276').should.equal('China UnionPay')
  })

  it('has a prefix of 622342 and a length of 16', function(){
    detectNetwork('6223424101251143').should.equal('China UnionPay')
  })

  it('has a prefix of 622343 and a length of 16', function(){
    detectNetwork('6223438377185478').should.equal('China UnionPay')
  })

  it('has a prefix of 622344 and a length of 16', function(){
    detectNetwork('6223445513487108').should.equal('China UnionPay')
  })

  it('has a prefix of 622345 and a length of 16', function(){
    detectNetwork('6223457035043816').should.equal('China UnionPay')
  })

  it('has a prefix of 622346 and a length of 16', function(){
    detectNetwork('6223468060434564').should.equal('China UnionPay')
  })

  it('has a prefix of 622347 and a length of 16', function(){
    detectNetwork('6223476647708303').should.equal('China UnionPay')
  })

  it('has a prefix of 622348 and a length of 16', function(){
    detectNetwork('6223487053328067').should.equal('China UnionPay')
  })

  it('has a prefix of 622349 and a length of 16', function(){
    detectNetwork('6223496874457080').should.equal('China UnionPay')
  })

  it('has a prefix of 622350 and a length of 16', function(){
    detectNetwork('6223508340627670').should.equal('China UnionPay')
  })

  it('has a prefix of 622351 and a length of 16', function(){
    detectNetwork('6223517334286801').should.equal('China UnionPay')
  })

  it('has a prefix of 622352 and a length of 16', function(){
    detectNetwork('6223525046283643').should.equal('China UnionPay')
  })

  it('has a prefix of 622353 and a length of 16', function(){
    detectNetwork('6223536735487411').should.equal('China UnionPay')
  })

  it('has a prefix of 622354 and a length of 16', function(){
    detectNetwork('6223543633688407').should.equal('China UnionPay')
  })

  it('has a prefix of 622355 and a length of 16', function(){
    detectNetwork('6223555163470234').should.equal('China UnionPay')
  })

  it('has a prefix of 622356 and a length of 16', function(){
    detectNetwork('6223568040235273').should.equal('China UnionPay')
  })

  it('has a prefix of 622357 and a length of 16', function(){
    detectNetwork('6223571777512041').should.equal('China UnionPay')
  })

  it('has a prefix of 622358 and a length of 16', function(){
    detectNetwork('6223582012747040').should.equal('China UnionPay')
  })

  it('has a prefix of 622359 and a length of 16', function(){
    detectNetwork('6223590767430486').should.equal('China UnionPay')
  })

  it('has a prefix of 622360 and a length of 16', function(){
    detectNetwork('6223600313132073').should.equal('China UnionPay')
  })

  it('has a prefix of 622361 and a length of 16', function(){
    detectNetwork('6223612883345821').should.equal('China UnionPay')
  })

  it('has a prefix of 622362 and a length of 16', function(){
    detectNetwork('6223622114235510').should.equal('China UnionPay')
  })

  it('has a prefix of 622363 and a length of 16', function(){
    detectNetwork('6223634784603881').should.equal('China UnionPay')
  })

  it('has a prefix of 622364 and a length of 16', function(){
    detectNetwork('6223643586867723').should.equal('China UnionPay')
  })

  it('has a prefix of 622365 and a length of 16', function(){
    detectNetwork('6223654702041342').should.equal('China UnionPay')
  })

  it('has a prefix of 622366 and a length of 16', function(){
    detectNetwork('6223661777114588').should.equal('China UnionPay')
  })

  it('has a prefix of 622367 and a length of 16', function(){
    detectNetwork('6223677036743331').should.equal('China UnionPay')
  })

  it('has a prefix of 622368 and a length of 16', function(){
    detectNetwork('6223684107580883').should.equal('China UnionPay')
  })

  it('has a prefix of 622369 and a length of 16', function(){
    detectNetwork('6223697085206302').should.equal('China UnionPay')
  })

  it('has a prefix of 622370 and a length of 16', function(){
    detectNetwork('6223704453784848').should.equal('China UnionPay')
  })

  it('has a prefix of 622371 and a length of 16', function(){
    detectNetwork('6223716760855730').should.equal('China UnionPay')
  })

  it('has a prefix of 622372 and a length of 16', function(){
    detectNetwork('6223722688375212').should.equal('China UnionPay')
  })

  it('has a prefix of 622373 and a length of 16', function(){
    detectNetwork('6223733808567012').should.equal('China UnionPay')
  })

  it('has a prefix of 622374 and a length of 16', function(){
    detectNetwork('6223748852147634').should.equal('China UnionPay')
  })

  it('has a prefix of 622375 and a length of 16', function(){
    detectNetwork('6223753425750760').should.equal('China UnionPay')
  })

  it('has a prefix of 622376 and a length of 16', function(){
    detectNetwork('6223768552038061').should.equal('China UnionPay')
  })

  it('has a prefix of 622377 and a length of 16', function(){
    detectNetwork('6223772822078411').should.equal('China UnionPay')
  })

  it('has a prefix of 622378 and a length of 16', function(){
    detectNetwork('6223784738537676').should.equal('China UnionPay')
  })

  it('has a prefix of 622379 and a length of 16', function(){
    detectNetwork('6223791115518475').should.equal('China UnionPay')
  })

  it('has a prefix of 622380 and a length of 16', function(){
    detectNetwork('6223806830534256').should.equal('China UnionPay')
  })

  it('has a prefix of 622381 and a length of 16', function(){
    detectNetwork('6223815875483527').should.equal('China UnionPay')
  })

  it('has a prefix of 622382 and a length of 16', function(){
    detectNetwork('6223821431434588').should.equal('China UnionPay')
  })

  it('has a prefix of 622383 and a length of 16', function(){
    detectNetwork('6223832611585867').should.equal('China UnionPay')
  })

  it('has a prefix of 622384 and a length of 16', function(){
    detectNetwork('6223842465061612').should.equal('China UnionPay')
  })

  it('has a prefix of 622385 and a length of 16', function(){
    detectNetwork('6223856786270127').should.equal('China UnionPay')
  })

  it('has a prefix of 622386 and a length of 16', function(){
    detectNetwork('6223865248216854').should.equal('China UnionPay')
  })

  it('has a prefix of 622387 and a length of 16', function(){
    detectNetwork('6223878040732458').should.equal('China UnionPay')
  })

  it('has a prefix of 622388 and a length of 16', function(){
    detectNetwork('6223881640150184').should.equal('China UnionPay')
  })

  it('has a prefix of 622389 and a length of 16', function(){
    detectNetwork('6223893660443833').should.equal('China UnionPay')
  })

  it('has a prefix of 622390 and a length of 16', function(){
    detectNetwork('6223900524404666').should.equal('China UnionPay')
  })

  it('has a prefix of 622391 and a length of 16', function(){
    detectNetwork('6223915012816150').should.equal('China UnionPay')
  })

  it('has a prefix of 622392 and a length of 16', function(){
    detectNetwork('6223920514037468').should.equal('China UnionPay')
  })

  it('has a prefix of 622393 and a length of 16', function(){
    detectNetwork('6223938478358320').should.equal('China UnionPay')
  })

  it('has a prefix of 622394 and a length of 16', function(){
    detectNetwork('6223941553746534').should.equal('China UnionPay')
  })

  it('has a prefix of 622395 and a length of 16', function(){
    detectNetwork('6223951467111714').should.equal('China UnionPay')
  })

  it('has a prefix of 622396 and a length of 16', function(){
    detectNetwork('6223962022836371').should.equal('China UnionPay')
  })

  it('has a prefix of 622397 and a length of 16', function(){
    detectNetwork('6223976168534818').should.equal('China UnionPay')
  })

  it('has a prefix of 622398 and a length of 16', function(){
    detectNetwork('6223985332765458').should.equal('China UnionPay')
  })

  it('has a prefix of 622399 and a length of 16', function(){
    detectNetwork('6223994181060216').should.equal('China UnionPay')
  })

  it('has a prefix of 622400 and a length of 16', function(){
    detectNetwork('6224000806507615').should.equal('China UnionPay')
  })

  it('has a prefix of 622401 and a length of 16', function(){
    detectNetwork('6224013034535455').should.equal('China UnionPay')
  })

  it('has a prefix of 622402 and a length of 16', function(){
    detectNetwork('6224024674767710').should.equal('China UnionPay')
  })

  it('has a prefix of 622403 and a length of 16', function(){
    detectNetwork('6224035317733213').should.equal('China UnionPay')
  })

  it('has a prefix of 622404 and a length of 16', function(){
    detectNetwork('6224046072463252').should.equal('China UnionPay')
  })

  it('has a prefix of 622405 and a length of 16', function(){
    detectNetwork('6224057621182473').should.equal('China UnionPay')
  })

  it('has a prefix of 622406 and a length of 16', function(){
    detectNetwork('6224067508346488').should.equal('China UnionPay')
  })

  it('has a prefix of 622407 and a length of 16', function(){
    detectNetwork('6224078273863664').should.equal('China UnionPay')
  })

  it('has a prefix of 622408 and a length of 16', function(){
    detectNetwork('6224084624187477').should.equal('China UnionPay')
  })

  it('has a prefix of 622409 and a length of 16', function(){
    detectNetwork('6224098433137087').should.equal('China UnionPay')
  })

  it('has a prefix of 622410 and a length of 16', function(){
    detectNetwork('6224101054377671').should.equal('China UnionPay')
  })

  it('has a prefix of 622411 and a length of 16', function(){
    detectNetwork('6224111418253865').should.equal('China UnionPay')
  })

  it('has a prefix of 622412 and a length of 16', function(){
    detectNetwork('6224127030747333').should.equal('China UnionPay')
  })

  it('has a prefix of 622413 and a length of 16', function(){
    detectNetwork('6224132848181401').should.equal('China UnionPay')
  })

  it('has a prefix of 622414 and a length of 16', function(){
    detectNetwork('6224145330323684').should.equal('China UnionPay')
  })

  it('has a prefix of 622415 and a length of 16', function(){
    detectNetwork('6224158071531144').should.equal('China UnionPay')
  })

  it('has a prefix of 622416 and a length of 16', function(){
    detectNetwork('6224164114142335').should.equal('China UnionPay')
  })

  it('has a prefix of 622417 and a length of 16', function(){
    detectNetwork('6224170562727707').should.equal('China UnionPay')
  })

  it('has a prefix of 622418 and a length of 16', function(){
    detectNetwork('6224181530670558').should.equal('China UnionPay')
  })

  it('has a prefix of 622419 and a length of 16', function(){
    detectNetwork('6224196381131653').should.equal('China UnionPay')
  })

  it('has a prefix of 622420 and a length of 16', function(){
    detectNetwork('6224207864274821').should.equal('China UnionPay')
  })

  it('has a prefix of 622421 and a length of 16', function(){
    detectNetwork('6224214280317120').should.equal('China UnionPay')
  })

  it('has a prefix of 622422 and a length of 16', function(){
    detectNetwork('6224226260243063').should.equal('China UnionPay')
  })

  it('has a prefix of 622423 and a length of 16', function(){
    detectNetwork('6224234030507863').should.equal('China UnionPay')
  })

  it('has a prefix of 622424 and a length of 16', function(){
    detectNetwork('6224245582482442').should.equal('China UnionPay')
  })

  it('has a prefix of 622425 and a length of 16', function(){
    detectNetwork('6224250220081628').should.equal('China UnionPay')
  })

  it('has a prefix of 622426 and a length of 16', function(){
    detectNetwork('6224263308886323').should.equal('China UnionPay')
  })

  it('has a prefix of 622427 and a length of 16', function(){
    detectNetwork('6224277143604372').should.equal('China UnionPay')
  })

  it('has a prefix of 622428 and a length of 16', function(){
    detectNetwork('6224287588457653').should.equal('China UnionPay')
  })

  it('has a prefix of 622429 and a length of 16', function(){
    detectNetwork('6224291705870155').should.equal('China UnionPay')
  })

  it('has a prefix of 622430 and a length of 16', function(){
    detectNetwork('6224306385043743').should.equal('China UnionPay')
  })

  it('has a prefix of 622431 and a length of 16', function(){
    detectNetwork('6224317268186114').should.equal('China UnionPay')
  })

  it('has a prefix of 622432 and a length of 16', function(){
    detectNetwork('6224326385251204').should.equal('China UnionPay')
  })

  it('has a prefix of 622433 and a length of 16', function(){
    detectNetwork('6224331235743877').should.equal('China UnionPay')
  })

  it('has a prefix of 622434 and a length of 16', function(){
    detectNetwork('6224348528386316').should.equal('China UnionPay')
  })

  it('has a prefix of 622435 and a length of 16', function(){
    detectNetwork('6224354602725503').should.equal('China UnionPay')
  })

  it('has a prefix of 622436 and a length of 16', function(){
    detectNetwork('6224360837208404').should.equal('China UnionPay')
  })

  it('has a prefix of 622437 and a length of 16', function(){
    detectNetwork('6224372382807050').should.equal('China UnionPay')
  })

  it('has a prefix of 622438 and a length of 16', function(){
    detectNetwork('6224383263102512').should.equal('China UnionPay')
  })

  it('has a prefix of 622439 and a length of 16', function(){
    detectNetwork('6224395712875128').should.equal('China UnionPay')
  })

  it('has a prefix of 622440 and a length of 16', function(){
    detectNetwork('6224406021256210').should.equal('China UnionPay')
  })

  it('has a prefix of 622441 and a length of 16', function(){
    detectNetwork('6224412178846646').should.equal('China UnionPay')
  })

  it('has a prefix of 622442 and a length of 16', function(){
    detectNetwork('6224422468454435').should.equal('China UnionPay')
  })

  it('has a prefix of 622443 and a length of 16', function(){
    detectNetwork('6224437826176448').should.equal('China UnionPay')
  })

  it('has a prefix of 622444 and a length of 16', function(){
    detectNetwork('6224443788181658').should.equal('China UnionPay')
  })

  it('has a prefix of 622445 and a length of 16', function(){
    detectNetwork('6224453782036474').should.equal('China UnionPay')
  })

  it('has a prefix of 622446 and a length of 16', function(){
    detectNetwork('6224460576273333').should.equal('China UnionPay')
  })

  it('has a prefix of 622447 and a length of 16', function(){
    detectNetwork('6224470284602648').should.equal('China UnionPay')
  })

  it('has a prefix of 622448 and a length of 16', function(){
    detectNetwork('6224488236818775').should.equal('China UnionPay')
  })

  it('has a prefix of 622449 and a length of 16', function(){
    detectNetwork('6224493471523026').should.equal('China UnionPay')
  })

  it('has a prefix of 622450 and a length of 16', function(){
    detectNetwork('6224503614825215').should.equal('China UnionPay')
  })

  it('has a prefix of 622451 and a length of 16', function(){
    detectNetwork('6224518842265230').should.equal('China UnionPay')
  })

  it('has a prefix of 622452 and a length of 16', function(){
    detectNetwork('6224523865201663').should.equal('China UnionPay')
  })

  it('has a prefix of 622453 and a length of 16', function(){
    detectNetwork('6224531422857711').should.equal('China UnionPay')
  })

  it('has a prefix of 622454 and a length of 16', function(){
    detectNetwork('6224540711351832').should.equal('China UnionPay')
  })

  it('has a prefix of 622455 and a length of 16', function(){
    detectNetwork('6224554268612565').should.equal('China UnionPay')
  })

  it('has a prefix of 622456 and a length of 16', function(){
    detectNetwork('6224561624834172').should.equal('China UnionPay')
  })

  it('has a prefix of 622457 and a length of 16', function(){
    detectNetwork('6224578523414803').should.equal('China UnionPay')
  })

  it('has a prefix of 622458 and a length of 16', function(){
    detectNetwork('6224583653456855').should.equal('China UnionPay')
  })

  it('has a prefix of 622459 and a length of 16', function(){
    detectNetwork('6224592035005561').should.equal('China UnionPay')
  })

  it('has a prefix of 622460 and a length of 16', function(){
    detectNetwork('6224603662734857').should.equal('China UnionPay')
  })

  it('has a prefix of 622461 and a length of 16', function(){
    detectNetwork('6224614554435422').should.equal('China UnionPay')
  })

  it('has a prefix of 622462 and a length of 16', function(){
    detectNetwork('6224623486272143').should.equal('China UnionPay')
  })

  it('has a prefix of 622463 and a length of 16', function(){
    detectNetwork('6224631161718246').should.equal('China UnionPay')
  })

  it('has a prefix of 622464 and a length of 16', function(){
    detectNetwork('6224645664062825').should.equal('China UnionPay')
  })

  it('has a prefix of 622465 and a length of 16', function(){
    detectNetwork('6224651017866247').should.equal('China UnionPay')
  })

  it('has a prefix of 622466 and a length of 16', function(){
    detectNetwork('6224662634023617').should.equal('China UnionPay')
  })

  it('has a prefix of 622467 and a length of 16', function(){
    detectNetwork('6224678248437006').should.equal('China UnionPay')
  })

  it('has a prefix of 622468 and a length of 16', function(){
    detectNetwork('6224681182070136').should.equal('China UnionPay')
  })

  it('has a prefix of 622469 and a length of 16', function(){
    detectNetwork('6224698806585773').should.equal('China UnionPay')
  })

  it('has a prefix of 622470 and a length of 16', function(){
    detectNetwork('6224708888126114').should.equal('China UnionPay')
  })

  it('has a prefix of 622471 and a length of 16', function(){
    detectNetwork('6224712462438283').should.equal('China UnionPay')
  })

  it('has a prefix of 622472 and a length of 16', function(){
    detectNetwork('6224727457187303').should.equal('China UnionPay')
  })

  it('has a prefix of 622473 and a length of 16', function(){
    detectNetwork('6224730274644462').should.equal('China UnionPay')
  })

  it('has a prefix of 622474 and a length of 16', function(){
    detectNetwork('6224742426843651').should.equal('China UnionPay')
  })

  it('has a prefix of 622475 and a length of 16', function(){
    detectNetwork('6224753457861536').should.equal('China UnionPay')
  })

  it('has a prefix of 622476 and a length of 16', function(){
    detectNetwork('6224761885707528').should.equal('China UnionPay')
  })

  it('has a prefix of 622477 and a length of 16', function(){
    detectNetwork('6224775855523724').should.equal('China UnionPay')
  })

  it('has a prefix of 622478 and a length of 16', function(){
    detectNetwork('6224785678547123').should.equal('China UnionPay')
  })

  it('has a prefix of 622479 and a length of 16', function(){
    detectNetwork('6224791466228674').should.equal('China UnionPay')
  })

  it('has a prefix of 622480 and a length of 16', function(){
    detectNetwork('6224801155373568').should.equal('China UnionPay')
  })

  it('has a prefix of 622481 and a length of 16', function(){
    detectNetwork('6224815364636864').should.equal('China UnionPay')
  })

  it('has a prefix of 622482 and a length of 16', function(){
    detectNetwork('6224825458338823').should.equal('China UnionPay')
  })

  it('has a prefix of 622483 and a length of 16', function(){
    detectNetwork('6224831440508025').should.equal('China UnionPay')
  })

  it('has a prefix of 622484 and a length of 16', function(){
    detectNetwork('6224848708845486').should.equal('China UnionPay')
  })

  it('has a prefix of 622485 and a length of 16', function(){
    detectNetwork('6224851531148804').should.equal('China UnionPay')
  })

  it('has a prefix of 622486 and a length of 16', function(){
    detectNetwork('6224860738820554').should.equal('China UnionPay')
  })

  it('has a prefix of 622487 and a length of 16', function(){
    detectNetwork('6224873820328645').should.equal('China UnionPay')
  })

  it('has a prefix of 622488 and a length of 16', function(){
    detectNetwork('6224888256087042').should.equal('China UnionPay')
  })

  it('has a prefix of 622489 and a length of 16', function(){
    detectNetwork('6224897143524322').should.equal('China UnionPay')
  })

  it('has a prefix of 622490 and a length of 16', function(){
    detectNetwork('6224906430866425').should.equal('China UnionPay')
  })

  it('has a prefix of 622491 and a length of 16', function(){
    detectNetwork('6224910467108226').should.equal('China UnionPay')
  })

  it('has a prefix of 622492 and a length of 16', function(){
    detectNetwork('6224925683420023').should.equal('China UnionPay')
  })

  it('has a prefix of 622493 and a length of 16', function(){
    detectNetwork('6224930100283706').should.equal('China UnionPay')
  })

  it('has a prefix of 622494 and a length of 16', function(){
    detectNetwork('6224942075633057').should.equal('China UnionPay')
  })

  it('has a prefix of 622495 and a length of 16', function(){
    detectNetwork('6224952054123015').should.equal('China UnionPay')
  })

  it('has a prefix of 622496 and a length of 16', function(){
    detectNetwork('6224964078740534').should.equal('China UnionPay')
  })

  it('has a prefix of 622497 and a length of 16', function(){
    detectNetwork('6224977286884013').should.equal('China UnionPay')
  })

  it('has a prefix of 622498 and a length of 16', function(){
    detectNetwork('6224986815443580').should.equal('China UnionPay')
  })

  it('has a prefix of 622499 and a length of 16', function(){
    detectNetwork('6224991625423681').should.equal('China UnionPay')
  })

  it('has a prefix of 622500 and a length of 16', function(){
    detectNetwork('6225005047045624').should.equal('China UnionPay')
  })

  it('has a prefix of 622501 and a length of 16', function(){
    detectNetwork('6225018012502582').should.equal('China UnionPay')
  })

  it('has a prefix of 622502 and a length of 16', function(){
    detectNetwork('6225020351133087').should.equal('China UnionPay')
  })

  it('has a prefix of 622503 and a length of 16', function(){
    detectNetwork('6225030145731686').should.equal('China UnionPay')
  })

  it('has a prefix of 622504 and a length of 16', function(){
    detectNetwork('6225048015341828').should.equal('China UnionPay')
  })

  it('has a prefix of 622505 and a length of 16', function(){
    detectNetwork('6225051078556512').should.equal('China UnionPay')
  })

  it('has a prefix of 622506 and a length of 16', function(){
    detectNetwork('6225062420242045').should.equal('China UnionPay')
  })

  it('has a prefix of 622507 and a length of 16', function(){
    detectNetwork('6225077867706108').should.equal('China UnionPay')
  })

  it('has a prefix of 622508 and a length of 16', function(){
    detectNetwork('6225086432868628').should.equal('China UnionPay')
  })

  it('has a prefix of 622509 and a length of 16', function(){
    detectNetwork('6225098625354727').should.equal('China UnionPay')
  })

  it('has a prefix of 622510 and a length of 16', function(){
    detectNetwork('6225103786016351').should.equal('China UnionPay')
  })

  it('has a prefix of 622511 and a length of 16', function(){
    detectNetwork('6225110238058751').should.equal('China UnionPay')
  })

  it('has a prefix of 622512 and a length of 16', function(){
    detectNetwork('6225122820500716').should.equal('China UnionPay')
  })

  it('has a prefix of 622513 and a length of 16', function(){
    detectNetwork('6225134322616576').should.equal('China UnionPay')
  })

  it('has a prefix of 622514 and a length of 16', function(){
    detectNetwork('6225142483744186').should.equal('China UnionPay')
  })

  it('has a prefix of 622515 and a length of 16', function(){
    detectNetwork('6225154727187480').should.equal('China UnionPay')
  })

  it('has a prefix of 622516 and a length of 16', function(){
    detectNetwork('6225168866411726').should.equal('China UnionPay')
  })

  it('has a prefix of 622517 and a length of 16', function(){
    detectNetwork('6225172632637014').should.equal('China UnionPay')
  })

  it('has a prefix of 622518 and a length of 16', function(){
    detectNetwork('6225182643221572').should.equal('China UnionPay')
  })

  it('has a prefix of 622519 and a length of 16', function(){
    detectNetwork('6225195770413245').should.equal('China UnionPay')
  })

  it('has a prefix of 622520 and a length of 16', function(){
    detectNetwork('6225202574840516').should.equal('China UnionPay')
  })

  it('has a prefix of 622521 and a length of 16', function(){
    detectNetwork('6225210138415548').should.equal('China UnionPay')
  })

  it('has a prefix of 622522 and a length of 16', function(){
    detectNetwork('6225221383518354').should.equal('China UnionPay')
  })

  it('has a prefix of 622523 and a length of 16', function(){
    detectNetwork('6225236351214638').should.equal('China UnionPay')
  })

  it('has a prefix of 622524 and a length of 16', function(){
    detectNetwork('6225246468644501').should.equal('China UnionPay')
  })

  it('has a prefix of 622525 and a length of 16', function(){
    detectNetwork('6225250730465543').should.equal('China UnionPay')
  })

  it('has a prefix of 622526 and a length of 16', function(){
    detectNetwork('6225265758054647').should.equal('China UnionPay')
  })

  it('has a prefix of 622527 and a length of 16', function(){
    detectNetwork('6225270227100765').should.equal('China UnionPay')
  })

  it('has a prefix of 622528 and a length of 16', function(){
    detectNetwork('6225283558352443').should.equal('China UnionPay')
  })

  it('has a prefix of 622529 and a length of 16', function(){
    detectNetwork('6225291335570271').should.equal('China UnionPay')
  })

  it('has a prefix of 622530 and a length of 16', function(){
    detectNetwork('6225306408800684').should.equal('China UnionPay')
  })

  it('has a prefix of 622531 and a length of 16', function(){
    detectNetwork('6225316635160805').should.equal('China UnionPay')
  })

  it('has a prefix of 622532 and a length of 16', function(){
    detectNetwork('6225320234234175').should.equal('China UnionPay')
  })

  it('has a prefix of 622533 and a length of 16', function(){
    detectNetwork('6225336634242186').should.equal('China UnionPay')
  })

  it('has a prefix of 622534 and a length of 16', function(){
    detectNetwork('6225342041413155').should.equal('China UnionPay')
  })

  it('has a prefix of 622535 and a length of 16', function(){
    detectNetwork('6225350358564674').should.equal('China UnionPay')
  })

  it('has a prefix of 622536 and a length of 16', function(){
    detectNetwork('6225368158775560').should.equal('China UnionPay')
  })

  it('has a prefix of 622537 and a length of 16', function(){
    detectNetwork('6225377564776676').should.equal('China UnionPay')
  })

  it('has a prefix of 622538 and a length of 16', function(){
    detectNetwork('6225384472711174').should.equal('China UnionPay')
  })

  it('has a prefix of 622539 and a length of 16', function(){
    detectNetwork('6225398307403161').should.equal('China UnionPay')
  })

  it('has a prefix of 622540 and a length of 16', function(){
    detectNetwork('6225400440060228').should.equal('China UnionPay')
  })

  it('has a prefix of 622541 and a length of 16', function(){
    detectNetwork('6225415005370456').should.equal('China UnionPay')
  })

  it('has a prefix of 622542 and a length of 16', function(){
    detectNetwork('6225425871280886').should.equal('China UnionPay')
  })

  it('has a prefix of 622543 and a length of 16', function(){
    detectNetwork('6225436450044861').should.equal('China UnionPay')
  })

  it('has a prefix of 622544 and a length of 16', function(){
    detectNetwork('6225448448675617').should.equal('China UnionPay')
  })

  it('has a prefix of 622545 and a length of 16', function(){
    detectNetwork('6225458824611226').should.equal('China UnionPay')
  })

  it('has a prefix of 622546 and a length of 16', function(){
    detectNetwork('6225463748600746').should.equal('China UnionPay')
  })

  it('has a prefix of 622547 and a length of 16', function(){
    detectNetwork('6225470211507182').should.equal('China UnionPay')
  })

  it('has a prefix of 622548 and a length of 16', function(){
    detectNetwork('6225483068484626').should.equal('China UnionPay')
  })

  it('has a prefix of 622549 and a length of 16', function(){
    detectNetwork('6225497386347445').should.equal('China UnionPay')
  })

  it('has a prefix of 622550 and a length of 16', function(){
    detectNetwork('6225506373833607').should.equal('China UnionPay')
  })

  it('has a prefix of 622551 and a length of 16', function(){
    detectNetwork('6225511652685055').should.equal('China UnionPay')
  })

  it('has a prefix of 622552 and a length of 16', function(){
    detectNetwork('6225521514220348').should.equal('China UnionPay')
  })

  it('has a prefix of 622553 and a length of 16', function(){
    detectNetwork('6225536823781770').should.equal('China UnionPay')
  })

  it('has a prefix of 622554 and a length of 16', function(){
    detectNetwork('6225546672800048').should.equal('China UnionPay')
  })

  it('has a prefix of 622555 and a length of 16', function(){
    detectNetwork('6225555230258610').should.equal('China UnionPay')
  })

  it('has a prefix of 622556 and a length of 16', function(){
    detectNetwork('6225567528548156').should.equal('China UnionPay')
  })

  it('has a prefix of 622557 and a length of 16', function(){
    detectNetwork('6225572727108000').should.equal('China UnionPay')
  })

  it('has a prefix of 622558 and a length of 16', function(){
    detectNetwork('6225588805303221').should.equal('China UnionPay')
  })

  it('has a prefix of 622559 and a length of 16', function(){
    detectNetwork('6225595365211820').should.equal('China UnionPay')
  })

  it('has a prefix of 622560 and a length of 16', function(){
    detectNetwork('6225605021740833').should.equal('China UnionPay')
  })

  it('has a prefix of 622561 and a length of 16', function(){
    detectNetwork('6225617650482448').should.equal('China UnionPay')
  })

  it('has a prefix of 622562 and a length of 16', function(){
    detectNetwork('6225620416430185').should.equal('China UnionPay')
  })

  it('has a prefix of 622563 and a length of 16', function(){
    detectNetwork('6225631626108374').should.equal('China UnionPay')
  })

  it('has a prefix of 622564 and a length of 16', function(){
    detectNetwork('6225643327021005').should.equal('China UnionPay')
  })

  it('has a prefix of 622565 and a length of 16', function(){
    detectNetwork('6225651843575574').should.equal('China UnionPay')
  })

  it('has a prefix of 622566 and a length of 16', function(){
    detectNetwork('6225662848534548').should.equal('China UnionPay')
  })

  it('has a prefix of 622567 and a length of 16', function(){
    detectNetwork('6225677466152047').should.equal('China UnionPay')
  })

  it('has a prefix of 622568 and a length of 16', function(){
    detectNetwork('6225682788204782').should.equal('China UnionPay')
  })

  it('has a prefix of 622569 and a length of 16', function(){
    detectNetwork('6225692223686224').should.equal('China UnionPay')
  })

  it('has a prefix of 622570 and a length of 16', function(){
    detectNetwork('6225706814437700').should.equal('China UnionPay')
  })

  it('has a prefix of 622571 and a length of 16', function(){
    detectNetwork('6225715121526244').should.equal('China UnionPay')
  })

  it('has a prefix of 622572 and a length of 16', function(){
    detectNetwork('6225728060443070').should.equal('China UnionPay')
  })

  it('has a prefix of 622573 and a length of 16', function(){
    detectNetwork('6225734343218847').should.equal('China UnionPay')
  })

  it('has a prefix of 622574 and a length of 16', function(){
    detectNetwork('6225745253703023').should.equal('China UnionPay')
  })

  it('has a prefix of 622575 and a length of 16', function(){
    detectNetwork('6225755877605316').should.equal('China UnionPay')
  })

  it('has a prefix of 622576 and a length of 16', function(){
    detectNetwork('6225762513203354').should.equal('China UnionPay')
  })

  it('has a prefix of 622577 and a length of 16', function(){
    detectNetwork('6225774064334156').should.equal('China UnionPay')
  })

  it('has a prefix of 622578 and a length of 16', function(){
    detectNetwork('6225785307014477').should.equal('China UnionPay')
  })

  it('has a prefix of 622579 and a length of 16', function(){
    detectNetwork('6225795174726582').should.equal('China UnionPay')
  })

  it('has a prefix of 622580 and a length of 16', function(){
    detectNetwork('6225801501886856').should.equal('China UnionPay')
  })

  it('has a prefix of 622581 and a length of 16', function(){
    detectNetwork('6225817074462388').should.equal('China UnionPay')
  })

  it('has a prefix of 622582 and a length of 16', function(){
    detectNetwork('6225824685243658').should.equal('China UnionPay')
  })

  it('has a prefix of 622583 and a length of 16', function(){
    detectNetwork('6225834360017067').should.equal('China UnionPay')
  })

  it('has a prefix of 622584 and a length of 16', function(){
    detectNetwork('6225847457771404').should.equal('China UnionPay')
  })

  it('has a prefix of 622585 and a length of 16', function(){
    detectNetwork('6225855563170844').should.equal('China UnionPay')
  })

  it('has a prefix of 622586 and a length of 16', function(){
    detectNetwork('6225868262363341').should.equal('China UnionPay')
  })

  it('has a prefix of 622587 and a length of 16', function(){
    detectNetwork('6225876180772763').should.equal('China UnionPay')
  })

  it('has a prefix of 622588 and a length of 16', function(){
    detectNetwork('6225888112546166').should.equal('China UnionPay')
  })

  it('has a prefix of 622589 and a length of 16', function(){
    detectNetwork('6225891876821132').should.equal('China UnionPay')
  })

  it('has a prefix of 622590 and a length of 16', function(){
    detectNetwork('6225907208531647').should.equal('China UnionPay')
  })

  it('has a prefix of 622591 and a length of 16', function(){
    detectNetwork('6225918873617070').should.equal('China UnionPay')
  })

  it('has a prefix of 622592 and a length of 16', function(){
    detectNetwork('6225926150173206').should.equal('China UnionPay')
  })

  it('has a prefix of 622593 and a length of 16', function(){
    detectNetwork('6225932272071024').should.equal('China UnionPay')
  })

  it('has a prefix of 622594 and a length of 16', function(){
    detectNetwork('6225941433511710').should.equal('China UnionPay')
  })

  it('has a prefix of 622595 and a length of 16', function(){
    detectNetwork('6225952171760475').should.equal('China UnionPay')
  })

  it('has a prefix of 622596 and a length of 16', function(){
    detectNetwork('6225967046048035').should.equal('China UnionPay')
  })

  it('has a prefix of 622597 and a length of 16', function(){
    detectNetwork('6225972500742745').should.equal('China UnionPay')
  })

  it('has a prefix of 622598 and a length of 16', function(){
    detectNetwork('6225986801287463').should.equal('China UnionPay')
  })

  it('has a prefix of 622599 and a length of 16', function(){
    detectNetwork('6225996158250514').should.equal('China UnionPay')
  })

  it('has a prefix of 622600 and a length of 16', function(){
    detectNetwork('6226002880578622').should.equal('China UnionPay')
  })

  it('has a prefix of 622601 and a length of 16', function(){
    detectNetwork('6226016807335438').should.equal('China UnionPay')
  })

  it('has a prefix of 622602 and a length of 16', function(){
    detectNetwork('6226026266623585').should.equal('China UnionPay')
  })

  it('has a prefix of 622603 and a length of 16', function(){
    detectNetwork('6226032304460717').should.equal('China UnionPay')
  })

  it('has a prefix of 622604 and a length of 16', function(){
    detectNetwork('6226040555341016').should.equal('China UnionPay')
  })

  it('has a prefix of 622605 and a length of 16', function(){
    detectNetwork('6226055087544645').should.equal('China UnionPay')
  })

  it('has a prefix of 622606 and a length of 16', function(){
    detectNetwork('6226063640406660').should.equal('China UnionPay')
  })

  it('has a prefix of 622607 and a length of 16', function(){
    detectNetwork('6226078664784572').should.equal('China UnionPay')
  })

  it('has a prefix of 622608 and a length of 16', function(){
    detectNetwork('6226083867327565').should.equal('China UnionPay')
  })

  it('has a prefix of 622609 and a length of 16', function(){
    detectNetwork('6226095085614574').should.equal('China UnionPay')
  })

  it('has a prefix of 622610 and a length of 16', function(){
    detectNetwork('6226104085544737').should.equal('China UnionPay')
  })

  it('has a prefix of 622611 and a length of 16', function(){
    detectNetwork('6226118358125570').should.equal('China UnionPay')
  })

  it('has a prefix of 622612 and a length of 16', function(){
    detectNetwork('6226126817363367').should.equal('China UnionPay')
  })

  it('has a prefix of 622613 and a length of 16', function(){
    detectNetwork('6226133164638620').should.equal('China UnionPay')
  })

  it('has a prefix of 622614 and a length of 16', function(){
    detectNetwork('6226143834605528').should.equal('China UnionPay')
  })

  it('has a prefix of 622615 and a length of 16', function(){
    detectNetwork('6226156874710225').should.equal('China UnionPay')
  })

  it('has a prefix of 622616 and a length of 16', function(){
    detectNetwork('6226166245872701').should.equal('China UnionPay')
  })

  it('has a prefix of 622617 and a length of 16', function(){
    detectNetwork('6226172358606678').should.equal('China UnionPay')
  })

  it('has a prefix of 622618 and a length of 16', function(){
    detectNetwork('6226184781321608').should.equal('China UnionPay')
  })

  it('has a prefix of 622619 and a length of 16', function(){
    detectNetwork('6226193876185268').should.equal('China UnionPay')
  })

  it('has a prefix of 622620 and a length of 16', function(){
    detectNetwork('6226208731722477').should.equal('China UnionPay')
  })

  it('has a prefix of 622621 and a length of 16', function(){
    detectNetwork('6226218617330412').should.equal('China UnionPay')
  })

  it('has a prefix of 622622 and a length of 16', function(){
    detectNetwork('6226225005000335').should.equal('China UnionPay')
  })

  it('has a prefix of 622623 and a length of 16', function(){
    detectNetwork('6226236037827148').should.equal('China UnionPay')
  })

  it('has a prefix of 622624 and a length of 16', function(){
    detectNetwork('6226247727287851').should.equal('China UnionPay')
  })

  it('has a prefix of 622625 and a length of 16', function(){
    detectNetwork('6226254066875203').should.equal('China UnionPay')
  })

  it('has a prefix of 622626 and a length of 16', function(){
    detectNetwork('6226263020452726').should.equal('China UnionPay')
  })

  it('has a prefix of 622627 and a length of 16', function(){
    detectNetwork('6226272032383187').should.equal('China UnionPay')
  })

  it('has a prefix of 622628 and a length of 16', function(){
    detectNetwork('6226283271725063').should.equal('China UnionPay')
  })

  it('has a prefix of 622629 and a length of 16', function(){
    detectNetwork('6226298647307832').should.equal('China UnionPay')
  })

  it('has a prefix of 622630 and a length of 16', function(){
    detectNetwork('6226303386214725').should.equal('China UnionPay')
  })

  it('has a prefix of 622631 and a length of 16', function(){
    detectNetwork('6226314265335427').should.equal('China UnionPay')
  })

  it('has a prefix of 622632 and a length of 16', function(){
    detectNetwork('6226328652448232').should.equal('China UnionPay')
  })

  it('has a prefix of 622633 and a length of 16', function(){
    detectNetwork('6226336146877134').should.equal('China UnionPay')
  })

  it('has a prefix of 622634 and a length of 16', function(){
    detectNetwork('6226347383155355').should.equal('China UnionPay')
  })

  it('has a prefix of 622635 and a length of 16', function(){
    detectNetwork('6226355241688602').should.equal('China UnionPay')
  })

  it('has a prefix of 622636 and a length of 16', function(){
    detectNetwork('6226365347077208').should.equal('China UnionPay')
  })

  it('has a prefix of 622637 and a length of 16', function(){
    detectNetwork('6226372848846825').should.equal('China UnionPay')
  })

  it('has a prefix of 622638 and a length of 16', function(){
    detectNetwork('6226386416251617').should.equal('China UnionPay')
  })

  it('has a prefix of 622639 and a length of 16', function(){
    detectNetwork('6226398171340272').should.equal('China UnionPay')
  })

  it('has a prefix of 622640 and a length of 16', function(){
    detectNetwork('6226406084487047').should.equal('China UnionPay')
  })

  it('has a prefix of 622641 and a length of 16', function(){
    detectNetwork('6226416713813652').should.equal('China UnionPay')
  })

  it('has a prefix of 622642 and a length of 16', function(){
    detectNetwork('6226422230212323').should.equal('China UnionPay')
  })

  it('has a prefix of 622643 and a length of 16', function(){
    detectNetwork('6226437326066763').should.equal('China UnionPay')
  })

  it('has a prefix of 622644 and a length of 16', function(){
    detectNetwork('6226443145342012').should.equal('China UnionPay')
  })

  it('has a prefix of 622645 and a length of 16', function(){
    detectNetwork('6226454457007530').should.equal('China UnionPay')
  })

  it('has a prefix of 622646 and a length of 16', function(){
    detectNetwork('6226461848466014').should.equal('China UnionPay')
  })

  it('has a prefix of 622647 and a length of 16', function(){
    detectNetwork('6226475187666731').should.equal('China UnionPay')
  })

  it('has a prefix of 622648 and a length of 16', function(){
    detectNetwork('6226486605040683').should.equal('China UnionPay')
  })

  it('has a prefix of 622649 and a length of 16', function(){
    detectNetwork('6226497834316582').should.equal('China UnionPay')
  })

  it('has a prefix of 622650 and a length of 16', function(){
    detectNetwork('6226500467061676').should.equal('China UnionPay')
  })

  it('has a prefix of 622651 and a length of 16', function(){
    detectNetwork('6226515267024262').should.equal('China UnionPay')
  })

  it('has a prefix of 622652 and a length of 16', function(){
    detectNetwork('6226524587270875').should.equal('China UnionPay')
  })

  it('has a prefix of 622653 and a length of 16', function(){
    detectNetwork('6226535448100251').should.equal('China UnionPay')
  })

  it('has a prefix of 622654 and a length of 16', function(){
    detectNetwork('6226544253863360').should.equal('China UnionPay')
  })

  it('has a prefix of 622655 and a length of 16', function(){
    detectNetwork('6226552266514316').should.equal('China UnionPay')
  })

  it('has a prefix of 622656 and a length of 16', function(){
    detectNetwork('6226564846167443').should.equal('China UnionPay')
  })

  it('has a prefix of 622657 and a length of 16', function(){
    detectNetwork('6226576422321042').should.equal('China UnionPay')
  })

  it('has a prefix of 622658 and a length of 16', function(){
    detectNetwork('6226580246311246').should.equal('China UnionPay')
  })

  it('has a prefix of 622659 and a length of 16', function(){
    detectNetwork('6226595415880360').should.equal('China UnionPay')
  })

  it('has a prefix of 622660 and a length of 16', function(){
    detectNetwork('6226606855801367').should.equal('China UnionPay')
  })

  it('has a prefix of 622661 and a length of 16', function(){
    detectNetwork('6226610143623736').should.equal('China UnionPay')
  })

  it('has a prefix of 622662 and a length of 16', function(){
    detectNetwork('6226622401847437').should.equal('China UnionPay')
  })

  it('has a prefix of 622663 and a length of 16', function(){
    detectNetwork('6226630461701778').should.equal('China UnionPay')
  })

  it('has a prefix of 622664 and a length of 16', function(){
    detectNetwork('6226646480845100').should.equal('China UnionPay')
  })

  it('has a prefix of 622665 and a length of 16', function(){
    detectNetwork('6226654335817183').should.equal('China UnionPay')
  })

  it('has a prefix of 622666 and a length of 16', function(){
    detectNetwork('6226664047621246').should.equal('China UnionPay')
  })

  it('has a prefix of 622667 and a length of 16', function(){
    detectNetwork('6226676204631445').should.equal('China UnionPay')
  })

  it('has a prefix of 622668 and a length of 16', function(){
    detectNetwork('6226680652234180').should.equal('China UnionPay')
  })

  it('has a prefix of 622669 and a length of 16', function(){
    detectNetwork('6226698222601414').should.equal('China UnionPay')
  })

  it('has a prefix of 622670 and a length of 16', function(){
    detectNetwork('6226706766427564').should.equal('China UnionPay')
  })

  it('has a prefix of 622671 and a length of 16', function(){
    detectNetwork('6226716581802882').should.equal('China UnionPay')
  })

  it('has a prefix of 622672 and a length of 16', function(){
    detectNetwork('6226723787574781').should.equal('China UnionPay')
  })

  it('has a prefix of 622673 and a length of 16', function(){
    detectNetwork('6226736640041361').should.equal('China UnionPay')
  })

  it('has a prefix of 622674 and a length of 16', function(){
    detectNetwork('6226743156033280').should.equal('China UnionPay')
  })

  it('has a prefix of 622675 and a length of 16', function(){
    detectNetwork('6226755050003537').should.equal('China UnionPay')
  })

  it('has a prefix of 622676 and a length of 16', function(){
    detectNetwork('6226762857137008').should.equal('China UnionPay')
  })

  it('has a prefix of 622677 and a length of 16', function(){
    detectNetwork('6226773172325512').should.equal('China UnionPay')
  })

  it('has a prefix of 622678 and a length of 16', function(){
    detectNetwork('6226786185555762').should.equal('China UnionPay')
  })

  it('has a prefix of 622679 and a length of 16', function(){
    detectNetwork('6226797255115831').should.equal('China UnionPay')
  })

  it('has a prefix of 622680 and a length of 16', function(){
    detectNetwork('6226803603078517').should.equal('China UnionPay')
  })

  it('has a prefix of 622681 and a length of 16', function(){
    detectNetwork('6226811251207346').should.equal('China UnionPay')
  })

  it('has a prefix of 622682 and a length of 16', function(){
    detectNetwork('6226823337641545').should.equal('China UnionPay')
  })

  it('has a prefix of 622683 and a length of 16', function(){
    detectNetwork('6226834111473150').should.equal('China UnionPay')
  })

  it('has a prefix of 622684 and a length of 16', function(){
    detectNetwork('6226846577772208').should.equal('China UnionPay')
  })

  it('has a prefix of 622685 and a length of 16', function(){
    detectNetwork('6226856858373583').should.equal('China UnionPay')
  })

  it('has a prefix of 622686 and a length of 16', function(){
    detectNetwork('6226864511336384').should.equal('China UnionPay')
  })

  it('has a prefix of 622687 and a length of 16', function(){
    detectNetwork('6226871168541683').should.equal('China UnionPay')
  })

  it('has a prefix of 622688 and a length of 16', function(){
    detectNetwork('6226886326777731').should.equal('China UnionPay')
  })

  it('has a prefix of 622689 and a length of 16', function(){
    detectNetwork('6226895346277355').should.equal('China UnionPay')
  })

  it('has a prefix of 622690 and a length of 16', function(){
    detectNetwork('6226906084123430').should.equal('China UnionPay')
  })

  it('has a prefix of 622691 and a length of 16', function(){
    detectNetwork('6226913244482862').should.equal('China UnionPay')
  })

  it('has a prefix of 622692 and a length of 16', function(){
    detectNetwork('6226924887814758').should.equal('China UnionPay')
  })

  it('has a prefix of 622693 and a length of 16', function(){
    detectNetwork('6226938232566436').should.equal('China UnionPay')
  })

  it('has a prefix of 622694 and a length of 16', function(){
    detectNetwork('6226945654477812').should.equal('China UnionPay')
  })

  it('has a prefix of 622695 and a length of 16', function(){
    detectNetwork('6226953800506728').should.equal('China UnionPay')
  })

  it('has a prefix of 622696 and a length of 16', function(){
    detectNetwork('6226968040805830').should.equal('China UnionPay')
  })

  it('has a prefix of 622697 and a length of 16', function(){
    detectNetwork('6226970705036868').should.equal('China UnionPay')
  })

  it('has a prefix of 622698 and a length of 16', function(){
    detectNetwork('6226983543130617').should.equal('China UnionPay')
  })

  it('has a prefix of 622699 and a length of 16', function(){
    detectNetwork('6226997374621028').should.equal('China UnionPay')
  })

  it('has a prefix of 622700 and a length of 16', function(){
    detectNetwork('6227000615010610').should.equal('China UnionPay')
  })

  it('has a prefix of 622701 and a length of 16', function(){
    detectNetwork('6227011453483086').should.equal('China UnionPay')
  })

  it('has a prefix of 622702 and a length of 16', function(){
    detectNetwork('6227021646156348').should.equal('China UnionPay')
  })

  it('has a prefix of 622703 and a length of 16', function(){
    detectNetwork('6227033280547546').should.equal('China UnionPay')
  })

  it('has a prefix of 622704 and a length of 16', function(){
    detectNetwork('6227040343426884').should.equal('China UnionPay')
  })

  it('has a prefix of 622705 and a length of 16', function(){
    detectNetwork('6227052647014530').should.equal('China UnionPay')
  })

  it('has a prefix of 622706 and a length of 16', function(){
    detectNetwork('6227062041546337').should.equal('China UnionPay')
  })

  it('has a prefix of 622707 and a length of 16', function(){
    detectNetwork('6227078784840511').should.equal('China UnionPay')
  })

  it('has a prefix of 622708 and a length of 16', function(){
    detectNetwork('6227085124535246').should.equal('China UnionPay')
  })

  it('has a prefix of 622709 and a length of 16', function(){
    detectNetwork('6227097165800665').should.equal('China UnionPay')
  })

  it('has a prefix of 622710 and a length of 16', function(){
    detectNetwork('6227100462058725').should.equal('China UnionPay')
  })

  it('has a prefix of 622711 and a length of 16', function(){
    detectNetwork('6227111524886103').should.equal('China UnionPay')
  })

  it('has a prefix of 622712 and a length of 16', function(){
    detectNetwork('6227124572315332').should.equal('China UnionPay')
  })

  it('has a prefix of 622713 and a length of 16', function(){
    detectNetwork('6227137420824313').should.equal('China UnionPay')
  })

  it('has a prefix of 622714 and a length of 16', function(){
    detectNetwork('6227143510753150').should.equal('China UnionPay')
  })

  it('has a prefix of 622715 and a length of 16', function(){
    detectNetwork('6227152205836244').should.equal('China UnionPay')
  })

  it('has a prefix of 622716 and a length of 16', function(){
    detectNetwork('6227164114608541').should.equal('China UnionPay')
  })

  it('has a prefix of 622717 and a length of 16', function(){
    detectNetwork('6227170141720173').should.equal('China UnionPay')
  })

  it('has a prefix of 622718 and a length of 16', function(){
    detectNetwork('6227188167324175').should.equal('China UnionPay')
  })

  it('has a prefix of 622719 and a length of 16', function(){
    detectNetwork('6227195378240713').should.equal('China UnionPay')
  })

  it('has a prefix of 622720 and a length of 16', function(){
    detectNetwork('6227203251562417').should.equal('China UnionPay')
  })

  it('has a prefix of 622721 and a length of 16', function(){
    detectNetwork('6227211377406654').should.equal('China UnionPay')
  })

  it('has a prefix of 622722 and a length of 16', function(){
    detectNetwork('6227227520277851').should.equal('China UnionPay')
  })

  it('has a prefix of 622723 and a length of 16', function(){
    detectNetwork('6227235374577326').should.equal('China UnionPay')
  })

  it('has a prefix of 622724 and a length of 16', function(){
    detectNetwork('6227247447621772').should.equal('China UnionPay')
  })

  it('has a prefix of 622725 and a length of 16', function(){
    detectNetwork('6227257641868574').should.equal('China UnionPay')
  })

  it('has a prefix of 622726 and a length of 16', function(){
    detectNetwork('6227263683843152').should.equal('China UnionPay')
  })

  it('has a prefix of 622727 and a length of 16', function(){
    detectNetwork('6227272546580783').should.equal('China UnionPay')
  })

  it('has a prefix of 622728 and a length of 16', function(){
    detectNetwork('6227287882317008').should.equal('China UnionPay')
  })

  it('has a prefix of 622729 and a length of 16', function(){
    detectNetwork('6227297345805245').should.equal('China UnionPay')
  })

  it('has a prefix of 622730 and a length of 16', function(){
    detectNetwork('6227307777624615').should.equal('China UnionPay')
  })

  it('has a prefix of 622731 and a length of 16', function(){
    detectNetwork('6227316148672801').should.equal('China UnionPay')
  })

  it('has a prefix of 622732 and a length of 16', function(){
    detectNetwork('6227326601404815').should.equal('China UnionPay')
  })

  it('has a prefix of 622733 and a length of 16', function(){
    detectNetwork('6227332437115402').should.equal('China UnionPay')
  })

  it('has a prefix of 622734 and a length of 16', function(){
    detectNetwork('6227341162336413').should.equal('China UnionPay')
  })

  it('has a prefix of 622735 and a length of 16', function(){
    detectNetwork('6227354420187137').should.equal('China UnionPay')
  })

  it('has a prefix of 622736 and a length of 16', function(){
    detectNetwork('6227362231532773').should.equal('China UnionPay')
  })

  it('has a prefix of 622737 and a length of 16', function(){
    detectNetwork('6227376824203688').should.equal('China UnionPay')
  })

  it('has a prefix of 622738 and a length of 16', function(){
    detectNetwork('6227383218474885').should.equal('China UnionPay')
  })

  it('has a prefix of 622739 and a length of 16', function(){
    detectNetwork('6227392256681848').should.equal('China UnionPay')
  })

  it('has a prefix of 622740 and a length of 16', function(){
    detectNetwork('6227402304280183').should.equal('China UnionPay')
  })

  it('has a prefix of 622741 and a length of 16', function(){
    detectNetwork('6227415447662073').should.equal('China UnionPay')
  })

  it('has a prefix of 622742 and a length of 16', function(){
    detectNetwork('6227424107467208').should.equal('China UnionPay')
  })

  it('has a prefix of 622743 and a length of 16', function(){
    detectNetwork('6227438673543481').should.equal('China UnionPay')
  })

  it('has a prefix of 622744 and a length of 16', function(){
    detectNetwork('6227447753761302').should.equal('China UnionPay')
  })

  it('has a prefix of 622745 and a length of 16', function(){
    detectNetwork('6227457057310711').should.equal('China UnionPay')
  })

  it('has a prefix of 622746 and a length of 16', function(){
    detectNetwork('6227467071768317').should.equal('China UnionPay')
  })

  it('has a prefix of 622747 and a length of 16', function(){
    detectNetwork('6227471833441113').should.equal('China UnionPay')
  })

  it('has a prefix of 622748 and a length of 16', function(){
    detectNetwork('6227484813288814').should.equal('China UnionPay')
  })

  it('has a prefix of 622749 and a length of 16', function(){
    detectNetwork('6227490436670710').should.equal('China UnionPay')
  })

  it('has a prefix of 622750 and a length of 16', function(){
    detectNetwork('6227501734585288').should.equal('China UnionPay')
  })

  it('has a prefix of 622751 and a length of 16', function(){
    detectNetwork('6227517772673434').should.equal('China UnionPay')
  })

  it('has a prefix of 622752 and a length of 16', function(){
    detectNetwork('6227526786537654').should.equal('China UnionPay')
  })

  it('has a prefix of 622753 and a length of 16', function(){
    detectNetwork('6227531667751145').should.equal('China UnionPay')
  })

  it('has a prefix of 622754 and a length of 16', function(){
    detectNetwork('6227545805670431').should.equal('China UnionPay')
  })

  it('has a prefix of 622755 and a length of 16', function(){
    detectNetwork('6227550035011573').should.equal('China UnionPay')
  })

  it('has a prefix of 622756 and a length of 16', function(){
    detectNetwork('6227567703246880').should.equal('China UnionPay')
  })

  it('has a prefix of 622757 and a length of 16', function(){
    detectNetwork('6227578105153844').should.equal('China UnionPay')
  })

  it('has a prefix of 622758 and a length of 16', function(){
    detectNetwork('6227582810122235').should.equal('China UnionPay')
  })

  it('has a prefix of 622759 and a length of 16', function(){
    detectNetwork('6227591181021613').should.equal('China UnionPay')
  })

  it('has a prefix of 622760 and a length of 16', function(){
    detectNetwork('6227600476863847').should.equal('China UnionPay')
  })

  it('has a prefix of 622761 and a length of 16', function(){
    detectNetwork('6227611643075077').should.equal('China UnionPay')
  })

  it('has a prefix of 622762 and a length of 16', function(){
    detectNetwork('6227626047208251').should.equal('China UnionPay')
  })

  it('has a prefix of 622763 and a length of 16', function(){
    detectNetwork('6227632700238662').should.equal('China UnionPay')
  })

  it('has a prefix of 622764 and a length of 16', function(){
    detectNetwork('6227640125883666').should.equal('China UnionPay')
  })

  it('has a prefix of 622765 and a length of 16', function(){
    detectNetwork('6227650268776577').should.equal('China UnionPay')
  })

  it('has a prefix of 622766 and a length of 16', function(){
    detectNetwork('6227663610346143').should.equal('China UnionPay')
  })

  it('has a prefix of 622767 and a length of 16', function(){
    detectNetwork('6227677586202334').should.equal('China UnionPay')
  })

  it('has a prefix of 622768 and a length of 16', function(){
    detectNetwork('6227682546045026').should.equal('China UnionPay')
  })

  it('has a prefix of 622769 and a length of 16', function(){
    detectNetwork('6227695008745228').should.equal('China UnionPay')
  })

  it('has a prefix of 622770 and a length of 16', function(){
    detectNetwork('6227700882384182').should.equal('China UnionPay')
  })

  it('has a prefix of 622771 and a length of 16', function(){
    detectNetwork('6227716802436362').should.equal('China UnionPay')
  })

  it('has a prefix of 622772 and a length of 16', function(){
    detectNetwork('6227724540357112').should.equal('China UnionPay')
  })

  it('has a prefix of 622773 and a length of 16', function(){
    detectNetwork('6227730772233281').should.equal('China UnionPay')
  })

  it('has a prefix of 622774 and a length of 16', function(){
    detectNetwork('6227743275526435').should.equal('China UnionPay')
  })

  it('has a prefix of 622775 and a length of 16', function(){
    detectNetwork('6227753154266112').should.equal('China UnionPay')
  })

  it('has a prefix of 622776 and a length of 16', function(){
    detectNetwork('6227767111145712').should.equal('China UnionPay')
  })

  it('has a prefix of 622777 and a length of 16', function(){
    detectNetwork('6227773627268432').should.equal('China UnionPay')
  })

  it('has a prefix of 622778 and a length of 16', function(){
    detectNetwork('6227787716346345').should.equal('China UnionPay')
  })

  it('has a prefix of 622779 and a length of 16', function(){
    detectNetwork('6227798761458321').should.equal('China UnionPay')
  })

  it('has a prefix of 622780 and a length of 16', function(){
    detectNetwork('6227803342136237').should.equal('China UnionPay')
  })

  it('has a prefix of 622781 and a length of 16', function(){
    detectNetwork('6227811474258884').should.equal('China UnionPay')
  })

  it('has a prefix of 622782 and a length of 16', function(){
    detectNetwork('6227823727835535').should.equal('China UnionPay')
  })

  it('has a prefix of 622783 and a length of 16', function(){
    detectNetwork('6227834025258616').should.equal('China UnionPay')
  })

  it('has a prefix of 622784 and a length of 16', function(){
    detectNetwork('6227843681682574').should.equal('China UnionPay')
  })

  it('has a prefix of 622785 and a length of 16', function(){
    detectNetwork('6227852818820170').should.equal('China UnionPay')
  })

  it('has a prefix of 622786 and a length of 16', function(){
    detectNetwork('6227863458143675').should.equal('China UnionPay')
  })

  it('has a prefix of 622787 and a length of 16', function(){
    detectNetwork('6227876240235037').should.equal('China UnionPay')
  })

  it('has a prefix of 622788 and a length of 16', function(){
    detectNetwork('6227885603444828').should.equal('China UnionPay')
  })

  it('has a prefix of 622789 and a length of 16', function(){
    detectNetwork('6227895302087307').should.equal('China UnionPay')
  })

  it('has a prefix of 622790 and a length of 16', function(){
    detectNetwork('6227908563676842').should.equal('China UnionPay')
  })

  it('has a prefix of 622791 and a length of 16', function(){
    detectNetwork('6227910883760475').should.equal('China UnionPay')
  })

  it('has a prefix of 622792 and a length of 16', function(){
    detectNetwork('6227922528771774').should.equal('China UnionPay')
  })

  it('has a prefix of 622793 and a length of 16', function(){
    detectNetwork('6227931810408608').should.equal('China UnionPay')
  })

  it('has a prefix of 622794 and a length of 16', function(){
    detectNetwork('6227945022628825').should.equal('China UnionPay')
  })

  it('has a prefix of 622795 and a length of 16', function(){
    detectNetwork('6227958386167002').should.equal('China UnionPay')
  })

  it('has a prefix of 622796 and a length of 16', function(){
    detectNetwork('6227961231117153').should.equal('China UnionPay')
  })

  it('has a prefix of 622797 and a length of 16', function(){
    detectNetwork('6227971362756450').should.equal('China UnionPay')
  })

  it('has a prefix of 622798 and a length of 16', function(){
    detectNetwork('6227980233501114').should.equal('China UnionPay')
  })

  it('has a prefix of 622799 and a length of 16', function(){
    detectNetwork('6227993413623274').should.equal('China UnionPay')
  })

  it('has a prefix of 622800 and a length of 16', function(){
    detectNetwork('6228008760520784').should.equal('China UnionPay')
  })

  it('has a prefix of 622801 and a length of 16', function(){
    detectNetwork('6228010056213180').should.equal('China UnionPay')
  })

  it('has a prefix of 622802 and a length of 16', function(){
    detectNetwork('6228026401330778').should.equal('China UnionPay')
  })

  it('has a prefix of 622803 and a length of 16', function(){
    detectNetwork('6228031087211027').should.equal('China UnionPay')
  })

  it('has a prefix of 622804 and a length of 16', function(){
    detectNetwork('6228046602788220').should.equal('China UnionPay')
  })

  it('has a prefix of 622805 and a length of 16', function(){
    detectNetwork('6228055320757412').should.equal('China UnionPay')
  })

  it('has a prefix of 622806 and a length of 16', function(){
    detectNetwork('6228063006858005').should.equal('China UnionPay')
  })

  it('has a prefix of 622807 and a length of 16', function(){
    detectNetwork('6228072708855437').should.equal('China UnionPay')
  })

  it('has a prefix of 622808 and a length of 16', function(){
    detectNetwork('6228087105516048').should.equal('China UnionPay')
  })

  it('has a prefix of 622809 and a length of 16', function(){
    detectNetwork('6228093001227100').should.equal('China UnionPay')
  })

  it('has a prefix of 622810 and a length of 16', function(){
    detectNetwork('6228106172224604').should.equal('China UnionPay')
  })

  it('has a prefix of 622811 and a length of 16', function(){
    detectNetwork('6228110754374551').should.equal('China UnionPay')
  })

  it('has a prefix of 622812 and a length of 16', function(){
    detectNetwork('6228128420250330').should.equal('China UnionPay')
  })

  it('has a prefix of 622813 and a length of 16', function(){
    detectNetwork('6228132783385611').should.equal('China UnionPay')
  })

  it('has a prefix of 622814 and a length of 16', function(){
    detectNetwork('6228145217345078').should.equal('China UnionPay')
  })

  it('has a prefix of 622815 and a length of 16', function(){
    detectNetwork('6228156115636244').should.equal('China UnionPay')
  })

  it('has a prefix of 622816 and a length of 16', function(){
    detectNetwork('6228163535372224').should.equal('China UnionPay')
  })

  it('has a prefix of 622817 and a length of 16', function(){
    detectNetwork('6228172133468611').should.equal('China UnionPay')
  })

  it('has a prefix of 622818 and a length of 16', function(){
    detectNetwork('6228185823701338').should.equal('China UnionPay')
  })

  it('has a prefix of 622819 and a length of 16', function(){
    detectNetwork('6228191608614120').should.equal('China UnionPay')
  })

  it('has a prefix of 622820 and a length of 16', function(){
    detectNetwork('6228203060466375').should.equal('China UnionPay')
  })

  it('has a prefix of 622821 and a length of 16', function(){
    detectNetwork('6228216616656765').should.equal('China UnionPay')
  })

  it('has a prefix of 622822 and a length of 16', function(){
    detectNetwork('6228220665325703').should.equal('China UnionPay')
  })

  it('has a prefix of 622823 and a length of 16', function(){
    detectNetwork('6228237847023653').should.equal('China UnionPay')
  })

  it('has a prefix of 622824 and a length of 16', function(){
    detectNetwork('6228244635846037').should.equal('China UnionPay')
  })

  it('has a prefix of 622825 and a length of 16', function(){
    detectNetwork('6228253088344223').should.equal('China UnionPay')
  })

  it('has a prefix of 622826 and a length of 16', function(){
    detectNetwork('6228262827822513').should.equal('China UnionPay')
  })

  it('has a prefix of 622827 and a length of 16', function(){
    detectNetwork('6228272623800468').should.equal('China UnionPay')
  })

  it('has a prefix of 622828 and a length of 16', function(){
    detectNetwork('6228287753312087').should.equal('China UnionPay')
  })

  it('has a prefix of 622829 and a length of 16', function(){
    detectNetwork('6228297857061228').should.equal('China UnionPay')
  })

  it('has a prefix of 622830 and a length of 16', function(){
    detectNetwork('6228305171817411').should.equal('China UnionPay')
  })

  it('has a prefix of 622831 and a length of 16', function(){
    detectNetwork('6228311343177282').should.equal('China UnionPay')
  })

  it('has a prefix of 622832 and a length of 16', function(){
    detectNetwork('6228325752281222').should.equal('China UnionPay')
  })

  it('has a prefix of 622833 and a length of 16', function(){
    detectNetwork('6228337700467582').should.equal('China UnionPay')
  })

  it('has a prefix of 622834 and a length of 16', function(){
    detectNetwork('6228346137718685').should.equal('China UnionPay')
  })

  it('has a prefix of 622835 and a length of 16', function(){
    detectNetwork('6228350606874400').should.equal('China UnionPay')
  })

  it('has a prefix of 622836 and a length of 16', function(){
    detectNetwork('6228363480433312').should.equal('China UnionPay')
  })

  it('has a prefix of 622837 and a length of 16', function(){
    detectNetwork('6228374851472503').should.equal('China UnionPay')
  })

  it('has a prefix of 622838 and a length of 16', function(){
    detectNetwork('6228381887676560').should.equal('China UnionPay')
  })

  it('has a prefix of 622839 and a length of 16', function(){
    detectNetwork('6228395656860071').should.equal('China UnionPay')
  })

  it('has a prefix of 622840 and a length of 16', function(){
    detectNetwork('6228406688542736').should.equal('China UnionPay')
  })

  it('has a prefix of 622841 and a length of 16', function(){
    detectNetwork('6228418536822740').should.equal('China UnionPay')
  })

  it('has a prefix of 622842 and a length of 16', function(){
    detectNetwork('6228420636152501').should.equal('China UnionPay')
  })

  it('has a prefix of 622843 and a length of 16', function(){
    detectNetwork('6228434858705024').should.equal('China UnionPay')
  })

  it('has a prefix of 622844 and a length of 16', function(){
    detectNetwork('6228441380776375').should.equal('China UnionPay')
  })

  it('has a prefix of 622845 and a length of 16', function(){
    detectNetwork('6228454488163213').should.equal('China UnionPay')
  })

  it('has a prefix of 622846 and a length of 16', function(){
    detectNetwork('6228462116186712').should.equal('China UnionPay')
  })

  it('has a prefix of 622847 and a length of 16', function(){
    detectNetwork('6228470010636101').should.equal('China UnionPay')
  })

  it('has a prefix of 622848 and a length of 16', function(){
    detectNetwork('6228481068335321').should.equal('China UnionPay')
  })

  it('has a prefix of 622849 and a length of 16', function(){
    detectNetwork('6228497831672212').should.equal('China UnionPay')
  })

  it('has a prefix of 622850 and a length of 16', function(){
    detectNetwork('6228508171370106').should.equal('China UnionPay')
  })

  it('has a prefix of 622851 and a length of 16', function(){
    detectNetwork('6228513807542164').should.equal('China UnionPay')
  })

  it('has a prefix of 622852 and a length of 16', function(){
    detectNetwork('6228523063023652').should.equal('China UnionPay')
  })

  it('has a prefix of 622853 and a length of 16', function(){
    detectNetwork('6228534013744861').should.equal('China UnionPay')
  })

  it('has a prefix of 622854 and a length of 16', function(){
    detectNetwork('6228541343553707').should.equal('China UnionPay')
  })

  it('has a prefix of 622855 and a length of 16', function(){
    detectNetwork('6228558612667003').should.equal('China UnionPay')
  })

  it('has a prefix of 622856 and a length of 16', function(){
    detectNetwork('6228563480602185').should.equal('China UnionPay')
  })

  it('has a prefix of 622857 and a length of 16', function(){
    detectNetwork('6228577046141156').should.equal('China UnionPay')
  })

  it('has a prefix of 622858 and a length of 16', function(){
    detectNetwork('6228584232731758').should.equal('China UnionPay')
  })

  it('has a prefix of 622859 and a length of 16', function(){
    detectNetwork('6228598407318675').should.equal('China UnionPay')
  })

  it('has a prefix of 622860 and a length of 16', function(){
    detectNetwork('6228601528083517').should.equal('China UnionPay')
  })

  it('has a prefix of 622861 and a length of 16', function(){
    detectNetwork('6228611271456624').should.equal('China UnionPay')
  })

  it('has a prefix of 622862 and a length of 16', function(){
    detectNetwork('6228626475655603').should.equal('China UnionPay')
  })

  it('has a prefix of 622863 and a length of 16', function(){
    detectNetwork('6228638188473167').should.equal('China UnionPay')
  })

  it('has a prefix of 622864 and a length of 16', function(){
    detectNetwork('6228643682261576').should.equal('China UnionPay')
  })

  it('has a prefix of 622865 and a length of 16', function(){
    detectNetwork('6228657604226675').should.equal('China UnionPay')
  })

  it('has a prefix of 622866 and a length of 16', function(){
    detectNetwork('6228664372515753').should.equal('China UnionPay')
  })

  it('has a prefix of 622867 and a length of 16', function(){
    detectNetwork('6228672175506133').should.equal('China UnionPay')
  })

  it('has a prefix of 622868 and a length of 16', function(){
    detectNetwork('6228683080686674').should.equal('China UnionPay')
  })

  it('has a prefix of 622869 and a length of 16', function(){
    detectNetwork('6228694307403613').should.equal('China UnionPay')
  })

  it('has a prefix of 622870 and a length of 16', function(){
    detectNetwork('6228706117052245').should.equal('China UnionPay')
  })

  it('has a prefix of 622871 and a length of 16', function(){
    detectNetwork('6228713183368048').should.equal('China UnionPay')
  })

  it('has a prefix of 622872 and a length of 16', function(){
    detectNetwork('6228720003886633').should.equal('China UnionPay')
  })

  it('has a prefix of 622873 and a length of 16', function(){
    detectNetwork('6228735445240323').should.equal('China UnionPay')
  })

  it('has a prefix of 622874 and a length of 16', function(){
    detectNetwork('6228745482878427').should.equal('China UnionPay')
  })

  it('has a prefix of 622875 and a length of 16', function(){
    detectNetwork('6228753223206473').should.equal('China UnionPay')
  })

  it('has a prefix of 622876 and a length of 16', function(){
    detectNetwork('6228767670634716').should.equal('China UnionPay')
  })

  it('has a prefix of 622877 and a length of 16', function(){
    detectNetwork('6228776854340566').should.equal('China UnionPay')
  })

  it('has a prefix of 622878 and a length of 16', function(){
    detectNetwork('6228785076322728').should.equal('China UnionPay')
  })

  it('has a prefix of 622879 and a length of 16', function(){
    detectNetwork('6228794640824127').should.equal('China UnionPay')
  })

  it('has a prefix of 622880 and a length of 16', function(){
    detectNetwork('6228804030157487').should.equal('China UnionPay')
  })

  it('has a prefix of 622881 and a length of 16', function(){
    detectNetwork('6228811266188868').should.equal('China UnionPay')
  })

  it('has a prefix of 622882 and a length of 16', function(){
    detectNetwork('6228822307435518').should.equal('China UnionPay')
  })

  it('has a prefix of 622883 and a length of 16', function(){
    detectNetwork('6228836641837354').should.equal('China UnionPay')
  })

  it('has a prefix of 622884 and a length of 16', function(){
    detectNetwork('6228848314045038').should.equal('China UnionPay')
  })

  it('has a prefix of 622885 and a length of 16', function(){
    detectNetwork('6228850183672777').should.equal('China UnionPay')
  })

  it('has a prefix of 622886 and a length of 16', function(){
    detectNetwork('6228866422261803').should.equal('China UnionPay')
  })

  it('has a prefix of 622887 and a length of 16', function(){
    detectNetwork('6228870637878730').should.equal('China UnionPay')
  })

  it('has a prefix of 622888 and a length of 16', function(){
    detectNetwork('6228882855482618').should.equal('China UnionPay')
  })

  it('has a prefix of 622889 and a length of 16', function(){
    detectNetwork('6228897764672043').should.equal('China UnionPay')
  })

  it('has a prefix of 622890 and a length of 16', function(){
    detectNetwork('6228905244462303').should.equal('China UnionPay')
  })

  it('has a prefix of 622891 and a length of 16', function(){
    detectNetwork('6228918263320766').should.equal('China UnionPay')
  })

  it('has a prefix of 622892 and a length of 16', function(){
    detectNetwork('6228921168787286').should.equal('China UnionPay')
  })

  it('has a prefix of 622893 and a length of 16', function(){
    detectNetwork('6228930350381858').should.equal('China UnionPay')
  })

  it('has a prefix of 622894 and a length of 16', function(){
    detectNetwork('6228948042543882').should.equal('China UnionPay')
  })

  it('has a prefix of 622895 and a length of 16', function(){
    detectNetwork('6228958425145757').should.equal('China UnionPay')
  })

  it('has a prefix of 622896 and a length of 16', function(){
    detectNetwork('6228960858103216').should.equal('China UnionPay')
  })

  it('has a prefix of 622897 and a length of 16', function(){
    detectNetwork('6228974660264374').should.equal('China UnionPay')
  })

  it('has a prefix of 622898 and a length of 16', function(){
    detectNetwork('6228984654038783').should.equal('China UnionPay')
  })

  it('has a prefix of 622899 and a length of 16', function(){
    detectNetwork('6228998245422823').should.equal('China UnionPay')
  })

  it('has a prefix of 622900 and a length of 16', function(){
    detectNetwork('6229006627844656').should.equal('China UnionPay')
  })

  it('has a prefix of 622901 and a length of 16', function(){
    detectNetwork('6229011361001012').should.equal('China UnionPay')
  })

  it('has a prefix of 622902 and a length of 16', function(){
    detectNetwork('6229028586838173').should.equal('China UnionPay')
  })

  it('has a prefix of 622903 and a length of 16', function(){
    detectNetwork('6229031676545076').should.equal('China UnionPay')
  })

  it('has a prefix of 622904 and a length of 16', function(){
    detectNetwork('6229040256463001').should.equal('China UnionPay')
  })

  it('has a prefix of 622905 and a length of 16', function(){
    detectNetwork('6229056587870544').should.equal('China UnionPay')
  })

  it('has a prefix of 622906 and a length of 16', function(){
    detectNetwork('6229063421803841').should.equal('China UnionPay')
  })

  it('has a prefix of 622907 and a length of 16', function(){
    detectNetwork('6229073481743455').should.equal('China UnionPay')
  })

  it('has a prefix of 622908 and a length of 16', function(){
    detectNetwork('6229086381602852').should.equal('China UnionPay')
  })

  it('has a prefix of 622909 and a length of 16', function(){
    detectNetwork('6229094247243526').should.equal('China UnionPay')
  })

  it('has a prefix of 622910 and a length of 16', function(){
    detectNetwork('6229104802473685').should.equal('China UnionPay')
  })

  it('has a prefix of 622911 and a length of 16', function(){
    detectNetwork('6229116133536020').should.equal('China UnionPay')
  })

  it('has a prefix of 622912 and a length of 16', function(){
    detectNetwork('6229121028884837').should.equal('China UnionPay')
  })

  it('has a prefix of 622913 and a length of 16', function(){
    detectNetwork('6229137650133638').should.equal('China UnionPay')
  })

  it('has a prefix of 622914 and a length of 16', function(){
    detectNetwork('6229142700167827').should.equal('China UnionPay')
  })

  it('has a prefix of 622915 and a length of 16', function(){
    detectNetwork('6229156368216358').should.equal('China UnionPay')
  })

  it('has a prefix of 622916 and a length of 16', function(){
    detectNetwork('6229165121554101').should.equal('China UnionPay')
  })

  it('has a prefix of 622917 and a length of 16', function(){
    detectNetwork('6229175447663517').should.equal('China UnionPay')
  })

  it('has a prefix of 622918 and a length of 16', function(){
    detectNetwork('6229182617673412').should.equal('China UnionPay')
  })

  it('has a prefix of 622919 and a length of 16', function(){
    detectNetwork('6229196240132440').should.equal('China UnionPay')
  })

  it('has a prefix of 622920 and a length of 16', function(){
    detectNetwork('6229201317671224').should.equal('China UnionPay')
  })

  it('has a prefix of 622921 and a length of 16', function(){
    detectNetwork('6229213350815564').should.equal('China UnionPay')
  })

  it('has a prefix of 622922 and a length of 16', function(){
    detectNetwork('6229223506075101').should.equal('China UnionPay')
  })

  it('has a prefix of 622923 and a length of 16', function(){
    detectNetwork('6229237170016455').should.equal('China UnionPay')
  })

  it('has a prefix of 622924 and a length of 16', function(){
    detectNetwork('6229248677515056').should.equal('China UnionPay')
  })

  it('has a prefix of 622925 and a length of 16', function(){
    detectNetwork('6229256204233138').should.equal('China UnionPay')
  })

  it('has a prefix of 622126 and a length of 17', function(){
    detectNetwork('62212673472566411').should.equal('China UnionPay')
  })

  it('has a prefix of 622127 and a length of 17', function(){
    detectNetwork('62212782005147088').should.equal('China UnionPay')
  })

  it('has a prefix of 622128 and a length of 17', function(){
    detectNetwork('62212887563762826').should.equal('China UnionPay')
  })

  it('has a prefix of 622129 and a length of 17', function(){
    detectNetwork('62212971820453756').should.equal('China UnionPay')
  })

  it('has a prefix of 622130 and a length of 17', function(){
    detectNetwork('62213005234753151').should.equal('China UnionPay')
  })

  it('has a prefix of 622131 and a length of 17', function(){
    detectNetwork('62213134813086428').should.equal('China UnionPay')
  })

  it('has a prefix of 622132 and a length of 17', function(){
    detectNetwork('62213205510463778').should.equal('China UnionPay')
  })

  it('has a prefix of 622133 and a length of 17', function(){
    detectNetwork('62213322863218354').should.equal('China UnionPay')
  })

  it('has a prefix of 622134 and a length of 17', function(){
    detectNetwork('62213478787128258').should.equal('China UnionPay')
  })

  it('has a prefix of 622135 and a length of 17', function(){
    detectNetwork('62213503863208238').should.equal('China UnionPay')
  })

  it('has a prefix of 622136 and a length of 17', function(){
    detectNetwork('62213676035043102').should.equal('China UnionPay')
  })

  it('has a prefix of 622137 and a length of 17', function(){
    detectNetwork('62213772272300567').should.equal('China UnionPay')
  })

  it('has a prefix of 622138 and a length of 17', function(){
    detectNetwork('62213872567118131').should.equal('China UnionPay')
  })

  it('has a prefix of 622139 and a length of 17', function(){
    detectNetwork('62213940342640637').should.equal('China UnionPay')
  })

  it('has a prefix of 622140 and a length of 17', function(){
    detectNetwork('62214021786377050').should.equal('China UnionPay')
  })

  it('has a prefix of 622141 and a length of 17', function(){
    detectNetwork('62214155786365886').should.equal('China UnionPay')
  })

  it('has a prefix of 622142 and a length of 17', function(){
    detectNetwork('62214263305170233').should.equal('China UnionPay')
  })

  it('has a prefix of 622143 and a length of 17', function(){
    detectNetwork('62214353055166313').should.equal('China UnionPay')
  })

  it('has a prefix of 622144 and a length of 17', function(){
    detectNetwork('62214483753504163').should.equal('China UnionPay')
  })

  it('has a prefix of 622145 and a length of 17', function(){
    detectNetwork('62214514682321144').should.equal('China UnionPay')
  })

  it('has a prefix of 622146 and a length of 17', function(){
    detectNetwork('62214636787605114').should.equal('China UnionPay')
  })

  it('has a prefix of 622147 and a length of 17', function(){
    detectNetwork('62214720246228772').should.equal('China UnionPay')
  })

  it('has a prefix of 622148 and a length of 17', function(){
    detectNetwork('62214823188373728').should.equal('China UnionPay')
  })

  it('has a prefix of 622149 and a length of 17', function(){
    detectNetwork('62214963162054541').should.equal('China UnionPay')
  })

  it('has a prefix of 622150 and a length of 17', function(){
    detectNetwork('62215018526137720').should.equal('China UnionPay')
  })

  it('has a prefix of 622151 and a length of 17', function(){
    detectNetwork('62215180664678368').should.equal('China UnionPay')
  })

  it('has a prefix of 622152 and a length of 17', function(){
    detectNetwork('62215248025740871').should.equal('China UnionPay')
  })

  it('has a prefix of 622153 and a length of 17', function(){
    detectNetwork('62215351820186041').should.equal('China UnionPay')
  })

  it('has a prefix of 622154 and a length of 17', function(){
    detectNetwork('62215485607806804').should.equal('China UnionPay')
  })

  it('has a prefix of 622155 and a length of 17', function(){
    detectNetwork('62215573553675658').should.equal('China UnionPay')
  })

  it('has a prefix of 622156 and a length of 17', function(){
    detectNetwork('62215600211022525').should.equal('China UnionPay')
  })

  it('has a prefix of 622157 and a length of 17', function(){
    detectNetwork('62215718801311306').should.equal('China UnionPay')
  })

  it('has a prefix of 622158 and a length of 17', function(){
    detectNetwork('62215873243583515').should.equal('China UnionPay')
  })

  it('has a prefix of 622159 and a length of 17', function(){
    detectNetwork('62215942833747556').should.equal('China UnionPay')
  })

  it('has a prefix of 622160 and a length of 17', function(){
    detectNetwork('62216082226527525').should.equal('China UnionPay')
  })

  it('has a prefix of 622161 and a length of 17', function(){
    detectNetwork('62216164723815054').should.equal('China UnionPay')
  })

  it('has a prefix of 622162 and a length of 17', function(){
    detectNetwork('62216258340261254').should.equal('China UnionPay')
  })

  it('has a prefix of 622163 and a length of 17', function(){
    detectNetwork('62216368148678376').should.equal('China UnionPay')
  })

  it('has a prefix of 622164 and a length of 17', function(){
    detectNetwork('62216485471835885').should.equal('China UnionPay')
  })

  it('has a prefix of 622165 and a length of 17', function(){
    detectNetwork('62216587061021256').should.equal('China UnionPay')
  })

  it('has a prefix of 622166 and a length of 17', function(){
    detectNetwork('62216601357607644').should.equal('China UnionPay')
  })

  it('has a prefix of 622167 and a length of 17', function(){
    detectNetwork('62216713116275464').should.equal('China UnionPay')
  })

  it('has a prefix of 622168 and a length of 17', function(){
    detectNetwork('62216800164550766').should.equal('China UnionPay')
  })

  it('has a prefix of 622169 and a length of 17', function(){
    detectNetwork('62216977252181663').should.equal('China UnionPay')
  })

  it('has a prefix of 622170 and a length of 17', function(){
    detectNetwork('62217045621184240').should.equal('China UnionPay')
  })

  it('has a prefix of 622171 and a length of 17', function(){
    detectNetwork('62217148142652108').should.equal('China UnionPay')
  })

  it('has a prefix of 622172 and a length of 17', function(){
    detectNetwork('62217201011825071').should.equal('China UnionPay')
  })

  it('has a prefix of 622173 and a length of 17', function(){
    detectNetwork('62217372043274362').should.equal('China UnionPay')
  })

  it('has a prefix of 622174 and a length of 17', function(){
    detectNetwork('62217415725764451').should.equal('China UnionPay')
  })

  it('has a prefix of 622175 and a length of 17', function(){
    detectNetwork('62217547341786666').should.equal('China UnionPay')
  })

  it('has a prefix of 622176 and a length of 17', function(){
    detectNetwork('62217610757604811').should.equal('China UnionPay')
  })

  it('has a prefix of 622177 and a length of 17', function(){
    detectNetwork('62217734360080715').should.equal('China UnionPay')
  })

  it('has a prefix of 622178 and a length of 17', function(){
    detectNetwork('62217802065871013').should.equal('China UnionPay')
  })

  it('has a prefix of 622179 and a length of 17', function(){
    detectNetwork('62217907561524572').should.equal('China UnionPay')
  })

  it('has a prefix of 622180 and a length of 17', function(){
    detectNetwork('62218077055304420').should.equal('China UnionPay')
  })

  it('has a prefix of 622181 and a length of 17', function(){
    detectNetwork('62218154071210288').should.equal('China UnionPay')
  })

  it('has a prefix of 622182 and a length of 17', function(){
    detectNetwork('62218222426353546').should.equal('China UnionPay')
  })

  it('has a prefix of 622183 and a length of 17', function(){
    detectNetwork('62218383136324218').should.equal('China UnionPay')
  })

  it('has a prefix of 622184 and a length of 17', function(){
    detectNetwork('62218451062205814').should.equal('China UnionPay')
  })

  it('has a prefix of 622185 and a length of 17', function(){
    detectNetwork('62218556547540823').should.equal('China UnionPay')
  })

  it('has a prefix of 622186 and a length of 17', function(){
    detectNetwork('62218624171886865').should.equal('China UnionPay')
  })

  it('has a prefix of 622187 and a length of 17', function(){
    detectNetwork('62218746568023458').should.equal('China UnionPay')
  })

  it('has a prefix of 622188 and a length of 17', function(){
    detectNetwork('62218836728874655').should.equal('China UnionPay')
  })

  it('has a prefix of 622189 and a length of 17', function(){
    detectNetwork('62218978313214576').should.equal('China UnionPay')
  })

  it('has a prefix of 622190 and a length of 17', function(){
    detectNetwork('62219028446538741').should.equal('China UnionPay')
  })

  it('has a prefix of 622191 and a length of 17', function(){
    detectNetwork('62219141561831085').should.equal('China UnionPay')
  })

  it('has a prefix of 622192 and a length of 17', function(){
    detectNetwork('62219220085103131').should.equal('China UnionPay')
  })

  it('has a prefix of 622193 and a length of 17', function(){
    detectNetwork('62219362781630686').should.equal('China UnionPay')
  })

  it('has a prefix of 622194 and a length of 17', function(){
    detectNetwork('62219403781888206').should.equal('China UnionPay')
  })

  it('has a prefix of 622195 and a length of 17', function(){
    detectNetwork('62219548330463422').should.equal('China UnionPay')
  })

  it('has a prefix of 622196 and a length of 17', function(){
    detectNetwork('62219604708326428').should.equal('China UnionPay')
  })

  it('has a prefix of 622197 and a length of 17', function(){
    detectNetwork('62219708870228512').should.equal('China UnionPay')
  })

  it('has a prefix of 622198 and a length of 17', function(){
    detectNetwork('62219830274350144').should.equal('China UnionPay')
  })

  it('has a prefix of 622199 and a length of 17', function(){
    detectNetwork('62219982740180500').should.equal('China UnionPay')
  })

  it('has a prefix of 622200 and a length of 17', function(){
    detectNetwork('62220067347833248').should.equal('China UnionPay')
  })

  it('has a prefix of 622201 and a length of 17', function(){
    detectNetwork('62220152633217028').should.equal('China UnionPay')
  })

  it('has a prefix of 622202 and a length of 17', function(){
    detectNetwork('62220260508465188').should.equal('China UnionPay')
  })

  it('has a prefix of 622203 and a length of 17', function(){
    detectNetwork('62220366761551185').should.equal('China UnionPay')
  })

  it('has a prefix of 622204 and a length of 17', function(){
    detectNetwork('62220452420350043').should.equal('China UnionPay')
  })

  it('has a prefix of 622205 and a length of 17', function(){
    detectNetwork('62220553533183323').should.equal('China UnionPay')
  })

  it('has a prefix of 622206 and a length of 17', function(){
    detectNetwork('62220632662363006').should.equal('China UnionPay')
  })

  it('has a prefix of 622207 and a length of 17', function(){
    detectNetwork('62220705107102401').should.equal('China UnionPay')
  })

  it('has a prefix of 622208 and a length of 17', function(){
    detectNetwork('62220840727083243').should.equal('China UnionPay')
  })

  it('has a prefix of 622209 and a length of 17', function(){
    detectNetwork('62220978456816017').should.equal('China UnionPay')
  })

  it('has a prefix of 622210 and a length of 17', function(){
    detectNetwork('62221056076851042').should.equal('China UnionPay')
  })

  it('has a prefix of 622211 and a length of 17', function(){
    detectNetwork('62221153103002858').should.equal('China UnionPay')
  })

  it('has a prefix of 622212 and a length of 17', function(){
    detectNetwork('62221234353086034').should.equal('China UnionPay')
  })

  it('has a prefix of 622213 and a length of 17', function(){
    detectNetwork('62221373125873032').should.equal('China UnionPay')
  })

  it('has a prefix of 622214 and a length of 17', function(){
    detectNetwork('62221478060546474').should.equal('China UnionPay')
  })

  it('has a prefix of 622215 and a length of 17', function(){
    detectNetwork('62221567858735426').should.equal('China UnionPay')
  })

  it('has a prefix of 622216 and a length of 17', function(){
    detectNetwork('62221650550437325').should.equal('China UnionPay')
  })

  it('has a prefix of 622217 and a length of 17', function(){
    detectNetwork('62221780256422175').should.equal('China UnionPay')
  })

  it('has a prefix of 622218 and a length of 17', function(){
    detectNetwork('62221848270155657').should.equal('China UnionPay')
  })

  it('has a prefix of 622219 and a length of 17', function(){
    detectNetwork('62221988133522735').should.equal('China UnionPay')
  })

  it('has a prefix of 622220 and a length of 17', function(){
    detectNetwork('62222031077260848').should.equal('China UnionPay')
  })

  it('has a prefix of 622221 and a length of 17', function(){
    detectNetwork('62222155638587148').should.equal('China UnionPay')
  })

  it('has a prefix of 622222 and a length of 17', function(){
    detectNetwork('62222234785760140').should.equal('China UnionPay')
  })

  it('has a prefix of 622223 and a length of 17', function(){
    detectNetwork('62222316611437334').should.equal('China UnionPay')
  })

  it('has a prefix of 622224 and a length of 17', function(){
    detectNetwork('62222476020223276').should.equal('China UnionPay')
  })

  it('has a prefix of 622225 and a length of 17', function(){
    detectNetwork('62222576061206526').should.equal('China UnionPay')
  })

  it('has a prefix of 622226 and a length of 17', function(){
    detectNetwork('62222673082465640').should.equal('China UnionPay')
  })

  it('has a prefix of 622227 and a length of 17', function(){
    detectNetwork('62222780356772138').should.equal('China UnionPay')
  })

  it('has a prefix of 622228 and a length of 17', function(){
    detectNetwork('62222821713566822').should.equal('China UnionPay')
  })

  it('has a prefix of 622229 and a length of 17', function(){
    detectNetwork('62222924677760644').should.equal('China UnionPay')
  })

  it('has a prefix of 622230 and a length of 17', function(){
    detectNetwork('62223077716144210').should.equal('China UnionPay')
  })

  it('has a prefix of 622231 and a length of 17', function(){
    detectNetwork('62223160436857477').should.equal('China UnionPay')
  })

  it('has a prefix of 622232 and a length of 17', function(){
    detectNetwork('62223271833073740').should.equal('China UnionPay')
  })

  it('has a prefix of 622233 and a length of 17', function(){
    detectNetwork('62223337253442614').should.equal('China UnionPay')
  })

  it('has a prefix of 622234 and a length of 17', function(){
    detectNetwork('62223454075885884').should.equal('China UnionPay')
  })

  it('has a prefix of 622235 and a length of 17', function(){
    detectNetwork('62223556588557560').should.equal('China UnionPay')
  })

  it('has a prefix of 622236 and a length of 17', function(){
    detectNetwork('62223651244543820').should.equal('China UnionPay')
  })

  it('has a prefix of 622237 and a length of 17', function(){
    detectNetwork('62223700728208348').should.equal('China UnionPay')
  })

  it('has a prefix of 622238 and a length of 17', function(){
    detectNetwork('62223868103488270').should.equal('China UnionPay')
  })

  it('has a prefix of 622239 and a length of 17', function(){
    detectNetwork('62223943784103008').should.equal('China UnionPay')
  })

  it('has a prefix of 622240 and a length of 17', function(){
    detectNetwork('62224022205145187').should.equal('China UnionPay')
  })

  it('has a prefix of 622241 and a length of 17', function(){
    detectNetwork('62224126380834477').should.equal('China UnionPay')
  })

  it('has a prefix of 622242 and a length of 17', function(){
    detectNetwork('62224261322023206').should.equal('China UnionPay')
  })

  it('has a prefix of 622243 and a length of 17', function(){
    detectNetwork('62224354744286518').should.equal('China UnionPay')
  })

  it('has a prefix of 622244 and a length of 17', function(){
    detectNetwork('62224432242280885').should.equal('China UnionPay')
  })

  it('has a prefix of 622245 and a length of 17', function(){
    detectNetwork('62224513666558057').should.equal('China UnionPay')
  })

  it('has a prefix of 622246 and a length of 17', function(){
    detectNetwork('62224664740170138').should.equal('China UnionPay')
  })

  it('has a prefix of 622247 and a length of 17', function(){
    detectNetwork('62224700417308735').should.equal('China UnionPay')
  })

  it('has a prefix of 622248 and a length of 17', function(){
    detectNetwork('62224847164302811').should.equal('China UnionPay')
  })

  it('has a prefix of 622249 and a length of 17', function(){
    detectNetwork('62224947704357814').should.equal('China UnionPay')
  })

  it('has a prefix of 622250 and a length of 17', function(){
    detectNetwork('62225045640826747').should.equal('China UnionPay')
  })

  it('has a prefix of 622251 and a length of 17', function(){
    detectNetwork('62225100257672800').should.equal('China UnionPay')
  })

  it('has a prefix of 622252 and a length of 17', function(){
    detectNetwork('62225248532766660').should.equal('China UnionPay')
  })

  it('has a prefix of 622253 and a length of 17', function(){
    detectNetwork('62225382881678145').should.equal('China UnionPay')
  })

  it('has a prefix of 622254 and a length of 17', function(){
    detectNetwork('62225425872264082').should.equal('China UnionPay')
  })

  it('has a prefix of 622255 and a length of 17', function(){
    detectNetwork('62225552244128284').should.equal('China UnionPay')
  })

  it('has a prefix of 622256 and a length of 17', function(){
    detectNetwork('62225673638606508').should.equal('China UnionPay')
  })

  it('has a prefix of 622257 and a length of 17', function(){
    detectNetwork('62225778826861568').should.equal('China UnionPay')
  })

  it('has a prefix of 622258 and a length of 17', function(){
    detectNetwork('62225838450812640').should.equal('China UnionPay')
  })

  it('has a prefix of 622259 and a length of 17', function(){
    detectNetwork('62225911752260734').should.equal('China UnionPay')
  })

  it('has a prefix of 622260 and a length of 17', function(){
    detectNetwork('62226006515815047').should.equal('China UnionPay')
  })

  it('has a prefix of 622261 and a length of 17', function(){
    detectNetwork('62226147267613754').should.equal('China UnionPay')
  })

  it('has a prefix of 622262 and a length of 17', function(){
    detectNetwork('62226200852802765').should.equal('China UnionPay')
  })

  it('has a prefix of 622263 and a length of 17', function(){
    detectNetwork('62226340548472535').should.equal('China UnionPay')
  })

  it('has a prefix of 622264 and a length of 17', function(){
    detectNetwork('62226466627525033').should.equal('China UnionPay')
  })

  it('has a prefix of 622265 and a length of 17', function(){
    detectNetwork('62226570446150317').should.equal('China UnionPay')
  })

  it('has a prefix of 622266 and a length of 17', function(){
    detectNetwork('62226608336528810').should.equal('China UnionPay')
  })

  it('has a prefix of 622267 and a length of 17', function(){
    detectNetwork('62226785867230762').should.equal('China UnionPay')
  })

  it('has a prefix of 622268 and a length of 17', function(){
    detectNetwork('62226822520161687').should.equal('China UnionPay')
  })

  it('has a prefix of 622269 and a length of 17', function(){
    detectNetwork('62226982616564637').should.equal('China UnionPay')
  })

  it('has a prefix of 622270 and a length of 17', function(){
    detectNetwork('62227055771468062').should.equal('China UnionPay')
  })

  it('has a prefix of 622271 and a length of 17', function(){
    detectNetwork('62227178727378670').should.equal('China UnionPay')
  })

  it('has a prefix of 622272 and a length of 17', function(){
    detectNetwork('62227258782176735').should.equal('China UnionPay')
  })

  it('has a prefix of 622273 and a length of 17', function(){
    detectNetwork('62227315513516430').should.equal('China UnionPay')
  })

  it('has a prefix of 622274 and a length of 17', function(){
    detectNetwork('62227418027548131').should.equal('China UnionPay')
  })

  it('has a prefix of 622275 and a length of 17', function(){
    detectNetwork('62227561435570862').should.equal('China UnionPay')
  })

  it('has a prefix of 622276 and a length of 17', function(){
    detectNetwork('62227628167167307').should.equal('China UnionPay')
  })

  it('has a prefix of 622277 and a length of 17', function(){
    detectNetwork('62227751063161068').should.equal('China UnionPay')
  })

  it('has a prefix of 622278 and a length of 17', function(){
    detectNetwork('62227826034673028').should.equal('China UnionPay')
  })

  it('has a prefix of 622279 and a length of 17', function(){
    detectNetwork('62227976561215514').should.equal('China UnionPay')
  })

  it('has a prefix of 622280 and a length of 17', function(){
    detectNetwork('62228016572856204').should.equal('China UnionPay')
  })

  it('has a prefix of 622281 and a length of 17', function(){
    detectNetwork('62228106801555756').should.equal('China UnionPay')
  })

  it('has a prefix of 622282 and a length of 17', function(){
    detectNetwork('62228275015257680').should.equal('China UnionPay')
  })

  it('has a prefix of 622283 and a length of 17', function(){
    detectNetwork('62228351286216668').should.equal('China UnionPay')
  })

  it('has a prefix of 622284 and a length of 17', function(){
    detectNetwork('62228408872371144').should.equal('China UnionPay')
  })

  it('has a prefix of 622285 and a length of 17', function(){
    detectNetwork('62228556532488160').should.equal('China UnionPay')
  })

  it('has a prefix of 622286 and a length of 17', function(){
    detectNetwork('62228608414420180').should.equal('China UnionPay')
  })

  it('has a prefix of 622287 and a length of 17', function(){
    detectNetwork('62228758110033414').should.equal('China UnionPay')
  })

  it('has a prefix of 622288 and a length of 17', function(){
    detectNetwork('62228826848545628').should.equal('China UnionPay')
  })

  it('has a prefix of 622289 and a length of 17', function(){
    detectNetwork('62228916614837481').should.equal('China UnionPay')
  })

  it('has a prefix of 622290 and a length of 17', function(){
    detectNetwork('62229068460276266').should.equal('China UnionPay')
  })

  it('has a prefix of 622291 and a length of 17', function(){
    detectNetwork('62229184456530184').should.equal('China UnionPay')
  })

  it('has a prefix of 622292 and a length of 17', function(){
    detectNetwork('62229277066425375').should.equal('China UnionPay')
  })

  it('has a prefix of 622293 and a length of 17', function(){
    detectNetwork('62229335853158635').should.equal('China UnionPay')
  })

  it('has a prefix of 622294 and a length of 17', function(){
    detectNetwork('62229477823022404').should.equal('China UnionPay')
  })

  it('has a prefix of 622295 and a length of 17', function(){
    detectNetwork('62229546136146630').should.equal('China UnionPay')
  })

  it('has a prefix of 622296 and a length of 17', function(){
    detectNetwork('62229638607752255').should.equal('China UnionPay')
  })

  it('has a prefix of 622297 and a length of 17', function(){
    detectNetwork('62229740874740020').should.equal('China UnionPay')
  })

  it('has a prefix of 622298 and a length of 17', function(){
    detectNetwork('62229802483683637').should.equal('China UnionPay')
  })

  it('has a prefix of 622299 and a length of 17', function(){
    detectNetwork('62229904674065221').should.equal('China UnionPay')
  })

  it('has a prefix of 622300 and a length of 17', function(){
    detectNetwork('62230002815681833').should.equal('China UnionPay')
  })

  it('has a prefix of 622301 and a length of 17', function(){
    detectNetwork('62230182753684356').should.equal('China UnionPay')
  })

  it('has a prefix of 622302 and a length of 17', function(){
    detectNetwork('62230274201686262').should.equal('China UnionPay')
  })

  it('has a prefix of 622303 and a length of 17', function(){
    detectNetwork('62230352562632628').should.equal('China UnionPay')
  })

  it('has a prefix of 622304 and a length of 17', function(){
    detectNetwork('62230483053288283').should.equal('China UnionPay')
  })

  it('has a prefix of 622305 and a length of 17', function(){
    detectNetwork('62230570283374832').should.equal('China UnionPay')
  })

  it('has a prefix of 622306 and a length of 17', function(){
    detectNetwork('62230686334623818').should.equal('China UnionPay')
  })

  it('has a prefix of 622307 and a length of 17', function(){
    detectNetwork('62230713501126220').should.equal('China UnionPay')
  })

  it('has a prefix of 622308 and a length of 17', function(){
    detectNetwork('62230861148308634').should.equal('China UnionPay')
  })

  it('has a prefix of 622309 and a length of 17', function(){
    detectNetwork('62230907351761387').should.equal('China UnionPay')
  })

  it('has a prefix of 622310 and a length of 17', function(){
    detectNetwork('62231004210371617').should.equal('China UnionPay')
  })

  it('has a prefix of 622311 and a length of 17', function(){
    detectNetwork('62231188588747325').should.equal('China UnionPay')
  })

  it('has a prefix of 622312 and a length of 17', function(){
    detectNetwork('62231203666404260').should.equal('China UnionPay')
  })

  it('has a prefix of 622313 and a length of 17', function(){
    detectNetwork('62231320565328738').should.equal('China UnionPay')
  })

  it('has a prefix of 622314 and a length of 17', function(){
    detectNetwork('62231411411663680').should.equal('China UnionPay')
  })

  it('has a prefix of 622315 and a length of 17', function(){
    detectNetwork('62231507675514754').should.equal('China UnionPay')
  })

  it('has a prefix of 622316 and a length of 17', function(){
    detectNetwork('62231625256887426').should.equal('China UnionPay')
  })

  it('has a prefix of 622317 and a length of 17', function(){
    detectNetwork('62231732123228648').should.equal('China UnionPay')
  })

  it('has a prefix of 622318 and a length of 17', function(){
    detectNetwork('62231878846462347').should.equal('China UnionPay')
  })

  it('has a prefix of 622319 and a length of 17', function(){
    detectNetwork('62231945388824376').should.equal('China UnionPay')
  })

  it('has a prefix of 622320 and a length of 17', function(){
    detectNetwork('62232003716634033').should.equal('China UnionPay')
  })

  it('has a prefix of 622321 and a length of 17', function(){
    detectNetwork('62232154736416783').should.equal('China UnionPay')
  })

  it('has a prefix of 622322 and a length of 17', function(){
    detectNetwork('62232226018437447').should.equal('China UnionPay')
  })

  it('has a prefix of 622323 and a length of 17', function(){
    detectNetwork('62232326564205861').should.equal('China UnionPay')
  })

  it('has a prefix of 622324 and a length of 17', function(){
    detectNetwork('62232457674068256').should.equal('China UnionPay')
  })

  it('has a prefix of 622325 and a length of 17', function(){
    detectNetwork('62232504253101375').should.equal('China UnionPay')
  })

  it('has a prefix of 622326 and a length of 17', function(){
    detectNetwork('62232607481188171').should.equal('China UnionPay')
  })

  it('has a prefix of 622327 and a length of 17', function(){
    detectNetwork('62232756461352852').should.equal('China UnionPay')
  })

  it('has a prefix of 622328 and a length of 17', function(){
    detectNetwork('62232878015001084').should.equal('China UnionPay')
  })

  it('has a prefix of 622329 and a length of 17', function(){
    detectNetwork('62232982143511222').should.equal('China UnionPay')
  })

  it('has a prefix of 622330 and a length of 17', function(){
    detectNetwork('62233082107377747').should.equal('China UnionPay')
  })

  it('has a prefix of 622331 and a length of 17', function(){
    detectNetwork('62233101724063218').should.equal('China UnionPay')
  })

  it('has a prefix of 622332 and a length of 17', function(){
    detectNetwork('62233230810210055').should.equal('China UnionPay')
  })

  it('has a prefix of 622333 and a length of 17', function(){
    detectNetwork('62233324606721041').should.equal('China UnionPay')
  })

  it('has a prefix of 622334 and a length of 17', function(){
    detectNetwork('62233408720438358').should.equal('China UnionPay')
  })

  it('has a prefix of 622335 and a length of 17', function(){
    detectNetwork('62233562236124760').should.equal('China UnionPay')
  })

  it('has a prefix of 622336 and a length of 17', function(){
    detectNetwork('62233668881664325').should.equal('China UnionPay')
  })

  it('has a prefix of 622337 and a length of 17', function(){
    detectNetwork('62233772816834274').should.equal('China UnionPay')
  })

  it('has a prefix of 622338 and a length of 17', function(){
    detectNetwork('62233803525468821').should.equal('China UnionPay')
  })

  it('has a prefix of 622339 and a length of 17', function(){
    detectNetwork('62233938677814276').should.equal('China UnionPay')
  })

  it('has a prefix of 622340 and a length of 17', function(){
    detectNetwork('62234080570206342').should.equal('China UnionPay')
  })

  it('has a prefix of 622341 and a length of 17', function(){
    detectNetwork('62234138648888166').should.equal('China UnionPay')
  })

  it('has a prefix of 622342 and a length of 17', function(){
    detectNetwork('62234275003800133').should.equal('China UnionPay')
  })

  it('has a prefix of 622343 and a length of 17', function(){
    detectNetwork('62234327220415781').should.equal('China UnionPay')
  })

  it('has a prefix of 622344 and a length of 17', function(){
    detectNetwork('62234416038451554').should.equal('China UnionPay')
  })

  it('has a prefix of 622345 and a length of 17', function(){
    detectNetwork('62234556386530143').should.equal('China UnionPay')
  })

  it('has a prefix of 622346 and a length of 17', function(){
    detectNetwork('62234630222222072').should.equal('China UnionPay')
  })

  it('has a prefix of 622347 and a length of 17', function(){
    detectNetwork('62234714676302753').should.equal('China UnionPay')
  })

  it('has a prefix of 622348 and a length of 17', function(){
    detectNetwork('62234870077667036').should.equal('China UnionPay')
  })

  it('has a prefix of 622349 and a length of 17', function(){
    detectNetwork('62234986652876650').should.equal('China UnionPay')
  })

  it('has a prefix of 622350 and a length of 17', function(){
    detectNetwork('62235043487353272').should.equal('China UnionPay')
  })

  it('has a prefix of 622351 and a length of 17', function(){
    detectNetwork('62235112872534815').should.equal('China UnionPay')
  })

  it('has a prefix of 622352 and a length of 17', function(){
    detectNetwork('62235276812250140').should.equal('China UnionPay')
  })

  it('has a prefix of 622353 and a length of 17', function(){
    detectNetwork('62235360340627284').should.equal('China UnionPay')
  })

  it('has a prefix of 622354 and a length of 17', function(){
    detectNetwork('62235422326162207').should.equal('China UnionPay')
  })

  it('has a prefix of 622355 and a length of 17', function(){
    detectNetwork('62235581214210307').should.equal('China UnionPay')
  })

  it('has a prefix of 622356 and a length of 17', function(){
    detectNetwork('62235668073437870').should.equal('China UnionPay')
  })

  it('has a prefix of 622357 and a length of 17', function(){
    detectNetwork('62235715551785448').should.equal('China UnionPay')
  })

  it('has a prefix of 622358 and a length of 17', function(){
    detectNetwork('62235835475320644').should.equal('China UnionPay')
  })

  it('has a prefix of 622359 and a length of 17', function(){
    detectNetwork('62235983236716454').should.equal('China UnionPay')
  })

  it('has a prefix of 622360 and a length of 17', function(){
    detectNetwork('62236024285583805').should.equal('China UnionPay')
  })

  it('has a prefix of 622361 and a length of 17', function(){
    detectNetwork('62236168013538177').should.equal('China UnionPay')
  })

  it('has a prefix of 622362 and a length of 17', function(){
    detectNetwork('62236287162087736').should.equal('China UnionPay')
  })

  it('has a prefix of 622363 and a length of 17', function(){
    detectNetwork('62236340803756270').should.equal('China UnionPay')
  })

  it('has a prefix of 622364 and a length of 17', function(){
    detectNetwork('62236468753556707').should.equal('China UnionPay')
  })

  it('has a prefix of 622365 and a length of 17', function(){
    detectNetwork('62236546413183607').should.equal('China UnionPay')
  })

  it('has a prefix of 622366 and a length of 17', function(){
    detectNetwork('62236604822755305').should.equal('China UnionPay')
  })

  it('has a prefix of 622367 and a length of 17', function(){
    detectNetwork('62236753454700533').should.equal('China UnionPay')
  })

  it('has a prefix of 622368 and a length of 17', function(){
    detectNetwork('62236875137602258').should.equal('China UnionPay')
  })

  it('has a prefix of 622369 and a length of 17', function(){
    detectNetwork('62236935060355823').should.equal('China UnionPay')
  })

  it('has a prefix of 622370 and a length of 17', function(){
    detectNetwork('62237084022875055').should.equal('China UnionPay')
  })

  it('has a prefix of 622371 and a length of 17', function(){
    detectNetwork('62237130544356656').should.equal('China UnionPay')
  })

  it('has a prefix of 622372 and a length of 17', function(){
    detectNetwork('62237230024061103').should.equal('China UnionPay')
  })

  it('has a prefix of 622373 and a length of 17', function(){
    detectNetwork('62237343162710101').should.equal('China UnionPay')
  })

  it('has a prefix of 622374 and a length of 17', function(){
    detectNetwork('62237451473483312').should.equal('China UnionPay')
  })

  it('has a prefix of 622375 and a length of 17', function(){
    detectNetwork('62237510565876612').should.equal('China UnionPay')
  })

  it('has a prefix of 622376 and a length of 17', function(){
    detectNetwork('62237601414468311').should.equal('China UnionPay')
  })

  it('has a prefix of 622377 and a length of 17', function(){
    detectNetwork('62237745888168728').should.equal('China UnionPay')
  })

  it('has a prefix of 622378 and a length of 17', function(){
    detectNetwork('62237836467516565').should.equal('China UnionPay')
  })

  it('has a prefix of 622379 and a length of 17', function(){
    detectNetwork('62237933121752417').should.equal('China UnionPay')
  })

  it('has a prefix of 622380 and a length of 17', function(){
    detectNetwork('62238017181506512').should.equal('China UnionPay')
  })

  it('has a prefix of 622381 and a length of 17', function(){
    detectNetwork('62238164041342018').should.equal('China UnionPay')
  })

  it('has a prefix of 622382 and a length of 17', function(){
    detectNetwork('62238231056075846').should.equal('China UnionPay')
  })

  it('has a prefix of 622383 and a length of 17', function(){
    detectNetwork('62238342331024737').should.equal('China UnionPay')
  })

  it('has a prefix of 622384 and a length of 17', function(){
    detectNetwork('62238466211848737').should.equal('China UnionPay')
  })

  it('has a prefix of 622385 and a length of 17', function(){
    detectNetwork('62238544807727315').should.equal('China UnionPay')
  })

  it('has a prefix of 622386 and a length of 17', function(){
    detectNetwork('62238665205341677').should.equal('China UnionPay')
  })

  it('has a prefix of 622387 and a length of 17', function(){
    detectNetwork('62238767338131551').should.equal('China UnionPay')
  })

  it('has a prefix of 622388 and a length of 17', function(){
    detectNetwork('62238877771286367').should.equal('China UnionPay')
  })

  it('has a prefix of 622389 and a length of 17', function(){
    detectNetwork('62238953513000252').should.equal('China UnionPay')
  })

  it('has a prefix of 622390 and a length of 17', function(){
    detectNetwork('62239080650160447').should.equal('China UnionPay')
  })

  it('has a prefix of 622391 and a length of 17', function(){
    detectNetwork('62239181268348144').should.equal('China UnionPay')
  })

  it('has a prefix of 622392 and a length of 17', function(){
    detectNetwork('62239274483840534').should.equal('China UnionPay')
  })

  it('has a prefix of 622393 and a length of 17', function(){
    detectNetwork('62239346461756611').should.equal('China UnionPay')
  })

  it('has a prefix of 622394 and a length of 17', function(){
    detectNetwork('62239417017562083').should.equal('China UnionPay')
  })

  it('has a prefix of 622395 and a length of 17', function(){
    detectNetwork('62239554703077068').should.equal('China UnionPay')
  })

  it('has a prefix of 622396 and a length of 17', function(){
    detectNetwork('62239610135183423').should.equal('China UnionPay')
  })

  it('has a prefix of 622397 and a length of 17', function(){
    detectNetwork('62239713660624663').should.equal('China UnionPay')
  })

  it('has a prefix of 622398 and a length of 17', function(){
    detectNetwork('62239832213154403').should.equal('China UnionPay')
  })

  it('has a prefix of 622399 and a length of 17', function(){
    detectNetwork('62239911701131144').should.equal('China UnionPay')
  })

  it('has a prefix of 622400 and a length of 17', function(){
    detectNetwork('62240017821624872').should.equal('China UnionPay')
  })

  it('has a prefix of 622401 and a length of 17', function(){
    detectNetwork('62240166277746353').should.equal('China UnionPay')
  })

  it('has a prefix of 622402 and a length of 17', function(){
    detectNetwork('62240271707431425').should.equal('China UnionPay')
  })

  it('has a prefix of 622403 and a length of 17', function(){
    detectNetwork('62240370543803006').should.equal('China UnionPay')
  })

  it('has a prefix of 622404 and a length of 17', function(){
    detectNetwork('62240416436864815').should.equal('China UnionPay')
  })

  it('has a prefix of 622405 and a length of 17', function(){
    detectNetwork('62240531122387033').should.equal('China UnionPay')
  })

  it('has a prefix of 622406 and a length of 17', function(){
    detectNetwork('62240643730327038').should.equal('China UnionPay')
  })

  it('has a prefix of 622407 and a length of 17', function(){
    detectNetwork('62240782173888018').should.equal('China UnionPay')
  })

  it('has a prefix of 622408 and a length of 17', function(){
    detectNetwork('62240815520102855').should.equal('China UnionPay')
  })

  it('has a prefix of 622409 and a length of 17', function(){
    detectNetwork('62240948646511244').should.equal('China UnionPay')
  })

  it('has a prefix of 622410 and a length of 17', function(){
    detectNetwork('62241080888748668').should.equal('China UnionPay')
  })

  it('has a prefix of 622411 and a length of 17', function(){
    detectNetwork('62241112086523310').should.equal('China UnionPay')
  })

  it('has a prefix of 622412 and a length of 17', function(){
    detectNetwork('62241282700808834').should.equal('China UnionPay')
  })

  it('has a prefix of 622413 and a length of 17', function(){
    detectNetwork('62241312754086750').should.equal('China UnionPay')
  })

  it('has a prefix of 622414 and a length of 17', function(){
    detectNetwork('62241435280200638').should.equal('China UnionPay')
  })

  it('has a prefix of 622415 and a length of 17', function(){
    detectNetwork('62241525754166017').should.equal('China UnionPay')
  })

  it('has a prefix of 622416 and a length of 17', function(){
    detectNetwork('62241630600336225').should.equal('China UnionPay')
  })

  it('has a prefix of 622417 and a length of 17', function(){
    detectNetwork('62241782375637785').should.equal('China UnionPay')
  })

  it('has a prefix of 622418 and a length of 17', function(){
    detectNetwork('62241835540024547').should.equal('China UnionPay')
  })

  it('has a prefix of 622419 and a length of 17', function(){
    detectNetwork('62241970707682387').should.equal('China UnionPay')
  })

  it('has a prefix of 622420 and a length of 17', function(){
    detectNetwork('62242054646436274').should.equal('China UnionPay')
  })

  it('has a prefix of 622421 and a length of 17', function(){
    detectNetwork('62242160247740462').should.equal('China UnionPay')
  })

  it('has a prefix of 622422 and a length of 17', function(){
    detectNetwork('62242287655755062').should.equal('China UnionPay')
  })

  it('has a prefix of 622423 and a length of 17', function(){
    detectNetwork('62242387631856541').should.equal('China UnionPay')
  })

  it('has a prefix of 622424 and a length of 17', function(){
    detectNetwork('62242485452103340').should.equal('China UnionPay')
  })

  it('has a prefix of 622425 and a length of 17', function(){
    detectNetwork('62242584528630521').should.equal('China UnionPay')
  })

  it('has a prefix of 622426 and a length of 17', function(){
    detectNetwork('62242604107473818').should.equal('China UnionPay')
  })

  it('has a prefix of 622427 and a length of 17', function(){
    detectNetwork('62242787052671458').should.equal('China UnionPay')
  })

  it('has a prefix of 622428 and a length of 17', function(){
    detectNetwork('62242833057352330').should.equal('China UnionPay')
  })

  it('has a prefix of 622429 and a length of 17', function(){
    detectNetwork('62242947217134186').should.equal('China UnionPay')
  })

  it('has a prefix of 622430 and a length of 17', function(){
    detectNetwork('62243013515837087').should.equal('China UnionPay')
  })

  it('has a prefix of 622431 and a length of 17', function(){
    detectNetwork('62243113248308118').should.equal('China UnionPay')
  })

  it('has a prefix of 622432 and a length of 17', function(){
    detectNetwork('62243260082171776').should.equal('China UnionPay')
  })

  it('has a prefix of 622433 and a length of 17', function(){
    detectNetwork('62243323013675314').should.equal('China UnionPay')
  })

  it('has a prefix of 622434 and a length of 17', function(){
    detectNetwork('62243431303175617').should.equal('China UnionPay')
  })

  it('has a prefix of 622435 and a length of 17', function(){
    detectNetwork('62243534223533568').should.equal('China UnionPay')
  })

  it('has a prefix of 622436 and a length of 17', function(){
    detectNetwork('62243671255541313').should.equal('China UnionPay')
  })

  it('has a prefix of 622437 and a length of 17', function(){
    detectNetwork('62243728078565850').should.equal('China UnionPay')
  })

  it('has a prefix of 622438 and a length of 17', function(){
    detectNetwork('62243816633685537').should.equal('China UnionPay')
  })

  it('has a prefix of 622439 and a length of 17', function(){
    detectNetwork('62243913543503065').should.equal('China UnionPay')
  })

  it('has a prefix of 622440 and a length of 17', function(){
    detectNetwork('62244044501056254').should.equal('China UnionPay')
  })

  it('has a prefix of 622441 and a length of 17', function(){
    detectNetwork('62244138478168330').should.equal('China UnionPay')
  })

  it('has a prefix of 622442 and a length of 17', function(){
    detectNetwork('62244264683717301').should.equal('China UnionPay')
  })

  it('has a prefix of 622443 and a length of 17', function(){
    detectNetwork('62244310366550060').should.equal('China UnionPay')
  })

  it('has a prefix of 622444 and a length of 17', function(){
    detectNetwork('62244478482287368').should.equal('China UnionPay')
  })

  it('has a prefix of 622445 and a length of 17', function(){
    detectNetwork('62244568707528556').should.equal('China UnionPay')
  })

  it('has a prefix of 622446 and a length of 17', function(){
    detectNetwork('62244633344184630').should.equal('China UnionPay')
  })

  it('has a prefix of 622447 and a length of 17', function(){
    detectNetwork('62244753676680507').should.equal('China UnionPay')
  })

  it('has a prefix of 622448 and a length of 17', function(){
    detectNetwork('62244826244884071').should.equal('China UnionPay')
  })

  it('has a prefix of 622449 and a length of 17', function(){
    detectNetwork('62244942466061850').should.equal('China UnionPay')
  })

  it('has a prefix of 622450 and a length of 17', function(){
    detectNetwork('62245000563277606').should.equal('China UnionPay')
  })

  it('has a prefix of 622451 and a length of 17', function(){
    detectNetwork('62245134270408726').should.equal('China UnionPay')
  })

  it('has a prefix of 622452 and a length of 17', function(){
    detectNetwork('62245260244044251').should.equal('China UnionPay')
  })

  it('has a prefix of 622453 and a length of 17', function(){
    detectNetwork('62245353443558227').should.equal('China UnionPay')
  })

  it('has a prefix of 622454 and a length of 17', function(){
    detectNetwork('62245483707064812').should.equal('China UnionPay')
  })

  it('has a prefix of 622455 and a length of 17', function(){
    detectNetwork('62245583884855010').should.equal('China UnionPay')
  })

  it('has a prefix of 622456 and a length of 17', function(){
    detectNetwork('62245651743268220').should.equal('China UnionPay')
  })

  it('has a prefix of 622457 and a length of 17', function(){
    detectNetwork('62245755667347068').should.equal('China UnionPay')
  })

  it('has a prefix of 622458 and a length of 17', function(){
    detectNetwork('62245826287701104').should.equal('China UnionPay')
  })

  it('has a prefix of 622459 and a length of 17', function(){
    detectNetwork('62245966365476131').should.equal('China UnionPay')
  })

  it('has a prefix of 622460 and a length of 17', function(){
    detectNetwork('62246088314543043').should.equal('China UnionPay')
  })

  it('has a prefix of 622461 and a length of 17', function(){
    detectNetwork('62246184426067056').should.equal('China UnionPay')
  })

  it('has a prefix of 622462 and a length of 17', function(){
    detectNetwork('62246280177626001').should.equal('China UnionPay')
  })

  it('has a prefix of 622463 and a length of 17', function(){
    detectNetwork('62246302477115884').should.equal('China UnionPay')
  })

  it('has a prefix of 622464 and a length of 17', function(){
    detectNetwork('62246448271632837').should.equal('China UnionPay')
  })

  it('has a prefix of 622465 and a length of 17', function(){
    detectNetwork('62246565356018811').should.equal('China UnionPay')
  })

  it('has a prefix of 622466 and a length of 17', function(){
    detectNetwork('62246680246684415').should.equal('China UnionPay')
  })

  it('has a prefix of 622467 and a length of 17', function(){
    detectNetwork('62246786006171613').should.equal('China UnionPay')
  })

  it('has a prefix of 622468 and a length of 17', function(){
    detectNetwork('62246833330188618').should.equal('China UnionPay')
  })

  it('has a prefix of 622469 and a length of 17', function(){
    detectNetwork('62246962864836126').should.equal('China UnionPay')
  })

  it('has a prefix of 622470 and a length of 17', function(){
    detectNetwork('62247003338004063').should.equal('China UnionPay')
  })

  it('has a prefix of 622471 and a length of 17', function(){
    detectNetwork('62247157785871535').should.equal('China UnionPay')
  })

  it('has a prefix of 622472 and a length of 17', function(){
    detectNetwork('62247210847003667').should.equal('China UnionPay')
  })

  it('has a prefix of 622473 and a length of 17', function(){
    detectNetwork('62247305788580182').should.equal('China UnionPay')
  })

  it('has a prefix of 622474 and a length of 17', function(){
    detectNetwork('62247437377164372').should.equal('China UnionPay')
  })

  it('has a prefix of 622475 and a length of 17', function(){
    detectNetwork('62247515758810048').should.equal('China UnionPay')
  })

  it('has a prefix of 622476 and a length of 17', function(){
    detectNetwork('62247607848602286').should.equal('China UnionPay')
  })

  it('has a prefix of 622477 and a length of 17', function(){
    detectNetwork('62247737072036204').should.equal('China UnionPay')
  })

  it('has a prefix of 622478 and a length of 17', function(){
    detectNetwork('62247884157532360').should.equal('China UnionPay')
  })

  it('has a prefix of 622479 and a length of 17', function(){
    detectNetwork('62247977856082173').should.equal('China UnionPay')
  })

  it('has a prefix of 622480 and a length of 17', function(){
    detectNetwork('62248050348054774').should.equal('China UnionPay')
  })

  it('has a prefix of 622481 and a length of 17', function(){
    detectNetwork('62248145530352302').should.equal('China UnionPay')
  })

  it('has a prefix of 622482 and a length of 17', function(){
    detectNetwork('62248241658285167').should.equal('China UnionPay')
  })

  it('has a prefix of 622483 and a length of 17', function(){
    detectNetwork('62248332335603186').should.equal('China UnionPay')
  })

  it('has a prefix of 622484 and a length of 17', function(){
    detectNetwork('62248471045840244').should.equal('China UnionPay')
  })

  it('has a prefix of 622485 and a length of 17', function(){
    detectNetwork('62248547842543156').should.equal('China UnionPay')
  })

  it('has a prefix of 622486 and a length of 17', function(){
    detectNetwork('62248687836660835').should.equal('China UnionPay')
  })

  it('has a prefix of 622487 and a length of 17', function(){
    detectNetwork('62248767202577367').should.equal('China UnionPay')
  })

  it('has a prefix of 622488 and a length of 17', function(){
    detectNetwork('62248880706547577').should.equal('China UnionPay')
  })

  it('has a prefix of 622489 and a length of 17', function(){
    detectNetwork('62248952737638258').should.equal('China UnionPay')
  })

  it('has a prefix of 622490 and a length of 17', function(){
    detectNetwork('62249030220267467').should.equal('China UnionPay')
  })

  it('has a prefix of 622491 and a length of 17', function(){
    detectNetwork('62249105048172010').should.equal('China UnionPay')
  })

  it('has a prefix of 622492 and a length of 17', function(){
    detectNetwork('62249223874720054').should.equal('China UnionPay')
  })

  it('has a prefix of 622493 and a length of 17', function(){
    detectNetwork('62249363155114624').should.equal('China UnionPay')
  })

  it('has a prefix of 622494 and a length of 17', function(){
    detectNetwork('62249440438628530').should.equal('China UnionPay')
  })

  it('has a prefix of 622495 and a length of 17', function(){
    detectNetwork('62249533067342176').should.equal('China UnionPay')
  })

  it('has a prefix of 622496 and a length of 17', function(){
    detectNetwork('62249652256474874').should.equal('China UnionPay')
  })

  it('has a prefix of 622497 and a length of 17', function(){
    detectNetwork('62249706076684526').should.equal('China UnionPay')
  })

  it('has a prefix of 622498 and a length of 17', function(){
    detectNetwork('62249820752608528').should.equal('China UnionPay')
  })

  it('has a prefix of 622499 and a length of 17', function(){
    detectNetwork('62249923127633628').should.equal('China UnionPay')
  })

  it('has a prefix of 622500 and a length of 17', function(){
    detectNetwork('62250043310048335').should.equal('China UnionPay')
  })

  it('has a prefix of 622501 and a length of 17', function(){
    detectNetwork('62250187234778475').should.equal('China UnionPay')
  })

  it('has a prefix of 622502 and a length of 17', function(){
    detectNetwork('62250276686440188').should.equal('China UnionPay')
  })

  it('has a prefix of 622503 and a length of 17', function(){
    detectNetwork('62250355866657160').should.equal('China UnionPay')
  })

  it('has a prefix of 622504 and a length of 17', function(){
    detectNetwork('62250486183140570').should.equal('China UnionPay')
  })

  it('has a prefix of 622505 and a length of 17', function(){
    detectNetwork('62250568648540322').should.equal('China UnionPay')
  })

  it('has a prefix of 622506 and a length of 17', function(){
    detectNetwork('62250688303424884').should.equal('China UnionPay')
  })

  it('has a prefix of 622507 and a length of 17', function(){
    detectNetwork('62250766135332132').should.equal('China UnionPay')
  })

  it('has a prefix of 622508 and a length of 17', function(){
    detectNetwork('62250878200633727').should.equal('China UnionPay')
  })

  it('has a prefix of 622509 and a length of 17', function(){
    detectNetwork('62250901723382530').should.equal('China UnionPay')
  })

  it('has a prefix of 622510 and a length of 17', function(){
    detectNetwork('62251010653405761').should.equal('China UnionPay')
  })

  it('has a prefix of 622511 and a length of 17', function(){
    detectNetwork('62251166541686834').should.equal('China UnionPay')
  })

  it('has a prefix of 622512 and a length of 17', function(){
    detectNetwork('62251201552065110').should.equal('China UnionPay')
  })

  it('has a prefix of 622513 and a length of 17', function(){
    detectNetwork('62251316377803326').should.equal('China UnionPay')
  })

  it('has a prefix of 622514 and a length of 17', function(){
    detectNetwork('62251486058568661').should.equal('China UnionPay')
  })

  it('has a prefix of 622515 and a length of 17', function(){
    detectNetwork('62251585458126527').should.equal('China UnionPay')
  })

  it('has a prefix of 622516 and a length of 17', function(){
    detectNetwork('62251643013474300').should.equal('China UnionPay')
  })

  it('has a prefix of 622517 and a length of 17', function(){
    detectNetwork('62251767688024727').should.equal('China UnionPay')
  })

  it('has a prefix of 622518 and a length of 17', function(){
    detectNetwork('62251888224417887').should.equal('China UnionPay')
  })

  it('has a prefix of 622519 and a length of 17', function(){
    detectNetwork('62251947801080028').should.equal('China UnionPay')
  })

  it('has a prefix of 622520 and a length of 17', function(){
    detectNetwork('62252001122234270').should.equal('China UnionPay')
  })

  it('has a prefix of 622521 and a length of 17', function(){
    detectNetwork('62252163457204478').should.equal('China UnionPay')
  })

  it('has a prefix of 622522 and a length of 17', function(){
    detectNetwork('62252262753717623').should.equal('China UnionPay')
  })

  it('has a prefix of 622523 and a length of 17', function(){
    detectNetwork('62252375316878528').should.equal('China UnionPay')
  })

  it('has a prefix of 622524 and a length of 17', function(){
    detectNetwork('62252407588364415').should.equal('China UnionPay')
  })

  it('has a prefix of 622525 and a length of 17', function(){
    detectNetwork('62252540575135470').should.equal('China UnionPay')
  })

  it('has a prefix of 622526 and a length of 17', function(){
    detectNetwork('62252651255510456').should.equal('China UnionPay')
  })

  it('has a prefix of 622527 and a length of 17', function(){
    detectNetwork('62252771243466374').should.equal('China UnionPay')
  })

  it('has a prefix of 622528 and a length of 17', function(){
    detectNetwork('62252822650554324').should.equal('China UnionPay')
  })

  it('has a prefix of 622529 and a length of 17', function(){
    detectNetwork('62252952362352623').should.equal('China UnionPay')
  })

  it('has a prefix of 622530 and a length of 17', function(){
    detectNetwork('62253086683323488').should.equal('China UnionPay')
  })

  it('has a prefix of 622531 and a length of 17', function(){
    detectNetwork('62253127640788725').should.equal('China UnionPay')
  })

  it('has a prefix of 622532 and a length of 17', function(){
    detectNetwork('62253275874314504').should.equal('China UnionPay')
  })

  it('has a prefix of 622533 and a length of 17', function(){
    detectNetwork('62253308125268168').should.equal('China UnionPay')
  })

  it('has a prefix of 622534 and a length of 17', function(){
    detectNetwork('62253412274885102').should.equal('China UnionPay')
  })

  it('has a prefix of 622535 and a length of 17', function(){
    detectNetwork('62253500238683051').should.equal('China UnionPay')
  })

  it('has a prefix of 622536 and a length of 17', function(){
    detectNetwork('62253655124844821').should.equal('China UnionPay')
  })

  it('has a prefix of 622537 and a length of 17', function(){
    detectNetwork('62253731413576823').should.equal('China UnionPay')
  })

  it('has a prefix of 622538 and a length of 17', function(){
    detectNetwork('62253812416838244').should.equal('China UnionPay')
  })

  it('has a prefix of 622539 and a length of 17', function(){
    detectNetwork('62253907660440801').should.equal('China UnionPay')
  })

  it('has a prefix of 622540 and a length of 17', function(){
    detectNetwork('62254058062853766').should.equal('China UnionPay')
  })

  it('has a prefix of 622541 and a length of 17', function(){
    detectNetwork('62254176871354455').should.equal('China UnionPay')
  })

  it('has a prefix of 622542 and a length of 17', function(){
    detectNetwork('62254223822672470').should.equal('China UnionPay')
  })

  it('has a prefix of 622543 and a length of 17', function(){
    detectNetwork('62254305862601377').should.equal('China UnionPay')
  })

  it('has a prefix of 622544 and a length of 17', function(){
    detectNetwork('62254486820301358').should.equal('China UnionPay')
  })

  it('has a prefix of 622545 and a length of 17', function(){
    detectNetwork('62254554817665760').should.equal('China UnionPay')
  })

  it('has a prefix of 622546 and a length of 17', function(){
    detectNetwork('62254683366670030').should.equal('China UnionPay')
  })

  it('has a prefix of 622547 and a length of 17', function(){
    detectNetwork('62254755688040222').should.equal('China UnionPay')
  })

  it('has a prefix of 622548 and a length of 17', function(){
    detectNetwork('62254806052286074').should.equal('China UnionPay')
  })

  it('has a prefix of 622549 and a length of 17', function(){
    detectNetwork('62254971206370261').should.equal('China UnionPay')
  })

  it('has a prefix of 622550 and a length of 17', function(){
    detectNetwork('62255022060235334').should.equal('China UnionPay')
  })

  it('has a prefix of 622551 and a length of 17', function(){
    detectNetwork('62255102373288718').should.equal('China UnionPay')
  })

  it('has a prefix of 622552 and a length of 17', function(){
    detectNetwork('62255251310052472').should.equal('China UnionPay')
  })

  it('has a prefix of 622553 and a length of 17', function(){
    detectNetwork('62255300240584531').should.equal('China UnionPay')
  })

  it('has a prefix of 622554 and a length of 17', function(){
    detectNetwork('62255476855425051').should.equal('China UnionPay')
  })

  it('has a prefix of 622555 and a length of 17', function(){
    detectNetwork('62255586433071165').should.equal('China UnionPay')
  })

  it('has a prefix of 622556 and a length of 17', function(){
    detectNetwork('62255681583103666').should.equal('China UnionPay')
  })

  it('has a prefix of 622557 and a length of 17', function(){
    detectNetwork('62255727015001120').should.equal('China UnionPay')
  })

  it('has a prefix of 622558 and a length of 17', function(){
    detectNetwork('62255803657176716').should.equal('China UnionPay')
  })

  it('has a prefix of 622559 and a length of 17', function(){
    detectNetwork('62255901367344652').should.equal('China UnionPay')
  })

  it('has a prefix of 622560 and a length of 17', function(){
    detectNetwork('62256067610556105').should.equal('China UnionPay')
  })

  it('has a prefix of 622561 and a length of 17', function(){
    detectNetwork('62256185677858104').should.equal('China UnionPay')
  })

  it('has a prefix of 622562 and a length of 17', function(){
    detectNetwork('62256212532233624').should.equal('China UnionPay')
  })

  it('has a prefix of 622563 and a length of 17', function(){
    detectNetwork('62256345331454332').should.equal('China UnionPay')
  })

  it('has a prefix of 622564 and a length of 17', function(){
    detectNetwork('62256470662814413').should.equal('China UnionPay')
  })

  it('has a prefix of 622565 and a length of 17', function(){
    detectNetwork('62256585508253507').should.equal('China UnionPay')
  })

  it('has a prefix of 622566 and a length of 17', function(){
    detectNetwork('62256634181342442').should.equal('China UnionPay')
  })

  it('has a prefix of 622567 and a length of 17', function(){
    detectNetwork('62256782528430311').should.equal('China UnionPay')
  })

  it('has a prefix of 622568 and a length of 17', function(){
    detectNetwork('62256885346816556').should.equal('China UnionPay')
  })

  it('has a prefix of 622569 and a length of 17', function(){
    detectNetwork('62256957027516250').should.equal('China UnionPay')
  })

  it('has a prefix of 622570 and a length of 17', function(){
    detectNetwork('62257013364754443').should.equal('China UnionPay')
  })

  it('has a prefix of 622571 and a length of 17', function(){
    detectNetwork('62257161426426300').should.equal('China UnionPay')
  })

  it('has a prefix of 622572 and a length of 17', function(){
    detectNetwork('62257282267521534').should.equal('China UnionPay')
  })

  it('has a prefix of 622573 and a length of 17', function(){
    detectNetwork('62257345544415533').should.equal('China UnionPay')
  })

  it('has a prefix of 622574 and a length of 17', function(){
    detectNetwork('62257456653544520').should.equal('China UnionPay')
  })

  it('has a prefix of 622575 and a length of 17', function(){
    detectNetwork('62257527570327302').should.equal('China UnionPay')
  })

  it('has a prefix of 622576 and a length of 17', function(){
    detectNetwork('62257681440455645').should.equal('China UnionPay')
  })

  it('has a prefix of 622577 and a length of 17', function(){
    detectNetwork('62257743888265810').should.equal('China UnionPay')
  })

  it('has a prefix of 622578 and a length of 17', function(){
    detectNetwork('62257864672081227').should.equal('China UnionPay')
  })

  it('has a prefix of 622579 and a length of 17', function(){
    detectNetwork('62257927841552265').should.equal('China UnionPay')
  })

  it('has a prefix of 622580 and a length of 17', function(){
    detectNetwork('62258054841745118').should.equal('China UnionPay')
  })

  it('has a prefix of 622581 and a length of 17', function(){
    detectNetwork('62258135417773808').should.equal('China UnionPay')
  })

  it('has a prefix of 622582 and a length of 17', function(){
    detectNetwork('62258261378727733').should.equal('China UnionPay')
  })

  it('has a prefix of 622583 and a length of 17', function(){
    detectNetwork('62258360273204014').should.equal('China UnionPay')
  })

  it('has a prefix of 622584 and a length of 17', function(){
    detectNetwork('62258452515277743').should.equal('China UnionPay')
  })

  it('has a prefix of 622585 and a length of 17', function(){
    detectNetwork('62258580454255031').should.equal('China UnionPay')
  })

  it('has a prefix of 622586 and a length of 17', function(){
    detectNetwork('62258646748228343').should.equal('China UnionPay')
  })

  it('has a prefix of 622587 and a length of 17', function(){
    detectNetwork('62258705246564272').should.equal('China UnionPay')
  })

  it('has a prefix of 622588 and a length of 17', function(){
    detectNetwork('62258817481261256').should.equal('China UnionPay')
  })

  it('has a prefix of 622589 and a length of 17', function(){
    detectNetwork('62258975062054441').should.equal('China UnionPay')
  })

  it('has a prefix of 622590 and a length of 17', function(){
    detectNetwork('62259066111647221').should.equal('China UnionPay')
  })

  it('has a prefix of 622591 and a length of 17', function(){
    detectNetwork('62259185044386054').should.equal('China UnionPay')
  })

  it('has a prefix of 622592 and a length of 17', function(){
    detectNetwork('62259271306804053').should.equal('China UnionPay')
  })

  it('has a prefix of 622593 and a length of 17', function(){
    detectNetwork('62259334758461630').should.equal('China UnionPay')
  })

  it('has a prefix of 622594 and a length of 17', function(){
    detectNetwork('62259444857423681').should.equal('China UnionPay')
  })

  it('has a prefix of 622595 and a length of 17', function(){
    detectNetwork('62259505402877621').should.equal('China UnionPay')
  })

  it('has a prefix of 622596 and a length of 17', function(){
    detectNetwork('62259644382044837').should.equal('China UnionPay')
  })

  it('has a prefix of 622597 and a length of 17', function(){
    detectNetwork('62259733471436771').should.equal('China UnionPay')
  })

  it('has a prefix of 622598 and a length of 17', function(){
    detectNetwork('62259840578770737').should.equal('China UnionPay')
  })

  it('has a prefix of 622599 and a length of 17', function(){
    detectNetwork('62259943144887816').should.equal('China UnionPay')
  })

  it('has a prefix of 622600 and a length of 17', function(){
    detectNetwork('62260038233771231').should.equal('China UnionPay')
  })

  it('has a prefix of 622601 and a length of 17', function(){
    detectNetwork('62260172344352303').should.equal('China UnionPay')
  })

  it('has a prefix of 622602 and a length of 17', function(){
    detectNetwork('62260251707750221').should.equal('China UnionPay')
  })

  it('has a prefix of 622603 and a length of 17', function(){
    detectNetwork('62260380734885730').should.equal('China UnionPay')
  })

  it('has a prefix of 622604 and a length of 17', function(){
    detectNetwork('62260415400257764').should.equal('China UnionPay')
  })

  it('has a prefix of 622605 and a length of 17', function(){
    detectNetwork('62260547444115384').should.equal('China UnionPay')
  })

  it('has a prefix of 622606 and a length of 17', function(){
    detectNetwork('62260656076354553').should.equal('China UnionPay')
  })

  it('has a prefix of 622607 and a length of 17', function(){
    detectNetwork('62260773328671577').should.equal('China UnionPay')
  })

  it('has a prefix of 622608 and a length of 17', function(){
    detectNetwork('62260807360701861').should.equal('China UnionPay')
  })

  it('has a prefix of 622609 and a length of 17', function(){
    detectNetwork('62260904668588865').should.equal('China UnionPay')
  })

  it('has a prefix of 622610 and a length of 17', function(){
    detectNetwork('62261020686380553').should.equal('China UnionPay')
  })

  it('has a prefix of 622611 and a length of 17', function(){
    detectNetwork('62261120361064346').should.equal('China UnionPay')
  })

  it('has a prefix of 622612 and a length of 17', function(){
    detectNetwork('62261235246142006').should.equal('China UnionPay')
  })

  it('has a prefix of 622613 and a length of 17', function(){
    detectNetwork('62261385023758723').should.equal('China UnionPay')
  })

  it('has a prefix of 622614 and a length of 17', function(){
    detectNetwork('62261441373000477').should.equal('China UnionPay')
  })

  it('has a prefix of 622615 and a length of 17', function(){
    detectNetwork('62261527113873623').should.equal('China UnionPay')
  })

  it('has a prefix of 622616 and a length of 17', function(){
    detectNetwork('62261610866774576').should.equal('China UnionPay')
  })

  it('has a prefix of 622617 and a length of 17', function(){
    detectNetwork('62261701786162210').should.equal('China UnionPay')
  })

  it('has a prefix of 622618 and a length of 17', function(){
    detectNetwork('62261875711831141').should.equal('China UnionPay')
  })

  it('has a prefix of 622619 and a length of 17', function(){
    detectNetwork('62261973472850633').should.equal('China UnionPay')
  })

  it('has a prefix of 622620 and a length of 17', function(){
    detectNetwork('62262015505140410').should.equal('China UnionPay')
  })

  it('has a prefix of 622621 and a length of 17', function(){
    detectNetwork('62262117504684578').should.equal('China UnionPay')
  })

  it('has a prefix of 622622 and a length of 17', function(){
    detectNetwork('62262252845556517').should.equal('China UnionPay')
  })

  it('has a prefix of 622623 and a length of 17', function(){
    detectNetwork('62262314051182621').should.equal('China UnionPay')
  })

  it('has a prefix of 622624 and a length of 17', function(){
    detectNetwork('62262417086373843').should.equal('China UnionPay')
  })

  it('has a prefix of 622625 and a length of 17', function(){
    detectNetwork('62262531154560644').should.equal('China UnionPay')
  })

  it('has a prefix of 622626 and a length of 17', function(){
    detectNetwork('62262652485161625').should.equal('China UnionPay')
  })

  it('has a prefix of 622627 and a length of 17', function(){
    detectNetwork('62262717154840502').should.equal('China UnionPay')
  })

  it('has a prefix of 622628 and a length of 17', function(){
    detectNetwork('62262846270287775').should.equal('China UnionPay')
  })

  it('has a prefix of 622629 and a length of 17', function(){
    detectNetwork('62262945455168787').should.equal('China UnionPay')
  })

  it('has a prefix of 622630 and a length of 17', function(){
    detectNetwork('62263051286086683').should.equal('China UnionPay')
  })

  it('has a prefix of 622631 and a length of 17', function(){
    detectNetwork('62263177866052163').should.equal('China UnionPay')
  })

  it('has a prefix of 622632 and a length of 17', function(){
    detectNetwork('62263233284216160').should.equal('China UnionPay')
  })

  it('has a prefix of 622633 and a length of 17', function(){
    detectNetwork('62263387386001117').should.equal('China UnionPay')
  })

  it('has a prefix of 622634 and a length of 17', function(){
    detectNetwork('62263455076563313').should.equal('China UnionPay')
  })

  it('has a prefix of 622635 and a length of 17', function(){
    detectNetwork('62263516041738112').should.equal('China UnionPay')
  })

  it('has a prefix of 622636 and a length of 17', function(){
    detectNetwork('62263642320172436').should.equal('China UnionPay')
  })

  it('has a prefix of 622637 and a length of 17', function(){
    detectNetwork('62263787220808348').should.equal('China UnionPay')
  })

  it('has a prefix of 622638 and a length of 17', function(){
    detectNetwork('62263832527762880').should.equal('China UnionPay')
  })

  it('has a prefix of 622639 and a length of 17', function(){
    detectNetwork('62263916614407105').should.equal('China UnionPay')
  })

  it('has a prefix of 622640 and a length of 17', function(){
    detectNetwork('62264048486424180').should.equal('China UnionPay')
  })

  it('has a prefix of 622641 and a length of 17', function(){
    detectNetwork('62264154313373607').should.equal('China UnionPay')
  })

  it('has a prefix of 622642 and a length of 17', function(){
    detectNetwork('62264242413025537').should.equal('China UnionPay')
  })

  it('has a prefix of 622643 and a length of 17', function(){
    detectNetwork('62264378311844317').should.equal('China UnionPay')
  })

  it('has a prefix of 622644 and a length of 17', function(){
    detectNetwork('62264417128702155').should.equal('China UnionPay')
  })

  it('has a prefix of 622645 and a length of 17', function(){
    detectNetwork('62264582563738626').should.equal('China UnionPay')
  })

  it('has a prefix of 622646 and a length of 17', function(){
    detectNetwork('62264640086563022').should.equal('China UnionPay')
  })

  it('has a prefix of 622647 and a length of 17', function(){
    detectNetwork('62264713506440844').should.equal('China UnionPay')
  })

  it('has a prefix of 622648 and a length of 17', function(){
    detectNetwork('62264872045442200').should.equal('China UnionPay')
  })

  it('has a prefix of 622649 and a length of 17', function(){
    detectNetwork('62264978681457671').should.equal('China UnionPay')
  })

  it('has a prefix of 622650 and a length of 17', function(){
    detectNetwork('62265043766613443').should.equal('China UnionPay')
  })

  it('has a prefix of 622651 and a length of 17', function(){
    detectNetwork('62265143512508601').should.equal('China UnionPay')
  })

  it('has a prefix of 622652 and a length of 17', function(){
    detectNetwork('62265277334165865').should.equal('China UnionPay')
  })

  it('has a prefix of 622653 and a length of 17', function(){
    detectNetwork('62265342523771046').should.equal('China UnionPay')
  })

  it('has a prefix of 622654 and a length of 17', function(){
    detectNetwork('62265405736666047').should.equal('China UnionPay')
  })

  it('has a prefix of 622655 and a length of 17', function(){
    detectNetwork('62265576678336751').should.equal('China UnionPay')
  })

  it('has a prefix of 622656 and a length of 17', function(){
    detectNetwork('62265614630107704').should.equal('China UnionPay')
  })

  it('has a prefix of 622657 and a length of 17', function(){
    detectNetwork('62265780464816144').should.equal('China UnionPay')
  })

  it('has a prefix of 622658 and a length of 17', function(){
    detectNetwork('62265837781604211').should.equal('China UnionPay')
  })

  it('has a prefix of 622659 and a length of 17', function(){
    detectNetwork('62265904825403315').should.equal('China UnionPay')
  })

  it('has a prefix of 622660 and a length of 17', function(){
    detectNetwork('62266013410113436').should.equal('China UnionPay')
  })

  it('has a prefix of 622661 and a length of 17', function(){
    detectNetwork('62266163545851802').should.equal('China UnionPay')
  })

  it('has a prefix of 622662 and a length of 17', function(){
    detectNetwork('62266227725206557').should.equal('China UnionPay')
  })

  it('has a prefix of 622663 and a length of 17', function(){
    detectNetwork('62266327338535465').should.equal('China UnionPay')
  })

  it('has a prefix of 622664 and a length of 17', function(){
    detectNetwork('62266420708404742').should.equal('China UnionPay')
  })

  it('has a prefix of 622665 and a length of 17', function(){
    detectNetwork('62266502243154080').should.equal('China UnionPay')
  })

  it('has a prefix of 622666 and a length of 17', function(){
    detectNetwork('62266611463520881').should.equal('China UnionPay')
  })

  it('has a prefix of 622667 and a length of 17', function(){
    detectNetwork('62266753835360348').should.equal('China UnionPay')
  })

  it('has a prefix of 622668 and a length of 17', function(){
    detectNetwork('62266837312861103').should.equal('China UnionPay')
  })

  it('has a prefix of 622669 and a length of 17', function(){
    detectNetwork('62266906176155452').should.equal('China UnionPay')
  })

  it('has a prefix of 622670 and a length of 17', function(){
    detectNetwork('62267012128141415').should.equal('China UnionPay')
  })

  it('has a prefix of 622671 and a length of 17', function(){
    detectNetwork('62267166222183481').should.equal('China UnionPay')
  })

  it('has a prefix of 622672 and a length of 17', function(){
    detectNetwork('62267230775430506').should.equal('China UnionPay')
  })

  it('has a prefix of 622673 and a length of 17', function(){
    detectNetwork('62267317055722031').should.equal('China UnionPay')
  })

  it('has a prefix of 622674 and a length of 17', function(){
    detectNetwork('62267416250047601').should.equal('China UnionPay')
  })

  it('has a prefix of 622675 and a length of 17', function(){
    detectNetwork('62267547615612700').should.equal('China UnionPay')
  })

  it('has a prefix of 622676 and a length of 17', function(){
    detectNetwork('62267652122353175').should.equal('China UnionPay')
  })

  it('has a prefix of 622677 and a length of 17', function(){
    detectNetwork('62267730263315122').should.equal('China UnionPay')
  })

  it('has a prefix of 622678 and a length of 17', function(){
    detectNetwork('62267807414743466').should.equal('China UnionPay')
  })

  it('has a prefix of 622679 and a length of 17', function(){
    detectNetwork('62267975000251355').should.equal('China UnionPay')
  })

  it('has a prefix of 622680 and a length of 17', function(){
    detectNetwork('62268013208038505').should.equal('China UnionPay')
  })

  it('has a prefix of 622681 and a length of 17', function(){
    detectNetwork('62268188884133383').should.equal('China UnionPay')
  })

  it('has a prefix of 622682 and a length of 17', function(){
    detectNetwork('62268258181515870').should.equal('China UnionPay')
  })

  it('has a prefix of 622683 and a length of 17', function(){
    detectNetwork('62268365326675375').should.equal('China UnionPay')
  })

  it('has a prefix of 622684 and a length of 17', function(){
    detectNetwork('62268477465554827').should.equal('China UnionPay')
  })

  it('has a prefix of 622685 and a length of 17', function(){
    detectNetwork('62268588847473407').should.equal('China UnionPay')
  })

  it('has a prefix of 622686 and a length of 17', function(){
    detectNetwork('62268638355320517').should.equal('China UnionPay')
  })

  it('has a prefix of 622687 and a length of 17', function(){
    detectNetwork('62268715002157118').should.equal('China UnionPay')
  })

  it('has a prefix of 622688 and a length of 17', function(){
    detectNetwork('62268837766363402').should.equal('China UnionPay')
  })

  it('has a prefix of 622689 and a length of 17', function(){
    detectNetwork('62268976825480538').should.equal('China UnionPay')
  })

  it('has a prefix of 622690 and a length of 17', function(){
    detectNetwork('62269012467164528').should.equal('China UnionPay')
  })

  it('has a prefix of 622691 and a length of 17', function(){
    detectNetwork('62269181463446822').should.equal('China UnionPay')
  })

  it('has a prefix of 622692 and a length of 17', function(){
    detectNetwork('62269200605047113').should.equal('China UnionPay')
  })

  it('has a prefix of 622693 and a length of 17', function(){
    detectNetwork('62269363112847322').should.equal('China UnionPay')
  })

  it('has a prefix of 622694 and a length of 17', function(){
    detectNetwork('62269441615575155').should.equal('China UnionPay')
  })

  it('has a prefix of 622695 and a length of 17', function(){
    detectNetwork('62269574753466782').should.equal('China UnionPay')
  })

  it('has a prefix of 622696 and a length of 17', function(){
    detectNetwork('62269632518583135').should.equal('China UnionPay')
  })

  it('has a prefix of 622697 and a length of 17', function(){
    detectNetwork('62269768272541414').should.equal('China UnionPay')
  })

  it('has a prefix of 622698 and a length of 17', function(){
    detectNetwork('62269856370221288').should.equal('China UnionPay')
  })

  it('has a prefix of 622699 and a length of 17', function(){
    detectNetwork('62269914511876840').should.equal('China UnionPay')
  })

  it('has a prefix of 622700 and a length of 17', function(){
    detectNetwork('62270048807300570').should.equal('China UnionPay')
  })

  it('has a prefix of 622701 and a length of 17', function(){
    detectNetwork('62270144507270404').should.equal('China UnionPay')
  })

  it('has a prefix of 622702 and a length of 17', function(){
    detectNetwork('62270214336430668').should.equal('China UnionPay')
  })

  it('has a prefix of 622703 and a length of 17', function(){
    detectNetwork('62270315228513608').should.equal('China UnionPay')
  })

  it('has a prefix of 622704 and a length of 17', function(){
    detectNetwork('62270406604336482').should.equal('China UnionPay')
  })

  it('has a prefix of 622705 and a length of 17', function(){
    detectNetwork('62270520421767225').should.equal('China UnionPay')
  })

  it('has a prefix of 622706 and a length of 17', function(){
    detectNetwork('62270683404470360').should.equal('China UnionPay')
  })

  it('has a prefix of 622707 and a length of 17', function(){
    detectNetwork('62270710362146260').should.equal('China UnionPay')
  })

  it('has a prefix of 622708 and a length of 17', function(){
    detectNetwork('62270803826227755').should.equal('China UnionPay')
  })

  it('has a prefix of 622709 and a length of 17', function(){
    detectNetwork('62270986551321434').should.equal('China UnionPay')
  })

  it('has a prefix of 622710 and a length of 17', function(){
    detectNetwork('62271065747283258').should.equal('China UnionPay')
  })

  it('has a prefix of 622711 and a length of 17', function(){
    detectNetwork('62271154615741243').should.equal('China UnionPay')
  })

  it('has a prefix of 622712 and a length of 17', function(){
    detectNetwork('62271201805886122').should.equal('China UnionPay')
  })

  it('has a prefix of 622713 and a length of 17', function(){
    detectNetwork('62271353622702076').should.equal('China UnionPay')
  })

  it('has a prefix of 622714 and a length of 17', function(){
    detectNetwork('62271473062872413').should.equal('China UnionPay')
  })

  it('has a prefix of 622715 and a length of 17', function(){
    detectNetwork('62271547857681166').should.equal('China UnionPay')
  })

  it('has a prefix of 622716 and a length of 17', function(){
    detectNetwork('62271654628774782').should.equal('China UnionPay')
  })

  it('has a prefix of 622717 and a length of 17', function(){
    detectNetwork('62271770288702576').should.equal('China UnionPay')
  })

  it('has a prefix of 622718 and a length of 17', function(){
    detectNetwork('62271858268177561').should.equal('China UnionPay')
  })

  it('has a prefix of 622719 and a length of 17', function(){
    detectNetwork('62271972654256878').should.equal('China UnionPay')
  })

  it('has a prefix of 622720 and a length of 17', function(){
    detectNetwork('62272037470805678').should.equal('China UnionPay')
  })

  it('has a prefix of 622721 and a length of 17', function(){
    detectNetwork('62272124486361440').should.equal('China UnionPay')
  })

  it('has a prefix of 622722 and a length of 17', function(){
    detectNetwork('62272266682602433').should.equal('China UnionPay')
  })

  it('has a prefix of 622723 and a length of 17', function(){
    detectNetwork('62272373813067588').should.equal('China UnionPay')
  })

  it('has a prefix of 622724 and a length of 17', function(){
    detectNetwork('62272452827100027').should.equal('China UnionPay')
  })

  it('has a prefix of 622725 and a length of 17', function(){
    detectNetwork('62272511554211376').should.equal('China UnionPay')
  })

  it('has a prefix of 622726 and a length of 17', function(){
    detectNetwork('62272676061145542').should.equal('China UnionPay')
  })

  it('has a prefix of 622727 and a length of 17', function(){
    detectNetwork('62272762186477248').should.equal('China UnionPay')
  })

  it('has a prefix of 622728 and a length of 17', function(){
    detectNetwork('62272871320604213').should.equal('China UnionPay')
  })

  it('has a prefix of 622729 and a length of 17', function(){
    detectNetwork('62272947380488852').should.equal('China UnionPay')
  })

  it('has a prefix of 622730 and a length of 17', function(){
    detectNetwork('62273076472730178').should.equal('China UnionPay')
  })

  it('has a prefix of 622731 and a length of 17', function(){
    detectNetwork('62273113118577530').should.equal('China UnionPay')
  })

  it('has a prefix of 622732 and a length of 17', function(){
    detectNetwork('62273215345228502').should.equal('China UnionPay')
  })

  it('has a prefix of 622733 and a length of 17', function(){
    detectNetwork('62273315140648673').should.equal('China UnionPay')
  })

  it('has a prefix of 622734 and a length of 17', function(){
    detectNetwork('62273441587811033').should.equal('China UnionPay')
  })

  it('has a prefix of 622735 and a length of 17', function(){
    detectNetwork('62273501106360814').should.equal('China UnionPay')
  })

  it('has a prefix of 622736 and a length of 17', function(){
    detectNetwork('62273618578707178').should.equal('China UnionPay')
  })

  it('has a prefix of 622737 and a length of 17', function(){
    detectNetwork('62273732655661700').should.equal('China UnionPay')
  })

  it('has a prefix of 622738 and a length of 17', function(){
    detectNetwork('62273878718355008').should.equal('China UnionPay')
  })

  it('has a prefix of 622739 and a length of 17', function(){
    detectNetwork('62273955187457754').should.equal('China UnionPay')
  })

  it('has a prefix of 622740 and a length of 17', function(){
    detectNetwork('62274020083587088').should.equal('China UnionPay')
  })

  it('has a prefix of 622741 and a length of 17', function(){
    detectNetwork('62274154312441348').should.equal('China UnionPay')
  })

  it('has a prefix of 622742 and a length of 17', function(){
    detectNetwork('62274257145544814').should.equal('China UnionPay')
  })

  it('has a prefix of 622743 and a length of 17', function(){
    detectNetwork('62274366757710275').should.equal('China UnionPay')
  })

  it('has a prefix of 622744 and a length of 17', function(){
    detectNetwork('62274473865662377').should.equal('China UnionPay')
  })

  it('has a prefix of 622745 and a length of 17', function(){
    detectNetwork('62274552837775066').should.equal('China UnionPay')
  })

  it('has a prefix of 622746 and a length of 17', function(){
    detectNetwork('62274611755510428').should.equal('China UnionPay')
  })

  it('has a prefix of 622747 and a length of 17', function(){
    detectNetwork('62274777647188746').should.equal('China UnionPay')
  })

  it('has a prefix of 622748 and a length of 17', function(){
    detectNetwork('62274824383673177').should.equal('China UnionPay')
  })

  it('has a prefix of 622749 and a length of 17', function(){
    detectNetwork('62274956450851811').should.equal('China UnionPay')
  })

  it('has a prefix of 622750 and a length of 17', function(){
    detectNetwork('62275016226251867').should.equal('China UnionPay')
  })

  it('has a prefix of 622751 and a length of 17', function(){
    detectNetwork('62275178718251554').should.equal('China UnionPay')
  })

  it('has a prefix of 622752 and a length of 17', function(){
    detectNetwork('62275216570630560').should.equal('China UnionPay')
  })

  it('has a prefix of 622753 and a length of 17', function(){
    detectNetwork('62275300234614558').should.equal('China UnionPay')
  })

  it('has a prefix of 622754 and a length of 17', function(){
    detectNetwork('62275464275206650').should.equal('China UnionPay')
  })

  it('has a prefix of 622755 and a length of 17', function(){
    detectNetwork('62275534785550682').should.equal('China UnionPay')
  })

  it('has a prefix of 622756 and a length of 17', function(){
    detectNetwork('62275634523071271').should.equal('China UnionPay')
  })

  it('has a prefix of 622757 and a length of 17', function(){
    detectNetwork('62275735072256532').should.equal('China UnionPay')
  })

  it('has a prefix of 622758 and a length of 17', function(){
    detectNetwork('62275878185087264').should.equal('China UnionPay')
  })

  it('has a prefix of 622759 and a length of 17', function(){
    detectNetwork('62275916486860031').should.equal('China UnionPay')
  })

  it('has a prefix of 622760 and a length of 17', function(){
    detectNetwork('62276068758608627').should.equal('China UnionPay')
  })

  it('has a prefix of 622761 and a length of 17', function(){
    detectNetwork('62276175585432061').should.equal('China UnionPay')
  })

  it('has a prefix of 622762 and a length of 17', function(){
    detectNetwork('62276225106381748').should.equal('China UnionPay')
  })

  it('has a prefix of 622763 and a length of 17', function(){
    detectNetwork('62276340350801116').should.equal('China UnionPay')
  })

  it('has a prefix of 622764 and a length of 17', function(){
    detectNetwork('62276465405225770').should.equal('China UnionPay')
  })

  it('has a prefix of 622765 and a length of 17', function(){
    detectNetwork('62276570385540216').should.equal('China UnionPay')
  })

  it('has a prefix of 622766 and a length of 17', function(){
    detectNetwork('62276602336420148').should.equal('China UnionPay')
  })

  it('has a prefix of 622767 and a length of 17', function(){
    detectNetwork('62276728155076286').should.equal('China UnionPay')
  })

  it('has a prefix of 622768 and a length of 17', function(){
    detectNetwork('62276826486517538').should.equal('China UnionPay')
  })

  it('has a prefix of 622769 and a length of 17', function(){
    detectNetwork('62276970256072564').should.equal('China UnionPay')
  })

  it('has a prefix of 622770 and a length of 17', function(){
    detectNetwork('62277073177801477').should.equal('China UnionPay')
  })

  it('has a prefix of 622771 and a length of 17', function(){
    detectNetwork('62277167171373344').should.equal('China UnionPay')
  })

  it('has a prefix of 622772 and a length of 17', function(){
    detectNetwork('62277254811468085').should.equal('China UnionPay')
  })

  it('has a prefix of 622773 and a length of 17', function(){
    detectNetwork('62277368670724072').should.equal('China UnionPay')
  })

  it('has a prefix of 622774 and a length of 17', function(){
    detectNetwork('62277462376652670').should.equal('China UnionPay')
  })

  it('has a prefix of 622775 and a length of 17', function(){
    detectNetwork('62277585277602061').should.equal('China UnionPay')
  })

  it('has a prefix of 622776 and a length of 17', function(){
    detectNetwork('62277644803481746').should.equal('China UnionPay')
  })

  it('has a prefix of 622777 and a length of 17', function(){
    detectNetwork('62277757614853102').should.equal('China UnionPay')
  })

  it('has a prefix of 622778 and a length of 17', function(){
    detectNetwork('62277855057183482').should.equal('China UnionPay')
  })

  it('has a prefix of 622779 and a length of 17', function(){
    detectNetwork('62277953324346662').should.equal('China UnionPay')
  })

  it('has a prefix of 622780 and a length of 17', function(){
    detectNetwork('62278056767381011').should.equal('China UnionPay')
  })

  it('has a prefix of 622781 and a length of 17', function(){
    detectNetwork('62278143274045768').should.equal('China UnionPay')
  })

  it('has a prefix of 622782 and a length of 17', function(){
    detectNetwork('62278263457884414').should.equal('China UnionPay')
  })

  it('has a prefix of 622783 and a length of 17', function(){
    detectNetwork('62278350512643802').should.equal('China UnionPay')
  })

  it('has a prefix of 622784 and a length of 17', function(){
    detectNetwork('62278415588333458').should.equal('China UnionPay')
  })

  it('has a prefix of 622785 and a length of 17', function(){
    detectNetwork('62278502556345836').should.equal('China UnionPay')
  })

  it('has a prefix of 622786 and a length of 17', function(){
    detectNetwork('62278661257032466').should.equal('China UnionPay')
  })

  it('has a prefix of 622787 and a length of 17', function(){
    detectNetwork('62278710546461538').should.equal('China UnionPay')
  })

  it('has a prefix of 622788 and a length of 17', function(){
    detectNetwork('62278826375255587').should.equal('China UnionPay')
  })

  it('has a prefix of 622789 and a length of 17', function(){
    detectNetwork('62278916357014733').should.equal('China UnionPay')
  })

  it('has a prefix of 622790 and a length of 17', function(){
    detectNetwork('62279036462073166').should.equal('China UnionPay')
  })

  it('has a prefix of 622791 and a length of 17', function(){
    detectNetwork('62279147735245165').should.equal('China UnionPay')
  })

  it('has a prefix of 622792 and a length of 17', function(){
    detectNetwork('62279213513465367').should.equal('China UnionPay')
  })

  it('has a prefix of 622793 and a length of 17', function(){
    detectNetwork('62279317542821357').should.equal('China UnionPay')
  })

  it('has a prefix of 622794 and a length of 17', function(){
    detectNetwork('62279430367555678').should.equal('China UnionPay')
  })

  it('has a prefix of 622795 and a length of 17', function(){
    detectNetwork('62279552828062470').should.equal('China UnionPay')
  })

  it('has a prefix of 622796 and a length of 17', function(){
    detectNetwork('62279661706247437').should.equal('China UnionPay')
  })

  it('has a prefix of 622797 and a length of 17', function(){
    detectNetwork('62279761787643246').should.equal('China UnionPay')
  })

  it('has a prefix of 622798 and a length of 17', function(){
    detectNetwork('62279875264333134').should.equal('China UnionPay')
  })

  it('has a prefix of 622799 and a length of 17', function(){
    detectNetwork('62279905760035156').should.equal('China UnionPay')
  })

  it('has a prefix of 622800 and a length of 17', function(){
    detectNetwork('62280047325423065').should.equal('China UnionPay')
  })

  it('has a prefix of 622801 and a length of 17', function(){
    detectNetwork('62280111717801737').should.equal('China UnionPay')
  })

  it('has a prefix of 622802 and a length of 17', function(){
    detectNetwork('62280203844112733').should.equal('China UnionPay')
  })

  it('has a prefix of 622803 and a length of 17', function(){
    detectNetwork('62280362116237077').should.equal('China UnionPay')
  })

  it('has a prefix of 622804 and a length of 17', function(){
    detectNetwork('62280443606651532').should.equal('China UnionPay')
  })

  it('has a prefix of 622805 and a length of 17', function(){
    detectNetwork('62280523045150477').should.equal('China UnionPay')
  })

  it('has a prefix of 622806 and a length of 17', function(){
    detectNetwork('62280638227408230').should.equal('China UnionPay')
  })

  it('has a prefix of 622807 and a length of 17', function(){
    detectNetwork('62280750871543527').should.equal('China UnionPay')
  })

  it('has a prefix of 622808 and a length of 17', function(){
    detectNetwork('62280807842135411').should.equal('China UnionPay')
  })

  it('has a prefix of 622809 and a length of 17', function(){
    detectNetwork('62280926258446058').should.equal('China UnionPay')
  })

  it('has a prefix of 622810 and a length of 17', function(){
    detectNetwork('62281026063038057').should.equal('China UnionPay')
  })

  it('has a prefix of 622811 and a length of 17', function(){
    detectNetwork('62281145054834500').should.equal('China UnionPay')
  })

  it('has a prefix of 622812 and a length of 17', function(){
    detectNetwork('62281212734053285').should.equal('China UnionPay')
  })

  it('has a prefix of 622813 and a length of 17', function(){
    detectNetwork('62281306616536300').should.equal('China UnionPay')
  })

  it('has a prefix of 622814 and a length of 17', function(){
    detectNetwork('62281408422122524').should.equal('China UnionPay')
  })

  it('has a prefix of 622815 and a length of 17', function(){
    detectNetwork('62281561330584108').should.equal('China UnionPay')
  })

  it('has a prefix of 622816 and a length of 17', function(){
    detectNetwork('62281636604520737').should.equal('China UnionPay')
  })

  it('has a prefix of 622817 and a length of 17', function(){
    detectNetwork('62281785661616617').should.equal('China UnionPay')
  })

  it('has a prefix of 622818 and a length of 17', function(){
    detectNetwork('62281867140177835').should.equal('China UnionPay')
  })

  it('has a prefix of 622819 and a length of 17', function(){
    detectNetwork('62281977454288381').should.equal('China UnionPay')
  })

  it('has a prefix of 622820 and a length of 17', function(){
    detectNetwork('62282037087736232').should.equal('China UnionPay')
  })

  it('has a prefix of 622821 and a length of 17', function(){
    detectNetwork('62282188086172720').should.equal('China UnionPay')
  })

  it('has a prefix of 622822 and a length of 17', function(){
    detectNetwork('62282202807586082').should.equal('China UnionPay')
  })

  it('has a prefix of 622823 and a length of 17', function(){
    detectNetwork('62282372438466181').should.equal('China UnionPay')
  })

  it('has a prefix of 622824 and a length of 17', function(){
    detectNetwork('62282483158151400').should.equal('China UnionPay')
  })

  it('has a prefix of 622825 and a length of 17', function(){
    detectNetwork('62282531054114262').should.equal('China UnionPay')
  })

  it('has a prefix of 622826 and a length of 17', function(){
    detectNetwork('62282687804551236').should.equal('China UnionPay')
  })

  it('has a prefix of 622827 and a length of 17', function(){
    detectNetwork('62282757104241618').should.equal('China UnionPay')
  })

  it('has a prefix of 622828 and a length of 17', function(){
    detectNetwork('62282870312721280').should.equal('China UnionPay')
  })

  it('has a prefix of 622829 and a length of 17', function(){
    detectNetwork('62282902535550545').should.equal('China UnionPay')
  })

  it('has a prefix of 622830 and a length of 17', function(){
    detectNetwork('62283067816638866').should.equal('China UnionPay')
  })

  it('has a prefix of 622831 and a length of 17', function(){
    detectNetwork('62283181502343464').should.equal('China UnionPay')
  })

  it('has a prefix of 622832 and a length of 17', function(){
    detectNetwork('62283247886870013').should.equal('China UnionPay')
  })

  it('has a prefix of 622833 and a length of 17', function(){
    detectNetwork('62283345218867480').should.equal('China UnionPay')
  })

  it('has a prefix of 622834 and a length of 17', function(){
    detectNetwork('62283463420147423').should.equal('China UnionPay')
  })

  it('has a prefix of 622835 and a length of 17', function(){
    detectNetwork('62283505668027077').should.equal('China UnionPay')
  })

  it('has a prefix of 622836 and a length of 17', function(){
    detectNetwork('62283632436715337').should.equal('China UnionPay')
  })

  it('has a prefix of 622837 and a length of 17', function(){
    detectNetwork('62283716753061355').should.equal('China UnionPay')
  })

  it('has a prefix of 622838 and a length of 17', function(){
    detectNetwork('62283821613150026').should.equal('China UnionPay')
  })

  it('has a prefix of 622839 and a length of 17', function(){
    detectNetwork('62283953324250643').should.equal('China UnionPay')
  })

  it('has a prefix of 622840 and a length of 17', function(){
    detectNetwork('62284071030367161').should.equal('China UnionPay')
  })

  it('has a prefix of 622841 and a length of 17', function(){
    detectNetwork('62284100800746122').should.equal('China UnionPay')
  })

  it('has a prefix of 622842 and a length of 17', function(){
    detectNetwork('62284284220335757').should.equal('China UnionPay')
  })

  it('has a prefix of 622843 and a length of 17', function(){
    detectNetwork('62284341124603631').should.equal('China UnionPay')
  })

  it('has a prefix of 622844 and a length of 17', function(){
    detectNetwork('62284434481656227').should.equal('China UnionPay')
  })

  it('has a prefix of 622845 and a length of 17', function(){
    detectNetwork('62284504412120586').should.equal('China UnionPay')
  })

  it('has a prefix of 622846 and a length of 17', function(){
    detectNetwork('62284646245184000').should.equal('China UnionPay')
  })

  it('has a prefix of 622847 and a length of 17', function(){
    detectNetwork('62284745621676205').should.equal('China UnionPay')
  })

  it('has a prefix of 622848 and a length of 17', function(){
    detectNetwork('62284816772228765').should.equal('China UnionPay')
  })

  it('has a prefix of 622849 and a length of 17', function(){
    detectNetwork('62284984768767387').should.equal('China UnionPay')
  })

  it('has a prefix of 622850 and a length of 17', function(){
    detectNetwork('62285040202082123').should.equal('China UnionPay')
  })

  it('has a prefix of 622851 and a length of 17', function(){
    detectNetwork('62285131744740745').should.equal('China UnionPay')
  })

  it('has a prefix of 622852 and a length of 17', function(){
    detectNetwork('62285220112838872').should.equal('China UnionPay')
  })

  it('has a prefix of 622853 and a length of 17', function(){
    detectNetwork('62285348780684886').should.equal('China UnionPay')
  })

  it('has a prefix of 622854 and a length of 17', function(){
    detectNetwork('62285413738062860').should.equal('China UnionPay')
  })

  it('has a prefix of 622855 and a length of 17', function(){
    detectNetwork('62285515158320778').should.equal('China UnionPay')
  })

  it('has a prefix of 622856 and a length of 17', function(){
    detectNetwork('62285611112012402').should.equal('China UnionPay')
  })

  it('has a prefix of 622857 and a length of 17', function(){
    detectNetwork('62285734502073235').should.equal('China UnionPay')
  })

  it('has a prefix of 622858 and a length of 17', function(){
    detectNetwork('62285805646325038').should.equal('China UnionPay')
  })

  it('has a prefix of 622859 and a length of 17', function(){
    detectNetwork('62285974236441470').should.equal('China UnionPay')
  })

  it('has a prefix of 622860 and a length of 17', function(){
    detectNetwork('62286014181725858').should.equal('China UnionPay')
  })

  it('has a prefix of 622861 and a length of 17', function(){
    detectNetwork('62286155564382074').should.equal('China UnionPay')
  })

  it('has a prefix of 622862 and a length of 17', function(){
    detectNetwork('62286237303570202').should.equal('China UnionPay')
  })

  it('has a prefix of 622863 and a length of 17', function(){
    detectNetwork('62286301735463868').should.equal('China UnionPay')
  })

  it('has a prefix of 622864 and a length of 17', function(){
    detectNetwork('62286444613786855').should.equal('China UnionPay')
  })

  it('has a prefix of 622865 and a length of 17', function(){
    detectNetwork('62286555204208443').should.equal('China UnionPay')
  })

  it('has a prefix of 622866 and a length of 17', function(){
    detectNetwork('62286636700255116').should.equal('China UnionPay')
  })

  it('has a prefix of 622867 and a length of 17', function(){
    detectNetwork('62286733086257435').should.equal('China UnionPay')
  })

  it('has a prefix of 622868 and a length of 17', function(){
    detectNetwork('62286854375754361').should.equal('China UnionPay')
  })

  it('has a prefix of 622869 and a length of 17', function(){
    detectNetwork('62286918088883185').should.equal('China UnionPay')
  })

  it('has a prefix of 622870 and a length of 17', function(){
    detectNetwork('62287066801082080').should.equal('China UnionPay')
  })

  it('has a prefix of 622871 and a length of 17', function(){
    detectNetwork('62287141344762751').should.equal('China UnionPay')
  })

  it('has a prefix of 622872 and a length of 17', function(){
    detectNetwork('62287281538736310').should.equal('China UnionPay')
  })

  it('has a prefix of 622873 and a length of 17', function(){
    detectNetwork('62287338587854707').should.equal('China UnionPay')
  })

  it('has a prefix of 622874 and a length of 17', function(){
    detectNetwork('62287443320161111').should.equal('China UnionPay')
  })

  it('has a prefix of 622875 and a length of 17', function(){
    detectNetwork('62287588157560218').should.equal('China UnionPay')
  })

  it('has a prefix of 622876 and a length of 17', function(){
    detectNetwork('62287644518114776').should.equal('China UnionPay')
  })

  it('has a prefix of 622877 and a length of 17', function(){
    detectNetwork('62287705115600382').should.equal('China UnionPay')
  })

  it('has a prefix of 622878 and a length of 17', function(){
    detectNetwork('62287816744466554').should.equal('China UnionPay')
  })

  it('has a prefix of 622879 and a length of 17', function(){
    detectNetwork('62287965035885483').should.equal('China UnionPay')
  })

  it('has a prefix of 622880 and a length of 17', function(){
    detectNetwork('62288007411256726').should.equal('China UnionPay')
  })

  it('has a prefix of 622881 and a length of 17', function(){
    detectNetwork('62288160063443235').should.equal('China UnionPay')
  })

  it('has a prefix of 622882 and a length of 17', function(){
    detectNetwork('62288231364242835').should.equal('China UnionPay')
  })

  it('has a prefix of 622883 and a length of 17', function(){
    detectNetwork('62288360102300162').should.equal('China UnionPay')
  })

  it('has a prefix of 622884 and a length of 17', function(){
    detectNetwork('62288434544241756').should.equal('China UnionPay')
  })

  it('has a prefix of 622885 and a length of 17', function(){
    detectNetwork('62288511552046562').should.equal('China UnionPay')
  })

  it('has a prefix of 622886 and a length of 17', function(){
    detectNetwork('62288660632738851').should.equal('China UnionPay')
  })

  it('has a prefix of 622887 and a length of 17', function(){
    detectNetwork('62288737603017645').should.equal('China UnionPay')
  })

  it('has a prefix of 622888 and a length of 17', function(){
    detectNetwork('62288801031588626').should.equal('China UnionPay')
  })

  it('has a prefix of 622889 and a length of 17', function(){
    detectNetwork('62288950301072740').should.equal('China UnionPay')
  })

  it('has a prefix of 622890 and a length of 17', function(){
    detectNetwork('62289038565564682').should.equal('China UnionPay')
  })

  it('has a prefix of 622891 and a length of 17', function(){
    detectNetwork('62289103714612571').should.equal('China UnionPay')
  })

  it('has a prefix of 622892 and a length of 17', function(){
    detectNetwork('62289271625561520').should.equal('China UnionPay')
  })

  it('has a prefix of 622893 and a length of 17', function(){
    detectNetwork('62289343147386851').should.equal('China UnionPay')
  })

  it('has a prefix of 622894 and a length of 17', function(){
    detectNetwork('62289406007873712').should.equal('China UnionPay')
  })

  it('has a prefix of 622895 and a length of 17', function(){
    detectNetwork('62289544328464721').should.equal('China UnionPay')
  })

  it('has a prefix of 622896 and a length of 17', function(){
    detectNetwork('62289650022540725').should.equal('China UnionPay')
  })

  it('has a prefix of 622897 and a length of 17', function(){
    detectNetwork('62289767385273168').should.equal('China UnionPay')
  })

  it('has a prefix of 622898 and a length of 17', function(){
    detectNetwork('62289813428526026').should.equal('China UnionPay')
  })

  it('has a prefix of 622899 and a length of 17', function(){
    detectNetwork('62289963683036102').should.equal('China UnionPay')
  })

  it('has a prefix of 622900 and a length of 17', function(){
    detectNetwork('62290078682402421').should.equal('China UnionPay')
  })

  it('has a prefix of 622901 and a length of 17', function(){
    detectNetwork('62290174268031517').should.equal('China UnionPay')
  })

  it('has a prefix of 622902 and a length of 17', function(){
    detectNetwork('62290227675047673').should.equal('China UnionPay')
  })

  it('has a prefix of 622903 and a length of 17', function(){
    detectNetwork('62290357444203180').should.equal('China UnionPay')
  })

  it('has a prefix of 622904 and a length of 17', function(){
    detectNetwork('62290465352548778').should.equal('China UnionPay')
  })

  it('has a prefix of 622905 and a length of 17', function(){
    detectNetwork('62290504235725472').should.equal('China UnionPay')
  })

  it('has a prefix of 622906 and a length of 17', function(){
    detectNetwork('62290681648711348').should.equal('China UnionPay')
  })

  it('has a prefix of 622907 and a length of 17', function(){
    detectNetwork('62290736001741467').should.equal('China UnionPay')
  })

  it('has a prefix of 622908 and a length of 17', function(){
    detectNetwork('62290852376154536').should.equal('China UnionPay')
  })

  it('has a prefix of 622909 and a length of 17', function(){
    detectNetwork('62290903866220100').should.equal('China UnionPay')
  })

  it('has a prefix of 622910 and a length of 17', function(){
    detectNetwork('62291005752202552').should.equal('China UnionPay')
  })

  it('has a prefix of 622911 and a length of 17', function(){
    detectNetwork('62291173354704430').should.equal('China UnionPay')
  })

  it('has a prefix of 622912 and a length of 17', function(){
    detectNetwork('62291206556261366').should.equal('China UnionPay')
  })

  it('has a prefix of 622913 and a length of 17', function(){
    detectNetwork('62291378261611840').should.equal('China UnionPay')
  })

  it('has a prefix of 622914 and a length of 17', function(){
    detectNetwork('62291446871234005').should.equal('China UnionPay')
  })

  it('has a prefix of 622915 and a length of 17', function(){
    detectNetwork('62291510886803256').should.equal('China UnionPay')
  })

  it('has a prefix of 622916 and a length of 17', function(){
    detectNetwork('62291678581674867').should.equal('China UnionPay')
  })

  it('has a prefix of 622917 and a length of 17', function(){
    detectNetwork('62291784867538014').should.equal('China UnionPay')
  })

  it('has a prefix of 622918 and a length of 17', function(){
    detectNetwork('62291802007765810').should.equal('China UnionPay')
  })

  it('has a prefix of 622919 and a length of 17', function(){
    detectNetwork('62291982630556416').should.equal('China UnionPay')
  })

  it('has a prefix of 622920 and a length of 17', function(){
    detectNetwork('62292065552402318').should.equal('China UnionPay')
  })

  it('has a prefix of 622921 and a length of 17', function(){
    detectNetwork('62292143670675506').should.equal('China UnionPay')
  })

  it('has a prefix of 622922 and a length of 17', function(){
    detectNetwork('62292208880206673').should.equal('China UnionPay')
  })

  it('has a prefix of 622923 and a length of 17', function(){
    detectNetwork('62292347860848728').should.equal('China UnionPay')
  })

  it('has a prefix of 622924 and a length of 17', function(){
    detectNetwork('62292457660236685').should.equal('China UnionPay')
  })

  it('has a prefix of 622925 and a length of 17', function(){
    detectNetwork('62292556484383161').should.equal('China UnionPay')
  })

  it('has a prefix of 622126 and a length of 18', function(){
    detectNetwork('622126544603825736').should.equal('China UnionPay')
  })

  it('has a prefix of 622127 and a length of 18', function(){
    detectNetwork('622127455633348016').should.equal('China UnionPay')
  })

  it('has a prefix of 622128 and a length of 18', function(){
    detectNetwork('622128377021130315').should.equal('China UnionPay')
  })

  it('has a prefix of 622129 and a length of 18', function(){
    detectNetwork('622129170817670776').should.equal('China UnionPay')
  })

  it('has a prefix of 622130 and a length of 18', function(){
    detectNetwork('622130584230525031').should.equal('China UnionPay')
  })

  it('has a prefix of 622131 and a length of 18', function(){
    detectNetwork('622131141780812710').should.equal('China UnionPay')
  })

  it('has a prefix of 622132 and a length of 18', function(){
    detectNetwork('622132601778330851').should.equal('China UnionPay')
  })

  it('has a prefix of 622133 and a length of 18', function(){
    detectNetwork('622133483787823077').should.equal('China UnionPay')
  })

  it('has a prefix of 622134 and a length of 18', function(){
    detectNetwork('622134672730314004').should.equal('China UnionPay')
  })

  it('has a prefix of 622135 and a length of 18', function(){
    detectNetwork('622135547203216507').should.equal('China UnionPay')
  })

  it('has a prefix of 622136 and a length of 18', function(){
    detectNetwork('622136311205067788').should.equal('China UnionPay')
  })

  it('has a prefix of 622137 and a length of 18', function(){
    detectNetwork('622137031507034852').should.equal('China UnionPay')
  })

  it('has a prefix of 622138 and a length of 18', function(){
    detectNetwork('622138053747512818').should.equal('China UnionPay')
  })

  it('has a prefix of 622139 and a length of 18', function(){
    detectNetwork('622139454304576774').should.equal('China UnionPay')
  })

  it('has a prefix of 622140 and a length of 18', function(){
    detectNetwork('622140823748006403').should.equal('China UnionPay')
  })

  it('has a prefix of 622141 and a length of 18', function(){
    detectNetwork('622141528365673115').should.equal('China UnionPay')
  })

  it('has a prefix of 622142 and a length of 18', function(){
    detectNetwork('622142171858823844').should.equal('China UnionPay')
  })

  it('has a prefix of 622143 and a length of 18', function(){
    detectNetwork('622143441821233302').should.equal('China UnionPay')
  })

  it('has a prefix of 622144 and a length of 18', function(){
    detectNetwork('622144384750700682').should.equal('China UnionPay')
  })

  it('has a prefix of 622145 and a length of 18', function(){
    detectNetwork('622145178735150247').should.equal('China UnionPay')
  })

  it('has a prefix of 622146 and a length of 18', function(){
    detectNetwork('622146476703088240').should.equal('China UnionPay')
  })

  it('has a prefix of 622147 and a length of 18', function(){
    detectNetwork('622147587542040772').should.equal('China UnionPay')
  })

  it('has a prefix of 622148 and a length of 18', function(){
    detectNetwork('622148428118416165').should.equal('China UnionPay')
  })

  it('has a prefix of 622149 and a length of 18', function(){
    detectNetwork('622149216031220801').should.equal('China UnionPay')
  })

  it('has a prefix of 622150 and a length of 18', function(){
    detectNetwork('622150638006835031').should.equal('China UnionPay')
  })

  it('has a prefix of 622151 and a length of 18', function(){
    detectNetwork('622151617628858323').should.equal('China UnionPay')
  })

  it('has a prefix of 622152 and a length of 18', function(){
    detectNetwork('622152084516325352').should.equal('China UnionPay')
  })

  it('has a prefix of 622153 and a length of 18', function(){
    detectNetwork('622153836040430583').should.equal('China UnionPay')
  })

  it('has a prefix of 622154 and a length of 18', function(){
    detectNetwork('622154315351880305').should.equal('China UnionPay')
  })

  it('has a prefix of 622155 and a length of 18', function(){
    detectNetwork('622155453677185088').should.equal('China UnionPay')
  })

  it('has a prefix of 622156 and a length of 18', function(){
    detectNetwork('622156781185026587').should.equal('China UnionPay')
  })

  it('has a prefix of 622157 and a length of 18', function(){
    detectNetwork('622157014566860132').should.equal('China UnionPay')
  })

  it('has a prefix of 622158 and a length of 18', function(){
    detectNetwork('622158810610536432').should.equal('China UnionPay')
  })

  it('has a prefix of 622159 and a length of 18', function(){
    detectNetwork('622159586673318458').should.equal('China UnionPay')
  })

  it('has a prefix of 622160 and a length of 18', function(){
    detectNetwork('622160614633387376').should.equal('China UnionPay')
  })

  it('has a prefix of 622161 and a length of 18', function(){
    detectNetwork('622161811320304873').should.equal('China UnionPay')
  })

  it('has a prefix of 622162 and a length of 18', function(){
    detectNetwork('622162212003830744').should.equal('China UnionPay')
  })

  it('has a prefix of 622163 and a length of 18', function(){
    detectNetwork('622163334442205788').should.equal('China UnionPay')
  })

  it('has a prefix of 622164 and a length of 18', function(){
    detectNetwork('622164844543431664').should.equal('China UnionPay')
  })

  it('has a prefix of 622165 and a length of 18', function(){
    detectNetwork('622165837434288388').should.equal('China UnionPay')
  })

  it('has a prefix of 622166 and a length of 18', function(){
    detectNetwork('622166578778656657').should.equal('China UnionPay')
  })

  it('has a prefix of 622167 and a length of 18', function(){
    detectNetwork('622167616061605837').should.equal('China UnionPay')
  })

  it('has a prefix of 622168 and a length of 18', function(){
    detectNetwork('622168312528536503').should.equal('China UnionPay')
  })

  it('has a prefix of 622169 and a length of 18', function(){
    detectNetwork('622169085804025380').should.equal('China UnionPay')
  })

  it('has a prefix of 622170 and a length of 18', function(){
    detectNetwork('622170478671062382').should.equal('China UnionPay')
  })

  it('has a prefix of 622171 and a length of 18', function(){
    detectNetwork('622171324831355422').should.equal('China UnionPay')
  })

  it('has a prefix of 622172 and a length of 18', function(){
    detectNetwork('622172416663646536').should.equal('China UnionPay')
  })

  it('has a prefix of 622173 and a length of 18', function(){
    detectNetwork('622173855834080831').should.equal('China UnionPay')
  })

  it('has a prefix of 622174 and a length of 18', function(){
    detectNetwork('622174814276245716').should.equal('China UnionPay')
  })

  it('has a prefix of 622175 and a length of 18', function(){
    detectNetwork('622175143565675757').should.equal('China UnionPay')
  })

  it('has a prefix of 622176 and a length of 18', function(){
    detectNetwork('622176854826477772').should.equal('China UnionPay')
  })

  it('has a prefix of 622177 and a length of 18', function(){
    detectNetwork('622177683345023563').should.equal('China UnionPay')
  })

  it('has a prefix of 622178 and a length of 18', function(){
    detectNetwork('622178825563036280').should.equal('China UnionPay')
  })

  it('has a prefix of 622179 and a length of 18', function(){
    detectNetwork('622179467573041758').should.equal('China UnionPay')
  })

  it('has a prefix of 622180 and a length of 18', function(){
    detectNetwork('622180488374564201').should.equal('China UnionPay')
  })

  it('has a prefix of 622181 and a length of 18', function(){
    detectNetwork('622181875271045746').should.equal('China UnionPay')
  })

  it('has a prefix of 622182 and a length of 18', function(){
    detectNetwork('622182663661284337').should.equal('China UnionPay')
  })

  it('has a prefix of 622183 and a length of 18', function(){
    detectNetwork('622183212603823676').should.equal('China UnionPay')
  })

  it('has a prefix of 622184 and a length of 18', function(){
    detectNetwork('622184402705844437').should.equal('China UnionPay')
  })

  it('has a prefix of 622185 and a length of 18', function(){
    detectNetwork('622185817823328413').should.equal('China UnionPay')
  })

  it('has a prefix of 622186 and a length of 18', function(){
    detectNetwork('622186037818184287').should.equal('China UnionPay')
  })

  it('has a prefix of 622187 and a length of 18', function(){
    detectNetwork('622187473203783313').should.equal('China UnionPay')
  })

  it('has a prefix of 622188 and a length of 18', function(){
    detectNetwork('622188460542021674').should.equal('China UnionPay')
  })

  it('has a prefix of 622189 and a length of 18', function(){
    detectNetwork('622189880505465381').should.equal('China UnionPay')
  })

  it('has a prefix of 622190 and a length of 18', function(){
    detectNetwork('622190614236540484').should.equal('China UnionPay')
  })

  it('has a prefix of 622191 and a length of 18', function(){
    detectNetwork('622191673545288356').should.equal('China UnionPay')
  })

  it('has a prefix of 622192 and a length of 18', function(){
    detectNetwork('622192268886281236').should.equal('China UnionPay')
  })

  it('has a prefix of 622193 and a length of 18', function(){
    detectNetwork('622193237155211745').should.equal('China UnionPay')
  })

  it('has a prefix of 622194 and a length of 18', function(){
    detectNetwork('622194301816388361').should.equal('China UnionPay')
  })

  it('has a prefix of 622195 and a length of 18', function(){
    detectNetwork('622195777754732182').should.equal('China UnionPay')
  })

  it('has a prefix of 622196 and a length of 18', function(){
    detectNetwork('622196513820045012').should.equal('China UnionPay')
  })

  it('has a prefix of 622197 and a length of 18', function(){
    detectNetwork('622197272580858071').should.equal('China UnionPay')
  })

  it('has a prefix of 622198 and a length of 18', function(){
    detectNetwork('622198505462182730').should.equal('China UnionPay')
  })

  it('has a prefix of 622199 and a length of 18', function(){
    detectNetwork('622199622020117654').should.equal('China UnionPay')
  })

  it('has a prefix of 622200 and a length of 18', function(){
    detectNetwork('622200847837767173').should.equal('China UnionPay')
  })

  it('has a prefix of 622201 and a length of 18', function(){
    detectNetwork('622201024230535436').should.equal('China UnionPay')
  })

  it('has a prefix of 622202 and a length of 18', function(){
    detectNetwork('622202710822745641').should.equal('China UnionPay')
  })

  it('has a prefix of 622203 and a length of 18', function(){
    detectNetwork('622203105717156108').should.equal('China UnionPay')
  })

  it('has a prefix of 622204 and a length of 18', function(){
    detectNetwork('622204366142488563').should.equal('China UnionPay')
  })

  it('has a prefix of 622205 and a length of 18', function(){
    detectNetwork('622205105384055005').should.equal('China UnionPay')
  })

  it('has a prefix of 622206 and a length of 18', function(){
    detectNetwork('622206773808246770').should.equal('China UnionPay')
  })

  it('has a prefix of 622207 and a length of 18', function(){
    detectNetwork('622207817204588763').should.equal('China UnionPay')
  })

  it('has a prefix of 622208 and a length of 18', function(){
    detectNetwork('622208404127113352').should.equal('China UnionPay')
  })

  it('has a prefix of 622209 and a length of 18', function(){
    detectNetwork('622209504786671155').should.equal('China UnionPay')
  })

  it('has a prefix of 622210 and a length of 18', function(){
    detectNetwork('622210101014382733').should.equal('China UnionPay')
  })

  it('has a prefix of 622211 and a length of 18', function(){
    detectNetwork('622211445117018243').should.equal('China UnionPay')
  })

  it('has a prefix of 622212 and a length of 18', function(){
    detectNetwork('622212524208470302').should.equal('China UnionPay')
  })

  it('has a prefix of 622213 and a length of 18', function(){
    detectNetwork('622213001051245475').should.equal('China UnionPay')
  })

  it('has a prefix of 622214 and a length of 18', function(){
    detectNetwork('622214522320140707').should.equal('China UnionPay')
  })

  it('has a prefix of 622215 and a length of 18', function(){
    detectNetwork('622215027846654815').should.equal('China UnionPay')
  })

  it('has a prefix of 622216 and a length of 18', function(){
    detectNetwork('622216704867428856').should.equal('China UnionPay')
  })

  it('has a prefix of 622217 and a length of 18', function(){
    detectNetwork('622217532624323246').should.equal('China UnionPay')
  })

  it('has a prefix of 622218 and a length of 18', function(){
    detectNetwork('622218175270386312').should.equal('China UnionPay')
  })

  it('has a prefix of 622219 and a length of 18', function(){
    detectNetwork('622219332011161086').should.equal('China UnionPay')
  })

  it('has a prefix of 622220 and a length of 18', function(){
    detectNetwork('622220032462381157').should.equal('China UnionPay')
  })

  it('has a prefix of 622221 and a length of 18', function(){
    detectNetwork('622221712183307673').should.equal('China UnionPay')
  })

  it('has a prefix of 622222 and a length of 18', function(){
    detectNetwork('622222444704234221').should.equal('China UnionPay')
  })

  it('has a prefix of 622223 and a length of 18', function(){
    detectNetwork('622223020383641254').should.equal('China UnionPay')
  })

  it('has a prefix of 622224 and a length of 18', function(){
    detectNetwork('622224378148080748').should.equal('China UnionPay')
  })

  it('has a prefix of 622225 and a length of 18', function(){
    detectNetwork('622225525773666380').should.equal('China UnionPay')
  })

  it('has a prefix of 622226 and a length of 18', function(){
    detectNetwork('622226101153844240').should.equal('China UnionPay')
  })

  it('has a prefix of 622227 and a length of 18', function(){
    detectNetwork('622227603058315535').should.equal('China UnionPay')
  })

  it('has a prefix of 622228 and a length of 18', function(){
    detectNetwork('622228308158423685').should.equal('China UnionPay')
  })

  it('has a prefix of 622229 and a length of 18', function(){
    detectNetwork('622229622483271463').should.equal('China UnionPay')
  })

  it('has a prefix of 622230 and a length of 18', function(){
    detectNetwork('622230733063227178').should.equal('China UnionPay')
  })

  it('has a prefix of 622231 and a length of 18', function(){
    detectNetwork('622231527555115342').should.equal('China UnionPay')
  })

  it('has a prefix of 622232 and a length of 18', function(){
    detectNetwork('622232427810514363').should.equal('China UnionPay')
  })

  it('has a prefix of 622233 and a length of 18', function(){
    detectNetwork('622233832066266248').should.equal('China UnionPay')
  })

  it('has a prefix of 622234 and a length of 18', function(){
    detectNetwork('622234864045246425').should.equal('China UnionPay')
  })

  it('has a prefix of 622235 and a length of 18', function(){
    detectNetwork('622235580527364402').should.equal('China UnionPay')
  })

  it('has a prefix of 622236 and a length of 18', function(){
    detectNetwork('622236371753368545').should.equal('China UnionPay')
  })

  it('has a prefix of 622237 and a length of 18', function(){
    detectNetwork('622237230127012822').should.equal('China UnionPay')
  })

  it('has a prefix of 622238 and a length of 18', function(){
    detectNetwork('622238853761547211').should.equal('China UnionPay')
  })

  it('has a prefix of 622239 and a length of 18', function(){
    detectNetwork('622239853247633266').should.equal('China UnionPay')
  })

  it('has a prefix of 622240 and a length of 18', function(){
    detectNetwork('622240252005770665').should.equal('China UnionPay')
  })

  it('has a prefix of 622241 and a length of 18', function(){
    detectNetwork('622241346750836256').should.equal('China UnionPay')
  })

  it('has a prefix of 622242 and a length of 18', function(){
    detectNetwork('622242480657321557').should.equal('China UnionPay')
  })

  it('has a prefix of 622243 and a length of 18', function(){
    detectNetwork('622243366173003416').should.equal('China UnionPay')
  })

  it('has a prefix of 622244 and a length of 18', function(){
    detectNetwork('622244864108581841').should.equal('China UnionPay')
  })

  it('has a prefix of 622245 and a length of 18', function(){
    detectNetwork('622245228836645726').should.equal('China UnionPay')
  })

  it('has a prefix of 622246 and a length of 18', function(){
    detectNetwork('622246405716164661').should.equal('China UnionPay')
  })

  it('has a prefix of 622247 and a length of 18', function(){
    detectNetwork('622247227130053273').should.equal('China UnionPay')
  })

  it('has a prefix of 622248 and a length of 18', function(){
    detectNetwork('622248470064712684').should.equal('China UnionPay')
  })

  it('has a prefix of 622249 and a length of 18', function(){
    detectNetwork('622249514821428815').should.equal('China UnionPay')
  })

  it('has a prefix of 622250 and a length of 18', function(){
    detectNetwork('622250033814820232').should.equal('China UnionPay')
  })

  it('has a prefix of 622251 and a length of 18', function(){
    detectNetwork('622251645424324477').should.equal('China UnionPay')
  })

  it('has a prefix of 622252 and a length of 18', function(){
    detectNetwork('622252163782332335').should.equal('China UnionPay')
  })

  it('has a prefix of 622253 and a length of 18', function(){
    detectNetwork('622253518160202404').should.equal('China UnionPay')
  })

  it('has a prefix of 622254 and a length of 18', function(){
    detectNetwork('622254046833724181').should.equal('China UnionPay')
  })

  it('has a prefix of 622255 and a length of 18', function(){
    detectNetwork('622255230581077545').should.equal('China UnionPay')
  })

  it('has a prefix of 622256 and a length of 18', function(){
    detectNetwork('622256010618006046').should.equal('China UnionPay')
  })

  it('has a prefix of 622257 and a length of 18', function(){
    detectNetwork('622257627552600754').should.equal('China UnionPay')
  })

  it('has a prefix of 622258 and a length of 18', function(){
    detectNetwork('622258482207087518').should.equal('China UnionPay')
  })

  it('has a prefix of 622259 and a length of 18', function(){
    detectNetwork('622259315474876563').should.equal('China UnionPay')
  })

  it('has a prefix of 622260 and a length of 18', function(){
    detectNetwork('622260376808444078').should.equal('China UnionPay')
  })

  it('has a prefix of 622261 and a length of 18', function(){
    detectNetwork('622261484164340270').should.equal('China UnionPay')
  })

  it('has a prefix of 622262 and a length of 18', function(){
    detectNetwork('622262104048440452').should.equal('China UnionPay')
  })

  it('has a prefix of 622263 and a length of 18', function(){
    detectNetwork('622263207463316167').should.equal('China UnionPay')
  })

  it('has a prefix of 622264 and a length of 18', function(){
    detectNetwork('622264708827166302').should.equal('China UnionPay')
  })

  it('has a prefix of 622265 and a length of 18', function(){
    detectNetwork('622265075818702243').should.equal('China UnionPay')
  })

  it('has a prefix of 622266 and a length of 18', function(){
    detectNetwork('622266283153113182').should.equal('China UnionPay')
  })

  it('has a prefix of 622267 and a length of 18', function(){
    detectNetwork('622267481264733766').should.equal('China UnionPay')
  })

  it('has a prefix of 622268 and a length of 18', function(){
    detectNetwork('622268278724325857').should.equal('China UnionPay')
  })

  it('has a prefix of 622269 and a length of 18', function(){
    detectNetwork('622269733056644887').should.equal('China UnionPay')
  })

  it('has a prefix of 622270 and a length of 18', function(){
    detectNetwork('622270455746263385').should.equal('China UnionPay')
  })

  it('has a prefix of 622271 and a length of 18', function(){
    detectNetwork('622271368141441408').should.equal('China UnionPay')
  })

  it('has a prefix of 622272 and a length of 18', function(){
    detectNetwork('622272235305320425').should.equal('China UnionPay')
  })

  it('has a prefix of 622273 and a length of 18', function(){
    detectNetwork('622273738462636514').should.equal('China UnionPay')
  })

  it('has a prefix of 622274 and a length of 18', function(){
    detectNetwork('622274178260553475').should.equal('China UnionPay')
  })

  it('has a prefix of 622275 and a length of 18', function(){
    detectNetwork('622275502788108783').should.equal('China UnionPay')
  })

  it('has a prefix of 622276 and a length of 18', function(){
    detectNetwork('622276858056572728').should.equal('China UnionPay')
  })

  it('has a prefix of 622277 and a length of 18', function(){
    detectNetwork('622277675008817053').should.equal('China UnionPay')
  })

  it('has a prefix of 622278 and a length of 18', function(){
    detectNetwork('622278831371770324').should.equal('China UnionPay')
  })

  it('has a prefix of 622279 and a length of 18', function(){
    detectNetwork('622279235317144854').should.equal('China UnionPay')
  })

  it('has a prefix of 622280 and a length of 18', function(){
    detectNetwork('622280348863361762').should.equal('China UnionPay')
  })

  it('has a prefix of 622281 and a length of 18', function(){
    detectNetwork('622281640456311175').should.equal('China UnionPay')
  })

  it('has a prefix of 622282 and a length of 18', function(){
    detectNetwork('622282418486301658').should.equal('China UnionPay')
  })

  it('has a prefix of 622283 and a length of 18', function(){
    detectNetwork('622283017278635838').should.equal('China UnionPay')
  })

  it('has a prefix of 622284 and a length of 18', function(){
    detectNetwork('622284673253380800').should.equal('China UnionPay')
  })

  it('has a prefix of 622285 and a length of 18', function(){
    detectNetwork('622285888755302235').should.equal('China UnionPay')
  })

  it('has a prefix of 622286 and a length of 18', function(){
    detectNetwork('622286174752635017').should.equal('China UnionPay')
  })

  it('has a prefix of 622287 and a length of 18', function(){
    detectNetwork('622287341201323143').should.equal('China UnionPay')
  })

  it('has a prefix of 622288 and a length of 18', function(){
    detectNetwork('622288630286766182').should.equal('China UnionPay')
  })

  it('has a prefix of 622289 and a length of 18', function(){
    detectNetwork('622289126374736315').should.equal('China UnionPay')
  })

  it('has a prefix of 622290 and a length of 18', function(){
    detectNetwork('622290481802721825').should.equal('China UnionPay')
  })

  it('has a prefix of 622291 and a length of 18', function(){
    detectNetwork('622291235632278862').should.equal('China UnionPay')
  })

  it('has a prefix of 622292 and a length of 18', function(){
    detectNetwork('622292708366200053').should.equal('China UnionPay')
  })

  it('has a prefix of 622293 and a length of 18', function(){
    detectNetwork('622293145156316360').should.equal('China UnionPay')
  })

  it('has a prefix of 622294 and a length of 18', function(){
    detectNetwork('622294375866716451').should.equal('China UnionPay')
  })

  it('has a prefix of 622295 and a length of 18', function(){
    detectNetwork('622295615244177272').should.equal('China UnionPay')
  })

  it('has a prefix of 622296 and a length of 18', function(){
    detectNetwork('622296408518004386').should.equal('China UnionPay')
  })

  it('has a prefix of 622297 and a length of 18', function(){
    detectNetwork('622297475522216113').should.equal('China UnionPay')
  })

  it('has a prefix of 622298 and a length of 18', function(){
    detectNetwork('622298765147286552').should.equal('China UnionPay')
  })

  it('has a prefix of 622299 and a length of 18', function(){
    detectNetwork('622299021754888484').should.equal('China UnionPay')
  })

  it('has a prefix of 622300 and a length of 18', function(){
    detectNetwork('622300354550875007').should.equal('China UnionPay')
  })

  it('has a prefix of 622301 and a length of 18', function(){
    detectNetwork('622301032867444511').should.equal('China UnionPay')
  })

  it('has a prefix of 622302 and a length of 18', function(){
    detectNetwork('622302406606443557').should.equal('China UnionPay')
  })

  it('has a prefix of 622303 and a length of 18', function(){
    detectNetwork('622303711717674780').should.equal('China UnionPay')
  })

  it('has a prefix of 622304 and a length of 18', function(){
    detectNetwork('622304836726546316').should.equal('China UnionPay')
  })

  it('has a prefix of 622305 and a length of 18', function(){
    detectNetwork('622305264738148316').should.equal('China UnionPay')
  })

  it('has a prefix of 622306 and a length of 18', function(){
    detectNetwork('622306346264706525').should.equal('China UnionPay')
  })

  it('has a prefix of 622307 and a length of 18', function(){
    detectNetwork('622307765203758657').should.equal('China UnionPay')
  })

  it('has a prefix of 622308 and a length of 18', function(){
    detectNetwork('622308517346411841').should.equal('China UnionPay')
  })

  it('has a prefix of 622309 and a length of 18', function(){
    detectNetwork('622309045747184154').should.equal('China UnionPay')
  })

  it('has a prefix of 622310 and a length of 18', function(){
    detectNetwork('622310526001100566').should.equal('China UnionPay')
  })

  it('has a prefix of 622311 and a length of 18', function(){
    detectNetwork('622311100445256757').should.equal('China UnionPay')
  })

  it('has a prefix of 622312 and a length of 18', function(){
    detectNetwork('622312466358566124').should.equal('China UnionPay')
  })

  it('has a prefix of 622313 and a length of 18', function(){
    detectNetwork('622313803167401812').should.equal('China UnionPay')
  })

  it('has a prefix of 622314 and a length of 18', function(){
    detectNetwork('622314627523244701').should.equal('China UnionPay')
  })

  it('has a prefix of 622315 and a length of 18', function(){
    detectNetwork('622315718651408015').should.equal('China UnionPay')
  })

  it('has a prefix of 622316 and a length of 18', function(){
    detectNetwork('622316620728824232').should.equal('China UnionPay')
  })

  it('has a prefix of 622317 and a length of 18', function(){
    detectNetwork('622317552704630410').should.equal('China UnionPay')
  })

  it('has a prefix of 622318 and a length of 18', function(){
    detectNetwork('622318824464247834').should.equal('China UnionPay')
  })

  it('has a prefix of 622319 and a length of 18', function(){
    detectNetwork('622319442523218652').should.equal('China UnionPay')
  })

  it('has a prefix of 622320 and a length of 18', function(){
    detectNetwork('622320614413663513').should.equal('China UnionPay')
  })

  it('has a prefix of 622321 and a length of 18', function(){
    detectNetwork('622321485325432526').should.equal('China UnionPay')
  })

  it('has a prefix of 622322 and a length of 18', function(){
    detectNetwork('622322572506354281').should.equal('China UnionPay')
  })

  it('has a prefix of 622323 and a length of 18', function(){
    detectNetwork('622323228747215441').should.equal('China UnionPay')
  })

  it('has a prefix of 622324 and a length of 18', function(){
    detectNetwork('622324877602344328').should.equal('China UnionPay')
  })

  it('has a prefix of 622325 and a length of 18', function(){
    detectNetwork('622325043348603705').should.equal('China UnionPay')
  })

  it('has a prefix of 622326 and a length of 18', function(){
    detectNetwork('622326084734715615').should.equal('China UnionPay')
  })

  it('has a prefix of 622327 and a length of 18', function(){
    detectNetwork('622327354634635602').should.equal('China UnionPay')
  })

  it('has a prefix of 622328 and a length of 18', function(){
    detectNetwork('622328610780644217').should.equal('China UnionPay')
  })

  it('has a prefix of 622329 and a length of 18', function(){
    detectNetwork('622329466255104181').should.equal('China UnionPay')
  })

  it('has a prefix of 622330 and a length of 18', function(){
    detectNetwork('622330383102117424').should.equal('China UnionPay')
  })

  it('has a prefix of 622331 and a length of 18', function(){
    detectNetwork('622331785624823014').should.equal('China UnionPay')
  })

  it('has a prefix of 622332 and a length of 18', function(){
    detectNetwork('622332453010685558').should.equal('China UnionPay')
  })

  it('has a prefix of 622333 and a length of 18', function(){
    detectNetwork('622333154653206863').should.equal('China UnionPay')
  })

  it('has a prefix of 622334 and a length of 18', function(){
    detectNetwork('622334310637204464').should.equal('China UnionPay')
  })

  it('has a prefix of 622335 and a length of 18', function(){
    detectNetwork('622335457424616807').should.equal('China UnionPay')
  })

  it('has a prefix of 622336 and a length of 18', function(){
    detectNetwork('622336153242818270').should.equal('China UnionPay')
  })

  it('has a prefix of 622337 and a length of 18', function(){
    detectNetwork('622337317884775107').should.equal('China UnionPay')
  })

  it('has a prefix of 622338 and a length of 18', function(){
    detectNetwork('622338866787157761').should.equal('China UnionPay')
  })

  it('has a prefix of 622339 and a length of 18', function(){
    detectNetwork('622339044710242232').should.equal('China UnionPay')
  })

  it('has a prefix of 622340 and a length of 18', function(){
    detectNetwork('622340317430205114').should.equal('China UnionPay')
  })

  it('has a prefix of 622341 and a length of 18', function(){
    detectNetwork('622341427776750831').should.equal('China UnionPay')
  })

  it('has a prefix of 622342 and a length of 18', function(){
    detectNetwork('622342217531708025').should.equal('China UnionPay')
  })

  it('has a prefix of 622343 and a length of 18', function(){
    detectNetwork('622343380308321112').should.equal('China UnionPay')
  })

  it('has a prefix of 622344 and a length of 18', function(){
    detectNetwork('622344285446127511').should.equal('China UnionPay')
  })

  it('has a prefix of 622345 and a length of 18', function(){
    detectNetwork('622345027017734118').should.equal('China UnionPay')
  })

  it('has a prefix of 622346 and a length of 18', function(){
    detectNetwork('622346731070842500').should.equal('China UnionPay')
  })

  it('has a prefix of 622347 and a length of 18', function(){
    detectNetwork('622347741804740826').should.equal('China UnionPay')
  })

  it('has a prefix of 622348 and a length of 18', function(){
    detectNetwork('622348754365116803').should.equal('China UnionPay')
  })

  it('has a prefix of 622349 and a length of 18', function(){
    detectNetwork('622349446678628660').should.equal('China UnionPay')
  })

  it('has a prefix of 622350 and a length of 18', function(){
    detectNetwork('622350443200466604').should.equal('China UnionPay')
  })

  it('has a prefix of 622351 and a length of 18', function(){
    detectNetwork('622351273073813604').should.equal('China UnionPay')
  })

  it('has a prefix of 622352 and a length of 18', function(){
    detectNetwork('622352653335065308').should.equal('China UnionPay')
  })

  it('has a prefix of 622353 and a length of 18', function(){
    detectNetwork('622353656426652542').should.equal('China UnionPay')
  })

  it('has a prefix of 622354 and a length of 18', function(){
    detectNetwork('622354825761845050').should.equal('China UnionPay')
  })

  it('has a prefix of 622355 and a length of 18', function(){
    detectNetwork('622355535722730186').should.equal('China UnionPay')
  })

  it('has a prefix of 622356 and a length of 18', function(){
    detectNetwork('622356536017381310').should.equal('China UnionPay')
  })

  it('has a prefix of 622357 and a length of 18', function(){
    detectNetwork('622357153728508831').should.equal('China UnionPay')
  })

  it('has a prefix of 622358 and a length of 18', function(){
    detectNetwork('622358546866365754').should.equal('China UnionPay')
  })

  it('has a prefix of 622359 and a length of 18', function(){
    detectNetwork('622359815202010445').should.equal('China UnionPay')
  })

  it('has a prefix of 622360 and a length of 18', function(){
    detectNetwork('622360407161253384').should.equal('China UnionPay')
  })

  it('has a prefix of 622361 and a length of 18', function(){
    detectNetwork('622361440170261352').should.equal('China UnionPay')
  })

  it('has a prefix of 622362 and a length of 18', function(){
    detectNetwork('622362556042281327').should.equal('China UnionPay')
  })

  it('has a prefix of 622363 and a length of 18', function(){
    detectNetwork('622363012681755318').should.equal('China UnionPay')
  })

  it('has a prefix of 622364 and a length of 18', function(){
    detectNetwork('622364632116817555').should.equal('China UnionPay')
  })

  it('has a prefix of 622365 and a length of 18', function(){
    detectNetwork('622365363717628838').should.equal('China UnionPay')
  })

  it('has a prefix of 622366 and a length of 18', function(){
    detectNetwork('622366358885036880').should.equal('China UnionPay')
  })

  it('has a prefix of 622367 and a length of 18', function(){
    detectNetwork('622367702363350170').should.equal('China UnionPay')
  })

  it('has a prefix of 622368 and a length of 18', function(){
    detectNetwork('622368510848076336').should.equal('China UnionPay')
  })

  it('has a prefix of 622369 and a length of 18', function(){
    detectNetwork('622369001353034874').should.equal('China UnionPay')
  })

  it('has a prefix of 622370 and a length of 18', function(){
    detectNetwork('622370352443844853').should.equal('China UnionPay')
  })

  it('has a prefix of 622371 and a length of 18', function(){
    detectNetwork('622371641755003767').should.equal('China UnionPay')
  })

  it('has a prefix of 622372 and a length of 18', function(){
    detectNetwork('622372201162675585').should.equal('China UnionPay')
  })

  it('has a prefix of 622373 and a length of 18', function(){
    detectNetwork('622373504066844782').should.equal('China UnionPay')
  })

  it('has a prefix of 622374 and a length of 18', function(){
    detectNetwork('622374355041322505').should.equal('China UnionPay')
  })

  it('has a prefix of 622375 and a length of 18', function(){
    detectNetwork('622375216701544323').should.equal('China UnionPay')
  })

  it('has a prefix of 622376 and a length of 18', function(){
    detectNetwork('622376373376473840').should.equal('China UnionPay')
  })

  it('has a prefix of 622377 and a length of 18', function(){
    detectNetwork('622377476138354543').should.equal('China UnionPay')
  })

  it('has a prefix of 622378 and a length of 18', function(){
    detectNetwork('622378517188368823').should.equal('China UnionPay')
  })

  it('has a prefix of 622379 and a length of 18', function(){
    detectNetwork('622379272253645783').should.equal('China UnionPay')
  })

  it('has a prefix of 622380 and a length of 18', function(){
    detectNetwork('622380440842843576').should.equal('China UnionPay')
  })

  it('has a prefix of 622381 and a length of 18', function(){
    detectNetwork('622381741277743415').should.equal('China UnionPay')
  })

  it('has a prefix of 622382 and a length of 18', function(){
    detectNetwork('622382023127820305').should.equal('China UnionPay')
  })

  it('has a prefix of 622383 and a length of 18', function(){
    detectNetwork('622383275066446315').should.equal('China UnionPay')
  })

  it('has a prefix of 622384 and a length of 18', function(){
    detectNetwork('622384860658056325').should.equal('China UnionPay')
  })

  it('has a prefix of 622385 and a length of 18', function(){
    detectNetwork('622385031050451036').should.equal('China UnionPay')
  })

  it('has a prefix of 622386 and a length of 18', function(){
    detectNetwork('622386624102862381').should.equal('China UnionPay')
  })

  it('has a prefix of 622387 and a length of 18', function(){
    detectNetwork('622387845880308834').should.equal('China UnionPay')
  })

  it('has a prefix of 622388 and a length of 18', function(){
    detectNetwork('622388600850747376').should.equal('China UnionPay')
  })

  it('has a prefix of 622389 and a length of 18', function(){
    detectNetwork('622389778517702027').should.equal('China UnionPay')
  })

  it('has a prefix of 622390 and a length of 18', function(){
    detectNetwork('622390510327374122').should.equal('China UnionPay')
  })

  it('has a prefix of 622391 and a length of 18', function(){
    detectNetwork('622391162782251801').should.equal('China UnionPay')
  })

  it('has a prefix of 622392 and a length of 18', function(){
    detectNetwork('622392017731064674').should.equal('China UnionPay')
  })

  it('has a prefix of 622393 and a length of 18', function(){
    detectNetwork('622393604572421468').should.equal('China UnionPay')
  })

  it('has a prefix of 622394 and a length of 18', function(){
    detectNetwork('622394005862230805').should.equal('China UnionPay')
  })

  it('has a prefix of 622395 and a length of 18', function(){
    detectNetwork('622395360033211053').should.equal('China UnionPay')
  })

  it('has a prefix of 622396 and a length of 18', function(){
    detectNetwork('622396308582176476').should.equal('China UnionPay')
  })

  it('has a prefix of 622397 and a length of 18', function(){
    detectNetwork('622397811762787824').should.equal('China UnionPay')
  })

  it('has a prefix of 622398 and a length of 18', function(){
    detectNetwork('622398200120626705').should.equal('China UnionPay')
  })

  it('has a prefix of 622399 and a length of 18', function(){
    detectNetwork('622399741402583557').should.equal('China UnionPay')
  })

  it('has a prefix of 622400 and a length of 18', function(){
    detectNetwork('622400070470377420').should.equal('China UnionPay')
  })

  it('has a prefix of 622401 and a length of 18', function(){
    detectNetwork('622401544372542261').should.equal('China UnionPay')
  })

  it('has a prefix of 622402 and a length of 18', function(){
    detectNetwork('622402448514506440').should.equal('China UnionPay')
  })

  it('has a prefix of 622403 and a length of 18', function(){
    detectNetwork('622403666348717422').should.equal('China UnionPay')
  })

  it('has a prefix of 622404 and a length of 18', function(){
    detectNetwork('622404030102607581').should.equal('China UnionPay')
  })

  it('has a prefix of 622405 and a length of 18', function(){
    detectNetwork('622405235684554116').should.equal('China UnionPay')
  })

  it('has a prefix of 622406 and a length of 18', function(){
    detectNetwork('622406314244174316').should.equal('China UnionPay')
  })

  it('has a prefix of 622407 and a length of 18', function(){
    detectNetwork('622407333171432578').should.equal('China UnionPay')
  })

  it('has a prefix of 622408 and a length of 18', function(){
    detectNetwork('622408584363802523').should.equal('China UnionPay')
  })

  it('has a prefix of 622409 and a length of 18', function(){
    detectNetwork('622409411340116738').should.equal('China UnionPay')
  })

  it('has a prefix of 622410 and a length of 18', function(){
    detectNetwork('622410551880831453').should.equal('China UnionPay')
  })

  it('has a prefix of 622411 and a length of 18', function(){
    detectNetwork('622411354505017363').should.equal('China UnionPay')
  })

  it('has a prefix of 622412 and a length of 18', function(){
    detectNetwork('622412273047174323').should.equal('China UnionPay')
  })

  it('has a prefix of 622413 and a length of 18', function(){
    detectNetwork('622413881812426004').should.equal('China UnionPay')
  })

  it('has a prefix of 622414 and a length of 18', function(){
    detectNetwork('622414525876787571').should.equal('China UnionPay')
  })

  it('has a prefix of 622415 and a length of 18', function(){
    detectNetwork('622415436713017833').should.equal('China UnionPay')
  })

  it('has a prefix of 622416 and a length of 18', function(){
    detectNetwork('622416574450361067').should.equal('China UnionPay')
  })

  it('has a prefix of 622417 and a length of 18', function(){
    detectNetwork('622417276178612704').should.equal('China UnionPay')
  })

  it('has a prefix of 622418 and a length of 18', function(){
    detectNetwork('622418167584717486').should.equal('China UnionPay')
  })

  it('has a prefix of 622419 and a length of 18', function(){
    detectNetwork('622419656518358341').should.equal('China UnionPay')
  })

  it('has a prefix of 622420 and a length of 18', function(){
    detectNetwork('622420525564057634').should.equal('China UnionPay')
  })

  it('has a prefix of 622421 and a length of 18', function(){
    detectNetwork('622421814187827646').should.equal('China UnionPay')
  })

  it('has a prefix of 622422 and a length of 18', function(){
    detectNetwork('622422685368563384').should.equal('China UnionPay')
  })

  it('has a prefix of 622423 and a length of 18', function(){
    detectNetwork('622423867372413817').should.equal('China UnionPay')
  })

  it('has a prefix of 622424 and a length of 18', function(){
    detectNetwork('622424161836343283').should.equal('China UnionPay')
  })

  it('has a prefix of 622425 and a length of 18', function(){
    detectNetwork('622425143337060686').should.equal('China UnionPay')
  })

  it('has a prefix of 622426 and a length of 18', function(){
    detectNetwork('622426841763608087').should.equal('China UnionPay')
  })

  it('has a prefix of 622427 and a length of 18', function(){
    detectNetwork('622427620727637738').should.equal('China UnionPay')
  })

  it('has a prefix of 622428 and a length of 18', function(){
    detectNetwork('622428768164573645').should.equal('China UnionPay')
  })

  it('has a prefix of 622429 and a length of 18', function(){
    detectNetwork('622429886361733381').should.equal('China UnionPay')
  })

  it('has a prefix of 622430 and a length of 18', function(){
    detectNetwork('622430481845131502').should.equal('China UnionPay')
  })

  it('has a prefix of 622431 and a length of 18', function(){
    detectNetwork('622431127465162476').should.equal('China UnionPay')
  })

  it('has a prefix of 622432 and a length of 18', function(){
    detectNetwork('622432073782136174').should.equal('China UnionPay')
  })

  it('has a prefix of 622433 and a length of 18', function(){
    detectNetwork('622433342103575863').should.equal('China UnionPay')
  })

  it('has a prefix of 622434 and a length of 18', function(){
    detectNetwork('622434338407051077').should.equal('China UnionPay')
  })

  it('has a prefix of 622435 and a length of 18', function(){
    detectNetwork('622435534577840230').should.equal('China UnionPay')
  })

  it('has a prefix of 622436 and a length of 18', function(){
    detectNetwork('622436675361240647').should.equal('China UnionPay')
  })

  it('has a prefix of 622437 and a length of 18', function(){
    detectNetwork('622437488866080748').should.equal('China UnionPay')
  })

  it('has a prefix of 622438 and a length of 18', function(){
    detectNetwork('622438180463866522').should.equal('China UnionPay')
  })

  it('has a prefix of 622439 and a length of 18', function(){
    detectNetwork('622439781651254822').should.equal('China UnionPay')
  })

  it('has a prefix of 622440 and a length of 18', function(){
    detectNetwork('622440320355706625').should.equal('China UnionPay')
  })

  it('has a prefix of 622441 and a length of 18', function(){
    detectNetwork('622441178578352386').should.equal('China UnionPay')
  })

  it('has a prefix of 622442 and a length of 18', function(){
    detectNetwork('622442226461752448').should.equal('China UnionPay')
  })

  it('has a prefix of 622443 and a length of 18', function(){
    detectNetwork('622443708841126734').should.equal('China UnionPay')
  })

  it('has a prefix of 622444 and a length of 18', function(){
    detectNetwork('622444074447826074').should.equal('China UnionPay')
  })

  it('has a prefix of 622445 and a length of 18', function(){
    detectNetwork('622445144545325357').should.equal('China UnionPay')
  })

  it('has a prefix of 622446 and a length of 18', function(){
    detectNetwork('622446050034721721').should.equal('China UnionPay')
  })

  it('has a prefix of 622447 and a length of 18', function(){
    detectNetwork('622447375110033431').should.equal('China UnionPay')
  })

  it('has a prefix of 622448 and a length of 18', function(){
    detectNetwork('622448361133403481').should.equal('China UnionPay')
  })

  it('has a prefix of 622449 and a length of 18', function(){
    detectNetwork('622449267114614680').should.equal('China UnionPay')
  })

  it('has a prefix of 622450 and a length of 18', function(){
    detectNetwork('622450218278358118').should.equal('China UnionPay')
  })

  it('has a prefix of 622451 and a length of 18', function(){
    detectNetwork('622451382582363322').should.equal('China UnionPay')
  })

  it('has a prefix of 622452 and a length of 18', function(){
    detectNetwork('622452451424435107').should.equal('China UnionPay')
  })

  it('has a prefix of 622453 and a length of 18', function(){
    detectNetwork('622453313338418067').should.equal('China UnionPay')
  })

  it('has a prefix of 622454 and a length of 18', function(){
    detectNetwork('622454365888726837').should.equal('China UnionPay')
  })

  it('has a prefix of 622455 and a length of 18', function(){
    detectNetwork('622455802467800684').should.equal('China UnionPay')
  })

  it('has a prefix of 622456 and a length of 18', function(){
    detectNetwork('622456187575663755').should.equal('China UnionPay')
  })

  it('has a prefix of 622457 and a length of 18', function(){
    detectNetwork('622457016174327137').should.equal('China UnionPay')
  })

  it('has a prefix of 622458 and a length of 18', function(){
    detectNetwork('622458764003542017').should.equal('China UnionPay')
  })

  it('has a prefix of 622459 and a length of 18', function(){
    detectNetwork('622459046775835660').should.equal('China UnionPay')
  })

  it('has a prefix of 622460 and a length of 18', function(){
    detectNetwork('622460175753256247').should.equal('China UnionPay')
  })

  it('has a prefix of 622461 and a length of 18', function(){
    detectNetwork('622461108324828831').should.equal('China UnionPay')
  })

  it('has a prefix of 622462 and a length of 18', function(){
    detectNetwork('622462861251448248').should.equal('China UnionPay')
  })

  it('has a prefix of 622463 and a length of 18', function(){
    detectNetwork('622463757660512357').should.equal('China UnionPay')
  })

  it('has a prefix of 622464 and a length of 18', function(){
    detectNetwork('622464362344534484').should.equal('China UnionPay')
  })

  it('has a prefix of 622465 and a length of 18', function(){
    detectNetwork('622465381186678086').should.equal('China UnionPay')
  })

  it('has a prefix of 622466 and a length of 18', function(){
    detectNetwork('622466405577648450').should.equal('China UnionPay')
  })

  it('has a prefix of 622467 and a length of 18', function(){
    detectNetwork('622467215531582862').should.equal('China UnionPay')
  })

  it('has a prefix of 622468 and a length of 18', function(){
    detectNetwork('622468718540032833').should.equal('China UnionPay')
  })

  it('has a prefix of 622469 and a length of 18', function(){
    detectNetwork('622469721844558856').should.equal('China UnionPay')
  })

  it('has a prefix of 622470 and a length of 18', function(){
    detectNetwork('622470444506025222').should.equal('China UnionPay')
  })

  it('has a prefix of 622471 and a length of 18', function(){
    detectNetwork('622471255003240436').should.equal('China UnionPay')
  })

  it('has a prefix of 622472 and a length of 18', function(){
    detectNetwork('622472250726861528').should.equal('China UnionPay')
  })

  it('has a prefix of 622473 and a length of 18', function(){
    detectNetwork('622473271080770450').should.equal('China UnionPay')
  })

  it('has a prefix of 622474 and a length of 18', function(){
    detectNetwork('622474040024716423').should.equal('China UnionPay')
  })

  it('has a prefix of 622475 and a length of 18', function(){
    detectNetwork('622475351852132312').should.equal('China UnionPay')
  })

  it('has a prefix of 622476 and a length of 18', function(){
    detectNetwork('622476501515356028').should.equal('China UnionPay')
  })

  it('has a prefix of 622477 and a length of 18', function(){
    detectNetwork('622477618468013344').should.equal('China UnionPay')
  })

  it('has a prefix of 622478 and a length of 18', function(){
    detectNetwork('622478372586714858').should.equal('China UnionPay')
  })

  it('has a prefix of 622479 and a length of 18', function(){
    detectNetwork('622479341776140840').should.equal('China UnionPay')
  })

  it('has a prefix of 622480 and a length of 18', function(){
    detectNetwork('622480304518482457').should.equal('China UnionPay')
  })

  it('has a prefix of 622481 and a length of 18', function(){
    detectNetwork('622481108683715065').should.equal('China UnionPay')
  })

  it('has a prefix of 622482 and a length of 18', function(){
    detectNetwork('622482010681032055').should.equal('China UnionPay')
  })

  it('has a prefix of 622483 and a length of 18', function(){
    detectNetwork('622483023116758163').should.equal('China UnionPay')
  })

  it('has a prefix of 622484 and a length of 18', function(){
    detectNetwork('622484747412205684').should.equal('China UnionPay')
  })

  it('has a prefix of 622485 and a length of 18', function(){
    detectNetwork('622485376421017213').should.equal('China UnionPay')
  })

  it('has a prefix of 622486 and a length of 18', function(){
    detectNetwork('622486356070756141').should.equal('China UnionPay')
  })

  it('has a prefix of 622487 and a length of 18', function(){
    detectNetwork('622487273378865736').should.equal('China UnionPay')
  })

  it('has a prefix of 622488 and a length of 18', function(){
    detectNetwork('622488664636627787').should.equal('China UnionPay')
  })

  it('has a prefix of 622489 and a length of 18', function(){
    detectNetwork('622489612132845823').should.equal('China UnionPay')
  })

  it('has a prefix of 622490 and a length of 18', function(){
    detectNetwork('622490128256843587').should.equal('China UnionPay')
  })

  it('has a prefix of 622491 and a length of 18', function(){
    detectNetwork('622491701504743276').should.equal('China UnionPay')
  })

  it('has a prefix of 622492 and a length of 18', function(){
    detectNetwork('622492701677655638').should.equal('China UnionPay')
  })

  it('has a prefix of 622493 and a length of 18', function(){
    detectNetwork('622493723477224275').should.equal('China UnionPay')
  })

  it('has a prefix of 622494 and a length of 18', function(){
    detectNetwork('622494203015321448').should.equal('China UnionPay')
  })

  it('has a prefix of 622495 and a length of 18', function(){
    detectNetwork('622495352344771347').should.equal('China UnionPay')
  })

  it('has a prefix of 622496 and a length of 18', function(){
    detectNetwork('622496001604271612').should.equal('China UnionPay')
  })

  it('has a prefix of 622497 and a length of 18', function(){
    detectNetwork('622497154652402615').should.equal('China UnionPay')
  })

  it('has a prefix of 622498 and a length of 18', function(){
    detectNetwork('622498627600443116').should.equal('China UnionPay')
  })

  it('has a prefix of 622499 and a length of 18', function(){
    detectNetwork('622499167841640586').should.equal('China UnionPay')
  })

  it('has a prefix of 622500 and a length of 18', function(){
    detectNetwork('622500224107244868').should.equal('China UnionPay')
  })

  it('has a prefix of 622501 and a length of 18', function(){
    detectNetwork('622501252438724643').should.equal('China UnionPay')
  })

  it('has a prefix of 622502 and a length of 18', function(){
    detectNetwork('622502457703150158').should.equal('China UnionPay')
  })

  it('has a prefix of 622503 and a length of 18', function(){
    detectNetwork('622503483622867647').should.equal('China UnionPay')
  })

  it('has a prefix of 622504 and a length of 18', function(){
    detectNetwork('622504160280053288').should.equal('China UnionPay')
  })

  it('has a prefix of 622505 and a length of 18', function(){
    detectNetwork('622505372382657160').should.equal('China UnionPay')
  })

  it('has a prefix of 622506 and a length of 18', function(){
    detectNetwork('622506614132365043').should.equal('China UnionPay')
  })

  it('has a prefix of 622507 and a length of 18', function(){
    detectNetwork('622507378445318400').should.equal('China UnionPay')
  })

  it('has a prefix of 622508 and a length of 18', function(){
    detectNetwork('622508276044123848').should.equal('China UnionPay')
  })

  it('has a prefix of 622509 and a length of 18', function(){
    detectNetwork('622509605504328750').should.equal('China UnionPay')
  })

  it('has a prefix of 622510 and a length of 18', function(){
    detectNetwork('622510430040006547').should.equal('China UnionPay')
  })

  it('has a prefix of 622511 and a length of 18', function(){
    detectNetwork('622511736655037072').should.equal('China UnionPay')
  })

  it('has a prefix of 622512 and a length of 18', function(){
    detectNetwork('622512753570351027').should.equal('China UnionPay')
  })

  it('has a prefix of 622513 and a length of 18', function(){
    detectNetwork('622513568751146132').should.equal('China UnionPay')
  })

  it('has a prefix of 622514 and a length of 18', function(){
    detectNetwork('622514136134640462').should.equal('China UnionPay')
  })

  it('has a prefix of 622515 and a length of 18', function(){
    detectNetwork('622515730737164643').should.equal('China UnionPay')
  })

  it('has a prefix of 622516 and a length of 18', function(){
    detectNetwork('622516063713304640').should.equal('China UnionPay')
  })

  it('has a prefix of 622517 and a length of 18', function(){
    detectNetwork('622517752441451855').should.equal('China UnionPay')
  })

  it('has a prefix of 622518 and a length of 18', function(){
    detectNetwork('622518412801640613').should.equal('China UnionPay')
  })

  it('has a prefix of 622519 and a length of 18', function(){
    detectNetwork('622519386701512610').should.equal('China UnionPay')
  })

  it('has a prefix of 622520 and a length of 18', function(){
    detectNetwork('622520834147052883').should.equal('China UnionPay')
  })

  it('has a prefix of 622521 and a length of 18', function(){
    detectNetwork('622521825064832417').should.equal('China UnionPay')
  })

  it('has a prefix of 622522 and a length of 18', function(){
    detectNetwork('622522140010148723').should.equal('China UnionPay')
  })

  it('has a prefix of 622523 and a length of 18', function(){
    detectNetwork('622523244040363520').should.equal('China UnionPay')
  })

  it('has a prefix of 622524 and a length of 18', function(){
    detectNetwork('622524164018717877').should.equal('China UnionPay')
  })

  it('has a prefix of 622525 and a length of 18', function(){
    detectNetwork('622525071575100854').should.equal('China UnionPay')
  })

  it('has a prefix of 622526 and a length of 18', function(){
    detectNetwork('622526816186106730').should.equal('China UnionPay')
  })

  it('has a prefix of 622527 and a length of 18', function(){
    detectNetwork('622527726308876403').should.equal('China UnionPay')
  })

  it('has a prefix of 622528 and a length of 18', function(){
    detectNetwork('622528438057538575').should.equal('China UnionPay')
  })

  it('has a prefix of 622529 and a length of 18', function(){
    detectNetwork('622529750085362340').should.equal('China UnionPay')
  })

  it('has a prefix of 622530 and a length of 18', function(){
    detectNetwork('622530776051875727').should.equal('China UnionPay')
  })

  it('has a prefix of 622531 and a length of 18', function(){
    detectNetwork('622531442808543018').should.equal('China UnionPay')
  })

  it('has a prefix of 622532 and a length of 18', function(){
    detectNetwork('622532014863572844').should.equal('China UnionPay')
  })

  it('has a prefix of 622533 and a length of 18', function(){
    detectNetwork('622533620651281351').should.equal('China UnionPay')
  })

  it('has a prefix of 622534 and a length of 18', function(){
    detectNetwork('622534127086488222').should.equal('China UnionPay')
  })

  it('has a prefix of 622535 and a length of 18', function(){
    detectNetwork('622535187876822611').should.equal('China UnionPay')
  })

  it('has a prefix of 622536 and a length of 18', function(){
    detectNetwork('622536732528887250').should.equal('China UnionPay')
  })

  it('has a prefix of 622537 and a length of 18', function(){
    detectNetwork('622537550310505160').should.equal('China UnionPay')
  })

  it('has a prefix of 622538 and a length of 18', function(){
    detectNetwork('622538540050547207').should.equal('China UnionPay')
  })

  it('has a prefix of 622539 and a length of 18', function(){
    detectNetwork('622539326661186562').should.equal('China UnionPay')
  })

  it('has a prefix of 622540 and a length of 18', function(){
    detectNetwork('622540141667705280').should.equal('China UnionPay')
  })

  it('has a prefix of 622541 and a length of 18', function(){
    detectNetwork('622541838456402005').should.equal('China UnionPay')
  })

  it('has a prefix of 622542 and a length of 18', function(){
    detectNetwork('622542636107213663').should.equal('China UnionPay')
  })

  it('has a prefix of 622543 and a length of 18', function(){
    detectNetwork('622543155051241713').should.equal('China UnionPay')
  })

  it('has a prefix of 622544 and a length of 18', function(){
    detectNetwork('622544255821063568').should.equal('China UnionPay')
  })

  it('has a prefix of 622545 and a length of 18', function(){
    detectNetwork('622545804014475038').should.equal('China UnionPay')
  })

  it('has a prefix of 622546 and a length of 18', function(){
    detectNetwork('622546073027420642').should.equal('China UnionPay')
  })

  it('has a prefix of 622547 and a length of 18', function(){
    detectNetwork('622547168446522720').should.equal('China UnionPay')
  })

  it('has a prefix of 622548 and a length of 18', function(){
    detectNetwork('622548071442111308').should.equal('China UnionPay')
  })

  it('has a prefix of 622549 and a length of 18', function(){
    detectNetwork('622549001814170014').should.equal('China UnionPay')
  })

  it('has a prefix of 622550 and a length of 18', function(){
    detectNetwork('622550282133006355').should.equal('China UnionPay')
  })

  it('has a prefix of 622551 and a length of 18', function(){
    detectNetwork('622551183516366687').should.equal('China UnionPay')
  })

  it('has a prefix of 622552 and a length of 18', function(){
    detectNetwork('622552865742282643').should.equal('China UnionPay')
  })

  it('has a prefix of 622553 and a length of 18', function(){
    detectNetwork('622553822162634757').should.equal('China UnionPay')
  })

  it('has a prefix of 622554 and a length of 18', function(){
    detectNetwork('622554850630381438').should.equal('China UnionPay')
  })

  it('has a prefix of 622555 and a length of 18', function(){
    detectNetwork('622555817214324102').should.equal('China UnionPay')
  })

  it('has a prefix of 622556 and a length of 18', function(){
    detectNetwork('622556852062621525').should.equal('China UnionPay')
  })

  it('has a prefix of 622557 and a length of 18', function(){
    detectNetwork('622557552161672332').should.equal('China UnionPay')
  })

  it('has a prefix of 622558 and a length of 18', function(){
    detectNetwork('622558431835235351').should.equal('China UnionPay')
  })

  it('has a prefix of 622559 and a length of 18', function(){
    detectNetwork('622559738355084851').should.equal('China UnionPay')
  })

  it('has a prefix of 622560 and a length of 18', function(){
    detectNetwork('622560272653281471').should.equal('China UnionPay')
  })

  it('has a prefix of 622561 and a length of 18', function(){
    detectNetwork('622561706431486618').should.equal('China UnionPay')
  })

  it('has a prefix of 622562 and a length of 18', function(){
    detectNetwork('622562382067256623').should.equal('China UnionPay')
  })

  it('has a prefix of 622563 and a length of 18', function(){
    detectNetwork('622563155624536655').should.equal('China UnionPay')
  })

  it('has a prefix of 622564 and a length of 18', function(){
    detectNetwork('622564141106205834').should.equal('China UnionPay')
  })

  it('has a prefix of 622565 and a length of 18', function(){
    detectNetwork('622565471745028427').should.equal('China UnionPay')
  })

  it('has a prefix of 622566 and a length of 18', function(){
    detectNetwork('622566871165422017').should.equal('China UnionPay')
  })

  it('has a prefix of 622567 and a length of 18', function(){
    detectNetwork('622567415537376253').should.equal('China UnionPay')
  })

  it('has a prefix of 622568 and a length of 18', function(){
    detectNetwork('622568840666464226').should.equal('China UnionPay')
  })

  it('has a prefix of 622569 and a length of 18', function(){
    detectNetwork('622569103885162084').should.equal('China UnionPay')
  })

  it('has a prefix of 622570 and a length of 18', function(){
    detectNetwork('622570046808447153').should.equal('China UnionPay')
  })

  it('has a prefix of 622571 and a length of 18', function(){
    detectNetwork('622571017061655725').should.equal('China UnionPay')
  })

  it('has a prefix of 622572 and a length of 18', function(){
    detectNetwork('622572272074247646').should.equal('China UnionPay')
  })

  it('has a prefix of 622573 and a length of 18', function(){
    detectNetwork('622573875245530814').should.equal('China UnionPay')
  })

  it('has a prefix of 622574 and a length of 18', function(){
    detectNetwork('622574373058511500').should.equal('China UnionPay')
  })

  it('has a prefix of 622575 and a length of 18', function(){
    detectNetwork('622575677582828073').should.equal('China UnionPay')
  })

  it('has a prefix of 622576 and a length of 18', function(){
    detectNetwork('622576411262661684').should.equal('China UnionPay')
  })

  it('has a prefix of 622577 and a length of 18', function(){
    detectNetwork('622577572185013641').should.equal('China UnionPay')
  })

  it('has a prefix of 622578 and a length of 18', function(){
    detectNetwork('622578860307403537').should.equal('China UnionPay')
  })

  it('has a prefix of 622579 and a length of 18', function(){
    detectNetwork('622579711076584408').should.equal('China UnionPay')
  })

  it('has a prefix of 622580 and a length of 18', function(){
    detectNetwork('622580817514607754').should.equal('China UnionPay')
  })

  it('has a prefix of 622581 and a length of 18', function(){
    detectNetwork('622581548721004722').should.equal('China UnionPay')
  })

  it('has a prefix of 622582 and a length of 18', function(){
    detectNetwork('622582322068665214').should.equal('China UnionPay')
  })

  it('has a prefix of 622583 and a length of 18', function(){
    detectNetwork('622583727814555108').should.equal('China UnionPay')
  })

  it('has a prefix of 622584 and a length of 18', function(){
    detectNetwork('622584008206523551').should.equal('China UnionPay')
  })

  it('has a prefix of 622585 and a length of 18', function(){
    detectNetwork('622585611538887625').should.equal('China UnionPay')
  })

  it('has a prefix of 622586 and a length of 18', function(){
    detectNetwork('622586824731650608').should.equal('China UnionPay')
  })

  it('has a prefix of 622587 and a length of 18', function(){
    detectNetwork('622587330002088055').should.equal('China UnionPay')
  })

  it('has a prefix of 622588 and a length of 18', function(){
    detectNetwork('622588222784108433').should.equal('China UnionPay')
  })

  it('has a prefix of 622589 and a length of 18', function(){
    detectNetwork('622589847484305154').should.equal('China UnionPay')
  })

  it('has a prefix of 622590 and a length of 18', function(){
    detectNetwork('622590622544754383').should.equal('China UnionPay')
  })

  it('has a prefix of 622591 and a length of 18', function(){
    detectNetwork('622591287837841350').should.equal('China UnionPay')
  })

  it('has a prefix of 622592 and a length of 18', function(){
    detectNetwork('622592757643555218').should.equal('China UnionPay')
  })

  it('has a prefix of 622593 and a length of 18', function(){
    detectNetwork('622593026237410027').should.equal('China UnionPay')
  })

  it('has a prefix of 622594 and a length of 18', function(){
    detectNetwork('622594085523142055').should.equal('China UnionPay')
  })

  it('has a prefix of 622595 and a length of 18', function(){
    detectNetwork('622595181255786382').should.equal('China UnionPay')
  })

  it('has a prefix of 622596 and a length of 18', function(){
    detectNetwork('622596032884414650').should.equal('China UnionPay')
  })

  it('has a prefix of 622597 and a length of 18', function(){
    detectNetwork('622597111630635065').should.equal('China UnionPay')
  })

  it('has a prefix of 622598 and a length of 18', function(){
    detectNetwork('622598478722155244').should.equal('China UnionPay')
  })

  it('has a prefix of 622599 and a length of 18', function(){
    detectNetwork('622599310383817132').should.equal('China UnionPay')
  })

  it('has a prefix of 622600 and a length of 18', function(){
    detectNetwork('622600168772745852').should.equal('China UnionPay')
  })

  it('has a prefix of 622601 and a length of 18', function(){
    detectNetwork('622601028122308666').should.equal('China UnionPay')
  })

  it('has a prefix of 622602 and a length of 18', function(){
    detectNetwork('622602005764107115').should.equal('China UnionPay')
  })

  it('has a prefix of 622603 and a length of 18', function(){
    detectNetwork('622603341538722105').should.equal('China UnionPay')
  })

  it('has a prefix of 622604 and a length of 18', function(){
    detectNetwork('622604486323338551').should.equal('China UnionPay')
  })

  it('has a prefix of 622605 and a length of 18', function(){
    detectNetwork('622605378218775716').should.equal('China UnionPay')
  })

  it('has a prefix of 622606 and a length of 18', function(){
    detectNetwork('622606384373663727').should.equal('China UnionPay')
  })

  it('has a prefix of 622607 and a length of 18', function(){
    detectNetwork('622607485465215145').should.equal('China UnionPay')
  })

  it('has a prefix of 622608 and a length of 18', function(){
    detectNetwork('622608187013846030').should.equal('China UnionPay')
  })

  it('has a prefix of 622609 and a length of 18', function(){
    detectNetwork('622609603024861200').should.equal('China UnionPay')
  })

  it('has a prefix of 622610 and a length of 18', function(){
    detectNetwork('622610107576305216').should.equal('China UnionPay')
  })

  it('has a prefix of 622611 and a length of 18', function(){
    detectNetwork('622611326612260833').should.equal('China UnionPay')
  })

  it('has a prefix of 622612 and a length of 18', function(){
    detectNetwork('622612846861233726').should.equal('China UnionPay')
  })

  it('has a prefix of 622613 and a length of 18', function(){
    detectNetwork('622613787262757085').should.equal('China UnionPay')
  })

  it('has a prefix of 622614 and a length of 18', function(){
    detectNetwork('622614445314048886').should.equal('China UnionPay')
  })

  it('has a prefix of 622615 and a length of 18', function(){
    detectNetwork('622615676553081370').should.equal('China UnionPay')
  })

  it('has a prefix of 622616 and a length of 18', function(){
    detectNetwork('622616551277378461').should.equal('China UnionPay')
  })

  it('has a prefix of 622617 and a length of 18', function(){
    detectNetwork('622617866540421044').should.equal('China UnionPay')
  })

  it('has a prefix of 622618 and a length of 18', function(){
    detectNetwork('622618700686440737').should.equal('China UnionPay')
  })

  it('has a prefix of 622619 and a length of 18', function(){
    detectNetwork('622619425458457623').should.equal('China UnionPay')
  })

  it('has a prefix of 622620 and a length of 18', function(){
    detectNetwork('622620825587722746').should.equal('China UnionPay')
  })

  it('has a prefix of 622621 and a length of 18', function(){
    detectNetwork('622621626320756056').should.equal('China UnionPay')
  })

  it('has a prefix of 622622 and a length of 18', function(){
    detectNetwork('622622408875351772').should.equal('China UnionPay')
  })

  it('has a prefix of 622623 and a length of 18', function(){
    detectNetwork('622623525587824675').should.equal('China UnionPay')
  })

  it('has a prefix of 622624 and a length of 18', function(){
    detectNetwork('622624388082716280').should.equal('China UnionPay')
  })

  it('has a prefix of 622625 and a length of 18', function(){
    detectNetwork('622625856206347061').should.equal('China UnionPay')
  })

  it('has a prefix of 622626 and a length of 18', function(){
    detectNetwork('622626668037785202').should.equal('China UnionPay')
  })

  it('has a prefix of 622627 and a length of 18', function(){
    detectNetwork('622627625552124702').should.equal('China UnionPay')
  })

  it('has a prefix of 622628 and a length of 18', function(){
    detectNetwork('622628167836408252').should.equal('China UnionPay')
  })

  it('has a prefix of 622629 and a length of 18', function(){
    detectNetwork('622629160271850672').should.equal('China UnionPay')
  })

  it('has a prefix of 622630 and a length of 18', function(){
    detectNetwork('622630426814873753').should.equal('China UnionPay')
  })

  it('has a prefix of 622631 and a length of 18', function(){
    detectNetwork('622631077033218800').should.equal('China UnionPay')
  })

  it('has a prefix of 622632 and a length of 18', function(){
    detectNetwork('622632288528265184').should.equal('China UnionPay')
  })

  it('has a prefix of 622633 and a length of 18', function(){
    detectNetwork('622633513105220370').should.equal('China UnionPay')
  })

  it('has a prefix of 622634 and a length of 18', function(){
    detectNetwork('622634346022346181').should.equal('China UnionPay')
  })

  it('has a prefix of 622635 and a length of 18', function(){
    detectNetwork('622635783078156114').should.equal('China UnionPay')
  })

  it('has a prefix of 622636 and a length of 18', function(){
    detectNetwork('622636404235821230').should.equal('China UnionPay')
  })

  it('has a prefix of 622637 and a length of 18', function(){
    detectNetwork('622637027158770612').should.equal('China UnionPay')
  })

  it('has a prefix of 622638 and a length of 18', function(){
    detectNetwork('622638538350755346').should.equal('China UnionPay')
  })

  it('has a prefix of 622639 and a length of 18', function(){
    detectNetwork('622639780872106034').should.equal('China UnionPay')
  })

  it('has a prefix of 622640 and a length of 18', function(){
    detectNetwork('622640853768358356').should.equal('China UnionPay')
  })

  it('has a prefix of 622641 and a length of 18', function(){
    detectNetwork('622641161464421631').should.equal('China UnionPay')
  })

  it('has a prefix of 622642 and a length of 18', function(){
    detectNetwork('622642185322617754').should.equal('China UnionPay')
  })

  it('has a prefix of 622643 and a length of 18', function(){
    detectNetwork('622643380056827615').should.equal('China UnionPay')
  })

  it('has a prefix of 622644 and a length of 18', function(){
    detectNetwork('622644725266005226').should.equal('China UnionPay')
  })

  it('has a prefix of 622645 and a length of 18', function(){
    detectNetwork('622645778663051338').should.equal('China UnionPay')
  })

  it('has a prefix of 622646 and a length of 18', function(){
    detectNetwork('622646274162141334').should.equal('China UnionPay')
  })

  it('has a prefix of 622647 and a length of 18', function(){
    detectNetwork('622647500531823061').should.equal('China UnionPay')
  })

  it('has a prefix of 622648 and a length of 18', function(){
    detectNetwork('622648446503867052').should.equal('China UnionPay')
  })

  it('has a prefix of 622649 and a length of 18', function(){
    detectNetwork('622649785580427385').should.equal('China UnionPay')
  })

  it('has a prefix of 622650 and a length of 18', function(){
    detectNetwork('622650163780067418').should.equal('China UnionPay')
  })

  it('has a prefix of 622651 and a length of 18', function(){
    detectNetwork('622651330231741642').should.equal('China UnionPay')
  })

  it('has a prefix of 622652 and a length of 18', function(){
    detectNetwork('622652125787475676').should.equal('China UnionPay')
  })

  it('has a prefix of 622653 and a length of 18', function(){
    detectNetwork('622653105323226185').should.equal('China UnionPay')
  })

  it('has a prefix of 622654 and a length of 18', function(){
    detectNetwork('622654357228313042').should.equal('China UnionPay')
  })

  it('has a prefix of 622655 and a length of 18', function(){
    detectNetwork('622655788713371601').should.equal('China UnionPay')
  })

  it('has a prefix of 622656 and a length of 18', function(){
    detectNetwork('622656468715801068').should.equal('China UnionPay')
  })

  it('has a prefix of 622657 and a length of 18', function(){
    detectNetwork('622657486508606720').should.equal('China UnionPay')
  })

  it('has a prefix of 622658 and a length of 18', function(){
    detectNetwork('622658581168121470').should.equal('China UnionPay')
  })

  it('has a prefix of 622659 and a length of 18', function(){
    detectNetwork('622659475628215523').should.equal('China UnionPay')
  })

  it('has a prefix of 622660 and a length of 18', function(){
    detectNetwork('622660551075887338').should.equal('China UnionPay')
  })

  it('has a prefix of 622661 and a length of 18', function(){
    detectNetwork('622661265886362163').should.equal('China UnionPay')
  })

  it('has a prefix of 622662 and a length of 18', function(){
    detectNetwork('622662271136164825').should.equal('China UnionPay')
  })

  it('has a prefix of 622663 and a length of 18', function(){
    detectNetwork('622663016356737060').should.equal('China UnionPay')
  })

  it('has a prefix of 622664 and a length of 18', function(){
    detectNetwork('622664711421273144').should.equal('China UnionPay')
  })

  it('has a prefix of 622665 and a length of 18', function(){
    detectNetwork('622665815753856820').should.equal('China UnionPay')
  })

  it('has a prefix of 622666 and a length of 18', function(){
    detectNetwork('622666632576480582').should.equal('China UnionPay')
  })

  it('has a prefix of 622667 and a length of 18', function(){
    detectNetwork('622667518656054048').should.equal('China UnionPay')
  })

  it('has a prefix of 622668 and a length of 18', function(){
    detectNetwork('622668565433172130').should.equal('China UnionPay')
  })

  it('has a prefix of 622669 and a length of 18', function(){
    detectNetwork('622669768674622273').should.equal('China UnionPay')
  })

  it('has a prefix of 622670 and a length of 18', function(){
    detectNetwork('622670101257352848').should.equal('China UnionPay')
  })

  it('has a prefix of 622671 and a length of 18', function(){
    detectNetwork('622671031883071232').should.equal('China UnionPay')
  })

  it('has a prefix of 622672 and a length of 18', function(){
    detectNetwork('622672435788122584').should.equal('China UnionPay')
  })

  it('has a prefix of 622673 and a length of 18', function(){
    detectNetwork('622673035863067745').should.equal('China UnionPay')
  })

  it('has a prefix of 622674 and a length of 18', function(){
    detectNetwork('622674350713075501').should.equal('China UnionPay')
  })

  it('has a prefix of 622675 and a length of 18', function(){
    detectNetwork('622675724772456204').should.equal('China UnionPay')
  })

  it('has a prefix of 622676 and a length of 18', function(){
    detectNetwork('622676787042261443').should.equal('China UnionPay')
  })

  it('has a prefix of 622677 and a length of 18', function(){
    detectNetwork('622677181563683271').should.equal('China UnionPay')
  })

  it('has a prefix of 622678 and a length of 18', function(){
    detectNetwork('622678818603308163').should.equal('China UnionPay')
  })

  it('has a prefix of 622679 and a length of 18', function(){
    detectNetwork('622679426655486206').should.equal('China UnionPay')
  })

  it('has a prefix of 622680 and a length of 18', function(){
    detectNetwork('622680307271244656').should.equal('China UnionPay')
  })

  it('has a prefix of 622681 and a length of 18', function(){
    detectNetwork('622681505588067666').should.equal('China UnionPay')
  })

  it('has a prefix of 622682 and a length of 18', function(){
    detectNetwork('622682451475347660').should.equal('China UnionPay')
  })

  it('has a prefix of 622683 and a length of 18', function(){
    detectNetwork('622683505770576677').should.equal('China UnionPay')
  })

  it('has a prefix of 622684 and a length of 18', function(){
    detectNetwork('622684472776487158').should.equal('China UnionPay')
  })

  it('has a prefix of 622685 and a length of 18', function(){
    detectNetwork('622685686214233066').should.equal('China UnionPay')
  })

  it('has a prefix of 622686 and a length of 18', function(){
    detectNetwork('622686827165178850').should.equal('China UnionPay')
  })

  it('has a prefix of 622687 and a length of 18', function(){
    detectNetwork('622687621845014021').should.equal('China UnionPay')
  })

  it('has a prefix of 622688 and a length of 18', function(){
    detectNetwork('622688774486734762').should.equal('China UnionPay')
  })

  it('has a prefix of 622689 and a length of 18', function(){
    detectNetwork('622689428703015227').should.equal('China UnionPay')
  })

  it('has a prefix of 622690 and a length of 18', function(){
    detectNetwork('622690266742061330').should.equal('China UnionPay')
  })

  it('has a prefix of 622691 and a length of 18', function(){
    detectNetwork('622691572057837232').should.equal('China UnionPay')
  })

  it('has a prefix of 622692 and a length of 18', function(){
    detectNetwork('622692844630043100').should.equal('China UnionPay')
  })

  it('has a prefix of 622693 and a length of 18', function(){
    detectNetwork('622693311686452776').should.equal('China UnionPay')
  })

  it('has a prefix of 622694 and a length of 18', function(){
    detectNetwork('622694136705843271').should.equal('China UnionPay')
  })

  it('has a prefix of 622695 and a length of 18', function(){
    detectNetwork('622695443562447772').should.equal('China UnionPay')
  })

  it('has a prefix of 622696 and a length of 18', function(){
    detectNetwork('622696740265270883').should.equal('China UnionPay')
  })

  it('has a prefix of 622697 and a length of 18', function(){
    detectNetwork('622697014844160468').should.equal('China UnionPay')
  })

  it('has a prefix of 622698 and a length of 18', function(){
    detectNetwork('622698057010162780').should.equal('China UnionPay')
  })

  it('has a prefix of 622699 and a length of 18', function(){
    detectNetwork('622699878871264873').should.equal('China UnionPay')
  })

  it('has a prefix of 622700 and a length of 18', function(){
    detectNetwork('622700356785123460').should.equal('China UnionPay')
  })

  it('has a prefix of 622701 and a length of 18', function(){
    detectNetwork('622701634767368187').should.equal('China UnionPay')
  })

  it('has a prefix of 622702 and a length of 18', function(){
    detectNetwork('622702200031541245').should.equal('China UnionPay')
  })

  it('has a prefix of 622703 and a length of 18', function(){
    detectNetwork('622703242710126388').should.equal('China UnionPay')
  })

  it('has a prefix of 622704 and a length of 18', function(){
    detectNetwork('622704557358672474').should.equal('China UnionPay')
  })

  it('has a prefix of 622705 and a length of 18', function(){
    detectNetwork('622705077322665226').should.equal('China UnionPay')
  })

  it('has a prefix of 622706 and a length of 18', function(){
    detectNetwork('622706542151065060').should.equal('China UnionPay')
  })

  it('has a prefix of 622707 and a length of 18', function(){
    detectNetwork('622707433104576271').should.equal('China UnionPay')
  })

  it('has a prefix of 622708 and a length of 18', function(){
    detectNetwork('622708086555442624').should.equal('China UnionPay')
  })

  it('has a prefix of 622709 and a length of 18', function(){
    detectNetwork('622709530035633105').should.equal('China UnionPay')
  })

  it('has a prefix of 622710 and a length of 18', function(){
    detectNetwork('622710451313573710').should.equal('China UnionPay')
  })

  it('has a prefix of 622711 and a length of 18', function(){
    detectNetwork('622711178665650483').should.equal('China UnionPay')
  })

  it('has a prefix of 622712 and a length of 18', function(){
    detectNetwork('622712364616423462').should.equal('China UnionPay')
  })

  it('has a prefix of 622713 and a length of 18', function(){
    detectNetwork('622713138673751161').should.equal('China UnionPay')
  })

  it('has a prefix of 622714 and a length of 18', function(){
    detectNetwork('622714252417411836').should.equal('China UnionPay')
  })

  it('has a prefix of 622715 and a length of 18', function(){
    detectNetwork('622715537871465236').should.equal('China UnionPay')
  })

  it('has a prefix of 622716 and a length of 18', function(){
    detectNetwork('622716660740560206').should.equal('China UnionPay')
  })

  it('has a prefix of 622717 and a length of 18', function(){
    detectNetwork('622717312368056374').should.equal('China UnionPay')
  })

  it('has a prefix of 622718 and a length of 18', function(){
    detectNetwork('622718027421264515').should.equal('China UnionPay')
  })

  it('has a prefix of 622719 and a length of 18', function(){
    detectNetwork('622719243055680700').should.equal('China UnionPay')
  })

  it('has a prefix of 622720 and a length of 18', function(){
    detectNetwork('622720638150110803').should.equal('China UnionPay')
  })

  it('has a prefix of 622721 and a length of 18', function(){
    detectNetwork('622721617458887348').should.equal('China UnionPay')
  })

  it('has a prefix of 622722 and a length of 18', function(){
    detectNetwork('622722160272666663').should.equal('China UnionPay')
  })

  it('has a prefix of 622723 and a length of 18', function(){
    detectNetwork('622723164530135501').should.equal('China UnionPay')
  })

  it('has a prefix of 622724 and a length of 18', function(){
    detectNetwork('622724153270845041').should.equal('China UnionPay')
  })

  it('has a prefix of 622725 and a length of 18', function(){
    detectNetwork('622725448450177015').should.equal('China UnionPay')
  })

  it('has a prefix of 622726 and a length of 18', function(){
    detectNetwork('622726715650706385').should.equal('China UnionPay')
  })

  it('has a prefix of 622727 and a length of 18', function(){
    detectNetwork('622727027834714806').should.equal('China UnionPay')
  })

  it('has a prefix of 622728 and a length of 18', function(){
    detectNetwork('622728516718785825').should.equal('China UnionPay')
  })

  it('has a prefix of 622729 and a length of 18', function(){
    detectNetwork('622729307253417143').should.equal('China UnionPay')
  })

  it('has a prefix of 622730 and a length of 18', function(){
    detectNetwork('622730481761778355').should.equal('China UnionPay')
  })

  it('has a prefix of 622731 and a length of 18', function(){
    detectNetwork('622731513474857556').should.equal('China UnionPay')
  })

  it('has a prefix of 622732 and a length of 18', function(){
    detectNetwork('622732366572836471').should.equal('China UnionPay')
  })

  it('has a prefix of 622733 and a length of 18', function(){
    detectNetwork('622733848605168068').should.equal('China UnionPay')
  })

  it('has a prefix of 622734 and a length of 18', function(){
    detectNetwork('622734441206554341').should.equal('China UnionPay')
  })

  it('has a prefix of 622735 and a length of 18', function(){
    detectNetwork('622735047228530684').should.equal('China UnionPay')
  })

  it('has a prefix of 622736 and a length of 18', function(){
    detectNetwork('622736878888635871').should.equal('China UnionPay')
  })

  it('has a prefix of 622737 and a length of 18', function(){
    detectNetwork('622737765187707214').should.equal('China UnionPay')
  })

  it('has a prefix of 622738 and a length of 18', function(){
    detectNetwork('622738548347078817').should.equal('China UnionPay')
  })

  it('has a prefix of 622739 and a length of 18', function(){
    detectNetwork('622739274534854073').should.equal('China UnionPay')
  })

  it('has a prefix of 622740 and a length of 18', function(){
    detectNetwork('622740565423264525').should.equal('China UnionPay')
  })

  it('has a prefix of 622741 and a length of 18', function(){
    detectNetwork('622741230462741318').should.equal('China UnionPay')
  })

  it('has a prefix of 622742 and a length of 18', function(){
    detectNetwork('622742856663085273').should.equal('China UnionPay')
  })

  it('has a prefix of 622743 and a length of 18', function(){
    detectNetwork('622743616877571376').should.equal('China UnionPay')
  })

  it('has a prefix of 622744 and a length of 18', function(){
    detectNetwork('622744673100460873').should.equal('China UnionPay')
  })

  it('has a prefix of 622745 and a length of 18', function(){
    detectNetwork('622745322860557243').should.equal('China UnionPay')
  })

  it('has a prefix of 622746 and a length of 18', function(){
    detectNetwork('622746677117647062').should.equal('China UnionPay')
  })

  it('has a prefix of 622747 and a length of 18', function(){
    detectNetwork('622747261850361366').should.equal('China UnionPay')
  })

  it('has a prefix of 622748 and a length of 18', function(){
    detectNetwork('622748831761403377').should.equal('China UnionPay')
  })

  it('has a prefix of 622749 and a length of 18', function(){
    detectNetwork('622749062050442483').should.equal('China UnionPay')
  })

  it('has a prefix of 622750 and a length of 18', function(){
    detectNetwork('622750382801756888').should.equal('China UnionPay')
  })

  it('has a prefix of 622751 and a length of 18', function(){
    detectNetwork('622751137618361808').should.equal('China UnionPay')
  })

  it('has a prefix of 622752 and a length of 18', function(){
    detectNetwork('622752338707402164').should.equal('China UnionPay')
  })

  it('has a prefix of 622753 and a length of 18', function(){
    detectNetwork('622753753715888745').should.equal('China UnionPay')
  })

  it('has a prefix of 622754 and a length of 18', function(){
    detectNetwork('622754524836044784').should.equal('China UnionPay')
  })

  it('has a prefix of 622755 and a length of 18', function(){
    detectNetwork('622755671627118737').should.equal('China UnionPay')
  })

  it('has a prefix of 622756 and a length of 18', function(){
    detectNetwork('622756776753602711').should.equal('China UnionPay')
  })

  it('has a prefix of 622757 and a length of 18', function(){
    detectNetwork('622757584527722525').should.equal('China UnionPay')
  })

  it('has a prefix of 622758 and a length of 18', function(){
    detectNetwork('622758882760663271').should.equal('China UnionPay')
  })

  it('has a prefix of 622759 and a length of 18', function(){
    detectNetwork('622759665151822408').should.equal('China UnionPay')
  })

  it('has a prefix of 622760 and a length of 18', function(){
    detectNetwork('622760477150857823').should.equal('China UnionPay')
  })

  it('has a prefix of 622761 and a length of 18', function(){
    detectNetwork('622761274451614221').should.equal('China UnionPay')
  })

  it('has a prefix of 622762 and a length of 18', function(){
    detectNetwork('622762100666802788').should.equal('China UnionPay')
  })

  it('has a prefix of 622763 and a length of 18', function(){
    detectNetwork('622763208418556202').should.equal('China UnionPay')
  })

  it('has a prefix of 622764 and a length of 18', function(){
    detectNetwork('622764134088434663').should.equal('China UnionPay')
  })

  it('has a prefix of 622765 and a length of 18', function(){
    detectNetwork('622765115088428018').should.equal('China UnionPay')
  })

  it('has a prefix of 622766 and a length of 18', function(){
    detectNetwork('622766240173011682').should.equal('China UnionPay')
  })

  it('has a prefix of 622767 and a length of 18', function(){
    detectNetwork('622767103650437415').should.equal('China UnionPay')
  })

  it('has a prefix of 622768 and a length of 18', function(){
    detectNetwork('622768543148084148').should.equal('China UnionPay')
  })

  it('has a prefix of 622769 and a length of 18', function(){
    detectNetwork('622769280784885880').should.equal('China UnionPay')
  })

  it('has a prefix of 622770 and a length of 18', function(){
    detectNetwork('622770788888676107').should.equal('China UnionPay')
  })

  it('has a prefix of 622771 and a length of 18', function(){
    detectNetwork('622771028663473746').should.equal('China UnionPay')
  })

  it('has a prefix of 622772 and a length of 18', function(){
    detectNetwork('622772641720168154').should.equal('China UnionPay')
  })

  it('has a prefix of 622773 and a length of 18', function(){
    detectNetwork('622773303385201564').should.equal('China UnionPay')
  })

  it('has a prefix of 622774 and a length of 18', function(){
    detectNetwork('622774228458662817').should.equal('China UnionPay')
  })

  it('has a prefix of 622775 and a length of 18', function(){
    detectNetwork('622775843755308323').should.equal('China UnionPay')
  })

  it('has a prefix of 622776 and a length of 18', function(){
    detectNetwork('622776600741213456').should.equal('China UnionPay')
  })

  it('has a prefix of 622777 and a length of 18', function(){
    detectNetwork('622777656307802381').should.equal('China UnionPay')
  })

  it('has a prefix of 622778 and a length of 18', function(){
    detectNetwork('622778040106547475').should.equal('China UnionPay')
  })

  it('has a prefix of 622779 and a length of 18', function(){
    detectNetwork('622779628848576733').should.equal('China UnionPay')
  })

  it('has a prefix of 622780 and a length of 18', function(){
    detectNetwork('622780281301650207').should.equal('China UnionPay')
  })

  it('has a prefix of 622781 and a length of 18', function(){
    detectNetwork('622781421211176836').should.equal('China UnionPay')
  })

  it('has a prefix of 622782 and a length of 18', function(){
    detectNetwork('622782365451015721').should.equal('China UnionPay')
  })

  it('has a prefix of 622783 and a length of 18', function(){
    detectNetwork('622783443372383308').should.equal('China UnionPay')
  })

  it('has a prefix of 622784 and a length of 18', function(){
    detectNetwork('622784567616623701').should.equal('China UnionPay')
  })

  it('has a prefix of 622785 and a length of 18', function(){
    detectNetwork('622785787470016821').should.equal('China UnionPay')
  })

  it('has a prefix of 622786 and a length of 18', function(){
    detectNetwork('622786021065306852').should.equal('China UnionPay')
  })

  it('has a prefix of 622787 and a length of 18', function(){
    detectNetwork('622787575842128350').should.equal('China UnionPay')
  })

  it('has a prefix of 622788 and a length of 18', function(){
    detectNetwork('622788002307546128').should.equal('China UnionPay')
  })

  it('has a prefix of 622789 and a length of 18', function(){
    detectNetwork('622789232130322783').should.equal('China UnionPay')
  })

  it('has a prefix of 622790 and a length of 18', function(){
    detectNetwork('622790017730553151').should.equal('China UnionPay')
  })

  it('has a prefix of 622791 and a length of 18', function(){
    detectNetwork('622791207570227725').should.equal('China UnionPay')
  })

  it('has a prefix of 622792 and a length of 18', function(){
    detectNetwork('622792073233817154').should.equal('China UnionPay')
  })

  it('has a prefix of 622793 and a length of 18', function(){
    detectNetwork('622793354847047541').should.equal('China UnionPay')
  })

  it('has a prefix of 622794 and a length of 18', function(){
    detectNetwork('622794501501268206').should.equal('China UnionPay')
  })

  it('has a prefix of 622795 and a length of 18', function(){
    detectNetwork('622795788270615156').should.equal('China UnionPay')
  })

  it('has a prefix of 622796 and a length of 18', function(){
    detectNetwork('622796005836414150').should.equal('China UnionPay')
  })

  it('has a prefix of 622797 and a length of 18', function(){
    detectNetwork('622797020053403074').should.equal('China UnionPay')
  })

  it('has a prefix of 622798 and a length of 18', function(){
    detectNetwork('622798263871263048').should.equal('China UnionPay')
  })

  it('has a prefix of 622799 and a length of 18', function(){
    detectNetwork('622799558088627622').should.equal('China UnionPay')
  })

  it('has a prefix of 622800 and a length of 18', function(){
    detectNetwork('622800618431055682').should.equal('China UnionPay')
  })

  it('has a prefix of 622801 and a length of 18', function(){
    detectNetwork('622801858327052008').should.equal('China UnionPay')
  })

  it('has a prefix of 622802 and a length of 18', function(){
    detectNetwork('622802673824364787').should.equal('China UnionPay')
  })

  it('has a prefix of 622803 and a length of 18', function(){
    detectNetwork('622803072427354624').should.equal('China UnionPay')
  })

  it('has a prefix of 622804 and a length of 18', function(){
    detectNetwork('622804070116174266').should.equal('China UnionPay')
  })

  it('has a prefix of 622805 and a length of 18', function(){
    detectNetwork('622805104546031713').should.equal('China UnionPay')
  })

  it('has a prefix of 622806 and a length of 18', function(){
    detectNetwork('622806886007743265').should.equal('China UnionPay')
  })

  it('has a prefix of 622807 and a length of 18', function(){
    detectNetwork('622807824030258072').should.equal('China UnionPay')
  })

  it('has a prefix of 622808 and a length of 18', function(){
    detectNetwork('622808550782307365').should.equal('China UnionPay')
  })

  it('has a prefix of 622809 and a length of 18', function(){
    detectNetwork('622809761682605247').should.equal('China UnionPay')
  })

  it('has a prefix of 622810 and a length of 18', function(){
    detectNetwork('622810626754106335').should.equal('China UnionPay')
  })

  it('has a prefix of 622811 and a length of 18', function(){
    detectNetwork('622811412181452685').should.equal('China UnionPay')
  })

  it('has a prefix of 622812 and a length of 18', function(){
    detectNetwork('622812673152417585').should.equal('China UnionPay')
  })

  it('has a prefix of 622813 and a length of 18', function(){
    detectNetwork('622813205512536030').should.equal('China UnionPay')
  })

  it('has a prefix of 622814 and a length of 18', function(){
    detectNetwork('622814806430480124').should.equal('China UnionPay')
  })

  it('has a prefix of 622815 and a length of 18', function(){
    detectNetwork('622815508735418462').should.equal('China UnionPay')
  })

  it('has a prefix of 622816 and a length of 18', function(){
    detectNetwork('622816827146500715').should.equal('China UnionPay')
  })

  it('has a prefix of 622817 and a length of 18', function(){
    detectNetwork('622817742476813111').should.equal('China UnionPay')
  })

  it('has a prefix of 622818 and a length of 18', function(){
    detectNetwork('622818607114106502').should.equal('China UnionPay')
  })

  it('has a prefix of 622819 and a length of 18', function(){
    detectNetwork('622819850033523288').should.equal('China UnionPay')
  })

  it('has a prefix of 622820 and a length of 18', function(){
    detectNetwork('622820348746040680').should.equal('China UnionPay')
  })

  it('has a prefix of 622821 and a length of 18', function(){
    detectNetwork('622821040486030153').should.equal('China UnionPay')
  })

  it('has a prefix of 622822 and a length of 18', function(){
    detectNetwork('622822615254138728').should.equal('China UnionPay')
  })

  it('has a prefix of 622823 and a length of 18', function(){
    detectNetwork('622823430778376621').should.equal('China UnionPay')
  })

  it('has a prefix of 622824 and a length of 18', function(){
    detectNetwork('622824378262870001').should.equal('China UnionPay')
  })

  it('has a prefix of 622825 and a length of 18', function(){
    detectNetwork('622825366804451186').should.equal('China UnionPay')
  })

  it('has a prefix of 622826 and a length of 18', function(){
    detectNetwork('622826773821251407').should.equal('China UnionPay')
  })

  it('has a prefix of 622827 and a length of 18', function(){
    detectNetwork('622827835673740225').should.equal('China UnionPay')
  })

  it('has a prefix of 622828 and a length of 18', function(){
    detectNetwork('622828205146238401').should.equal('China UnionPay')
  })

  it('has a prefix of 622829 and a length of 18', function(){
    detectNetwork('622829587506884008').should.equal('China UnionPay')
  })

  it('has a prefix of 622830 and a length of 18', function(){
    detectNetwork('622830068462728761').should.equal('China UnionPay')
  })

  it('has a prefix of 622831 and a length of 18', function(){
    detectNetwork('622831280868157177').should.equal('China UnionPay')
  })

  it('has a prefix of 622832 and a length of 18', function(){
    detectNetwork('622832620032242776').should.equal('China UnionPay')
  })

  it('has a prefix of 622833 and a length of 18', function(){
    detectNetwork('622833888778448677').should.equal('China UnionPay')
  })

  it('has a prefix of 622834 and a length of 18', function(){
    detectNetwork('622834717322684708').should.equal('China UnionPay')
  })

  it('has a prefix of 622835 and a length of 18', function(){
    detectNetwork('622835452165057634').should.equal('China UnionPay')
  })

  it('has a prefix of 622836 and a length of 18', function(){
    detectNetwork('622836416515417617').should.equal('China UnionPay')
  })

  it('has a prefix of 622837 and a length of 18', function(){
    detectNetwork('622837005674744408').should.equal('China UnionPay')
  })

  it('has a prefix of 622838 and a length of 18', function(){
    detectNetwork('622838147178636054').should.equal('China UnionPay')
  })

  it('has a prefix of 622839 and a length of 18', function(){
    detectNetwork('622839166511116410').should.equal('China UnionPay')
  })

  it('has a prefix of 622840 and a length of 18', function(){
    detectNetwork('622840632340286888').should.equal('China UnionPay')
  })

  it('has a prefix of 622841 and a length of 18', function(){
    detectNetwork('622841718034366341').should.equal('China UnionPay')
  })

  it('has a prefix of 622842 and a length of 18', function(){
    detectNetwork('622842127623258210').should.equal('China UnionPay')
  })

  it('has a prefix of 622843 and a length of 18', function(){
    detectNetwork('622843745462814666').should.equal('China UnionPay')
  })

  it('has a prefix of 622844 and a length of 18', function(){
    detectNetwork('622844141423800323').should.equal('China UnionPay')
  })

  it('has a prefix of 622845 and a length of 18', function(){
    detectNetwork('622845324230465750').should.equal('China UnionPay')
  })

  it('has a prefix of 622846 and a length of 18', function(){
    detectNetwork('622846730573157032').should.equal('China UnionPay')
  })

  it('has a prefix of 622847 and a length of 18', function(){
    detectNetwork('622847670147322581').should.equal('China UnionPay')
  })

  it('has a prefix of 622848 and a length of 18', function(){
    detectNetwork('622848737530237522').should.equal('China UnionPay')
  })

  it('has a prefix of 622849 and a length of 18', function(){
    detectNetwork('622849806600471541').should.equal('China UnionPay')
  })

  it('has a prefix of 622850 and a length of 18', function(){
    detectNetwork('622850650644104324').should.equal('China UnionPay')
  })

  it('has a prefix of 622851 and a length of 18', function(){
    detectNetwork('622851454222688237').should.equal('China UnionPay')
  })

  it('has a prefix of 622852 and a length of 18', function(){
    detectNetwork('622852861770633230').should.equal('China UnionPay')
  })

  it('has a prefix of 622853 and a length of 18', function(){
    detectNetwork('622853825667814252').should.equal('China UnionPay')
  })

  it('has a prefix of 622854 and a length of 18', function(){
    detectNetwork('622854122265326242').should.equal('China UnionPay')
  })

  it('has a prefix of 622855 and a length of 18', function(){
    detectNetwork('622855877547147587').should.equal('China UnionPay')
  })

  it('has a prefix of 622856 and a length of 18', function(){
    detectNetwork('622856507148730633').should.equal('China UnionPay')
  })

  it('has a prefix of 622857 and a length of 18', function(){
    detectNetwork('622857530616838354').should.equal('China UnionPay')
  })

  it('has a prefix of 622858 and a length of 18', function(){
    detectNetwork('622858113226646047').should.equal('China UnionPay')
  })

  it('has a prefix of 622859 and a length of 18', function(){
    detectNetwork('622859370234132310').should.equal('China UnionPay')
  })

  it('has a prefix of 622860 and a length of 18', function(){
    detectNetwork('622860327150774522').should.equal('China UnionPay')
  })

  it('has a prefix of 622861 and a length of 18', function(){
    detectNetwork('622861515132760564').should.equal('China UnionPay')
  })

  it('has a prefix of 622862 and a length of 18', function(){
    detectNetwork('622862374426666573').should.equal('China UnionPay')
  })

  it('has a prefix of 622863 and a length of 18', function(){
    detectNetwork('622863322717862626').should.equal('China UnionPay')
  })

  it('has a prefix of 622864 and a length of 18', function(){
    detectNetwork('622864231416173428').should.equal('China UnionPay')
  })

  it('has a prefix of 622865 and a length of 18', function(){
    detectNetwork('622865566045622274').should.equal('China UnionPay')
  })

  it('has a prefix of 622866 and a length of 18', function(){
    detectNetwork('622866036386273548').should.equal('China UnionPay')
  })

  it('has a prefix of 622867 and a length of 18', function(){
    detectNetwork('622867423175016174').should.equal('China UnionPay')
  })

  it('has a prefix of 622868 and a length of 18', function(){
    detectNetwork('622868730662553367').should.equal('China UnionPay')
  })

  it('has a prefix of 622869 and a length of 18', function(){
    detectNetwork('622869136265376033').should.equal('China UnionPay')
  })

  it('has a prefix of 622870 and a length of 18', function(){
    detectNetwork('622870714281518230').should.equal('China UnionPay')
  })

  it('has a prefix of 622871 and a length of 18', function(){
    detectNetwork('622871064743482266').should.equal('China UnionPay')
  })

  it('has a prefix of 622872 and a length of 18', function(){
    detectNetwork('622872651064556270').should.equal('China UnionPay')
  })

  it('has a prefix of 622873 and a length of 18', function(){
    detectNetwork('622873236774668335').should.equal('China UnionPay')
  })

  it('has a prefix of 622874 and a length of 18', function(){
    detectNetwork('622874705733456456').should.equal('China UnionPay')
  })

  it('has a prefix of 622875 and a length of 18', function(){
    detectNetwork('622875733348110844').should.equal('China UnionPay')
  })

  it('has a prefix of 622876 and a length of 18', function(){
    detectNetwork('622876031365331036').should.equal('China UnionPay')
  })

  it('has a prefix of 622877 and a length of 18', function(){
    detectNetwork('622877634763380734').should.equal('China UnionPay')
  })

  it('has a prefix of 622878 and a length of 18', function(){
    detectNetwork('622878311646144252').should.equal('China UnionPay')
  })

  it('has a prefix of 622879 and a length of 18', function(){
    detectNetwork('622879313083673486').should.equal('China UnionPay')
  })

  it('has a prefix of 622880 and a length of 18', function(){
    detectNetwork('622880170510503302').should.equal('China UnionPay')
  })

  it('has a prefix of 622881 and a length of 18', function(){
    detectNetwork('622881348275163073').should.equal('China UnionPay')
  })

  it('has a prefix of 622882 and a length of 18', function(){
    detectNetwork('622882326532387218').should.equal('China UnionPay')
  })

  it('has a prefix of 622883 and a length of 18', function(){
    detectNetwork('622883645324356005').should.equal('China UnionPay')
  })

  it('has a prefix of 622884 and a length of 18', function(){
    detectNetwork('622884626865177827').should.equal('China UnionPay')
  })

  it('has a prefix of 622885 and a length of 18', function(){
    detectNetwork('622885725037052826').should.equal('China UnionPay')
  })

  it('has a prefix of 622886 and a length of 18', function(){
    detectNetwork('622886331024521022').should.equal('China UnionPay')
  })

  it('has a prefix of 622887 and a length of 18', function(){
    detectNetwork('622887764103130860').should.equal('China UnionPay')
  })

  it('has a prefix of 622888 and a length of 18', function(){
    detectNetwork('622888058175157303').should.equal('China UnionPay')
  })

  it('has a prefix of 622889 and a length of 18', function(){
    detectNetwork('622889164220655286').should.equal('China UnionPay')
  })

  it('has a prefix of 622890 and a length of 18', function(){
    detectNetwork('622890753633522121').should.equal('China UnionPay')
  })

  it('has a prefix of 622891 and a length of 18', function(){
    detectNetwork('622891388684606241').should.equal('China UnionPay')
  })

  it('has a prefix of 622892 and a length of 18', function(){
    detectNetwork('622892561013486346').should.equal('China UnionPay')
  })

  it('has a prefix of 622893 and a length of 18', function(){
    detectNetwork('622893538738836883').should.equal('China UnionPay')
  })

  it('has a prefix of 622894 and a length of 18', function(){
    detectNetwork('622894114671122004').should.equal('China UnionPay')
  })

  it('has a prefix of 622895 and a length of 18', function(){
    detectNetwork('622895660575271413').should.equal('China UnionPay')
  })

  it('has a prefix of 622896 and a length of 18', function(){
    detectNetwork('622896448206781052').should.equal('China UnionPay')
  })

  it('has a prefix of 622897 and a length of 18', function(){
    detectNetwork('622897273524408103').should.equal('China UnionPay')
  })

  it('has a prefix of 622898 and a length of 18', function(){
    detectNetwork('622898042076510068').should.equal('China UnionPay')
  })

  it('has a prefix of 622899 and a length of 18', function(){
    detectNetwork('622899630556474857').should.equal('China UnionPay')
  })

  it('has a prefix of 622900 and a length of 18', function(){
    detectNetwork('622900267054140346').should.equal('China UnionPay')
  })

  it('has a prefix of 622901 and a length of 18', function(){
    detectNetwork('622901810711573605').should.equal('China UnionPay')
  })

  it('has a prefix of 622902 and a length of 18', function(){
    detectNetwork('622902340810177480').should.equal('China UnionPay')
  })

  it('has a prefix of 622903 and a length of 18', function(){
    detectNetwork('622903137655413425').should.equal('China UnionPay')
  })

  it('has a prefix of 622904 and a length of 18', function(){
    detectNetwork('622904563558447211').should.equal('China UnionPay')
  })

  it('has a prefix of 622905 and a length of 18', function(){
    detectNetwork('622905412826452060').should.equal('China UnionPay')
  })

  it('has a prefix of 622906 and a length of 18', function(){
    detectNetwork('622906244475027768').should.equal('China UnionPay')
  })

  it('has a prefix of 622907 and a length of 18', function(){
    detectNetwork('622907420237114000').should.equal('China UnionPay')
  })

  it('has a prefix of 622908 and a length of 18', function(){
    detectNetwork('622908562204136611').should.equal('China UnionPay')
  })

  it('has a prefix of 622909 and a length of 18', function(){
    detectNetwork('622909717435572805').should.equal('China UnionPay')
  })

  it('has a prefix of 622910 and a length of 18', function(){
    detectNetwork('622910432340341266').should.equal('China UnionPay')
  })

  it('has a prefix of 622911 and a length of 18', function(){
    detectNetwork('622911004880163150').should.equal('China UnionPay')
  })

  it('has a prefix of 622912 and a length of 18', function(){
    detectNetwork('622912462813473018').should.equal('China UnionPay')
  })

  it('has a prefix of 622913 and a length of 18', function(){
    detectNetwork('622913407078060561').should.equal('China UnionPay')
  })

  it('has a prefix of 622914 and a length of 18', function(){
    detectNetwork('622914571344847822').should.equal('China UnionPay')
  })

  it('has a prefix of 622915 and a length of 18', function(){
    detectNetwork('622915725487285655').should.equal('China UnionPay')
  })

  it('has a prefix of 622916 and a length of 18', function(){
    detectNetwork('622916427520282020').should.equal('China UnionPay')
  })

  it('has a prefix of 622917 and a length of 18', function(){
    detectNetwork('622917305253015546').should.equal('China UnionPay')
  })

  it('has a prefix of 622918 and a length of 18', function(){
    detectNetwork('622918468230681250').should.equal('China UnionPay')
  })

  it('has a prefix of 622919 and a length of 18', function(){
    detectNetwork('622919660471046143').should.equal('China UnionPay')
  })

  it('has a prefix of 622920 and a length of 18', function(){
    detectNetwork('622920414168350756').should.equal('China UnionPay')
  })

  it('has a prefix of 622921 and a length of 18', function(){
    detectNetwork('622921512178184702').should.equal('China UnionPay')
  })

  it('has a prefix of 622922 and a length of 18', function(){
    detectNetwork('622922510074144821').should.equal('China UnionPay')
  })

  it('has a prefix of 622923 and a length of 18', function(){
    detectNetwork('622923742120880525').should.equal('China UnionPay')
  })

  it('has a prefix of 622924 and a length of 18', function(){
    detectNetwork('622924853660418607').should.equal('China UnionPay')
  })

  it('has a prefix of 622925 and a length of 18', function(){
    detectNetwork('622925473883077546').should.equal('China UnionPay')
  })

  it('has a prefix of 622126 and a length of 19', function(){
    detectNetwork('6221268081303333733').should.equal('China UnionPay')
  })

  it('has a prefix of 622127 and a length of 19', function(){
    detectNetwork('6221276271857038413').should.equal('China UnionPay')
  })

  it('has a prefix of 622128 and a length of 19', function(){
    detectNetwork('6221283428088614615').should.equal('China UnionPay')
  })

  it('has a prefix of 622129 and a length of 19', function(){
    detectNetwork('6221291158660750643').should.equal('China UnionPay')
  })

  it('has a prefix of 622130 and a length of 19', function(){
    detectNetwork('6221301213006343730').should.equal('China UnionPay')
  })

  it('has a prefix of 622131 and a length of 19', function(){
    detectNetwork('6221315106601545822').should.equal('China UnionPay')
  })

  it('has a prefix of 622132 and a length of 19', function(){
    detectNetwork('6221321032760701256').should.equal('China UnionPay')
  })

  it('has a prefix of 622133 and a length of 19', function(){
    detectNetwork('6221335428361660666').should.equal('China UnionPay')
  })

  it('has a prefix of 622134 and a length of 19', function(){
    detectNetwork('6221341730422767332').should.equal('China UnionPay')
  })

  it('has a prefix of 622135 and a length of 19', function(){
    detectNetwork('6221350873103068716').should.equal('China UnionPay')
  })

  it('has a prefix of 622136 and a length of 19', function(){
    detectNetwork('6221361482887845861').should.equal('China UnionPay')
  })

  it('has a prefix of 622137 and a length of 19', function(){
    detectNetwork('6221371730332856027').should.equal('China UnionPay')
  })

  it('has a prefix of 622138 and a length of 19', function(){
    detectNetwork('6221382732411007227').should.equal('China UnionPay')
  })

  it('has a prefix of 622139 and a length of 19', function(){
    detectNetwork('6221397764480377037').should.equal('China UnionPay')
  })

  it('has a prefix of 622140 and a length of 19', function(){
    detectNetwork('6221404062376032161').should.equal('China UnionPay')
  })

  it('has a prefix of 622141 and a length of 19', function(){
    detectNetwork('6221410673708024713').should.equal('China UnionPay')
  })

  it('has a prefix of 622142 and a length of 19', function(){
    detectNetwork('6221427456557402334').should.equal('China UnionPay')
  })

  it('has a prefix of 622143 and a length of 19', function(){
    detectNetwork('6221432777071614724').should.equal('China UnionPay')
  })

  it('has a prefix of 622144 and a length of 19', function(){
    detectNetwork('6221440208437871300').should.equal('China UnionPay')
  })

  it('has a prefix of 622145 and a length of 19', function(){
    detectNetwork('6221452006530674814').should.equal('China UnionPay')
  })

  it('has a prefix of 622146 and a length of 19', function(){
    detectNetwork('6221467114118210667').should.equal('China UnionPay')
  })

  it('has a prefix of 622147 and a length of 19', function(){
    detectNetwork('6221476071421206068').should.equal('China UnionPay')
  })

  it('has a prefix of 622148 and a length of 19', function(){
    detectNetwork('6221485668373226050').should.equal('China UnionPay')
  })

  it('has a prefix of 622149 and a length of 19', function(){
    detectNetwork('6221490857740631762').should.equal('China UnionPay')
  })

  it('has a prefix of 622150 and a length of 19', function(){
    detectNetwork('6221502614470477500').should.equal('China UnionPay')
  })

  it('has a prefix of 622151 and a length of 19', function(){
    detectNetwork('6221514040050320285').should.equal('China UnionPay')
  })

  it('has a prefix of 622152 and a length of 19', function(){
    detectNetwork('6221524803735677371').should.equal('China UnionPay')
  })

  it('has a prefix of 622153 and a length of 19', function(){
    detectNetwork('6221535468847075002').should.equal('China UnionPay')
  })

  it('has a prefix of 622154 and a length of 19', function(){
    detectNetwork('6221543204664065675').should.equal('China UnionPay')
  })

  it('has a prefix of 622155 and a length of 19', function(){
    detectNetwork('6221558167435254270').should.equal('China UnionPay')
  })

  it('has a prefix of 622156 and a length of 19', function(){
    detectNetwork('6221560786823018323').should.equal('China UnionPay')
  })

  it('has a prefix of 622157 and a length of 19', function(){
    detectNetwork('6221572678815051074').should.equal('China UnionPay')
  })

  it('has a prefix of 622158 and a length of 19', function(){
    detectNetwork('6221582035402270617').should.equal('China UnionPay')
  })

  it('has a prefix of 622159 and a length of 19', function(){
    detectNetwork('6221592370807231433').should.equal('China UnionPay')
  })

  it('has a prefix of 622160 and a length of 19', function(){
    detectNetwork('6221601848451503120').should.equal('China UnionPay')
  })

  it('has a prefix of 622161 and a length of 19', function(){
    detectNetwork('6221617261051347802').should.equal('China UnionPay')
  })

  it('has a prefix of 622162 and a length of 19', function(){
    detectNetwork('6221623605278866203').should.equal('China UnionPay')
  })

  it('has a prefix of 622163 and a length of 19', function(){
    detectNetwork('6221638047362568047').should.equal('China UnionPay')
  })

  it('has a prefix of 622164 and a length of 19', function(){
    detectNetwork('6221645038860014681').should.equal('China UnionPay')
  })

  it('has a prefix of 622165 and a length of 19', function(){
    detectNetwork('6221653353213528068').should.equal('China UnionPay')
  })

  it('has a prefix of 622166 and a length of 19', function(){
    detectNetwork('6221666864158024771').should.equal('China UnionPay')
  })

  it('has a prefix of 622167 and a length of 19', function(){
    detectNetwork('6221676514023010760').should.equal('China UnionPay')
  })

  it('has a prefix of 622168 and a length of 19', function(){
    detectNetwork('6221680464256640682').should.equal('China UnionPay')
  })

  it('has a prefix of 622169 and a length of 19', function(){
    detectNetwork('6221696833082320082').should.equal('China UnionPay')
  })

  it('has a prefix of 622170 and a length of 19', function(){
    detectNetwork('6221705127331527735').should.equal('China UnionPay')
  })

  it('has a prefix of 622171 and a length of 19', function(){
    detectNetwork('6221715030820072418').should.equal('China UnionPay')
  })

  it('has a prefix of 622172 and a length of 19', function(){
    detectNetwork('6221726322810017173').should.equal('China UnionPay')
  })

  it('has a prefix of 622173 and a length of 19', function(){
    detectNetwork('6221737718012813258').should.equal('China UnionPay')
  })

  it('has a prefix of 622174 and a length of 19', function(){
    detectNetwork('6221746435281187141').should.equal('China UnionPay')
  })

  it('has a prefix of 622175 and a length of 19', function(){
    detectNetwork('6221758376322787882').should.equal('China UnionPay')
  })

  it('has a prefix of 622176 and a length of 19', function(){
    detectNetwork('6221765418534107837').should.equal('China UnionPay')
  })

  it('has a prefix of 622177 and a length of 19', function(){
    detectNetwork('6221776717580755802').should.equal('China UnionPay')
  })

  it('has a prefix of 622178 and a length of 19', function(){
    detectNetwork('6221787044007806834').should.equal('China UnionPay')
  })

  it('has a prefix of 622179 and a length of 19', function(){
    detectNetwork('6221797034683874466').should.equal('China UnionPay')
  })

  it('has a prefix of 622180 and a length of 19', function(){
    detectNetwork('6221805832547170155').should.equal('China UnionPay')
  })

  it('has a prefix of 622181 and a length of 19', function(){
    detectNetwork('6221813008424607100').should.equal('China UnionPay')
  })

  it('has a prefix of 622182 and a length of 19', function(){
    detectNetwork('6221827540155782818').should.equal('China UnionPay')
  })

  it('has a prefix of 622183 and a length of 19', function(){
    detectNetwork('6221835407060064388').should.equal('China UnionPay')
  })

  it('has a prefix of 622184 and a length of 19', function(){
    detectNetwork('6221846267707252351').should.equal('China UnionPay')
  })

  it('has a prefix of 622185 and a length of 19', function(){
    detectNetwork('6221855317301346246').should.equal('China UnionPay')
  })

  it('has a prefix of 622186 and a length of 19', function(){
    detectNetwork('6221863887382377543').should.equal('China UnionPay')
  })

  it('has a prefix of 622187 and a length of 19', function(){
    detectNetwork('6221872846513271336').should.equal('China UnionPay')
  })

  it('has a prefix of 622188 and a length of 19', function(){
    detectNetwork('6221881682681663347').should.equal('China UnionPay')
  })

  it('has a prefix of 622189 and a length of 19', function(){
    detectNetwork('6221891365142273551').should.equal('China UnionPay')
  })

  it('has a prefix of 622190 and a length of 19', function(){
    detectNetwork('6221900642015457311').should.equal('China UnionPay')
  })

  it('has a prefix of 622191 and a length of 19', function(){
    detectNetwork('6221917581801051433').should.equal('China UnionPay')
  })

  it('has a prefix of 622192 and a length of 19', function(){
    detectNetwork('6221923767370786864').should.equal('China UnionPay')
  })

  it('has a prefix of 622193 and a length of 19', function(){
    detectNetwork('6221930215476188152').should.equal('China UnionPay')
  })

  it('has a prefix of 622194 and a length of 19', function(){
    detectNetwork('6221945800314025427').should.equal('China UnionPay')
  })

  it('has a prefix of 622195 and a length of 19', function(){
    detectNetwork('6221953654225610420').should.equal('China UnionPay')
  })

  it('has a prefix of 622196 and a length of 19', function(){
    detectNetwork('6221965678625145805').should.equal('China UnionPay')
  })

  it('has a prefix of 622197 and a length of 19', function(){
    detectNetwork('6221975480602457326').should.equal('China UnionPay')
  })

  it('has a prefix of 622198 and a length of 19', function(){
    detectNetwork('6221981264846740354').should.equal('China UnionPay')
  })

  it('has a prefix of 622199 and a length of 19', function(){
    detectNetwork('6221996012157010330').should.equal('China UnionPay')
  })

  it('has a prefix of 622200 and a length of 19', function(){
    detectNetwork('6222003360848547010').should.equal('China UnionPay')
  })

  it('has a prefix of 622201 and a length of 19', function(){
    detectNetwork('6222010821233153803').should.equal('China UnionPay')
  })

  it('has a prefix of 622202 and a length of 19', function(){
    detectNetwork('6222021112453234286').should.equal('China UnionPay')
  })

  it('has a prefix of 622203 and a length of 19', function(){
    detectNetwork('6222037536722325527').should.equal('China UnionPay')
  })

  it('has a prefix of 622204 and a length of 19', function(){
    detectNetwork('6222043042083866426').should.equal('China UnionPay')
  })

  it('has a prefix of 622205 and a length of 19', function(){
    detectNetwork('6222056647168508065').should.equal('China UnionPay')
  })

  it('has a prefix of 622206 and a length of 19', function(){
    detectNetwork('6222065248121726731').should.equal('China UnionPay')
  })

  it('has a prefix of 622207 and a length of 19', function(){
    detectNetwork('6222072772411715213').should.equal('China UnionPay')
  })

  it('has a prefix of 622208 and a length of 19', function(){
    detectNetwork('6222083571306435627').should.equal('China UnionPay')
  })

  it('has a prefix of 622209 and a length of 19', function(){
    detectNetwork('6222091748153028841').should.equal('China UnionPay')
  })

  it('has a prefix of 622210 and a length of 19', function(){
    detectNetwork('6222106434260548480').should.equal('China UnionPay')
  })

  it('has a prefix of 622211 and a length of 19', function(){
    detectNetwork('6222113718188610433').should.equal('China UnionPay')
  })

  it('has a prefix of 622212 and a length of 19', function(){
    detectNetwork('6222126656773521335').should.equal('China UnionPay')
  })

  it('has a prefix of 622213 and a length of 19', function(){
    detectNetwork('6222136425437627722').should.equal('China UnionPay')
  })

  it('has a prefix of 622214 and a length of 19', function(){
    detectNetwork('6222146785854214136').should.equal('China UnionPay')
  })

  it('has a prefix of 622215 and a length of 19', function(){
    detectNetwork('6222154772625863313').should.equal('China UnionPay')
  })

  it('has a prefix of 622216 and a length of 19', function(){
    detectNetwork('6222168357601162058').should.equal('China UnionPay')
  })

  it('has a prefix of 622217 and a length of 19', function(){
    detectNetwork('6222174553836506454').should.equal('China UnionPay')
  })

  it('has a prefix of 622218 and a length of 19', function(){
    detectNetwork('6222187850034482583').should.equal('China UnionPay')
  })

  it('has a prefix of 622219 and a length of 19', function(){
    detectNetwork('6222196572637421340').should.equal('China UnionPay')
  })

  it('has a prefix of 622220 and a length of 19', function(){
    detectNetwork('6222206316760117046').should.equal('China UnionPay')
  })

  it('has a prefix of 622221 and a length of 19', function(){
    detectNetwork('6222211852673202780').should.equal('China UnionPay')
  })

  it('has a prefix of 622222 and a length of 19', function(){
    detectNetwork('6222227311533124715').should.equal('China UnionPay')
  })

  it('has a prefix of 622223 and a length of 19', function(){
    detectNetwork('6222231770264367133').should.equal('China UnionPay')
  })

  it('has a prefix of 622224 and a length of 19', function(){
    detectNetwork('6222248617738620615').should.equal('China UnionPay')
  })

  it('has a prefix of 622225 and a length of 19', function(){
    detectNetwork('6222255761263118734').should.equal('China UnionPay')
  })

  it('has a prefix of 622226 and a length of 19', function(){
    detectNetwork('6222261643468236307').should.equal('China UnionPay')
  })

  it('has a prefix of 622227 and a length of 19', function(){
    detectNetwork('6222273238701787637').should.equal('China UnionPay')
  })

  it('has a prefix of 622228 and a length of 19', function(){
    detectNetwork('6222280864366183686').should.equal('China UnionPay')
  })

  it('has a prefix of 622229 and a length of 19', function(){
    detectNetwork('6222295073710728783').should.equal('China UnionPay')
  })

  it('has a prefix of 622230 and a length of 19', function(){
    detectNetwork('6222305428428100775').should.equal('China UnionPay')
  })

  it('has a prefix of 622231 and a length of 19', function(){
    detectNetwork('6222310034516046160').should.equal('China UnionPay')
  })

  it('has a prefix of 622232 and a length of 19', function(){
    detectNetwork('6222328653005241448').should.equal('China UnionPay')
  })

  it('has a prefix of 622233 and a length of 19', function(){
    detectNetwork('6222336150605246827').should.equal('China UnionPay')
  })

  it('has a prefix of 622234 and a length of 19', function(){
    detectNetwork('6222348155156881806').should.equal('China UnionPay')
  })

  it('has a prefix of 622235 and a length of 19', function(){
    detectNetwork('6222356180710886660').should.equal('China UnionPay')
  })

  it('has a prefix of 622236 and a length of 19', function(){
    detectNetwork('6222360203212217526').should.equal('China UnionPay')
  })

  it('has a prefix of 622237 and a length of 19', function(){
    detectNetwork('6222375451563541081').should.equal('China UnionPay')
  })

  it('has a prefix of 622238 and a length of 19', function(){
    detectNetwork('6222382831570431333').should.equal('China UnionPay')
  })

  it('has a prefix of 622239 and a length of 19', function(){
    detectNetwork('6222390448385261244').should.equal('China UnionPay')
  })

  it('has a prefix of 622240 and a length of 19', function(){
    detectNetwork('6222407726210237613').should.equal('China UnionPay')
  })

  it('has a prefix of 622241 and a length of 19', function(){
    detectNetwork('6222416134546578473').should.equal('China UnionPay')
  })

  it('has a prefix of 622242 and a length of 19', function(){
    detectNetwork('6222426823606132308').should.equal('China UnionPay')
  })

  it('has a prefix of 622243 and a length of 19', function(){
    detectNetwork('6222431001102103055').should.equal('China UnionPay')
  })

  it('has a prefix of 622244 and a length of 19', function(){
    detectNetwork('6222441062472607040').should.equal('China UnionPay')
  })

  it('has a prefix of 622245 and a length of 19', function(){
    detectNetwork('6222454872722364316').should.equal('China UnionPay')
  })

  it('has a prefix of 622246 and a length of 19', function(){
    detectNetwork('6222463543063410815').should.equal('China UnionPay')
  })

  it('has a prefix of 622247 and a length of 19', function(){
    detectNetwork('6222473032407455011').should.equal('China UnionPay')
  })

  it('has a prefix of 622248 and a length of 19', function(){
    detectNetwork('6222482821736876075').should.equal('China UnionPay')
  })

  it('has a prefix of 622249 and a length of 19', function(){
    detectNetwork('6222492368024744332').should.equal('China UnionPay')
  })

  it('has a prefix of 622250 and a length of 19', function(){
    detectNetwork('6222505504327317677').should.equal('China UnionPay')
  })

  it('has a prefix of 622251 and a length of 19', function(){
    detectNetwork('6222513606224220220').should.equal('China UnionPay')
  })

  it('has a prefix of 622252 and a length of 19', function(){
    detectNetwork('6222521223724473282').should.equal('China UnionPay')
  })

  it('has a prefix of 622253 and a length of 19', function(){
    detectNetwork('6222534470275336843').should.equal('China UnionPay')
  })

  it('has a prefix of 622254 and a length of 19', function(){
    detectNetwork('6222544504375122786').should.equal('China UnionPay')
  })

  it('has a prefix of 622255 and a length of 19', function(){
    detectNetwork('6222553624863214780').should.equal('China UnionPay')
  })

  it('has a prefix of 622256 and a length of 19', function(){
    detectNetwork('6222562517031778118').should.equal('China UnionPay')
  })

  it('has a prefix of 622257 and a length of 19', function(){
    detectNetwork('6222570440316338880').should.equal('China UnionPay')
  })

  it('has a prefix of 622258 and a length of 19', function(){
    detectNetwork('6222585681157142034').should.equal('China UnionPay')
  })

  it('has a prefix of 622259 and a length of 19', function(){
    detectNetwork('6222598060308260646').should.equal('China UnionPay')
  })

  it('has a prefix of 622260 and a length of 19', function(){
    detectNetwork('6222600776203866415').should.equal('China UnionPay')
  })

  it('has a prefix of 622261 and a length of 19', function(){
    detectNetwork('6222613764642184365').should.equal('China UnionPay')
  })

  it('has a prefix of 622262 and a length of 19', function(){
    detectNetwork('6222625838171135335').should.equal('China UnionPay')
  })

  it('has a prefix of 622263 and a length of 19', function(){
    detectNetwork('6222635075351874753').should.equal('China UnionPay')
  })

  it('has a prefix of 622264 and a length of 19', function(){
    detectNetwork('6222643166554438505').should.equal('China UnionPay')
  })

  it('has a prefix of 622265 and a length of 19', function(){
    detectNetwork('6222653822645707385').should.equal('China UnionPay')
  })

  it('has a prefix of 622266 and a length of 19', function(){
    detectNetwork('6222665337682063744').should.equal('China UnionPay')
  })

  it('has a prefix of 622267 and a length of 19', function(){
    detectNetwork('6222672475337341656').should.equal('China UnionPay')
  })

  it('has a prefix of 622268 and a length of 19', function(){
    detectNetwork('6222680635185106584').should.equal('China UnionPay')
  })

  it('has a prefix of 622269 and a length of 19', function(){
    detectNetwork('6222690242463357358').should.equal('China UnionPay')
  })

  it('has a prefix of 622270 and a length of 19', function(){
    detectNetwork('6222701704258716326').should.equal('China UnionPay')
  })

  it('has a prefix of 622271 and a length of 19', function(){
    detectNetwork('6222714745618283524').should.equal('China UnionPay')
  })

  it('has a prefix of 622272 and a length of 19', function(){
    detectNetwork('6222728050831107003').should.equal('China UnionPay')
  })

  it('has a prefix of 622273 and a length of 19', function(){
    detectNetwork('6222733010703156403').should.equal('China UnionPay')
  })

  it('has a prefix of 622274 and a length of 19', function(){
    detectNetwork('6222745447681681735').should.equal('China UnionPay')
  })

  it('has a prefix of 622275 and a length of 19', function(){
    detectNetwork('6222755147064813123').should.equal('China UnionPay')
  })

  it('has a prefix of 622276 and a length of 19', function(){
    detectNetwork('6222760073533643176').should.equal('China UnionPay')
  })

  it('has a prefix of 622277 and a length of 19', function(){
    detectNetwork('6222776843223706504').should.equal('China UnionPay')
  })

  it('has a prefix of 622278 and a length of 19', function(){
    detectNetwork('6222788161588332404').should.equal('China UnionPay')
  })

  it('has a prefix of 622279 and a length of 19', function(){
    detectNetwork('6222793762261850515').should.equal('China UnionPay')
  })

  it('has a prefix of 622280 and a length of 19', function(){
    detectNetwork('6222801430280736677').should.equal('China UnionPay')
  })

  it('has a prefix of 622281 and a length of 19', function(){
    detectNetwork('6222818854788367012').should.equal('China UnionPay')
  })

  it('has a prefix of 622282 and a length of 19', function(){
    detectNetwork('6222825226726158736').should.equal('China UnionPay')
  })

  it('has a prefix of 622283 and a length of 19', function(){
    detectNetwork('6222835452676285615').should.equal('China UnionPay')
  })

  it('has a prefix of 622284 and a length of 19', function(){
    detectNetwork('6222841847551723101').should.equal('China UnionPay')
  })

  it('has a prefix of 622285 and a length of 19', function(){
    detectNetwork('6222857055438472630').should.equal('China UnionPay')
  })

  it('has a prefix of 622286 and a length of 19', function(){
    detectNetwork('6222864450538203174').should.equal('China UnionPay')
  })

  it('has a prefix of 622287 and a length of 19', function(){
    detectNetwork('6222876621328501384').should.equal('China UnionPay')
  })

  it('has a prefix of 622288 and a length of 19', function(){
    detectNetwork('6222883531011761867').should.equal('China UnionPay')
  })

  it('has a prefix of 622289 and a length of 19', function(){
    detectNetwork('6222894757533746514').should.equal('China UnionPay')
  })

  it('has a prefix of 622290 and a length of 19', function(){
    detectNetwork('6222908258038508037').should.equal('China UnionPay')
  })

  it('has a prefix of 622291 and a length of 19', function(){
    detectNetwork('6222914767763713715').should.equal('China UnionPay')
  })

  it('has a prefix of 622292 and a length of 19', function(){
    detectNetwork('6222920613116705861').should.equal('China UnionPay')
  })

  it('has a prefix of 622293 and a length of 19', function(){
    detectNetwork('6222937522253431874').should.equal('China UnionPay')
  })

  it('has a prefix of 622294 and a length of 19', function(){
    detectNetwork('6222947358883438041').should.equal('China UnionPay')
  })

  it('has a prefix of 622295 and a length of 19', function(){
    detectNetwork('6222952102524327321').should.equal('China UnionPay')
  })

  it('has a prefix of 622296 and a length of 19', function(){
    detectNetwork('6222962537637076522').should.equal('China UnionPay')
  })

  it('has a prefix of 622297 and a length of 19', function(){
    detectNetwork('6222972863443188023').should.equal('China UnionPay')
  })

  it('has a prefix of 622298 and a length of 19', function(){
    detectNetwork('6222987776433504800').should.equal('China UnionPay')
  })

  it('has a prefix of 622299 and a length of 19', function(){
    detectNetwork('6222996108830888411').should.equal('China UnionPay')
  })

  it('has a prefix of 622300 and a length of 19', function(){
    detectNetwork('6223007502612031563').should.equal('China UnionPay')
  })

  it('has a prefix of 622301 and a length of 19', function(){
    detectNetwork('6223017537130441065').should.equal('China UnionPay')
  })

  it('has a prefix of 622302 and a length of 19', function(){
    detectNetwork('6223021173366240485').should.equal('China UnionPay')
  })

  it('has a prefix of 622303 and a length of 19', function(){
    detectNetwork('6223031804732638568').should.equal('China UnionPay')
  })

  it('has a prefix of 622304 and a length of 19', function(){
    detectNetwork('6223048614187514471').should.equal('China UnionPay')
  })

  it('has a prefix of 622305 and a length of 19', function(){
    detectNetwork('6223056683206782047').should.equal('China UnionPay')
  })

  it('has a prefix of 622306 and a length of 19', function(){
    detectNetwork('6223060615406257644').should.equal('China UnionPay')
  })

  it('has a prefix of 622307 and a length of 19', function(){
    detectNetwork('6223078507476611813').should.equal('China UnionPay')
  })

  it('has a prefix of 622308 and a length of 19', function(){
    detectNetwork('6223083247663645055').should.equal('China UnionPay')
  })

  it('has a prefix of 622309 and a length of 19', function(){
    detectNetwork('6223091561234844352').should.equal('China UnionPay')
  })

  it('has a prefix of 622310 and a length of 19', function(){
    detectNetwork('6223103273347040887').should.equal('China UnionPay')
  })

  it('has a prefix of 622311 and a length of 19', function(){
    detectNetwork('6223116230618272656').should.equal('China UnionPay')
  })

  it('has a prefix of 622312 and a length of 19', function(){
    detectNetwork('6223127422766287875').should.equal('China UnionPay')
  })

  it('has a prefix of 622313 and a length of 19', function(){
    detectNetwork('6223135542376880210').should.equal('China UnionPay')
  })

  it('has a prefix of 622314 and a length of 19', function(){
    detectNetwork('6223147103207177543').should.equal('China UnionPay')
  })

  it('has a prefix of 622315 and a length of 19', function(){
    detectNetwork('6223156252816117280').should.equal('China UnionPay')
  })

  it('has a prefix of 622316 and a length of 19', function(){
    detectNetwork('6223168766341532680').should.equal('China UnionPay')
  })

  it('has a prefix of 622317 and a length of 19', function(){
    detectNetwork('6223170713684771575').should.equal('China UnionPay')
  })

  it('has a prefix of 622318 and a length of 19', function(){
    detectNetwork('6223180668227002381').should.equal('China UnionPay')
  })

  it('has a prefix of 622319 and a length of 19', function(){
    detectNetwork('6223194151128504352').should.equal('China UnionPay')
  })

  it('has a prefix of 622320 and a length of 19', function(){
    detectNetwork('6223206751882365855').should.equal('China UnionPay')
  })

  it('has a prefix of 622321 and a length of 19', function(){
    detectNetwork('6223210458020640530').should.equal('China UnionPay')
  })

  it('has a prefix of 622322 and a length of 19', function(){
    detectNetwork('6223223525083621780').should.equal('China UnionPay')
  })

  it('has a prefix of 622323 and a length of 19', function(){
    detectNetwork('6223238727125011202').should.equal('China UnionPay')
  })

  it('has a prefix of 622324 and a length of 19', function(){
    detectNetwork('6223246575436821416').should.equal('China UnionPay')
  })

  it('has a prefix of 622325 and a length of 19', function(){
    detectNetwork('6223254611722383645').should.equal('China UnionPay')
  })

  it('has a prefix of 622326 and a length of 19', function(){
    detectNetwork('6223262401125725782').should.equal('China UnionPay')
  })

  it('has a prefix of 622327 and a length of 19', function(){
    detectNetwork('6223273325228553854').should.equal('China UnionPay')
  })

  it('has a prefix of 622328 and a length of 19', function(){
    detectNetwork('6223287047044177423').should.equal('China UnionPay')
  })

  it('has a prefix of 622329 and a length of 19', function(){
    detectNetwork('6223292065438043558').should.equal('China UnionPay')
  })

  it('has a prefix of 622330 and a length of 19', function(){
    detectNetwork('6223306444406650064').should.equal('China UnionPay')
  })

  it('has a prefix of 622331 and a length of 19', function(){
    detectNetwork('6223311818065755505').should.equal('China UnionPay')
  })

  it('has a prefix of 622332 and a length of 19', function(){
    detectNetwork('6223324278450877764').should.equal('China UnionPay')
  })

  it('has a prefix of 622333 and a length of 19', function(){
    detectNetwork('6223335033753542620').should.equal('China UnionPay')
  })

  it('has a prefix of 622334 and a length of 19', function(){
    detectNetwork('6223348084730757450').should.equal('China UnionPay')
  })

  it('has a prefix of 622335 and a length of 19', function(){
    detectNetwork('6223351654843500186').should.equal('China UnionPay')
  })

  it('has a prefix of 622336 and a length of 19', function(){
    detectNetwork('6223360566214037723').should.equal('China UnionPay')
  })

  it('has a prefix of 622337 and a length of 19', function(){
    detectNetwork('6223373446655534783').should.equal('China UnionPay')
  })

  it('has a prefix of 622338 and a length of 19', function(){
    detectNetwork('6223381218825716185').should.equal('China UnionPay')
  })

  it('has a prefix of 622339 and a length of 19', function(){
    detectNetwork('6223398144515860707').should.equal('China UnionPay')
  })

  it('has a prefix of 622340 and a length of 19', function(){
    detectNetwork('6223401823536360056').should.equal('China UnionPay')
  })

  it('has a prefix of 622341 and a length of 19', function(){
    detectNetwork('6223411141312583486').should.equal('China UnionPay')
  })

  it('has a prefix of 622342 and a length of 19', function(){
    detectNetwork('6223424168752532371').should.equal('China UnionPay')
  })

  it('has a prefix of 622343 and a length of 19', function(){
    detectNetwork('6223433531776028655').should.equal('China UnionPay')
  })

  it('has a prefix of 622344 and a length of 19', function(){
    detectNetwork('6223443225707412523').should.equal('China UnionPay')
  })

  it('has a prefix of 622345 and a length of 19', function(){
    detectNetwork('6223457011441618451').should.equal('China UnionPay')
  })

  it('has a prefix of 622346 and a length of 19', function(){
    detectNetwork('6223461782053677156').should.equal('China UnionPay')
  })

  it('has a prefix of 622347 and a length of 19', function(){
    detectNetwork('6223470852287234832').should.equal('China UnionPay')
  })

  it('has a prefix of 622348 and a length of 19', function(){
    detectNetwork('6223486071724386305').should.equal('China UnionPay')
  })

  it('has a prefix of 622349 and a length of 19', function(){
    detectNetwork('6223498286575040165').should.equal('China UnionPay')
  })

  it('has a prefix of 622350 and a length of 19', function(){
    detectNetwork('6223503263204074471').should.equal('China UnionPay')
  })

  it('has a prefix of 622351 and a length of 19', function(){
    detectNetwork('6223515803223511772').should.equal('China UnionPay')
  })

  it('has a prefix of 622352 and a length of 19', function(){
    detectNetwork('6223523287350252034').should.equal('China UnionPay')
  })

  it('has a prefix of 622353 and a length of 19', function(){
    detectNetwork('6223530357167300582').should.equal('China UnionPay')
  })

  it('has a prefix of 622354 and a length of 19', function(){
    detectNetwork('6223543237455144776').should.equal('China UnionPay')
  })

  it('has a prefix of 622355 and a length of 19', function(){
    detectNetwork('6223550170132145483').should.equal('China UnionPay')
  })

  it('has a prefix of 622356 and a length of 19', function(){
    detectNetwork('6223565534540852237').should.equal('China UnionPay')
  })

  it('has a prefix of 622357 and a length of 19', function(){
    detectNetwork('6223572370173511663').should.equal('China UnionPay')
  })

  it('has a prefix of 622358 and a length of 19', function(){
    detectNetwork('6223581467315873864').should.equal('China UnionPay')
  })

  it('has a prefix of 622359 and a length of 19', function(){
    detectNetwork('6223590076861040167').should.equal('China UnionPay')
  })

  it('has a prefix of 622360 and a length of 19', function(){
    detectNetwork('6223604480071102081').should.equal('China UnionPay')
  })

  it('has a prefix of 622361 and a length of 19', function(){
    detectNetwork('6223613234645011184').should.equal('China UnionPay')
  })

  it('has a prefix of 622362 and a length of 19', function(){
    detectNetwork('6223623716014556355').should.equal('China UnionPay')
  })

  it('has a prefix of 622363 and a length of 19', function(){
    detectNetwork('6223635121622617867').should.equal('China UnionPay')
  })

  it('has a prefix of 622364 and a length of 19', function(){
    detectNetwork('6223647236182243747').should.equal('China UnionPay')
  })

  it('has a prefix of 622365 and a length of 19', function(){
    detectNetwork('6223651036305502465').should.equal('China UnionPay')
  })

  it('has a prefix of 622366 and a length of 19', function(){
    detectNetwork('6223663308158176873').should.equal('China UnionPay')
  })

  it('has a prefix of 622367 and a length of 19', function(){
    detectNetwork('6223677848508602743').should.equal('China UnionPay')
  })

  it('has a prefix of 622368 and a length of 19', function(){
    detectNetwork('6223686784228642185').should.equal('China UnionPay')
  })

  it('has a prefix of 622369 and a length of 19', function(){
    detectNetwork('6223698141102663804').should.equal('China UnionPay')
  })

  it('has a prefix of 622370 and a length of 19', function(){
    detectNetwork('6223700307835171155').should.equal('China UnionPay')
  })

  it('has a prefix of 622371 and a length of 19', function(){
    detectNetwork('6223718516611315664').should.equal('China UnionPay')
  })

  it('has a prefix of 622372 and a length of 19', function(){
    detectNetwork('6223725453301261817').should.equal('China UnionPay')
  })

  it('has a prefix of 622373 and a length of 19', function(){
    detectNetwork('6223737865328658155').should.equal('China UnionPay')
  })

  it('has a prefix of 622374 and a length of 19', function(){
    detectNetwork('6223748422011615206').should.equal('China UnionPay')
  })

  it('has a prefix of 622375 and a length of 19', function(){
    detectNetwork('6223755818323436254').should.equal('China UnionPay')
  })

  it('has a prefix of 622376 and a length of 19', function(){
    detectNetwork('6223762604767801500').should.equal('China UnionPay')
  })

  it('has a prefix of 622377 and a length of 19', function(){
    detectNetwork('6223771624763575308').should.equal('China UnionPay')
  })

  it('has a prefix of 622378 and a length of 19', function(){
    detectNetwork('6223782012226565415').should.equal('China UnionPay')
  })

  it('has a prefix of 622379 and a length of 19', function(){
    detectNetwork('6223793551843164132').should.equal('China UnionPay')
  })

  it('has a prefix of 622380 and a length of 19', function(){
    detectNetwork('6223802222455265656').should.equal('China UnionPay')
  })

  it('has a prefix of 622381 and a length of 19', function(){
    detectNetwork('6223814834433316216').should.equal('China UnionPay')
  })

  it('has a prefix of 622382 and a length of 19', function(){
    detectNetwork('6223825507428852761').should.equal('China UnionPay')
  })

  it('has a prefix of 622383 and a length of 19', function(){
    detectNetwork('6223838081063840221').should.equal('China UnionPay')
  })

  it('has a prefix of 622384 and a length of 19', function(){
    detectNetwork('6223847766245886128').should.equal('China UnionPay')
  })

  it('has a prefix of 622385 and a length of 19', function(){
    detectNetwork('6223851014511105636').should.equal('China UnionPay')
  })

  it('has a prefix of 622386 and a length of 19', function(){
    detectNetwork('6223867308757621376').should.equal('China UnionPay')
  })

  it('has a prefix of 622387 and a length of 19', function(){
    detectNetwork('6223871120740760863').should.equal('China UnionPay')
  })

  it('has a prefix of 622388 and a length of 19', function(){
    detectNetwork('6223883214781778652').should.equal('China UnionPay')
  })

  it('has a prefix of 622389 and a length of 19', function(){
    detectNetwork('6223893655206778275').should.equal('China UnionPay')
  })

  it('has a prefix of 622390 and a length of 19', function(){
    detectNetwork('6223908710622838731').should.equal('China UnionPay')
  })

  it('has a prefix of 622391 and a length of 19', function(){
    detectNetwork('6223911320287031127').should.equal('China UnionPay')
  })

  it('has a prefix of 622392 and a length of 19', function(){
    detectNetwork('6223922627212182415').should.equal('China UnionPay')
  })

  it('has a prefix of 622393 and a length of 19', function(){
    detectNetwork('6223931182444063244').should.equal('China UnionPay')
  })

  it('has a prefix of 622394 and a length of 19', function(){
    detectNetwork('6223943550041011670').should.equal('China UnionPay')
  })

  it('has a prefix of 622395 and a length of 19', function(){
    detectNetwork('6223956438660112620').should.equal('China UnionPay')
  })

  it('has a prefix of 622396 and a length of 19', function(){
    detectNetwork('6223968688635107508').should.equal('China UnionPay')
  })

  it('has a prefix of 622397 and a length of 19', function(){
    detectNetwork('6223973128804373366').should.equal('China UnionPay')
  })

  it('has a prefix of 622398 and a length of 19', function(){
    detectNetwork('6223986127174237673').should.equal('China UnionPay')
  })

  it('has a prefix of 622399 and a length of 19', function(){
    detectNetwork('6223997421715533433').should.equal('China UnionPay')
  })

  it('has a prefix of 622400 and a length of 19', function(){
    detectNetwork('6224001260255688028').should.equal('China UnionPay')
  })

  it('has a prefix of 622401 and a length of 19', function(){
    detectNetwork('6224013013283427677').should.equal('China UnionPay')
  })

  it('has a prefix of 622402 and a length of 19', function(){
    detectNetwork('6224028853725503358').should.equal('China UnionPay')
  })

  it('has a prefix of 622403 and a length of 19', function(){
    detectNetwork('6224032671315772723').should.equal('China UnionPay')
  })

  it('has a prefix of 622404 and a length of 19', function(){
    detectNetwork('6224044853447116812').should.equal('China UnionPay')
  })

  it('has a prefix of 622405 and a length of 19', function(){
    detectNetwork('6224058283478085314').should.equal('China UnionPay')
  })

  it('has a prefix of 622406 and a length of 19', function(){
    detectNetwork('6224064188816412302').should.equal('China UnionPay')
  })

  it('has a prefix of 622407 and a length of 19', function(){
    detectNetwork('6224073482433712140').should.equal('China UnionPay')
  })

  it('has a prefix of 622408 and a length of 19', function(){
    detectNetwork('6224084530136864440').should.equal('China UnionPay')
  })

  it('has a prefix of 622409 and a length of 19', function(){
    detectNetwork('6224090264647080768').should.equal('China UnionPay')
  })

  it('has a prefix of 622410 and a length of 19', function(){
    detectNetwork('6224108130242323103').should.equal('China UnionPay')
  })

  it('has a prefix of 622411 and a length of 19', function(){
    detectNetwork('6224114323463483352').should.equal('China UnionPay')
  })

  it('has a prefix of 622412 and a length of 19', function(){
    detectNetwork('6224121506080201704').should.equal('China UnionPay')
  })

  it('has a prefix of 622413 and a length of 19', function(){
    detectNetwork('6224135628436874205').should.equal('China UnionPay')
  })

  it('has a prefix of 622414 and a length of 19', function(){
    detectNetwork('6224146116212708283').should.equal('China UnionPay')
  })

  it('has a prefix of 622415 and a length of 19', function(){
    detectNetwork('6224155112407744857').should.equal('China UnionPay')
  })

  it('has a prefix of 622416 and a length of 19', function(){
    detectNetwork('6224164257668731234').should.equal('China UnionPay')
  })

  it('has a prefix of 622417 and a length of 19', function(){
    detectNetwork('6224174138588686636').should.equal('China UnionPay')
  })

  it('has a prefix of 622418 and a length of 19', function(){
    detectNetwork('6224188778763431702').should.equal('China UnionPay')
  })

  it('has a prefix of 622419 and a length of 19', function(){
    detectNetwork('6224198077603867077').should.equal('China UnionPay')
  })

  it('has a prefix of 622420 and a length of 19', function(){
    detectNetwork('6224200378302148366').should.equal('China UnionPay')
  })

  it('has a prefix of 622421 and a length of 19', function(){
    detectNetwork('6224214535153483302').should.equal('China UnionPay')
  })

  it('has a prefix of 622422 and a length of 19', function(){
    detectNetwork('6224222045451114084').should.equal('China UnionPay')
  })

  it('has a prefix of 622423 and a length of 19', function(){
    detectNetwork('6224230618322145553').should.equal('China UnionPay')
  })

  it('has a prefix of 622424 and a length of 19', function(){
    detectNetwork('6224241030610554726').should.equal('China UnionPay')
  })

  it('has a prefix of 622425 and a length of 19', function(){
    detectNetwork('6224254038228378777').should.equal('China UnionPay')
  })

  it('has a prefix of 622426 and a length of 19', function(){
    detectNetwork('6224260721073526014').should.equal('China UnionPay')
  })

  it('has a prefix of 622427 and a length of 19', function(){
    detectNetwork('6224271471728142870').should.equal('China UnionPay')
  })

  it('has a prefix of 622428 and a length of 19', function(){
    detectNetwork('6224280713835772046').should.equal('China UnionPay')
  })

  it('has a prefix of 622429 and a length of 19', function(){
    detectNetwork('6224298683134882564').should.equal('China UnionPay')
  })

  it('has a prefix of 622430 and a length of 19', function(){
    detectNetwork('6224301203062183271').should.equal('China UnionPay')
  })

  it('has a prefix of 622431 and a length of 19', function(){
    detectNetwork('6224314785414056624').should.equal('China UnionPay')
  })

  it('has a prefix of 622432 and a length of 19', function(){
    detectNetwork('6224322101662726066').should.equal('China UnionPay')
  })

  it('has a prefix of 622433 and a length of 19', function(){
    detectNetwork('6224333776220787022').should.equal('China UnionPay')
  })

  it('has a prefix of 622434 and a length of 19', function(){
    detectNetwork('6224346323554857855').should.equal('China UnionPay')
  })

  it('has a prefix of 622435 and a length of 19', function(){
    detectNetwork('6224353773608542043').should.equal('China UnionPay')
  })

  it('has a prefix of 622436 and a length of 19', function(){
    detectNetwork('6224360800623554771').should.equal('China UnionPay')
  })

  it('has a prefix of 622437 and a length of 19', function(){
    detectNetwork('6224371765343810761').should.equal('China UnionPay')
  })

  it('has a prefix of 622438 and a length of 19', function(){
    detectNetwork('6224384407704427737').should.equal('China UnionPay')
  })

  it('has a prefix of 622439 and a length of 19', function(){
    detectNetwork('6224396308520307108').should.equal('China UnionPay')
  })

  it('has a prefix of 622440 and a length of 19', function(){
    detectNetwork('6224402673726876205').should.equal('China UnionPay')
  })

  it('has a prefix of 622441 and a length of 19', function(){
    detectNetwork('6224414750721503847').should.equal('China UnionPay')
  })

  it('has a prefix of 622442 and a length of 19', function(){
    detectNetwork('6224428487286822885').should.equal('China UnionPay')
  })

  it('has a prefix of 622443 and a length of 19', function(){
    detectNetwork('6224435823660025768').should.equal('China UnionPay')
  })

  it('has a prefix of 622444 and a length of 19', function(){
    detectNetwork('6224448556082527347').should.equal('China UnionPay')
  })

  it('has a prefix of 622445 and a length of 19', function(){
    detectNetwork('6224456347048367011').should.equal('China UnionPay')
  })

  it('has a prefix of 622446 and a length of 19', function(){
    detectNetwork('6224460730478621326').should.equal('China UnionPay')
  })

  it('has a prefix of 622447 and a length of 19', function(){
    detectNetwork('6224476416460785135').should.equal('China UnionPay')
  })

  it('has a prefix of 622448 and a length of 19', function(){
    detectNetwork('6224484048781432570').should.equal('China UnionPay')
  })

  it('has a prefix of 622449 and a length of 19', function(){
    detectNetwork('6224498201878417046').should.equal('China UnionPay')
  })

  it('has a prefix of 622450 and a length of 19', function(){
    detectNetwork('6224505110666703357').should.equal('China UnionPay')
  })

  it('has a prefix of 622451 and a length of 19', function(){
    detectNetwork('6224512550716307368').should.equal('China UnionPay')
  })

  it('has a prefix of 622452 and a length of 19', function(){
    detectNetwork('6224528483861365851').should.equal('China UnionPay')
  })

  it('has a prefix of 622453 and a length of 19', function(){
    detectNetwork('6224535715574563127').should.equal('China UnionPay')
  })

  it('has a prefix of 622454 and a length of 19', function(){
    detectNetwork('6224547377757441112').should.equal('China UnionPay')
  })

  it('has a prefix of 622455 and a length of 19', function(){
    detectNetwork('6224550031842251507').should.equal('China UnionPay')
  })

  it('has a prefix of 622456 and a length of 19', function(){
    detectNetwork('6224563770033241765').should.equal('China UnionPay')
  })

  it('has a prefix of 622457 and a length of 19', function(){
    detectNetwork('6224572147512505334').should.equal('China UnionPay')
  })

  it('has a prefix of 622458 and a length of 19', function(){
    detectNetwork('6224581143842778817').should.equal('China UnionPay')
  })

  it('has a prefix of 622459 and a length of 19', function(){
    detectNetwork('6224597601563735061').should.equal('China UnionPay')
  })

  it('has a prefix of 622460 and a length of 19', function(){
    detectNetwork('6224600250254520166').should.equal('China UnionPay')
  })

  it('has a prefix of 622461 and a length of 19', function(){
    detectNetwork('6224614406852807427').should.equal('China UnionPay')
  })

  it('has a prefix of 622462 and a length of 19', function(){
    detectNetwork('6224626087411767831').should.equal('China UnionPay')
  })

  it('has a prefix of 622463 and a length of 19', function(){
    detectNetwork('6224633505570683502').should.equal('China UnionPay')
  })

  it('has a prefix of 622464 and a length of 19', function(){
    detectNetwork('6224643005776802487').should.equal('China UnionPay')
  })

  it('has a prefix of 622465 and a length of 19', function(){
    detectNetwork('6224658773176071820').should.equal('China UnionPay')
  })

  it('has a prefix of 622466 and a length of 19', function(){
    detectNetwork('6224667377877222558').should.equal('China UnionPay')
  })

  it('has a prefix of 622467 and a length of 19', function(){
    detectNetwork('6224673638322318207').should.equal('China UnionPay')
  })

  it('has a prefix of 622468 and a length of 19', function(){
    detectNetwork('6224684206874364680').should.equal('China UnionPay')
  })

  it('has a prefix of 622469 and a length of 19', function(){
    detectNetwork('6224692654002063711').should.equal('China UnionPay')
  })

  it('has a prefix of 622470 and a length of 19', function(){
    detectNetwork('6224707771533532787').should.equal('China UnionPay')
  })

  it('has a prefix of 622471 and a length of 19', function(){
    detectNetwork('6224711046478377680').should.equal('China UnionPay')
  })

  it('has a prefix of 622472 and a length of 19', function(){
    detectNetwork('6224720182353131683').should.equal('China UnionPay')
  })

  it('has a prefix of 622473 and a length of 19', function(){
    detectNetwork('6224734328572512446').should.equal('China UnionPay')
  })

  it('has a prefix of 622474 and a length of 19', function(){
    detectNetwork('6224742744422266434').should.equal('China UnionPay')
  })

  it('has a prefix of 622475 and a length of 19', function(){
    detectNetwork('6224753731824803867').should.equal('China UnionPay')
  })

  it('has a prefix of 622476 and a length of 19', function(){
    detectNetwork('6224766602260312154').should.equal('China UnionPay')
  })

  it('has a prefix of 622477 and a length of 19', function(){
    detectNetwork('6224773815766777207').should.equal('China UnionPay')
  })

  it('has a prefix of 622478 and a length of 19', function(){
    detectNetwork('6224783477841826552').should.equal('China UnionPay')
  })

  it('has a prefix of 622479 and a length of 19', function(){
    detectNetwork('6224793508566433160').should.equal('China UnionPay')
  })

  it('has a prefix of 622480 and a length of 19', function(){
    detectNetwork('6224808442242330150').should.equal('China UnionPay')
  })

  it('has a prefix of 622481 and a length of 19', function(){
    detectNetwork('6224811116687628857').should.equal('China UnionPay')
  })

  it('has a prefix of 622482 and a length of 19', function(){
    detectNetwork('6224825407371641525').should.equal('China UnionPay')
  })

  it('has a prefix of 622483 and a length of 19', function(){
    detectNetwork('6224834641126308264').should.equal('China UnionPay')
  })

  it('has a prefix of 622484 and a length of 19', function(){
    detectNetwork('6224846503047066716').should.equal('China UnionPay')
  })

  it('has a prefix of 622485 and a length of 19', function(){
    detectNetwork('6224855055678107635').should.equal('China UnionPay')
  })

  it('has a prefix of 622486 and a length of 19', function(){
    detectNetwork('6224865061286840218').should.equal('China UnionPay')
  })

  it('has a prefix of 622487 and a length of 19', function(){
    detectNetwork('6224873702807535782').should.equal('China UnionPay')
  })

  it('has a prefix of 622488 and a length of 19', function(){
    detectNetwork('6224887784111360876').should.equal('China UnionPay')
  })

  it('has a prefix of 622489 and a length of 19', function(){
    detectNetwork('6224894646437800338').should.equal('China UnionPay')
  })

  it('has a prefix of 622490 and a length of 19', function(){
    detectNetwork('6224903157357650203').should.equal('China UnionPay')
  })

  it('has a prefix of 622491 and a length of 19', function(){
    detectNetwork('6224914230608021747').should.equal('China UnionPay')
  })

  it('has a prefix of 622492 and a length of 19', function(){
    detectNetwork('6224921842633827713').should.equal('China UnionPay')
  })

  it('has a prefix of 622493 and a length of 19', function(){
    detectNetwork('6224932171248406158').should.equal('China UnionPay')
  })

  it('has a prefix of 622494 and a length of 19', function(){
    detectNetwork('6224942287147364763').should.equal('China UnionPay')
  })

  it('has a prefix of 622495 and a length of 19', function(){
    detectNetwork('6224953302046303467').should.equal('China UnionPay')
  })

  it('has a prefix of 622496 and a length of 19', function(){
    detectNetwork('6224962500731184464').should.equal('China UnionPay')
  })

  it('has a prefix of 622497 and a length of 19', function(){
    detectNetwork('6224975127782273316').should.equal('China UnionPay')
  })

  it('has a prefix of 622498 and a length of 19', function(){
    detectNetwork('6224985720610666482').should.equal('China UnionPay')
  })

  it('has a prefix of 622499 and a length of 19', function(){
    detectNetwork('6224992442303138255').should.equal('China UnionPay')
  })

  it('has a prefix of 622500 and a length of 19', function(){
    detectNetwork('6225000841301287130').should.equal('China UnionPay')
  })

  it('has a prefix of 622501 and a length of 19', function(){
    detectNetwork('6225015783822056215').should.equal('China UnionPay')
  })

  it('has a prefix of 622502 and a length of 19', function(){
    detectNetwork('6225024130054036808').should.equal('China UnionPay')
  })

  it('has a prefix of 622503 and a length of 19', function(){
    detectNetwork('6225036512031354488').should.equal('China UnionPay')
  })

  it('has a prefix of 622504 and a length of 19', function(){
    detectNetwork('6225046070484781007').should.equal('China UnionPay')
  })

  it('has a prefix of 622505 and a length of 19', function(){
    detectNetwork('6225050422327604161').should.equal('China UnionPay')
  })

  it('has a prefix of 622506 and a length of 19', function(){
    detectNetwork('6225061272551488831').should.equal('China UnionPay')
  })

  it('has a prefix of 622507 and a length of 19', function(){
    detectNetwork('6225078658622713236').should.equal('China UnionPay')
  })

  it('has a prefix of 622508 and a length of 19', function(){
    detectNetwork('6225082605710848842').should.equal('China UnionPay')
  })

  it('has a prefix of 622509 and a length of 19', function(){
    detectNetwork('6225093384004353613').should.equal('China UnionPay')
  })

  it('has a prefix of 622510 and a length of 19', function(){
    detectNetwork('6225108347710365438').should.equal('China UnionPay')
  })

  it('has a prefix of 622511 and a length of 19', function(){
    detectNetwork('6225111818288657776').should.equal('China UnionPay')
  })

  it('has a prefix of 622512 and a length of 19', function(){
    detectNetwork('6225122205751613281').should.equal('China UnionPay')
  })

  it('has a prefix of 622513 and a length of 19', function(){
    detectNetwork('6225132671102073245').should.equal('China UnionPay')
  })

  it('has a prefix of 622514 and a length of 19', function(){
    detectNetwork('6225143558611431731').should.equal('China UnionPay')
  })

  it('has a prefix of 622515 and a length of 19', function(){
    detectNetwork('6225154383811486637').should.equal('China UnionPay')
  })

  it('has a prefix of 622516 and a length of 19', function(){
    detectNetwork('6225166714120138076').should.equal('China UnionPay')
  })

  it('has a prefix of 622517 and a length of 19', function(){
    detectNetwork('6225171388617152161').should.equal('China UnionPay')
  })

  it('has a prefix of 622518 and a length of 19', function(){
    detectNetwork('6225181177158552282').should.equal('China UnionPay')
  })

  it('has a prefix of 622519 and a length of 19', function(){
    detectNetwork('6225196502888702516').should.equal('China UnionPay')
  })

  it('has a prefix of 622520 and a length of 19', function(){
    detectNetwork('6225205074834264863').should.equal('China UnionPay')
  })

  it('has a prefix of 622521 and a length of 19', function(){
    detectNetwork('6225216654201676081').should.equal('China UnionPay')
  })

  it('has a prefix of 622522 and a length of 19', function(){
    detectNetwork('6225226434522128654').should.equal('China UnionPay')
  })

  it('has a prefix of 622523 and a length of 19', function(){
    detectNetwork('6225235431731223161').should.equal('China UnionPay')
  })

  it('has a prefix of 622524 and a length of 19', function(){
    detectNetwork('6225241038233814034').should.equal('China UnionPay')
  })

  it('has a prefix of 622525 and a length of 19', function(){
    detectNetwork('6225250514522620633').should.equal('China UnionPay')
  })

  it('has a prefix of 622526 and a length of 19', function(){
    detectNetwork('6225260145116663066').should.equal('China UnionPay')
  })

  it('has a prefix of 622527 and a length of 19', function(){
    detectNetwork('6225272146210132163').should.equal('China UnionPay')
  })

  it('has a prefix of 622528 and a length of 19', function(){
    detectNetwork('6225281702814036886').should.equal('China UnionPay')
  })

  it('has a prefix of 622529 and a length of 19', function(){
    detectNetwork('6225290216105323172').should.equal('China UnionPay')
  })

  it('has a prefix of 622530 and a length of 19', function(){
    detectNetwork('6225301162332203028').should.equal('China UnionPay')
  })

  it('has a prefix of 622531 and a length of 19', function(){
    detectNetwork('6225317382552835682').should.equal('China UnionPay')
  })

  it('has a prefix of 622532 and a length of 19', function(){
    detectNetwork('6225321063128563400').should.equal('China UnionPay')
  })

  it('has a prefix of 622533 and a length of 19', function(){
    detectNetwork('6225331747243541706').should.equal('China UnionPay')
  })

  it('has a prefix of 622534 and a length of 19', function(){
    detectNetwork('6225342610616235662').should.equal('China UnionPay')
  })

  it('has a prefix of 622535 and a length of 19', function(){
    detectNetwork('6225352742183238566').should.equal('China UnionPay')
  })

  it('has a prefix of 622536 and a length of 19', function(){
    detectNetwork('6225363748762381125').should.equal('China UnionPay')
  })

  it('has a prefix of 622537 and a length of 19', function(){
    detectNetwork('6225375302537634026').should.equal('China UnionPay')
  })

  it('has a prefix of 622538 and a length of 19', function(){
    detectNetwork('6225380456805022154').should.equal('China UnionPay')
  })

  it('has a prefix of 622539 and a length of 19', function(){
    detectNetwork('6225394824338334106').should.equal('China UnionPay')
  })

  it('has a prefix of 622540 and a length of 19', function(){
    detectNetwork('6225407310008101277').should.equal('China UnionPay')
  })

  it('has a prefix of 622541 and a length of 19', function(){
    detectNetwork('6225418363768310212').should.equal('China UnionPay')
  })

  it('has a prefix of 622542 and a length of 19', function(){
    detectNetwork('6225421876558557873').should.equal('China UnionPay')
  })

  it('has a prefix of 622543 and a length of 19', function(){
    detectNetwork('6225430324247041268').should.equal('China UnionPay')
  })

  it('has a prefix of 622544 and a length of 19', function(){
    detectNetwork('6225445440557184270').should.equal('China UnionPay')
  })

  it('has a prefix of 622545 and a length of 19', function(){
    detectNetwork('6225451301278613115').should.equal('China UnionPay')
  })

  it('has a prefix of 622546 and a length of 19', function(){
    detectNetwork('6225466500464037414').should.equal('China UnionPay')
  })

  it('has a prefix of 622547 and a length of 19', function(){
    detectNetwork('6225474246601310431').should.equal('China UnionPay')
  })

  it('has a prefix of 622548 and a length of 19', function(){
    detectNetwork('6225486588082137647').should.equal('China UnionPay')
  })

  it('has a prefix of 622549 and a length of 19', function(){
    detectNetwork('6225491613733551527').should.equal('China UnionPay')
  })

  it('has a prefix of 622550 and a length of 19', function(){
    detectNetwork('6225508486312433420').should.equal('China UnionPay')
  })

  it('has a prefix of 622551 and a length of 19', function(){
    detectNetwork('6225513461457118075').should.equal('China UnionPay')
  })

  it('has a prefix of 622552 and a length of 19', function(){
    detectNetwork('6225525012741440250').should.equal('China UnionPay')
  })

  it('has a prefix of 622553 and a length of 19', function(){
    detectNetwork('6225530668433551735').should.equal('China UnionPay')
  })

  it('has a prefix of 622554 and a length of 19', function(){
    detectNetwork('6225541560122177733').should.equal('China UnionPay')
  })

  it('has a prefix of 622555 and a length of 19', function(){
    detectNetwork('6225551573218211548').should.equal('China UnionPay')
  })

  it('has a prefix of 622556 and a length of 19', function(){
    detectNetwork('6225566480355625824').should.equal('China UnionPay')
  })

  it('has a prefix of 622557 and a length of 19', function(){
    detectNetwork('6225576202532078835').should.equal('China UnionPay')
  })

  it('has a prefix of 622558 and a length of 19', function(){
    detectNetwork('6225580687868866618').should.equal('China UnionPay')
  })

  it('has a prefix of 622559 and a length of 19', function(){
    detectNetwork('6225593531488322867').should.equal('China UnionPay')
  })

  it('has a prefix of 622560 and a length of 19', function(){
    detectNetwork('6225607162341047873').should.equal('China UnionPay')
  })

  it('has a prefix of 622561 and a length of 19', function(){
    detectNetwork('6225612752665844480').should.equal('China UnionPay')
  })

  it('has a prefix of 622562 and a length of 19', function(){
    detectNetwork('6225624702400177167').should.equal('China UnionPay')
  })

  it('has a prefix of 622563 and a length of 19', function(){
    detectNetwork('6225637511064662616').should.equal('China UnionPay')
  })

  it('has a prefix of 622564 and a length of 19', function(){
    detectNetwork('6225647701276872448').should.equal('China UnionPay')
  })

  it('has a prefix of 622565 and a length of 19', function(){
    detectNetwork('6225658074044526061').should.equal('China UnionPay')
  })

  it('has a prefix of 622566 and a length of 19', function(){
    detectNetwork('6225662021301520513').should.equal('China UnionPay')
  })

  it('has a prefix of 622567 and a length of 19', function(){
    detectNetwork('6225677584803201481').should.equal('China UnionPay')
  })

  it('has a prefix of 622568 and a length of 19', function(){
    detectNetwork('6225681704688284774').should.equal('China UnionPay')
  })

  it('has a prefix of 622569 and a length of 19', function(){
    detectNetwork('6225697705664308085').should.equal('China UnionPay')
  })

  it('has a prefix of 622570 and a length of 19', function(){
    detectNetwork('6225706384846633260').should.equal('China UnionPay')
  })

  it('has a prefix of 622571 and a length of 19', function(){
    detectNetwork('6225713382150633484').should.equal('China UnionPay')
  })

  it('has a prefix of 622572 and a length of 19', function(){
    detectNetwork('6225721578585654262').should.equal('China UnionPay')
  })

  it('has a prefix of 622573 and a length of 19', function(){
    detectNetwork('6225733158108214782').should.equal('China UnionPay')
  })

  it('has a prefix of 622574 and a length of 19', function(){
    detectNetwork('6225747424333061618').should.equal('China UnionPay')
  })

  it('has a prefix of 622575 and a length of 19', function(){
    detectNetwork('6225752226030456642').should.equal('China UnionPay')
  })

  it('has a prefix of 622576 and a length of 19', function(){
    detectNetwork('6225764572708823222').should.equal('China UnionPay')
  })

  it('has a prefix of 622577 and a length of 19', function(){
    detectNetwork('6225776243135204346').should.equal('China UnionPay')
  })

  it('has a prefix of 622578 and a length of 19', function(){
    detectNetwork('6225780358286400530').should.equal('China UnionPay')
  })

  it('has a prefix of 622579 and a length of 19', function(){
    detectNetwork('6225792075630788826').should.equal('China UnionPay')
  })

  it('has a prefix of 622580 and a length of 19', function(){
    detectNetwork('6225806534057142203').should.equal('China UnionPay')
  })

  it('has a prefix of 622581 and a length of 19', function(){
    detectNetwork('6225818701140618371').should.equal('China UnionPay')
  })

  it('has a prefix of 622582 and a length of 19', function(){
    detectNetwork('6225828702414455115').should.equal('China UnionPay')
  })

  it('has a prefix of 622583 and a length of 19', function(){
    detectNetwork('6225833665855674123').should.equal('China UnionPay')
  })

  it('has a prefix of 622584 and a length of 19', function(){
    detectNetwork('6225844024123166621').should.equal('China UnionPay')
  })

  it('has a prefix of 622585 and a length of 19', function(){
    detectNetwork('6225855864224607564').should.equal('China UnionPay')
  })

  it('has a prefix of 622586 and a length of 19', function(){
    detectNetwork('6225863526076854080').should.equal('China UnionPay')
  })

  it('has a prefix of 622587 and a length of 19', function(){
    detectNetwork('6225873428520726241').should.equal('China UnionPay')
  })

  it('has a prefix of 622588 and a length of 19', function(){
    detectNetwork('6225883071124834536').should.equal('China UnionPay')
  })

  it('has a prefix of 622589 and a length of 19', function(){
    detectNetwork('6225896442241182613').should.equal('China UnionPay')
  })

  it('has a prefix of 622590 and a length of 19', function(){
    detectNetwork('6225904255425837347').should.equal('China UnionPay')
  })

  it('has a prefix of 622591 and a length of 19', function(){
    detectNetwork('6225913084053304618').should.equal('China UnionPay')
  })

  it('has a prefix of 622592 and a length of 19', function(){
    detectNetwork('6225926134750031513').should.equal('China UnionPay')
  })

  it('has a prefix of 622593 and a length of 19', function(){
    detectNetwork('6225936318677484155').should.equal('China UnionPay')
  })

  it('has a prefix of 622594 and a length of 19', function(){
    detectNetwork('6225947668487545033').should.equal('China UnionPay')
  })

  it('has a prefix of 622595 and a length of 19', function(){
    detectNetwork('6225956863344144274').should.equal('China UnionPay')
  })

  it('has a prefix of 622596 and a length of 19', function(){
    detectNetwork('6225960350874285632').should.equal('China UnionPay')
  })

  it('has a prefix of 622597 and a length of 19', function(){
    detectNetwork('6225974482432010584').should.equal('China UnionPay')
  })

  it('has a prefix of 622598 and a length of 19', function(){
    detectNetwork('6225982301084773080').should.equal('China UnionPay')
  })

  it('has a prefix of 622599 and a length of 19', function(){
    detectNetwork('6225991863760444358').should.equal('China UnionPay')
  })

  it('has a prefix of 622600 and a length of 19', function(){
    detectNetwork('6226005400322620434').should.equal('China UnionPay')
  })

  it('has a prefix of 622601 and a length of 19', function(){
    detectNetwork('6226012245245435353').should.equal('China UnionPay')
  })

  it('has a prefix of 622602 and a length of 19', function(){
    detectNetwork('6226022047485558155').should.equal('China UnionPay')
  })

  it('has a prefix of 622603 and a length of 19', function(){
    detectNetwork('6226033663180840668').should.equal('China UnionPay')
  })

  it('has a prefix of 622604 and a length of 19', function(){
    detectNetwork('6226046648102003571').should.equal('China UnionPay')
  })

  it('has a prefix of 622605 and a length of 19', function(){
    detectNetwork('6226058884542626864').should.equal('China UnionPay')
  })

  it('has a prefix of 622606 and a length of 19', function(){
    detectNetwork('6226067515274458835').should.equal('China UnionPay')
  })

  it('has a prefix of 622607 and a length of 19', function(){
    detectNetwork('6226078843415537654').should.equal('China UnionPay')
  })

  it('has a prefix of 622608 and a length of 19', function(){
    detectNetwork('6226086017612263712').should.equal('China UnionPay')
  })

  it('has a prefix of 622609 and a length of 19', function(){
    detectNetwork('6226096047883771570').should.equal('China UnionPay')
  })

  it('has a prefix of 622610 and a length of 19', function(){
    detectNetwork('6226103786522850056').should.equal('China UnionPay')
  })

  it('has a prefix of 622611 and a length of 19', function(){
    detectNetwork('6226116052818656402').should.equal('China UnionPay')
  })

  it('has a prefix of 622612 and a length of 19', function(){
    detectNetwork('6226124056631036488').should.equal('China UnionPay')
  })

  it('has a prefix of 622613 and a length of 19', function(){
    detectNetwork('6226131412545265087').should.equal('China UnionPay')
  })

  it('has a prefix of 622614 and a length of 19', function(){
    detectNetwork('6226140057300130455').should.equal('China UnionPay')
  })

  it('has a prefix of 622615 and a length of 19', function(){
    detectNetwork('6226153573116281683').should.equal('China UnionPay')
  })

  it('has a prefix of 622616 and a length of 19', function(){
    detectNetwork('6226164453138635172').should.equal('China UnionPay')
  })

  it('has a prefix of 622617 and a length of 19', function(){
    detectNetwork('6226177621752573046').should.equal('China UnionPay')
  })

  it('has a prefix of 622618 and a length of 19', function(){
    detectNetwork('6226187127406611418').should.equal('China UnionPay')
  })

  it('has a prefix of 622619 and a length of 19', function(){
    detectNetwork('6226198777710112401').should.equal('China UnionPay')
  })

  it('has a prefix of 622620 and a length of 19', function(){
    detectNetwork('6226200306108187378').should.equal('China UnionPay')
  })

  it('has a prefix of 622621 and a length of 19', function(){
    detectNetwork('6226210453461812008').should.equal('China UnionPay')
  })

  it('has a prefix of 622622 and a length of 19', function(){
    detectNetwork('6226224264148207401').should.equal('China UnionPay')
  })

  it('has a prefix of 622623 and a length of 19', function(){
    detectNetwork('6226233206316280483').should.equal('China UnionPay')
  })

  it('has a prefix of 622624 and a length of 19', function(){
    detectNetwork('6226243762304086211').should.equal('China UnionPay')
  })

  it('has a prefix of 622625 and a length of 19', function(){
    detectNetwork('6226252450182511678').should.equal('China UnionPay')
  })

  it('has a prefix of 622626 and a length of 19', function(){
    detectNetwork('6226267474305771624').should.equal('China UnionPay')
  })

  it('has a prefix of 622627 and a length of 19', function(){
    detectNetwork('6226277560786214036').should.equal('China UnionPay')
  })

  it('has a prefix of 622628 and a length of 19', function(){
    detectNetwork('6226285408884475273').should.equal('China UnionPay')
  })

  it('has a prefix of 622629 and a length of 19', function(){
    detectNetwork('6226298282108836203').should.equal('China UnionPay')
  })

  it('has a prefix of 622630 and a length of 19', function(){
    detectNetwork('6226302736624832234').should.equal('China UnionPay')
  })

  it('has a prefix of 622631 and a length of 19', function(){
    detectNetwork('6226314343220311828').should.equal('China UnionPay')
  })

  it('has a prefix of 622632 and a length of 19', function(){
    detectNetwork('6226320170851623312').should.equal('China UnionPay')
  })

  it('has a prefix of 622633 and a length of 19', function(){
    detectNetwork('6226330407622285485').should.equal('China UnionPay')
  })

  it('has a prefix of 622634 and a length of 19', function(){
    detectNetwork('6226344744358013743').should.equal('China UnionPay')
  })

  it('has a prefix of 622635 and a length of 19', function(){
    detectNetwork('6226350351544811001').should.equal('China UnionPay')
  })

  it('has a prefix of 622636 and a length of 19', function(){
    detectNetwork('6226366387463211542').should.equal('China UnionPay')
  })

  it('has a prefix of 622637 and a length of 19', function(){
    detectNetwork('6226377478471537165').should.equal('China UnionPay')
  })

  it('has a prefix of 622638 and a length of 19', function(){
    detectNetwork('6226381036088785666').should.equal('China UnionPay')
  })

  it('has a prefix of 622639 and a length of 19', function(){
    detectNetwork('6226395571343228848').should.equal('China UnionPay')
  })

  it('has a prefix of 622640 and a length of 19', function(){
    detectNetwork('6226402785251157575').should.equal('China UnionPay')
  })

  it('has a prefix of 622641 and a length of 19', function(){
    detectNetwork('6226418105546817657').should.equal('China UnionPay')
  })

  it('has a prefix of 622642 and a length of 19', function(){
    detectNetwork('6226428301724008518').should.equal('China UnionPay')
  })

  it('has a prefix of 622643 and a length of 19', function(){
    detectNetwork('6226433675374211804').should.equal('China UnionPay')
  })

  it('has a prefix of 622644 and a length of 19', function(){
    detectNetwork('6226445175347043120').should.equal('China UnionPay')
  })

  it('has a prefix of 622645 and a length of 19', function(){
    detectNetwork('6226451134016528374').should.equal('China UnionPay')
  })

  it('has a prefix of 622646 and a length of 19', function(){
    detectNetwork('6226464286084616636').should.equal('China UnionPay')
  })

  it('has a prefix of 622647 and a length of 19', function(){
    detectNetwork('6226474408467171847').should.equal('China UnionPay')
  })

  it('has a prefix of 622648 and a length of 19', function(){
    detectNetwork('6226482207210538825').should.equal('China UnionPay')
  })

  it('has a prefix of 622649 and a length of 19', function(){
    detectNetwork('6226494471606258542').should.equal('China UnionPay')
  })

  it('has a prefix of 622650 and a length of 19', function(){
    detectNetwork('6226507463471886140').should.equal('China UnionPay')
  })

  it('has a prefix of 622651 and a length of 19', function(){
    detectNetwork('6226511517364821150').should.equal('China UnionPay')
  })

  it('has a prefix of 622652 and a length of 19', function(){
    detectNetwork('6226526608311018457').should.equal('China UnionPay')
  })

  it('has a prefix of 622653 and a length of 19', function(){
    detectNetwork('6226537753055675080').should.equal('China UnionPay')
  })

  it('has a prefix of 622654 and a length of 19', function(){
    detectNetwork('6226542651664171748').should.equal('China UnionPay')
  })

  it('has a prefix of 622655 and a length of 19', function(){
    detectNetwork('6226557513623208614').should.equal('China UnionPay')
  })

  it('has a prefix of 622656 and a length of 19', function(){
    detectNetwork('6226565230414785478').should.equal('China UnionPay')
  })

  it('has a prefix of 622657 and a length of 19', function(){
    detectNetwork('6226574238703320655').should.equal('China UnionPay')
  })

  it('has a prefix of 622658 and a length of 19', function(){
    detectNetwork('6226587413848812303').should.equal('China UnionPay')
  })

  it('has a prefix of 622659 and a length of 19', function(){
    detectNetwork('6226593564270735362').should.equal('China UnionPay')
  })

  it('has a prefix of 622660 and a length of 19', function(){
    detectNetwork('6226603822378435786').should.equal('China UnionPay')
  })

  it('has a prefix of 622661 and a length of 19', function(){
    detectNetwork('6226611047630781281').should.equal('China UnionPay')
  })

  it('has a prefix of 622662 and a length of 19', function(){
    detectNetwork('6226626165434618105').should.equal('China UnionPay')
  })

  it('has a prefix of 622663 and a length of 19', function(){
    detectNetwork('6226632472774373565').should.equal('China UnionPay')
  })

  it('has a prefix of 622664 and a length of 19', function(){
    detectNetwork('6226643226786472703').should.equal('China UnionPay')
  })

  it('has a prefix of 622665 and a length of 19', function(){
    detectNetwork('6226654415376140278').should.equal('China UnionPay')
  })

  it('has a prefix of 622666 and a length of 19', function(){
    detectNetwork('6226664001075046110').should.equal('China UnionPay')
  })

  it('has a prefix of 622667 and a length of 19', function(){
    detectNetwork('6226672200666567211').should.equal('China UnionPay')
  })

  it('has a prefix of 622668 and a length of 19', function(){
    detectNetwork('6226684202660253331').should.equal('China UnionPay')
  })

  it('has a prefix of 622669 and a length of 19', function(){
    detectNetwork('6226694387281170747').should.equal('China UnionPay')
  })

  it('has a prefix of 622670 and a length of 19', function(){
    detectNetwork('6226702638817371830').should.equal('China UnionPay')
  })

  it('has a prefix of 622671 and a length of 19', function(){
    detectNetwork('6226717773164710342').should.equal('China UnionPay')
  })

  it('has a prefix of 622672 and a length of 19', function(){
    detectNetwork('6226726761416708264').should.equal('China UnionPay')
  })

  it('has a prefix of 622673 and a length of 19', function(){
    detectNetwork('6226732051563072844').should.equal('China UnionPay')
  })

  it('has a prefix of 622674 and a length of 19', function(){
    detectNetwork('6226744340568073663').should.equal('China UnionPay')
  })

  it('has a prefix of 622675 and a length of 19', function(){
    detectNetwork('6226758600015676016').should.equal('China UnionPay')
  })

  it('has a prefix of 622676 and a length of 19', function(){
    detectNetwork('6226761533123288040').should.equal('China UnionPay')
  })

  it('has a prefix of 622677 and a length of 19', function(){
    detectNetwork('6226776287050537622').should.equal('China UnionPay')
  })

  it('has a prefix of 622678 and a length of 19', function(){
    detectNetwork('6226784201574031613').should.equal('China UnionPay')
  })

  it('has a prefix of 622679 and a length of 19', function(){
    detectNetwork('6226790365065631248').should.equal('China UnionPay')
  })

  it('has a prefix of 622680 and a length of 19', function(){
    detectNetwork('6226803865674060622').should.equal('China UnionPay')
  })

  it('has a prefix of 622681 and a length of 19', function(){
    detectNetwork('6226813248754825335').should.equal('China UnionPay')
  })

  it('has a prefix of 622682 and a length of 19', function(){
    detectNetwork('6226823018853562375').should.equal('China UnionPay')
  })

  it('has a prefix of 622683 and a length of 19', function(){
    detectNetwork('6226836775734658357').should.equal('China UnionPay')
  })

  it('has a prefix of 622684 and a length of 19', function(){
    detectNetwork('6226841274288556672').should.equal('China UnionPay')
  })

  it('has a prefix of 622685 and a length of 19', function(){
    detectNetwork('6226857275424770366').should.equal('China UnionPay')
  })

  it('has a prefix of 622686 and a length of 19', function(){
    detectNetwork('6226867026470334655').should.equal('China UnionPay')
  })

  it('has a prefix of 622687 and a length of 19', function(){
    detectNetwork('6226875358042157104').should.equal('China UnionPay')
  })

  it('has a prefix of 622688 and a length of 19', function(){
    detectNetwork('6226881364371447284').should.equal('China UnionPay')
  })

  it('has a prefix of 622689 and a length of 19', function(){
    detectNetwork('6226892865242616086').should.equal('China UnionPay')
  })

  it('has a prefix of 622690 and a length of 19', function(){
    detectNetwork('6226905335485337501').should.equal('China UnionPay')
  })

  it('has a prefix of 622691 and a length of 19', function(){
    detectNetwork('6226913255548180820').should.equal('China UnionPay')
  })

  it('has a prefix of 622692 and a length of 19', function(){
    detectNetwork('6226923814772012451').should.equal('China UnionPay')
  })

  it('has a prefix of 622693 and a length of 19', function(){
    detectNetwork('6226935382578717320').should.equal('China UnionPay')
  })

  it('has a prefix of 622694 and a length of 19', function(){
    detectNetwork('6226945406278603336').should.equal('China UnionPay')
  })

  it('has a prefix of 622695 and a length of 19', function(){
    detectNetwork('6226958226005015883').should.equal('China UnionPay')
  })

  it('has a prefix of 622696 and a length of 19', function(){
    detectNetwork('6226961256110686648').should.equal('China UnionPay')
  })

  it('has a prefix of 622697 and a length of 19', function(){
    detectNetwork('6226976762814457021').should.equal('China UnionPay')
  })

  it('has a prefix of 622698 and a length of 19', function(){
    detectNetwork('6226988115813883376').should.equal('China UnionPay')
  })

  it('has a prefix of 622699 and a length of 19', function(){
    detectNetwork('6226997303728015525').should.equal('China UnionPay')
  })

  it('has a prefix of 622700 and a length of 19', function(){
    detectNetwork('6227000617748740048').should.equal('China UnionPay')
  })

  it('has a prefix of 622701 and a length of 19', function(){
    detectNetwork('6227014105447308114').should.equal('China UnionPay')
  })

  it('has a prefix of 622702 and a length of 19', function(){
    detectNetwork('6227022642387447475').should.equal('China UnionPay')
  })

  it('has a prefix of 622703 and a length of 19', function(){
    detectNetwork('6227030682522508267').should.equal('China UnionPay')
  })

  it('has a prefix of 622704 and a length of 19', function(){
    detectNetwork('6227047381287028120').should.equal('China UnionPay')
  })

  it('has a prefix of 622705 and a length of 19', function(){
    detectNetwork('6227054701712368224').should.equal('China UnionPay')
  })

  it('has a prefix of 622706 and a length of 19', function(){
    detectNetwork('6227065631317514551').should.equal('China UnionPay')
  })

  it('has a prefix of 622707 and a length of 19', function(){
    detectNetwork('6227078612061428052').should.equal('China UnionPay')
  })

  it('has a prefix of 622708 and a length of 19', function(){
    detectNetwork('6227081804361543177').should.equal('China UnionPay')
  })

  it('has a prefix of 622709 and a length of 19', function(){
    detectNetwork('6227096168675302817').should.equal('China UnionPay')
  })

  it('has a prefix of 622710 and a length of 19', function(){
    detectNetwork('6227105046066633500').should.equal('China UnionPay')
  })

  it('has a prefix of 622711 and a length of 19', function(){
    detectNetwork('6227114055467811028').should.equal('China UnionPay')
  })

  it('has a prefix of 622712 and a length of 19', function(){
    detectNetwork('6227124765158748881').should.equal('China UnionPay')
  })

  it('has a prefix of 622713 and a length of 19', function(){
    detectNetwork('6227131664160317313').should.equal('China UnionPay')
  })

  it('has a prefix of 622714 and a length of 19', function(){
    detectNetwork('6227147626376467162').should.equal('China UnionPay')
  })

  it('has a prefix of 622715 and a length of 19', function(){
    detectNetwork('6227152862271024722').should.equal('China UnionPay')
  })

  it('has a prefix of 622716 and a length of 19', function(){
    detectNetwork('6227160108676262283').should.equal('China UnionPay')
  })

  it('has a prefix of 622717 and a length of 19', function(){
    detectNetwork('6227174053100225057').should.equal('China UnionPay')
  })

  it('has a prefix of 622718 and a length of 19', function(){
    detectNetwork('6227181178765261331').should.equal('China UnionPay')
  })

  it('has a prefix of 622719 and a length of 19', function(){
    detectNetwork('6227198685154666522').should.equal('China UnionPay')
  })

  it('has a prefix of 622720 and a length of 19', function(){
    detectNetwork('6227205083787520432').should.equal('China UnionPay')
  })

  it('has a prefix of 622721 and a length of 19', function(){
    detectNetwork('6227217426345142563').should.equal('China UnionPay')
  })

  it('has a prefix of 622722 and a length of 19', function(){
    detectNetwork('6227228060763588723').should.equal('China UnionPay')
  })

  it('has a prefix of 622723 and a length of 19', function(){
    detectNetwork('6227232734518811624').should.equal('China UnionPay')
  })

  it('has a prefix of 622724 and a length of 19', function(){
    detectNetwork('6227246456347324654').should.equal('China UnionPay')
  })

  it('has a prefix of 622725 and a length of 19', function(){
    detectNetwork('6227255637441833303').should.equal('China UnionPay')
  })

  it('has a prefix of 622726 and a length of 19', function(){
    detectNetwork('6227267726432848217').should.equal('China UnionPay')
  })

  it('has a prefix of 622727 and a length of 19', function(){
    detectNetwork('6227270720506246148').should.equal('China UnionPay')
  })

  it('has a prefix of 622728 and a length of 19', function(){
    detectNetwork('6227284360506478514').should.equal('China UnionPay')
  })

  it('has a prefix of 622729 and a length of 19', function(){
    detectNetwork('6227298761424338086').should.equal('China UnionPay')
  })

  it('has a prefix of 622730 and a length of 19', function(){
    detectNetwork('6227307722026355732').should.equal('China UnionPay')
  })

  it('has a prefix of 622731 and a length of 19', function(){
    detectNetwork('6227316117027563524').should.equal('China UnionPay')
  })

  it('has a prefix of 622732 and a length of 19', function(){
    detectNetwork('6227324216124518714').should.equal('China UnionPay')
  })

  it('has a prefix of 622733 and a length of 19', function(){
    detectNetwork('6227336224756380788').should.equal('China UnionPay')
  })

  it('has a prefix of 622734 and a length of 19', function(){
    detectNetwork('6227344264433776801').should.equal('China UnionPay')
  })

  it('has a prefix of 622735 and a length of 19', function(){
    detectNetwork('6227353080567861236').should.equal('China UnionPay')
  })

  it('has a prefix of 622736 and a length of 19', function(){
    detectNetwork('6227364118655880072').should.equal('China UnionPay')
  })

  it('has a prefix of 622737 and a length of 19', function(){
    detectNetwork('6227375384516774875').should.equal('China UnionPay')
  })

  it('has a prefix of 622738 and a length of 19', function(){
    detectNetwork('6227388747543178864').should.equal('China UnionPay')
  })

  it('has a prefix of 622739 and a length of 19', function(){
    detectNetwork('6227396445370348311').should.equal('China UnionPay')
  })

  it('has a prefix of 622740 and a length of 19', function(){
    detectNetwork('6227402732337325282').should.equal('China UnionPay')
  })

  it('has a prefix of 622741 and a length of 19', function(){
    detectNetwork('6227414312452542144').should.equal('China UnionPay')
  })

  it('has a prefix of 622742 and a length of 19', function(){
    detectNetwork('6227422170301735083').should.equal('China UnionPay')
  })

  it('has a prefix of 622743 and a length of 19', function(){
    detectNetwork('6227434188701222445').should.equal('China UnionPay')
  })

  it('has a prefix of 622744 and a length of 19', function(){
    detectNetwork('6227441446441811187').should.equal('China UnionPay')
  })

  it('has a prefix of 622745 and a length of 19', function(){
    detectNetwork('6227450213552860825').should.equal('China UnionPay')
  })

  it('has a prefix of 622746 and a length of 19', function(){
    detectNetwork('6227467727641723282').should.equal('China UnionPay')
  })

  it('has a prefix of 622747 and a length of 19', function(){
    detectNetwork('6227472466426416650').should.equal('China UnionPay')
  })

  it('has a prefix of 622748 and a length of 19', function(){
    detectNetwork('6227488442116083000').should.equal('China UnionPay')
  })

  it('has a prefix of 622749 and a length of 19', function(){
    detectNetwork('6227498686678318033').should.equal('China UnionPay')
  })

  it('has a prefix of 622750 and a length of 19', function(){
    detectNetwork('6227502728477175733').should.equal('China UnionPay')
  })

  it('has a prefix of 622751 and a length of 19', function(){
    detectNetwork('6227514864781781517').should.equal('China UnionPay')
  })

  it('has a prefix of 622752 and a length of 19', function(){
    detectNetwork('6227523412670522455').should.equal('China UnionPay')
  })

  it('has a prefix of 622753 and a length of 19', function(){
    detectNetwork('6227532486785812568').should.equal('China UnionPay')
  })

  it('has a prefix of 622754 and a length of 19', function(){
    detectNetwork('6227544451848575765').should.equal('China UnionPay')
  })

  it('has a prefix of 622755 and a length of 19', function(){
    detectNetwork('6227557157228752031').should.equal('China UnionPay')
  })

  it('has a prefix of 622756 and a length of 19', function(){
    detectNetwork('6227568618136538818').should.equal('China UnionPay')
  })

  it('has a prefix of 622757 and a length of 19', function(){
    detectNetwork('6227575711673725215').should.equal('China UnionPay')
  })

  it('has a prefix of 622758 and a length of 19', function(){
    detectNetwork('6227584500351213670').should.equal('China UnionPay')
  })

  it('has a prefix of 622759 and a length of 19', function(){
    detectNetwork('6227592406068170620').should.equal('China UnionPay')
  })

  it('has a prefix of 622760 and a length of 19', function(){
    detectNetwork('6227600486741333068').should.equal('China UnionPay')
  })

  it('has a prefix of 622761 and a length of 19', function(){
    detectNetwork('6227613003584270386').should.equal('China UnionPay')
  })

  it('has a prefix of 622762 and a length of 19', function(){
    detectNetwork('6227626476728868346').should.equal('China UnionPay')
  })

  it('has a prefix of 622763 and a length of 19', function(){
    detectNetwork('6227633720507253484').should.equal('China UnionPay')
  })

  it('has a prefix of 622764 and a length of 19', function(){
    detectNetwork('6227643388585077106').should.equal('China UnionPay')
  })

  it('has a prefix of 622765 and a length of 19', function(){
    detectNetwork('6227657575245511414').should.equal('China UnionPay')
  })

  it('has a prefix of 622766 and a length of 19', function(){
    detectNetwork('6227668736812374060').should.equal('China UnionPay')
  })

  it('has a prefix of 622767 and a length of 19', function(){
    detectNetwork('6227670176237241726').should.equal('China UnionPay')
  })

  it('has a prefix of 622768 and a length of 19', function(){
    detectNetwork('6227680126052377545').should.equal('China UnionPay')
  })

  it('has a prefix of 622769 and a length of 19', function(){
    detectNetwork('6227693726605806880').should.equal('China UnionPay')
  })

  it('has a prefix of 622770 and a length of 19', function(){
    detectNetwork('6227703227648184636').should.equal('China UnionPay')
  })

  it('has a prefix of 622771 and a length of 19', function(){
    detectNetwork('6227718228560476784').should.equal('China UnionPay')
  })

  it('has a prefix of 622772 and a length of 19', function(){
    detectNetwork('6227725612710432043').should.equal('China UnionPay')
  })

  it('has a prefix of 622773 and a length of 19', function(){
    detectNetwork('6227732504734584132').should.equal('China UnionPay')
  })

  it('has a prefix of 622774 and a length of 19', function(){
    detectNetwork('6227748576821338053').should.equal('China UnionPay')
  })

  it('has a prefix of 622775 and a length of 19', function(){
    detectNetwork('6227758761472850253').should.equal('China UnionPay')
  })

  it('has a prefix of 622776 and a length of 19', function(){
    detectNetwork('6227764614233202674').should.equal('China UnionPay')
  })

  it('has a prefix of 622777 and a length of 19', function(){
    detectNetwork('6227778341367146021').should.equal('China UnionPay')
  })

  it('has a prefix of 622778 and a length of 19', function(){
    detectNetwork('6227787807687810550').should.equal('China UnionPay')
  })

  it('has a prefix of 622779 and a length of 19', function(){
    detectNetwork('6227796450031761380').should.equal('China UnionPay')
  })

  it('has a prefix of 622780 and a length of 19', function(){
    detectNetwork('6227806404668842277').should.equal('China UnionPay')
  })

  it('has a prefix of 622781 and a length of 19', function(){
    detectNetwork('6227813711545376833').should.equal('China UnionPay')
  })

  it('has a prefix of 622782 and a length of 19', function(){
    detectNetwork('6227820635872375575').should.equal('China UnionPay')
  })

  it('has a prefix of 622783 and a length of 19', function(){
    detectNetwork('6227835330436672530').should.equal('China UnionPay')
  })

  it('has a prefix of 622784 and a length of 19', function(){
    detectNetwork('6227840143121320412').should.equal('China UnionPay')
  })

  it('has a prefix of 622785 and a length of 19', function(){
    detectNetwork('6227853784282036084').should.equal('China UnionPay')
  })

  it('has a prefix of 622786 and a length of 19', function(){
    detectNetwork('6227865165024610274').should.equal('China UnionPay')
  })

  it('has a prefix of 622787 and a length of 19', function(){
    detectNetwork('6227874240200647085').should.equal('China UnionPay')
  })

  it('has a prefix of 622788 and a length of 19', function(){
    detectNetwork('6227881668266103016').should.equal('China UnionPay')
  })

  it('has a prefix of 622789 and a length of 19', function(){
    detectNetwork('6227892582728488078').should.equal('China UnionPay')
  })

  it('has a prefix of 622790 and a length of 19', function(){
    detectNetwork('6227903518803111555').should.equal('China UnionPay')
  })

  it('has a prefix of 622791 and a length of 19', function(){
    detectNetwork('6227910018166142538').should.equal('China UnionPay')
  })

  it('has a prefix of 622792 and a length of 19', function(){
    detectNetwork('6227927813462274186').should.equal('China UnionPay')
  })

  it('has a prefix of 622793 and a length of 19', function(){
    detectNetwork('6227936615678208483').should.equal('China UnionPay')
  })

  it('has a prefix of 622794 and a length of 19', function(){
    detectNetwork('6227945817216657254').should.equal('China UnionPay')
  })

  it('has a prefix of 622795 and a length of 19', function(){
    detectNetwork('6227950360530733757').should.equal('China UnionPay')
  })

  it('has a prefix of 622796 and a length of 19', function(){
    detectNetwork('6227963222126347363').should.equal('China UnionPay')
  })

  it('has a prefix of 622797 and a length of 19', function(){
    detectNetwork('6227972431173805734').should.equal('China UnionPay')
  })

  it('has a prefix of 622798 and a length of 19', function(){
    detectNetwork('6227988087110052264').should.equal('China UnionPay')
  })

  it('has a prefix of 622799 and a length of 19', function(){
    detectNetwork('6227994402224147813').should.equal('China UnionPay')
  })

  it('has a prefix of 622800 and a length of 19', function(){
    detectNetwork('6228006877615041622').should.equal('China UnionPay')
  })

  it('has a prefix of 622801 and a length of 19', function(){
    detectNetwork('6228018874862033503').should.equal('China UnionPay')
  })

  it('has a prefix of 622802 and a length of 19', function(){
    detectNetwork('6228028742007173416').should.equal('China UnionPay')
  })

  it('has a prefix of 622803 and a length of 19', function(){
    detectNetwork('6228033871160655865').should.equal('China UnionPay')
  })

  it('has a prefix of 622804 and a length of 19', function(){
    detectNetwork('6228046421874703443').should.equal('China UnionPay')
  })

  it('has a prefix of 622805 and a length of 19', function(){
    detectNetwork('6228053146278568211').should.equal('China UnionPay')
  })

  it('has a prefix of 622806 and a length of 19', function(){
    detectNetwork('6228060320674126222').should.equal('China UnionPay')
  })

  it('has a prefix of 622807 and a length of 19', function(){
    detectNetwork('6228078733610650058').should.equal('China UnionPay')
  })

  it('has a prefix of 622808 and a length of 19', function(){
    detectNetwork('6228084065665627666').should.equal('China UnionPay')
  })

  it('has a prefix of 622809 and a length of 19', function(){
    detectNetwork('6228090672465468657').should.equal('China UnionPay')
  })

  it('has a prefix of 622810 and a length of 19', function(){
    detectNetwork('6228103852501413786').should.equal('China UnionPay')
  })

  it('has a prefix of 622811 and a length of 19', function(){
    detectNetwork('6228118473156703164').should.equal('China UnionPay')
  })

  it('has a prefix of 622812 and a length of 19', function(){
    detectNetwork('6228122705514676387').should.equal('China UnionPay')
  })

  it('has a prefix of 622813 and a length of 19', function(){
    detectNetwork('6228133123581636172').should.equal('China UnionPay')
  })

  it('has a prefix of 622814 and a length of 19', function(){
    detectNetwork('6228143646362523071').should.equal('China UnionPay')
  })

  it('has a prefix of 622815 and a length of 19', function(){
    detectNetwork('6228151450248773021').should.equal('China UnionPay')
  })

  it('has a prefix of 622816 and a length of 19', function(){
    detectNetwork('6228161538401454356').should.equal('China UnionPay')
  })

  it('has a prefix of 622817 and a length of 19', function(){
    detectNetwork('6228173106676363604').should.equal('China UnionPay')
  })

  it('has a prefix of 622818 and a length of 19', function(){
    detectNetwork('6228186822154863588').should.equal('China UnionPay')
  })

  it('has a prefix of 622819 and a length of 19', function(){
    detectNetwork('6228195857553222431').should.equal('China UnionPay')
  })

  it('has a prefix of 622820 and a length of 19', function(){
    detectNetwork('6228206161608276146').should.equal('China UnionPay')
  })

  it('has a prefix of 622821 and a length of 19', function(){
    detectNetwork('6228211180276326683').should.equal('China UnionPay')
  })

  it('has a prefix of 622822 and a length of 19', function(){
    detectNetwork('6228224305147853340').should.equal('China UnionPay')
  })

  it('has a prefix of 622823 and a length of 19', function(){
    detectNetwork('6228237272877157318').should.equal('China UnionPay')
  })

  it('has a prefix of 622824 and a length of 19', function(){
    detectNetwork('6228241344638627434').should.equal('China UnionPay')
  })

  it('has a prefix of 622825 and a length of 19', function(){
    detectNetwork('6228251350828133863').should.equal('China UnionPay')
  })

  it('has a prefix of 622826 and a length of 19', function(){
    detectNetwork('6228268118313553601').should.equal('China UnionPay')
  })

  it('has a prefix of 622827 and a length of 19', function(){
    detectNetwork('6228275360086816820').should.equal('China UnionPay')
  })

  it('has a prefix of 622828 and a length of 19', function(){
    detectNetwork('6228287204266047325').should.equal('China UnionPay')
  })

  it('has a prefix of 622829 and a length of 19', function(){
    detectNetwork('6228290262770380620').should.equal('China UnionPay')
  })

  it('has a prefix of 622830 and a length of 19', function(){
    detectNetwork('6228307111678045240').should.equal('China UnionPay')
  })

  it('has a prefix of 622831 and a length of 19', function(){
    detectNetwork('6228315463123834630').should.equal('China UnionPay')
  })

  it('has a prefix of 622832 and a length of 19', function(){
    detectNetwork('6228328865534160200').should.equal('China UnionPay')
  })

  it('has a prefix of 622833 and a length of 19', function(){
    detectNetwork('6228337485186823555').should.equal('China UnionPay')
  })

  it('has a prefix of 622834 and a length of 19', function(){
    detectNetwork('6228344822714503353').should.equal('China UnionPay')
  })

  it('has a prefix of 622835 and a length of 19', function(){
    detectNetwork('6228352134563870876').should.equal('China UnionPay')
  })

  it('has a prefix of 622836 and a length of 19', function(){
    detectNetwork('6228367815813855531').should.equal('China UnionPay')
  })

  it('has a prefix of 622837 and a length of 19', function(){
    detectNetwork('6228376301725713413').should.equal('China UnionPay')
  })

  it('has a prefix of 622838 and a length of 19', function(){
    detectNetwork('6228380651212205555').should.equal('China UnionPay')
  })

  it('has a prefix of 622839 and a length of 19', function(){
    detectNetwork('6228398212823716331').should.equal('China UnionPay')
  })

  it('has a prefix of 622840 and a length of 19', function(){
    detectNetwork('6228405722642640410').should.equal('China UnionPay')
  })

  it('has a prefix of 622841 and a length of 19', function(){
    detectNetwork('6228415230218074336').should.equal('China UnionPay')
  })

  it('has a prefix of 622842 and a length of 19', function(){
    detectNetwork('6228427553445072315').should.equal('China UnionPay')
  })

  it('has a prefix of 622843 and a length of 19', function(){
    detectNetwork('6228436040042078775').should.equal('China UnionPay')
  })

  it('has a prefix of 622844 and a length of 19', function(){
    detectNetwork('6228444057827762176').should.equal('China UnionPay')
  })

  it('has a prefix of 622845 and a length of 19', function(){
    detectNetwork('6228457025115520667').should.equal('China UnionPay')
  })

  it('has a prefix of 622846 and a length of 19', function(){
    detectNetwork('6228465708220104552').should.equal('China UnionPay')
  })

  it('has a prefix of 622847 and a length of 19', function(){
    detectNetwork('6228472840204337241').should.equal('China UnionPay')
  })

  it('has a prefix of 622848 and a length of 19', function(){
    detectNetwork('6228482756761270213').should.equal('China UnionPay')
  })

  it('has a prefix of 622849 and a length of 19', function(){
    detectNetwork('6228495086833520788').should.equal('China UnionPay')
  })

  it('has a prefix of 622850 and a length of 19', function(){
    detectNetwork('6228503505178131880').should.equal('China UnionPay')
  })

  it('has a prefix of 622851 and a length of 19', function(){
    detectNetwork('6228511864176816822').should.equal('China UnionPay')
  })

  it('has a prefix of 622852 and a length of 19', function(){
    detectNetwork('6228526003626215808').should.equal('China UnionPay')
  })

  it('has a prefix of 622853 and a length of 19', function(){
    detectNetwork('6228530147855632425').should.equal('China UnionPay')
  })

  it('has a prefix of 622854 and a length of 19', function(){
    detectNetwork('6228545378502664134').should.equal('China UnionPay')
  })

  it('has a prefix of 622855 and a length of 19', function(){
    detectNetwork('6228554424168063570').should.equal('China UnionPay')
  })

  it('has a prefix of 622856 and a length of 19', function(){
    detectNetwork('6228564557125258143').should.equal('China UnionPay')
  })

  it('has a prefix of 622857 and a length of 19', function(){
    detectNetwork('6228576857374762200').should.equal('China UnionPay')
  })

  it('has a prefix of 622858 and a length of 19', function(){
    detectNetwork('6228582464820425660').should.equal('China UnionPay')
  })

  it('has a prefix of 622859 and a length of 19', function(){
    detectNetwork('6228594131603241805').should.equal('China UnionPay')
  })

  it('has a prefix of 622860 and a length of 19', function(){
    detectNetwork('6228608836034235571').should.equal('China UnionPay')
  })

  it('has a prefix of 622861 and a length of 19', function(){
    detectNetwork('6228611473652021638').should.equal('China UnionPay')
  })

  it('has a prefix of 622862 and a length of 19', function(){
    detectNetwork('6228627345230702283').should.equal('China UnionPay')
  })

  it('has a prefix of 622863 and a length of 19', function(){
    detectNetwork('6228634172701782141').should.equal('China UnionPay')
  })

  it('has a prefix of 622864 and a length of 19', function(){
    detectNetwork('6228641416077547504').should.equal('China UnionPay')
  })

  it('has a prefix of 622865 and a length of 19', function(){
    detectNetwork('6228658142554857443').should.equal('China UnionPay')
  })

  it('has a prefix of 622866 and a length of 19', function(){
    detectNetwork('6228661785333732782').should.equal('China UnionPay')
  })

  it('has a prefix of 622867 and a length of 19', function(){
    detectNetwork('6228675677161208785').should.equal('China UnionPay')
  })

  it('has a prefix of 622868 and a length of 19', function(){
    detectNetwork('6228681304440588618').should.equal('China UnionPay')
  })

  it('has a prefix of 622869 and a length of 19', function(){
    detectNetwork('6228698660370763527').should.equal('China UnionPay')
  })

  it('has a prefix of 622870 and a length of 19', function(){
    detectNetwork('6228703580523122615').should.equal('China UnionPay')
  })

  it('has a prefix of 622871 and a length of 19', function(){
    detectNetwork('6228711451380778800').should.equal('China UnionPay')
  })

  it('has a prefix of 622872 and a length of 19', function(){
    detectNetwork('6228723165066051687').should.equal('China UnionPay')
  })

  it('has a prefix of 622873 and a length of 19', function(){
    detectNetwork('6228735533444805606').should.equal('China UnionPay')
  })

  it('has a prefix of 622874 and a length of 19', function(){
    detectNetwork('6228743120047380035').should.equal('China UnionPay')
  })

  it('has a prefix of 622875 and a length of 19', function(){
    detectNetwork('6228752884727168263').should.equal('China UnionPay')
  })

  it('has a prefix of 622876 and a length of 19', function(){
    detectNetwork('6228765687650122765').should.equal('China UnionPay')
  })

  it('has a prefix of 622877 and a length of 19', function(){
    detectNetwork('6228772572420036502').should.equal('China UnionPay')
  })

  it('has a prefix of 622878 and a length of 19', function(){
    detectNetwork('6228781021872220258').should.equal('China UnionPay')
  })

  it('has a prefix of 622879 and a length of 19', function(){
    detectNetwork('6228796434008663061').should.equal('China UnionPay')
  })

  it('has a prefix of 622880 and a length of 19', function(){
    detectNetwork('6228804446548717722').should.equal('China UnionPay')
  })

  it('has a prefix of 622881 and a length of 19', function(){
    detectNetwork('6228814325820575117').should.equal('China UnionPay')
  })

  it('has a prefix of 622882 and a length of 19', function(){
    detectNetwork('6228824162318551571').should.equal('China UnionPay')
  })

  it('has a prefix of 622883 and a length of 19', function(){
    detectNetwork('6228830476663215052').should.equal('China UnionPay')
  })

  it('has a prefix of 622884 and a length of 19', function(){
    detectNetwork('6228843858474850521').should.equal('China UnionPay')
  })

  it('has a prefix of 622885 and a length of 19', function(){
    detectNetwork('6228852238423657803').should.equal('China UnionPay')
  })

  it('has a prefix of 622886 and a length of 19', function(){
    detectNetwork('6228861422588816172').should.equal('China UnionPay')
  })

  it('has a prefix of 622887 and a length of 19', function(){
    detectNetwork('6228871451050378076').should.equal('China UnionPay')
  })

  it('has a prefix of 622888 and a length of 19', function(){
    detectNetwork('6228882511476706527').should.equal('China UnionPay')
  })

  it('has a prefix of 622889 and a length of 19', function(){
    detectNetwork('6228891052406402143').should.equal('China UnionPay')
  })

  it('has a prefix of 622890 and a length of 19', function(){
    detectNetwork('6228904226480213804').should.equal('China UnionPay')
  })

  it('has a prefix of 622891 and a length of 19', function(){
    detectNetwork('6228913768867502686').should.equal('China UnionPay')
  })

  it('has a prefix of 622892 and a length of 19', function(){
    detectNetwork('6228925380626355717').should.equal('China UnionPay')
  })

  it('has a prefix of 622893 and a length of 19', function(){
    detectNetwork('6228936352553418664').should.equal('China UnionPay')
  })

  it('has a prefix of 622894 and a length of 19', function(){
    detectNetwork('6228947646122820573').should.equal('China UnionPay')
  })

  it('has a prefix of 622895 and a length of 19', function(){
    detectNetwork('6228957054633657387').should.equal('China UnionPay')
  })

  it('has a prefix of 622896 and a length of 19', function(){
    detectNetwork('6228964267734752633').should.equal('China UnionPay')
  })

  it('has a prefix of 622897 and a length of 19', function(){
    detectNetwork('6228971187868521243').should.equal('China UnionPay')
  })

  it('has a prefix of 622898 and a length of 19', function(){
    detectNetwork('6228984136372730553').should.equal('China UnionPay')
  })

  it('has a prefix of 622899 and a length of 19', function(){
    detectNetwork('6228996657382185543').should.equal('China UnionPay')
  })

  it('has a prefix of 622900 and a length of 19', function(){
    detectNetwork('6229002050373726385').should.equal('China UnionPay')
  })

  it('has a prefix of 622901 and a length of 19', function(){
    detectNetwork('6229018750576128677').should.equal('China UnionPay')
  })

  it('has a prefix of 622902 and a length of 19', function(){
    detectNetwork('6229027113161784033').should.equal('China UnionPay')
  })

  it('has a prefix of 622903 and a length of 19', function(){
    detectNetwork('6229032024450643754').should.equal('China UnionPay')
  })

  it('has a prefix of 622904 and a length of 19', function(){
    detectNetwork('6229044226042324831').should.equal('China UnionPay')
  })

  it('has a prefix of 622905 and a length of 19', function(){
    detectNetwork('6229050241585054377').should.equal('China UnionPay')
  })

  it('has a prefix of 622906 and a length of 19', function(){
    detectNetwork('6229066075602462748').should.equal('China UnionPay')
  })

  it('has a prefix of 622907 and a length of 19', function(){
    detectNetwork('6229070405705725116').should.equal('China UnionPay')
  })

  it('has a prefix of 622908 and a length of 19', function(){
    detectNetwork('6229081235702875732').should.equal('China UnionPay')
  })

  it('has a prefix of 622909 and a length of 19', function(){
    detectNetwork('6229090765520356786').should.equal('China UnionPay')
  })

  it('has a prefix of 622910 and a length of 19', function(){
    detectNetwork('6229102425408384612').should.equal('China UnionPay')
  })

  it('has a prefix of 622911 and a length of 19', function(){
    detectNetwork('6229112603253833381').should.equal('China UnionPay')
  })

  it('has a prefix of 622912 and a length of 19', function(){
    detectNetwork('6229124324573402702').should.equal('China UnionPay')
  })

  it('has a prefix of 622913 and a length of 19', function(){
    detectNetwork('6229135001355102212').should.equal('China UnionPay')
  })

  it('has a prefix of 622914 and a length of 19', function(){
    detectNetwork('6229147285458777334').should.equal('China UnionPay')
  })

  it('has a prefix of 622915 and a length of 19', function(){
    detectNetwork('6229158462325077171').should.equal('China UnionPay')
  })

  it('has a prefix of 622916 and a length of 19', function(){
    detectNetwork('6229165531312125647').should.equal('China UnionPay')
  })

  it('has a prefix of 622917 and a length of 19', function(){
    detectNetwork('6229177735202686412').should.equal('China UnionPay')
  })

  it('has a prefix of 622918 and a length of 19', function(){
    detectNetwork('6229184074585163175').should.equal('China UnionPay')
  })

  it('has a prefix of 622919 and a length of 19', function(){
    detectNetwork('6229195158000317514').should.equal('China UnionPay')
  })

  it('has a prefix of 622920 and a length of 19', function(){
    detectNetwork('6229205715830014461').should.equal('China UnionPay')
  })

  it('has a prefix of 622921 and a length of 19', function(){
    detectNetwork('6229218276716414882').should.equal('China UnionPay')
  })

  it('has a prefix of 622922 and a length of 19', function(){
    detectNetwork('6229225166343384771').should.equal('China UnionPay')
  })

  it('has a prefix of 622923 and a length of 19', function(){
    detectNetwork('6229238110335883822').should.equal('China UnionPay')
  })

  it('has a prefix of 622924 and a length of 19', function(){
    detectNetwork('6229242384117768756').should.equal('China UnionPay')
  })

  it('has a prefix of 622925 and a length of 19', function(){
    detectNetwork('6229254800402236163').should.equal('China UnionPay')
  })

  it('has a prefix of 624 and a length of 16', function(){
    detectNetwork('6244615616487481').should.equal('China UnionPay')
  })

  it('has a prefix of 625 and a length of 16', function(){
    detectNetwork('6257352644626460').should.equal('China UnionPay')
  })

  it('has a prefix of 626 and a length of 16', function(){
    detectNetwork('6261182766874852').should.equal('China UnionPay')
  })

  it('has a prefix of 624 and a length of 17', function(){
    detectNetwork('62448441350508722').should.equal('China UnionPay')
  })

  it('has a prefix of 625 and a length of 17', function(){
    detectNetwork('62537265333351171').should.equal('China UnionPay')
  })

  it('has a prefix of 626 and a length of 17', function(){
    detectNetwork('62675004507208071').should.equal('China UnionPay')
  })

  it('has a prefix of 624 and a length of 18', function(){
    detectNetwork('624535218046641441').should.equal('China UnionPay')
  })

  it('has a prefix of 625 and a length of 18', function(){
    detectNetwork('625686781673881787').should.equal('China UnionPay')
  })

  it('has a prefix of 626 and a length of 18', function(){
    detectNetwork('626567520737676753').should.equal('China UnionPay')
  })

  it('has a prefix of 624 and a length of 19', function(){
    detectNetwork('6247887315454347623').should.equal('China UnionPay')
  })

  it('has a prefix of 625 and a length of 19', function(){
    detectNetwork('6255368444510651658').should.equal('China UnionPay')
  })

  it('has a prefix of 626 and a length of 19', function(){
    detectNetwork('6264330621676712632').should.equal('China UnionPay')
  })

  it('has a prefix of 6282 and a length of 16', function(){
    detectNetwork('6282222727831401').should.equal('China UnionPay')
  })

  it('has a prefix of 6283 and a length of 16', function(){
    detectNetwork('6283271525401743').should.equal('China UnionPay')
  })

  it('has a prefix of 6284 and a length of 16', function(){
    detectNetwork('6284164356183805').should.equal('China UnionPay')
  })

  it('has a prefix of 6285 and a length of 16', function(){
    detectNetwork('6285545111566212').should.equal('China UnionPay')
  })

  it('has a prefix of 6286 and a length of 16', function(){
    detectNetwork('6286720502035750').should.equal('China UnionPay')
  })

  it('has a prefix of 6287 and a length of 16', function(){
    detectNetwork('6287160452245537').should.equal('China UnionPay')
  })

  it('has a prefix of 6288 and a length of 16', function(){
    detectNetwork('6288104608818648').should.equal('China UnionPay')
  })

    it('has a prefix of 6282 and a length of 17', function(){
    detectNetwork('62822068856450003').should.equal('China UnionPay')
  })

  it('has a prefix of 6283 and a length of 17', function(){
    detectNetwork('62837334583763105').should.equal('China UnionPay')
  })

  it('has a prefix of 6284 and a length of 17', function(){
    detectNetwork('62844304020656503').should.equal('China UnionPay')
  })

  it('has a prefix of 6285 and a length of 17', function(){
    detectNetwork('62852580185336353').should.equal('China UnionPay')
  })

  it('has a prefix of 6286 and a length of 17', function(){
    detectNetwork('62866414638311284').should.equal('China UnionPay')
  })

  it('has a prefix of 6287 and a length of 17', function(){
    detectNetwork('62877153218726600').should.equal('China UnionPay')
  })

  it('has a prefix of 6288 and a length of 17', function(){
    detectNetwork('62880102301510512').should.equal('China UnionPay')
  })

  it('has a prefix of 6282 and a length of 18', function(){
    detectNetwork('628272777640221552').should.equal('China UnionPay')
  })

  it('has a prefix of 6283 and a length of 18', function(){
    detectNetwork('628367753850853038').should.equal('China UnionPay')
  })

  it('has a prefix of 6284 and a length of 18', function(){
    detectNetwork('628486631504721871').should.equal('China UnionPay')
  })

  it('has a prefix of 6285 and a length of 18', function(){
    detectNetwork('628580317547533244').should.equal('China UnionPay')
  })

  it('has a prefix of 6286 and a length of 18', function(){
    detectNetwork('628646141613072422').should.equal('China UnionPay')
  })

  it('has a prefix of 6287 and a length of 18', function(){
    detectNetwork('628760807251368515').should.equal('China UnionPay')
  })

  it('has a prefix of 6288 and a length of 18', function(){
    detectNetwork('628806845740486174').should.equal('China UnionPay')
  })

  it('has a prefix of 6282 and a length of 19', function(){
    detectNetwork('6282661521421404511').should.equal('China UnionPay')
  })

  it('has a prefix of 6283 and a length of 19', function(){
    detectNetwork('6283001857567703207').should.equal('China UnionPay')
  })

  it('has a prefix of 6284 and a length of 19', function(){
    detectNetwork('6284836587170137118').should.equal('China UnionPay')
  })

  it('has a prefix of 6285 and a length of 19', function(){
    detectNetwork('6285624555825713643').should.equal('China UnionPay')
  })

  it('has a prefix of 6286 and a length of 19', function(){
    detectNetwork('6286520366653127174').should.equal('China UnionPay')
  })

  it('has a prefix of 6287 and a length of 19', function(){
    detectNetwork('6287808316321758553').should.equal('China UnionPay')
  })

  it('has a prefix of 6288 and a length of 19', function(){
    detectNetwork('6288778262021327170').should.equal('China UnionPay')
  })
});

describe('should support Switch', function(){
  var should = chai.should();

  it('has a prefix of 4903 and a length of 16', function(){
    detectNetwork('4903877620182222').should.equal('Switch')
  })

  it('has a prefix of 4903 and a length of 18', function(){
    detectNetwork('490341574634238426').should.equal('Switch')
  })

  it('has a prefix of 4903 and a length of 19', function(){
    detectNetwork('4903621476278430808').should.equal('Switch')
  })

  it('has a prefix of 4905 and a length of 16', function(){
    detectNetwork('4905877620182222').should.equal('Switch')
  })

  it('has a prefix of 4905 and a length of 18', function(){
    detectNetwork('490541574634238426').should.equal('Switch')
  })

  it('has a prefix of 4905 and a length of 19', function(){
    detectNetwork('4905621476278430808').should.equal('Switch')
  })

  it('has a prefix of 4911 and a length of 16', function(){
    detectNetwork('4911877620182222').should.equal('Switch')
  })

  it('has a prefix of 4911 and a length of 18', function(){
    detectNetwork('491141574634238426').should.equal('Switch')
  })

  it('has a prefix of 4911 and a length of 19', function(){
    detectNetwork('4911621476278430808').should.equal('Switch')
  })

  it('has a prefix of 4936 and a length of 16', function(){
    detectNetwork('4936877620182222').should.equal('Switch')
  })

  it('has a prefix of 4936 and a length of 18', function(){
    detectNetwork('493641574634238426').should.equal('Switch')
  })

  it('has a prefix of 4936 and a length of 19', function(){
    detectNetwork('4936621476278430808').should.equal('Switch')
  })

  it('has a prefix of 564182 and a length of 16', function(){
    detectNetwork('5641825374520876').should.equal('Switch')
  })

  it('has a prefix of 564182 and a length of 18', function(){
    detectNetwork('564182230571314578').should.equal('Switch')
  })

  it('has a prefix of 564182 and a length of 19', function(){
    detectNetwork('5641822687872261188').should.equal('Switch')
  })

  it('has a prefix of 633110 and a length of 16', function(){
    detectNetwork('6331105374520876').should.equal('Switch')
  })

  it('has a prefix of 633110 and a length of 18', function(){
    detectNetwork('633110230571314578').should.equal('Switch')
  })

  it('has a prefix of 633110 and a length of 19', function(){
    detectNetwork('6331102687872261188').should.equal('Switch')
  })

  it('has a prefix of 6333 and a length of 16', function(){
    detectNetwork('6333877620182222').should.equal('Switch')
  })

  it('has a prefix of 6333 and a length of 18', function(){
    detectNetwork('633341574634238426').should.equal('Switch')
  })

  it('has a prefix of 6333 and a length of 19', function(){
    detectNetwork('6333621476278430808').should.equal('Switch')
  })

  it('has a prefix of 6759 and a length of 16', function(){
    detectNetwork('6759877620182222').should.equal('Switch')
  })

  it('has a prefix of 6759 and a length of 18', function(){
    detectNetwork('675941574634238426').should.equal('Switch')
  })

  it('has a prefix of 6759 and a length of 19', function(){
    detectNetwork('6759621476278430808').should.equal('Switch')
  })

});
