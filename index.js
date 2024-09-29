const toDoButton = document.getElementById('toDoButton')
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

function doThing() {
    if (inputField.value == "") {
        console.log("error")
    } else {
        // Check if your full, if you arent, then do all this biz:
        
            var paragraph = document.createElement('li')
            var button = document.createElement('button')
            var newInput = document.createElement('input')
            var textElement = document.createElement('span');
            newInput.type = "checkbox"
            newInput.checked = false;
            button.classList.add('custom-button')
            paragraph.classList.add('paragraph-styling')
            newInput.classList.add('newInput')
            textElement.innerText = inputField.value.toUpperCase();
            button.innerText = 'X'
            toDoContainer.appendChild(paragraph)
            paragraph.appendChild(newInput) // Checkbox
            paragraph.appendChild(textElement) // Text
            paragraph.appendChild(button) // X button
            inputField.value = "";
        
            button.addEventListener('click', function () {
                toDoContainer.removeChild(paragraph)
            })
        
            newInput.addEventListener('change', () => {
                if (newInput.checked) {
                    textElement.style.textDecoration = 'line-through'
                } else {
                    textElement.style.textDecoration = 'none'
                }
            })
        

    }
}
 
toDoButton.addEventListener('click', function () {
    doThing();
})

inputField.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        doThing();
    }
});

