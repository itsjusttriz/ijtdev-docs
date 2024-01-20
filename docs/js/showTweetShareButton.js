document$.subscribe(function () {
    const secretRevealButton = document.getElementById('secretRevealButton'),
        secretHR = document.getElementById('secretHR'),
        secretShareButton = document.getElementById('secretShareButton');

    secretRevealButton.onclick = function (e) {
        e.preventDefault();

        const action = secretHR.classList.contains('hidden') ? 'remove' : 'add';

        secretHR.classList[action]('hidden');
        secretShareButton.classList[action]('hidden');
    };
});
