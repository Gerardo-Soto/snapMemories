const cloudSource = document.getElementById('optionCloudSource');
const localSource = document.getElementById('optionLocalSource');
const cloudPokemonSource = document.getElementById('optionCloudPokemonSource');
const cloudMetroidSource = document.getElementById('optionCloudMetroidSource');
const cloudWeddingSource = document.getElementById('optionWeddingSource');
const cloudWinter2022 = document.getElementById('optionWinter2022Source');
const cloudGow = document.getElementById('optionCloudGowSource'); 

const innerDiv = document.getElementById('inner-div');
const innerDivBlur = document.getElementById('inner-div-blur');

let indexAlbum = 'local';
let blurOption = true;

/** Random option */
const optionRandomSource = document.getElementById('optionRandomSource');
const isOrderChecked = document.getElementById('optionOrderSource');

/** show the number of photos */
const numberOfPhotos = document.getElementById('number-of-photos');
const numberOfPhotosJumpTo = document.getElementById('jump-to');

const album = {
    texas: [
        // forest
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fbosque%2Fbosque_1.jpg?alt=media&token=2a862f7c-1ec0-4ed8-b599-550aa2a7a0de',
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fbosque%2Fbosque_2.jpg?alt=media&token=69a12fcd-e158-4b5e-82c4-4eea3b3f2aa1',
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fbosque%2Fbosque_3.jpg?alt=media&token=4bee57b2-4dfb-4117-9dfc-45dcae38c146',
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fbosque%2Fbosque_4.jpg?alt=media&token=5bd4bcae-98da-4fce-b857-7f2c567d45d2',
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fbosque%2Fbosque_5.jpg?alt=media&token=31594750-2d78-442c-8f7c-74db9dc3cd6c',
        
    ],
    wedding: [
        // beaches
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fplaya%2Fplaya_1.jpg?alt=media&token=88d39a6d-c273-41d1-8750-a748cb5205af',
        'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FsnapMemories_Demo%2Fplaya%2Fplaya_2.jpg?alt=media&token=b9698dc1-e7ad-4337-94d6-a3c7806de8ea',
    ],
    winter2022: [
        /** Navidad 2022 */
        '',
        
    ],
    pokemon: [
        '',
    ],
    metroid: [
        // Metroid 1
        '',
    ],
    gow: [

    ],
};

// get numbber of photos
(function () {
    /** Check the album selected */
    checkAlbumSelected();
    console.log(`t1:${indexAlbum}`);
    numberOfPhotos.textContent = `Photos: ${album[indexAlbum].length}`;

    numberOfPhotosJumpTo.max = album[indexAlbum].length;
})();

function checkAlbumSelected(source) {
    setTimeout(function () {
        console.log(source);
        if (cloudSource.parentNode.classList.contains('active')) {
            indexAlbum = 'texas';
        } else if (cloudMetroidSource.parentNode.classList.contains('active')) {
            indexAlbum = 'metroid';
        } else if (cloudPokemonSource.parentNode.classList.contains('active')) {
            indexAlbum = 'pokemon';
        } else if (cloudWeddingSource.parentNode.classList.contains('active')) {
            indexAlbum = 'wedding';
        } else if (cloudWinter2022.parentNode.classList.contains('active')) {
            indexAlbum = 'winter2022';
        } else if (cloudGow.parentNode.classList.contains('active')) {
            indexAlbum = 'gow';    
        } else {
            indexAlbum = 'local';
        };
        
    }, 200);
};

function checkNumberPhotos () {
    /** Check the album selected */
    checkAlbumSelected();
   
    numberOfPhotos.textContent = `Photos: ${album[indexAlbum].length}`;

    numberOfPhotosJumpTo.max = album[indexAlbum].length;
}

let currentPictureIndex = 0;

// Stores the setInterval ID used by
// clearInterval to stop the timer
var interval;

// timer
// let intervalSeconds = 10 * 1000;// test
let intervalSeconds = 60 * 1000;// prod
changeImage();


function changeInterval(seconds) {
    intervalSeconds = seconds * 1000 * 60;
    console.log(`new interval: ${intervalSeconds}`);

  
    changeImage();
};

function changeMinutesInterval() {
    const changeMinutes = Number.parseInt(document.getElementById('placeholder-minutes').value);

    console.log(changeMinutes);
    if (Number.isInteger(changeMinutes)) {
        console.log('is a number');
        changeInterval(changeMinutes);
    } else {
        alert('set a number');
    };
};

function changeImage() {

    /** Check the album selected */
    checkAlbumSelected();
    
    numberOfPhotos.textContent = `Photos: ${album[indexAlbum].length}`;


    // Clears the previous setInterval timer
    clearInterval(interval);

    if (optionRandomSource.value == 'true') {
        console.log(`auto checked random option`);
        prevImageRandom();
    } else {
        innerDiv.style.backgroundImage = `url(${album[indexAlbum][currentPictureIndex]})`;
        innerDivBlur.style.backgroundImage = `url(${album[indexAlbum][currentPictureIndex]})`;
    
        currentPictureIndex = (currentPictureIndex + 1) % album[indexAlbum].length;
        console.log(`Album: ${indexAlbum}`);
    
        interval = setInterval(changeImage, intervalSeconds);
    };
};

function changeSource(source) {
    currentPictureIndex = 0;
    
    //checkAlbumSelected(source);
    console.log(`f:changeSource - arg:${source}`);
    
    indexAlbum = source;
    
    console.log(`f:changeSource - change indexAlbum: ${indexAlbum}`);
   
    //console.log(indexAlbum);
    checkNumberPhotos();
    changeImage();
};

//setInterval(changeImage, intervalSeconds );


let shuffleIndex = 0;
/**
 * 
 * @param {string} side 
 */
function changePicture(side) {

    checkAlbumSelected();
   
    /** check random */
    //const optionOrderSource = document.getElementById('optionOrderSource');// start with false :(
    //const optionRandomSource = document.getElementById('optionRandomSource');
    //console.log(optionRandomSource.checked);// false, click: true

    // check limit index
    if (side == "back") {
        console.log('back');

        if (optionRandomSource.value == 'true') {
            console.log(`button back checked random option`);
            prevImageRandom();
        } else {

            currentPictureIndex--;
            if (currentPictureIndex < 0) {
                currentPictureIndex = album[indexAlbum].length - 1;
            }
            console.log(`orden: ${currentPictureIndex}`);

            innerDiv.style.backgroundImage = `url(${album[indexAlbum][(currentPictureIndex) % album[indexAlbum].length]})`;
            if (blurOption) {
                innerDivBlur.style.backgroundImage = `url(${album[indexAlbum][(currentPictureIndex) % album[indexAlbum].length]})`;
            } else {
                innerDivBlur.style.backgroundImage = `url()`;
                innerDivBlur.style.backgroundColor = `black`;
            };
            
        };
        
        
    } else {
        console.log('next');
        
        if (optionRandomSource.value == 'true') {
            shuffleIndex++;
            let indexShuffle = myShuffleArray[shuffleIndex] % album[indexAlbum].length;
            console.log(`random: ${indexShuffle}`);

            innerDiv.style.backgroundImage = `url(${album[indexAlbum][indexShuffle]})`;
            if (blurOption) {
                innerDivBlur.style.backgroundImage = `url(${album[indexAlbum][(currentPictureIndex) % album[indexAlbum].length]})`;
            } else {
                innerDivBlur.style.backgroundImage = `url()`;
                innerDivBlur.style.backgroundColor = `black`;
            };
        } else {

            currentPictureIndex++;
            console.log(`orden: ${currentPictureIndex}`);

            innerDiv.style.backgroundImage = `url(${album[indexAlbum][(currentPictureIndex) % album[indexAlbum].length]})`;
            if (blurOption) {
                innerDivBlur.style.backgroundImage = `url(${album[indexAlbum][(currentPictureIndex) % album[indexAlbum].length]})`;
            } else {
                innerDivBlur.style.backgroundImage = `url()`;
                innerDivBlur.style.backgroundColor = `black`;
            };
            
        };
        //console.log(currentPictureIndex);

        if (currentPictureIndex > album[indexAlbum].length - 1) {
            currentPictureIndex = 0;
        };
    };
};

function orderChange(val) {
    console.log(val);
    if (val == 0) {
        isOrderChecked.value = 'true';
        optionRandomSource.value = 'false';
    } else {
        isOrderChecked.value = 'false';
        optionRandomSource.value = 'true';
    }
};

function prevImageRandom() {
    shuffleIndex--;
    if (shuffleIndex < 0) {
        shuffleIndex = album[indexAlbum].length - 1;
    };

    let indexShuffle = myShuffleArray[shuffleIndex] % album[indexAlbum].length;
    console.log(`random: ${indexShuffle}`);

    innerDiv.style.backgroundImage = `url(${album[indexAlbum][indexShuffle]})`;
    innerDivBlur.style.backgroundImage = `url(${album[indexAlbum][indexShuffle]})`;
};


function jumpTo() {
    const jumpPictureTo = parseInt(document.getElementById('jump-to').value) - 1;
    console.log(jumpPictureTo);
    if (Number.isInteger(jumpPictureTo)) {
        currentPictureIndex = jumpPictureTo;
        changeImage();
    };
};


function blurChange(option) {
    if (option == 1) {
        blurOption = true;
        innerDiv.classList.add('inner-div-border-radius-toggle-blur');
    } else {
        blurOption = false;
        innerDiv.classList.remove('inner-div-border-radius-toggle-blur');
    };
    console.log(`change blur: ${blurOption}`);
};

/** random generator */
// declare the function 
let articles = [];
fillArticles(articles, 100);

function fillArticles(articles, amount) {
    for (let index = 0; index < amount; index++) {
        articles.push(index);
    }
}

//console.log(articles);

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
}; 


const myShuffleArray = shuffle(articles);
console.log(`myShuffleArray: ${myShuffleArray}`);

// add an keydown event
document.addEventListener("keydown", function(event){
    // check if the key is left arrow
    if (event.key == 'ArrowLeft') {
        changePicture("back");
    };

    if (event.key == 'ArrowRight') {
        changePicture("next");
    };

    if (event.key == 'ArrowUp') {

    }

    console.log(`event: ${event.key}`);
})