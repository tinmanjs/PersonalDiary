// Grab the entryForm element
const entryForm = document.getElementById('entryForm')
const entriesSection = document.getElementById('entries')
const entryTextbox = document.getElementsByClassName('entry-textbox')

console.log(entryForm)
console.log(entriesSection)

// handler to deal with button click
const handleForm = e => { 
    event.preventDefault()
    console.log(entryTextbox)
  } 

// Add an event listener
entryForm.addEventListener('submit', handleForm)
