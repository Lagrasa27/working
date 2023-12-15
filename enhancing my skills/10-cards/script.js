const btnPrev = document.querySelector('#nav-prev');
const btnNext = document.querySelector('#nav-next');
const theSlider = document.getElementById('song-holder');
const allLyrics = document.getElementsByClassName('lyrics');

theSlider.addEventListener('animationend', () => {

    // keep the first element always as a spacer, in case of an even number of stanzas.
    const nodeFirst = theSlider.firstElementChild;
    const nodeLast = theSlider.lastElementChild;

    const nodesGoingNext = document.getElementsByClassName('slide-over-left');
    const nodesGoingPrev = document.getElementsByClassName('slide-over-right');
    const nodeAnchor = (nodeFirst.classList.contains('lyrics-spacer')) ? theSlider.children[1] : nodeFirst;

    if (nodesGoingNext.length > 0)      { theSlider.appendChild(nodeAnchor); }
    else if (nodesGoingPrev.length > 0) { theSlider.insertBefore(nodeLast, nodeAnchor); }

    theSlider.classList.remove('slide-over-left', 'slide-over-right');
});

btnNext.addEventListener('click', () => {
    theSlider.classList.add('slide-over-left');
});

btnPrev.addEventListener('click', () => {
    theSlider.classList.add('slide-over-right');
});