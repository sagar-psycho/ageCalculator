// Countdown Timer
const countdown = document.getElementById('countdown');
const friendshipDay = new Date('August 4, 2024 00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = friendshipDay - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `Contdowm: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = 'Happy Friendship Day!';
        document.getElementById('content').classList.remove('hidden');
    }
};

const interval = setInterval(updateCountdown, 1000);

// Guess the Number Game
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const restartButton = document.getElementById('restartButton');
const feedback = document.getElementById('feedback');
const recordsBody = document.getElementById('recordsBody');
let numberToGuess;
let guesses;
let gameNumber = 1;

const generateNumber = () => Math.floor(Math.random() * 100) + 1;

const loadRecords = () => {
    const records = JSON.parse(localStorage.getItem('gameRecords')) || [];
    recordsBody.innerHTML = '';
    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${record.game}</td><td>${record.guesses}</td>`;
        recordsBody.appendChild(row);
    });
};

const saveRecord = (guesses) => {
    const records = JSON.parse(localStorage.getItem('gameRecords')) || [];
    records.push({ game: gameNumber, guesses });
    localStorage.setItem('gameRecords', JSON.stringify(records));
    gameNumber++;
};

const startNewGame = () => {
    numberToGuess = generateNumber();
    guesses = 0;
    feedback.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.classList.add('hidden');
};

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    guesses++;

    if (userGuess === numberToGuess) {
        feedback.textContent = `Congratulations! You guessed the number in ${guesses} attempts.`;
        guessInput.disabled = true;
        guessButton.disabled = true;
        restartButton.classList.remove('hidden');
        saveRecord(guesses);
        loadRecords();
    } else if (userGuess < numberToGuess) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }
});

restartButton.addEventListener('click', startNewGame);

// Initialize the game records table
loadRecords();
startNewGame();
