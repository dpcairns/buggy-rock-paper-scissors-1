// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResults from '../check-results.js';

const test = QUnit.test;

test('should return draw if player = computer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock'; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if player = computer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'paper' ;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if player = computer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'scissors'; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return win if player beats computer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors'; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return win if player beats computer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'rock' ;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return win if player beats computer', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper'; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'win');
});

test('should return lose if computer beats player', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'rock'; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return lose if computer beats player', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper' ;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});

test('should return lose if computer beats player', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors'; 

    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResults(player, computer);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'lose');
});