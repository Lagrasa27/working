const allNumInputs = document.querySelectorAll("input[type='number']");
const rootElement = document.querySelector(':root');
// select dropdown for '%' and 'no suffix'
const selectDropdown = document.querySelector('select');
let borderImageSliceValue = '';

// Adds a change event listener to all number inputs
for (let i = 0; i < allNumInputs.length; i++) {
    element = allNumInputs[i];
    element.addEventListener('change', () => {
        if(selectDropdown.value == '%'){
            addBorderImageSliceValue('%');
        }
        else{
            addBorderImageSliceValue('');
        }
    })
}

// Fill checkbox toggle
const fillCheckBox = document.querySelector('#fill-checkbox');
fillCheckBox.addEventListener('change', () => {
    let rootStyle = getComputedStyle(rootElement);
    if (fillCheckBox.checked == true) {
        rootElement.style.cssText =
            `--border-image-slice: ${rootStyle.getPropertyValue('--border-image-slice') + ' fill'}`;
    } else {
        let borderImageSliceVal = rootStyle.getPropertyValue('--border-image-slice');
        borderImageSliceVal = borderImageSliceVal.replace(' fill', '');
        rootElement.style.cssText =
            `--border-image-slice: ${borderImageSliceVal}`;
    }
})

// 'px' or 'no suffix' dropdown
selectDropdown.addEventListener('change', () => {
    if (selectDropdown.value == '%') {
        addBorderImageSliceValue('%');
    }
    else{
        addBorderImageSliceValue('');
    }
})

/*
* Function that accepts a suffix string for the number input value.
* Whether it's '%' or 'no suffix'
*/
function addBorderImageSliceValue(suffix) {
    borderImageSliceValue = '';
    let fillPresent = checkIfFillIsChecked();
    for (let i = 0; i < allNumInputs.length; i++) {
        numInput = allNumInputs[i];
        if (numInput.value == 0) {
            continue;
        }

        borderImageSliceValue += " " + numInput.value + suffix;
    }

    if(fillPresent){
        rootElement.style.cssText =
            `--border-image-slice: ${borderImageSliceValue + ' fill'}`;
    }
    else{
        rootElement.style.cssText =
            `--border-image-slice: ${borderImageSliceValue}`;
    }

}

// Function to check if fill keyword is present
function checkIfFillIsChecked(){
    let rootStyle = getComputedStyle(rootElement);
    let borderImageSliceVal = rootStyle.getPropertyValue('--border-image-slice');
    return borderImageSliceVal.includes('fill');
}