"use strict";

// Create an array of 50 smileys
const allSmileys = [
    "😆", "😅", "😃", "😈", "😉", "😂", "😎", "🤣", "😊", "😇",
    "😍", "😋", "😜", "🤩", "🥰", "😚", "😘", "🤗", "🤫", "🤔",
    "🧐", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮",
    "🤐", "😯", "😪", "😫", "😴", "😌", "😛", "😝", "🙃", "🤑",
    "😒", "😓", "😔", "😕", "🙁", "😖", "😞", "😟", "😤", "😢"
];

// Create an array to store currently displayed smileys
let displayedSmileys = [];

// Create smileys data as an array of objects
let smileys = [];

// Get smile && vote containers
let smileContainer = document.querySelector('#smile-container');
let voteContainer = document.querySelector('#vote-container');
let removeSmileyButton = document.querySelector('#remove-smiley-button');
let addSmileyButton = document.querySelector('#add-smiley-button');
let modal = document.querySelector('#modal');
let addModalButton = document.querySelector('#add-modal-button');
let closeModalButton = document.querySelector('#close-modal-button');
let modalContent = document.querySelector('.modal-content');

// Update vote scores
function updateVotes() {
    voteContainer.innerHTML = "";

    smileys.forEach((item, index) => {
        let voteElement = document.createElement('div');
        voteElement.classList.add('vote-score');
        voteElement.textContent = item.voteCount;

        voteContainer.appendChild(voteElement);
    });
}

// Show smileys elements
function showSmiles() {
    smileContainer.innerHTML = "";

    displayedSmileys.forEach((item, index) => {
        let smileElement = document.createElement('div');
        smileElement.classList.add('smiley');
        smileElement.textContent = `${index + 1}: ${item.smile}`;
        smileElement.dataset.index = index;

        smileElement.addEventListener('click', () => {
            const selectedIndex = smileElement.dataset.index;
            smileys[selectedIndex].voteCount++;
            updateVotes();
        });

        smileContainer.appendChild(smileElement);
    });
}

// Add a new smiley
addSmileyButton.addEventListener('click', () => {
    if (displayedSmileys.length < 50) {
        modal.style.display = 'block';
    } else {
        alert('Ви досягли максимальної кількості смайлів (50)');
    }
});

// Remove a smiley by index
removeSmileyButton.addEventListener('click', () => {
    const indexToRemove = parseInt(prompt('Введіть номер смайлика для видалення')) - 1;
    if (!isNaN(indexToRemove) && indexToRemove >= 0 && indexToRemove < displayedSmileys.length) {
        const smileyIndex = displayedSmileys[indexToRemove].index;
        displayedSmileys.splice(indexToRemove, 1);
        smileys.splice(smileyIndex, 1);
        showSmiles();
        updateVotes();
    }
});

// Populate modal with smileys
function populateModal() {
    modalContent.innerHTML = "";

    const smileyRows = [];
    for (let i = 0; i < allSmileys.length; i += 10) {
        smileyRows.push(allSmileys.slice(i, i + 10));
    }

    smileyRows.forEach((row) => {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('modal-row');

        row.forEach((smiley) => {
            const smileyItem = document.createElement('div');
            smileyItem.classList.add('modal-smiley');
            smileyItem.textContent = smiley;

            smileyItem.addEventListener('click', () => {
                if (displayedSmileys.length < 50) {
                    const newSmiley = {
                        smile: smiley,
                        voteCount: 0,
                        index: displayedSmileys.length,
                    };
                    smileys.push(newSmiley);
                    displayedSmileys.push(newSmiley);
                    showSmiles();
                    updateVotes();
                    modal.style.display = 'none';
                } else {
                    alert('Ви досягли максимальної кількості смайлів (50)');
                }
            });

            rowContainer.appendChild(smileyItem);
        });

        modalContent.appendChild(rowContainer);
    });
}

// Show the modal with smileys
addModalButton.addEventListener('click', () => {
    populateModal();
    modal.style.display = 'block';
});

// Close the modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Initialize with 5 random smileys
function initializeRandomSmileys() {
    while (displayedSmileys.length < 5 && allSmileys.length > 0) {
        const randomIndex = Math.floor(Math.random() * allSmileys.length);
        const randomSmiley = allSmileys.splice(randomIndex, 1)[0];

        const newSmiley = {
            smile: randomSmiley,
            voteCount: 0,
            index: displayedSmileys.length,
        };

        smileys.push(newSmiley);
        displayedSmileys.push(newSmiley);
    }

    showSmiles();
    updateVotes();
}

// Call the initialization function
initializeRandomSmileys();
