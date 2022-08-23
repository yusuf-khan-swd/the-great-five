
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;

  if (isNaN(inputValueString)) {
    alert('Please enter a valid input');
    return 0;
  }

  const inputValue = parseFloat(inputValueString);

  if (isNaN(inputValue) || inputValue < 0) {
    alert('Please enter a valid input');
    return 0;
  }

  return inputValue;
}

function getElementInnerText(elementId) {
  const element = document.getElementById(elementId);
  return parseFloat(element.innerText);
}

function setElementInnerText(elementId, valueToSet) {
  const element = document.getElementById(elementId);
  element.innerText = valueToSet;
}

// Calculate PlayerExpenses
document.getElementById('calculate').addEventListener('click', function() {
  const perPlayerCost = getInputValue('per-player-cost');
  
  const selectedPlayerList = document.getElementById('selected-players-list').children;
  const selectedPlayers = selectedPlayerList.length;

  if (selectedPlayers < 1) {
    alert('Please Select Atleast One Player');
    return 0;
  }
  
  const playerExpenses = perPlayerCost * selectedPlayers;  
  setElementInnerText('player-expenses', playerExpenses)
});

// Calculate total Cost 
document.getElementById('calculate-total').addEventListener('click', function() {
  const playerExpenses = getElementInnerText('player-expenses');

  const coachCost = getInputValue('coach-cost');

  const managerCost = getInputValue('manager-cost');

  const total = playerExpenses + coachCost + managerCost;
  setElementInnerText('total', total);

});