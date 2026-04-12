const footballTeam =
{
    team: "Rowdy Roosters",
    year: 1983,
    headCoach: "Anton Strizale",
    players: [{ 
        name: "Sergio Batista",
        position: "forward",
        isCaptain: false, 
    },
    {
        name: "Diego Maradona",
        position: "forward",
        isCaptain: false, 
    },
    {
        name: "Rosco Coltrain",
        position: "midfielder",
        isCaptain: true, 
    },
    {
        name: "Gustaff Strolz",
        position: "defender",
        isCaptain: false, 
    },
    {
        name: "Pookie Arizmendi",
        position: "goalkeeper",
        isCaptain: false, 
    }],
}

// Cache DOM elements
const teamName = document.getElementById("team");
const currentYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const selectPlayers = document.getElementById("players-position");
const playerCards = document.getElementById("player-cards")

// Update UI with current team data
teamName.textContent = footballTeam["team"];
currentYear.textContent = footballTeam["year"];
headCoach.textContent = footballTeam["headCoach"];

// Select Players
function playingCards(positionSelection) {
    const playerList = 
    positionSelection === "all"
    ? footballTeam.players
    : footballTeam.players.filter(check => check.position == positionSelection);

    // Update HTML
    return playerList.map(({ name, position}) => {
        return `
        <div class="player-card">
          <h2>${name}</h2>
          <p>Positioin: ${position}</p>
        </div>
      `;
    })
    .join('');
}

// Enable teammates menu to update UI
selectPlayers.addEventListener("change", () => {
    playerCards.innerHTML = playingCards(selectPlayers.value);
});
