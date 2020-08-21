// Control My Audio
document.getElementById('unmute-sound').style.display = 'none';
document.getElementById('unmute-sound').addEventListener('click', function (event) {
    document.getElementById('unmute-sound').style.display = 'none';
    document.getElementById('mute-sound').style.display = 'inline-block';
    document.getElementById('song').play();
});

document.getElementById('mute-sound').addEventListener('click', function (event) {
    document.getElementById('mute-sound').style.display = 'none';
    document.getElementById('unmute-sound').style.display = 'inline-block';
    document.getElementById('song').pause();
});