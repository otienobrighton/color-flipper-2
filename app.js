const newColorButtonElement = document.getElementById('new-color-button');
const currentColorElement = document.getElementById('current-color');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexvalue(){
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    const randomHexValue = hexValues[randomIndexPosition]
    return randomHexValue;
};
function getRandomHexString(stringlength){
    let hexstring = '';
    for( let i = 0; i < stringlength; i++){
        hexstring += getRandomHexvalue();

    }
    return hexstring;
};
newColorButtonElement.addEventListener('click', () => {
    const randomHexString = '#' + getRandomHexString(6);

    document.body.style.setProperty(
        'background-color', randomHexString
    );

    currentColorElement.textContent = randomHexString
});