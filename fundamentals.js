
const ulEl = document.getElementById(`list-1`)
let para = document.getElementById(`para`)

let li = document.createElement(`li`)
li.textContent = `Apple`
ulEl.append(li)

li = document.createElement(`li`)
li.textContent = "Vegetable"
ulEl.append(li)

li = document.createElement(`li`)
li.textContent = `Violin`
ulEl.append(li)

// create clickable button that will change the text of the paragraph element with id of `para` to say `button was clicked`

const btn = document.createElement(`button`)
btn.innerText = `Click Me`
document.body.append(btn)

btn.addEventListener(`click`, () => {
 para.innerText = `Button was clicked!`
})


// Create an input element that accepts textinput. Then also create a button that says "submit" The input element will have the id of textinput. The button will have the id of text-input-button.


let input = document.createElement(`input`)
input.setAttribute = (`type`, `text`)
let button2 = document.createElement(`button`)
button2.innerText = `Submit`
input.id = (`textinput`)
button2.id = (`text-input-button`)
document.body.append(input, button2)

//When submit button is clicked, take the text in the inout field and creeate an HTML element that matched the kind of 
button2.addEventListener(`click`, () => {
 let elementType = input.value
 let htmlContent = input2.value
 let newElement = document.createElement(elementType)
 newElement.innerHTML = htmlContent
 document.body.append(newElement)
})

//create another input field that will have the id "html-content" and append it to the DOM.
//When the submit button is clicked, take the text that is in this new 


let input2 = document.createElement(`input`)
input2.id = `html-content`
document.body.append(input2)
