
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}

// Calculate PlayerExpenses
document.getElementById('calculate').addEventListener('click', function() {
  const inputId = 'per-player-cost';
  const perPlayerCost = getInputValue(inputId);

  const selectedPlayerList = document.getElementById('selected-players-list').children;
  const selectedPlayers = selectedPlayerList.length;

  const playerExpenses = perPlayerCost * selectedPlayers;
  document.getElementById('player-expenses').innerText = playerExpenses;
});

// Calculate total Cost 
document.getElementById('calculate-total').addEventListener('click', function() {
  const playerExpensesString = document.getElementById('player-expenses').innerText;
  const playerExpenses = parseFloat(playerExpensesString);

  const coachCostString = document.getElementById('coach-cost').value;
  const coachCost = parseFloat(coachCostString);

  const managerCostString = document.getElementById('manager-cost').value;
  const managerCost = parseFloat(managerCostString);

  const total = playerExpenses + coachCost + managerCost;
  document.getElementById('total').innerText = total;

});