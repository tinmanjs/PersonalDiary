// Grab the entryForm element
const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.getElementsByClassName('entry-textbox')

console.log(entryForm)
console.log(entriesSection)

// handler to deal with button click
const handleForm = e => { 
    event.preventDefault()
    console.log('entry textbox: ', entryTextbox[0].value)

    const entryDiv = document.createElement('div')
    // entryDiv.classList.add('single-entry')
    entryDiv.className = 'single-entry'
    // entryDiv.innerHTML = `<div>${entryTextbox[0].value}</div>`
    entryDiv.innerHTML = entryTextbox[0].value
    entriesSection.appendChild(entryDiv)
  } 

// Add an event listener
entryForm.addEventListener('submit', handleForm)
