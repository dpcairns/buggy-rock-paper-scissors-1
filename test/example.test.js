// IMPORT MODULES under test here:
// import example from '../src/example.js';
import getRandomThrow from '../get-random-throw.js';

const test = QUnit.test;

test('should return rock if 0 is generated', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const num = 0; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getRandomThrow(num);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'rock');
});

test('should return paper if 1 is generated', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const num = 1; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getRandomThrow(num);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'paper');
});

test('should return scissors if 2 is generated', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const num = 2; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getRandomThrow(num);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'scissors');
});


