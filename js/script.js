var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */



var argButtonName, buttonRock, buttonPaper,buttonScissors;
var ResultPlayer=0,ResultComputer=0;

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
    var TemporaryResultPlayer=0;
    var TemporaryResultComputer=0;
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('wygrywasz!');
      TemporaryResultPlayer=1;
    } 
    else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('wygrywasz');
      TemporaryResultPlayer=1;
    }
    else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
      printMessage('wygrywasz!');
      TemporaryResultPlayer=1;
    }
    else if (argPlayerMove == argComputerMove)
    {
        printMessage('remis');
    }
    else {
        printMessage('przegrywasz');
        TemporaryResultComputer=1;
    }
    ResultPlayer+=TemporaryResultPlayer;
    ResultComputer+=TemporaryResultComputer;
   
    return printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
 
  
  playerMove = argButtonName;
  var result= ResultPlayer +'-'+ ResultComputer;
  document.getElementById('result').innerHTML=result;


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