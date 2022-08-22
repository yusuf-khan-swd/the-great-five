
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
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