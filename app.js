const bigfootPic = document.getElementById('bigfoot-pic');

function winner() {
    window.alert('Woohoo! You found bigfoot!');
}

bigfootPic.addEventListener('click', winner, false);