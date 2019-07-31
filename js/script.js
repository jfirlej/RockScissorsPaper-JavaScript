

let ResultPlayer=0,ResultComputer=0;

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
   let TemporaryResultPlayer=0;
    let TemporaryResultComputer=0;
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
 
  
  const playerMove = argButtonName;
 const result= ResultPlayer +'-'+ ResultComputer;
  document.getElementById('result').innerHTML=result;


  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
 const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  //////////////
}


const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

const buttonPaper=document.getElementById('button-paper');
buttonPaper.addEventListener('click',function(){buttonClicked('papier');});

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click',function(){buttonClicked('nozyce');});