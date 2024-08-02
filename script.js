// Countdown Timer
const countdown = document.getElementById('countdown');
const friendshipDay = new Date('August 3, 2024 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = friendshipDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `Time until Friendship Day: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = 'Happy Friendship Day!';
        document.getElementById('content').classList.remove('hidden');
        document.getElementById('countdown').style.display = 'none';
        document.querySelector('.game').style.display = 'none';
    }
};

const interval = setInterval(updateCountdown, 1000);

// Color Matching Game
const colorDisplay = document.getElementById('colorDisplay');
const colorOptions = document.getElementById('colorOptions');
const submitGuess = document.getElementById('submitGuess');
const restartButton = document.getElementById('restartButton');
const feedback = document.getElementById('feedback');
const recordsBody = document.getElementById('recordsBody');
const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
let correctColor;
let gameNumber;

// Function to get a random color
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Function to load game records
const loadRecords = () => {
    const records = JSON.parse(localStorage.getItem('colorGameRecords')) || [];
    recordsBody.innerHTML = '';
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${record.game}</td><td>${record.result}</td>`;
        recordsBody.appendChild(row);
    });
    gameNumber = records.length + 1;
};

// Function to save game record
const saveRecord = (result) => {
    const records = JSON.parse(localStorage.getItem('colorGameRecords')) || [];
    records.push({ game: gameNumber, result });
    localStorage.setItem('colorGameRecords', JSON.stringify(records));
    gameNumber++;
    loadRecords();
};

// Function to start a new game
const startNewGame = () => {
    correctColor = getRandomColor();
    colorDisplay.style.backgroundColor = correctColor;
    feedback.textContent = '';
    colorOptions.value = '';
    restartButton.classList.add('hidden');
};

// Event listener for submitting a guess
submitGuess.addEventListener('click', () => {
    const userGuess = colorOptions.value;

    if (userGuess === correctColor) {
        feedback.textContent = 'Correct! Well done!';
        saveRecord('Correct');
    } else {
        feedback.textContent = 'Incorrect. Try again.';
        saveRecord('Incorrect');
    }

    restartButton.classList.remove('hidden');
});

// Event listener for restarting the game
restartButton.addEventListener('click', startNewGame);

// Initialize the game records table and start a new game
loadRecords();
startNewGame();
