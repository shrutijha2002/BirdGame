let score = 0;

document.querySelectorAll('.bird_input').forEach((bird) => {
    bird.addEventListener("click", () => {
        score++;
        console.log(score);
        document.getElementById('scoreValue').innerText = `Score ${score}`;
        // console.log(document.querySelector('.win-msg'));
        if (score == 2) {
            document.querySelector('.win-msg').classList.remove('hidden');
        }
    })
})


document.addEventListener('mousemove', function (event) {
    const gun = document.querySelector('.gun');
    gun.style.left = event.clientX + 'px';
    gun.style.top = event.clientY + 'px';
});