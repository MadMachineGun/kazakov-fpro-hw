`use strict`
//Create smileys data
const smileys = [
    {
        smile: "😆",
        voteCount: 0,
    },
    {
        smile: "😅",
        voteCount: 0,
    },
    {
        smile: "😃",
        voteCount: 0,
    },
    {
        smile: "😈",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    },
    {
        smile: "😉",
        voteCount: 0,
    },
];

//Get smile && vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');

//Update vote scores
function updateVotes() {
    voteContainer.innerHTML = "";

    smileys.forEach((item) => {
        let voteElement = document.createElement('div');
        voteElement.classList.add('vote-score');
        voteElement.textContent = item.voteCount;

        voteContainer.appendChild(voteElement);
    })
}

//Show smileys elements
function showSmiles() {
    smileys.forEach((item, index) => {
        let smileElement = document.createElement('div');
        smileElement.textContent = item.smile;

        smileElement.addEventListener('click', () => {
            smileys[index].voteCount++;
            updateVotes();
        })

        smileContainer.appendChild(smileElement);
    })
}

//Initialization
showSmiles();
updateVotes();
