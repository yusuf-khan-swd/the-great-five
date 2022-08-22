
// Calculate PlayerExpenses
document.getElementById('calculate').addEventListener('click', function() {
  const perPlayerCostField = document.getElementById('per-player-cost');
  const perPlayerCostString = perPlayerCostField.value;
  const perPlayerCost = parseFloat(perPlayerCostString);

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