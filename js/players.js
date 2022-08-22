
function selectPlayer(eventId, playerNameId) {
  const playerName = document.getElementById(playerNameId).innerText;
    
  const parentElement = document.getElementById('selected-players-list');
  const li = document.createElement('li');
  li.innerText = playerName;
  
  const selectedPlayerList = parentElement.children;
  if (selectedPlayerList.length > 4) {
    alert('Your team is full');
    return;
  }
  
  document.getElementById(eventId).setAttribute('disabled', true)
  parentElement.appendChild(li);
}

function setEvent(eventId, playerName) {
  document.getElementById(eventId).addEventListener('click', function() {
    selectPlayer(eventId, playerName);
  });
}

const players = [
  { eventId: 'select-messi', playerName: 'messi' },
  {eventId: 'select-neymar', playerName: 'neymar'},
  {eventId: 'select-Mbappé', playerName: 'Mbappé'},
  {eventId: 'select-Machado', playerName: 'Machado'},
  {eventId: 'select-Ramos', playerName: 'Ramos'},
  {eventId: 'select-Sanches', playerName: 'Sanches'},
];

for (let element of players) {
  setEvent(element.eventId, element.playerName);
}