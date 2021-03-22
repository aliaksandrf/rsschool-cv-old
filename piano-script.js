// fullscreen ready 
document.addEventListener('click', event => {
    if (!event.target.classList.contains('fullscreen'))  
    return;
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
})

//music
const PIANO = document.querySelector('.piano');
const PIANOKEYS = document.querySelectorAll('.piano-key');

// asdfasdfasdfasdfasdf

PIANOKEYS.forEach( elem => {
    PIANO.addEventListener('mousedown', (event) => {
        event.target.classList.add('piano-key-active');        
        let key = event.target;
        let note = document.getElementById(key.dataset.note);
        note.currentTime = 0;
        note.play();
    })
    PIANO.addEventListener('mouseup', (event) => {
        event.target.classList.remove('piano-key-active');  
})
});


//music keyboard
const KEYSBTN = document.querySelectorAll('.key');
KEYSBTN.forEach(key => {
    key.addEventListener('transition', removeTransition);
});
window.addEventListener('keydown', playBtn);

function playBtn(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;
    key.classList.add('piano-key-active');
    audio.currentTime = 0;
    audio.play();
    window.addEventListener('keyup', () => {
        key.classList.remove('piano-key-active');
    })
}


//letters-notes 0 - notes 1 - letters
const BTNNOTESLETTERS = document.querySelector('.btn-container');
const BTNKEYS = document.querySelectorAll('.btn');
BTNNOTESLETTERS.addEventListener('click', event => {
    if (event.target.classList.contains("btn-letters")) {
        BTNKEYS[0].classList.remove('btn-active');
        BTNKEYS[1].classList.add('btn-active');
    } else {
        BTNKEYS[1].classList.remove('btn-active');
        BTNKEYS[0].classList.add('btn-active');

    }
});


// mouseover

const startAudio = (event) => {
    event.target.classList.add('piano-key-active');
    let key = event.target;
    let note = document.getElementById(key.dataset.note);
    note.play();
}

const finishAudio = (event) => {
    event.target.classList.remove('piano-key-active');
}

const startAudioOver = (event) => {
    PIANOKEYS.forEach((event) => {
        event.addEventListener('mouseover', startAudio);
        event.addEventListener('mouseout', finishAudio);
    });
}

const finishAudioOver = (event) => {
    PIANOKEYS.forEach((event) => {
        event.removeEventListener('mouseover', startAudio);
        event.removeEventListener('mouseout', finishAudio);
    });
}

PIANO.addEventListener('mousedown', startAudioOver, false);
PIANO.addEventListener('mouseup', finishAudioOver);















