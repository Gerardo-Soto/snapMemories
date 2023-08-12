const frames = [
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FMarcos%2Fready_Horizon.png?alt=media&token=ee531680-de5a-4a86-8b4d-88f16d6f7a87',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FMarcos%2Fmarco_plateado.png?alt=media&token=be241a75-26a7-4d1f-a16d-03baff5c91d3',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FMarcos%2Fcuadro_dorado_2.png?alt=media&token=17c00a0a-0c23-45df-9b0f-3ef5d3fbbf24',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FMarcos%2Fcuadro_dorado.png?alt=media&token=7b42b875-06c4-404f-bfa0-2d17b6f199ed',
    'https://firebasestorage.googleapis.com/v0/b/platzivideo-gerard.appspot.com/o/snapMemories%2FMarcos%2FCuadro_metal_ready.png?alt=media&token=afce6d6c-f35d-4da0-95b9-13558cd42ad4',
    
];

function changeFrame(number) {
    console.log(`change frame ${number}`);
    const staticDiv = document.getElementById('static-div');

    staticDiv.style.backgroundImage = `url(${frames[number]})`;

}