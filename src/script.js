const body = document.body;
const container = document.getElementById('button-container');
const button = document.getElementById('button');

const sounds = [
    new Audio('sfx/airhorn.mp3'),
    new Audio('sfx/levelup.mp3'),
    new Audio('sfx/party.mp3'),
    new Audio('sfx/wow.mp3')
];

// centering via JS prevents animation skip when button first changes position
container.style.left = (window.innerWidth - container.offsetWidth) / 2 + 'px';
container.style.top = (window.innerHeight - container.offsetHeight) / 2 + 'px';

// prevent stealing focus with context menu to be able to click button
document.addEventListener('contextmenu', function (evt) {
    evt.preventDefault();
});

container.addEventListener('mouseover', function () {
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
});

button.addEventListener('click', function () {
    this.blur();
    if (body.classList.contains('celebrate')) {
        return;
    }

    body.classList.add('celebrate');
    setTimeout(function () { document.body.classList.remove('celebrate'); }, 2500);

    const sfx = sounds[Math.floor(Math.random() * sounds.length)];
    sfx.currentTime = 0;
    sfx.play();
});
