const minutesOptionsMenu = document.getElementById('minutes-options');
const framesOptionsMenu = document.getElementById('frames-options');
const albumOptionsMenu = document.getElementById('album-options');
const orderOptionsMenu = document.getElementById('order-options');
const musicOptionsMenu = document.getElementById('music-options');


function showTimer() {
    
    // remove all style to hide menu
    framesOptionsMenu.classList.add('hidden');
    musicOptionsMenu.classList.add('hidden');
    
    orderOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    orderOptionsMenu.classList.add('hidden');
    
    albumOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    albumOptionsMenu.classList.add('hidden');
    
    //show menu
    minutesOptionsMenu.classList.remove('hidden');
}


function showFrames() {
    // remove all style to hide menu
    minutesOptionsMenu.classList.add('hidden')
    musicOptionsMenu.classList.add('hidden');
    
    orderOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    orderOptionsMenu.classList.add('hidden');
    
    albumOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    albumOptionsMenu.classList.add('hidden');
    
    //show menu
    framesOptionsMenu.classList.remove('hidden');
}


function showAlbum() {

    // remove all style to hide menu
    minutesOptionsMenu.classList.add('hidden');
    framesOptionsMenu.classList.add('hidden');
    musicOptionsMenu.classList.add('hidden');

    orderOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    orderOptionsMenu.classList.add('hidden');


    //show menu
    albumOptionsMenu.classList.add('btn-group', 'btn-group-toggle');
    albumOptionsMenu.classList.remove("hidden");
}

function showOrder() {
    // remove all style to hide menu
    minutesOptionsMenu.classList.add('hidden');
    framesOptionsMenu.classList.add('hidden');
    musicOptionsMenu.classList.add('hidden');

    albumOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    albumOptionsMenu.classList.add("hidden");
    
    
    //show menu
    orderOptionsMenu.classList.add('btn-group', 'btn-group-toggle');
    orderOptionsMenu.classList.remove('hidden');
}

function showMusic() {
    // remove all style to hide menu
    minutesOptionsMenu.classList.add('hidden');
    framesOptionsMenu.classList.add('hidden');
    
    orderOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    orderOptionsMenu.classList.add('hidden');
    
    albumOptionsMenu.classList.remove('btn-group', 'btn-group-toggle');
    albumOptionsMenu.classList.add("hidden");
    
    //show menu
    musicOptionsMenu.classList.remove('hidden');
}