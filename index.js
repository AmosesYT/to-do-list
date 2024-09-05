const toDoButton = document.getElementById('toDoButton')
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');


toDoButton.addEventListener('click', function () {
    if (inputField.value == "") {
        console.log("error")
    } else {
        var paragraph = document.createElement('li')
        var button = document.createElement('button')
        var newInput = document.createElement('input')
        newInput.type = "checkbox"
        newInput.checked = false;
        button.classList.add('custom-button')
        paragraph.classList.add('paragraph-styling')
        newInput.classList.add('newInput')
        paragraph.innerText = inputField.value.toUpperCase();
        button.innerText = 'X'
        toDoContainer.appendChild(paragraph)
        paragraph.appendChild(newInput)
        paragraph.appendChild(button)
        inputField.value = "";
    }
    button.addEventListener('click', function () {
        toDoContainer.removeChild(paragraph)
    })
   newInput.addEventListener('change',function() {
    if(this.checked) {
        paragraph.style.textDecoration = 'line-through'
    } else {
        paragraph.style.textDecoration = 'none'
    }
   })
/*
    if (newInput.checked != true) {
        paragraph.style.textDecoration = none;
    } else if (newInput.checked = true) {
        paragraph.style.textDecoration = 'line-through'
    }

    */
})





 /*inputField.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        var paragraph = document.createElement('li')
        var button = document.createElement('button')
        button.classList.add('custom-button')
        paragraph.classList.add('paragraph-styling')
        paragraph.innerText = inputField.value.toUpperCase();
        button.innerText = 'X'
        toDoContainer.appendChild(paragraph)
        paragraph.appendChild(button)
        inputField.value = "";
    }
    button.addEventListener('click', function () {
        toDoContainer.removeChild(paragraph)
    })
})

*/




