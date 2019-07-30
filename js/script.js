var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */



var argButtonName, buttonRock, buttonPaper,buttonScissors;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  ////////////////
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } 
    else if (argMoveId ==2)
    {
        return 'papier';
    }
    else if (argMoveId == 3)
    {
        return 'nożyce';
    }
    else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('wygrywasz!');
    } 
    else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('wygrywasz');
    }
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('wygrywasz!');
    }
    else if (argPlayerMove == argComputerMove)
    {
        printMessage('remis');
    }
    else {
        printMessage('przegrywasz');
    }
    return printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerMove = argButtonName;
  
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  //////////////
}
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper=document.getElementById('button-paper');
buttonPaper.addEventListener('click',function(){buttonClicked('papier');});

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click',function(){buttonClicked('nozyce');});