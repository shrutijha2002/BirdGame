

let score = 0;


document.querySelectorAll('.bird').forEach(bird => {
    bird.addEventListener('change', () => {
        if (bird.checked) {
            score++;
            //document.getElementById('scoreValue').innerText = score;
            // Check if score is 5 and display "You win" message
            if (score === 5) {
                document.getElementById('winMessage').classList.remove('hidden');
            }
        }
    });
});


