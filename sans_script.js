const sansTextElement = document.getElementById('sans-text');
const text = "So you chose to remain in the present. I must say it's not a pretty one but I'm sure you'll make the most of it.";

function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
        sansTextElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function() { typeWriter(text, i + 1, fnCallback) }, 100);
    }
    else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function StartTextAnimation(el, text) {
    el.innerHTML = '';
    typeWriter(text, 0, function(){
        StartTextAnimation(el, text);
    });
}
window.onload = StartTextAnimation(sansTextElement, text);
