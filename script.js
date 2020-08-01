// Grab the entryForm element
const entryForm = document.getElementById('entryForm')
const entriesSection = document.querySelector('#entries')
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

console.log(entryForm)
console.log(entriesSection)

let entries = 0

// handler to deal with button click
const handleForm = e => { 
    event.preventDefault()

    const entryDiv = document.createElement('div')
    entryDiv.className = 'single-entry'
    entryDiv.innerHTML = entryTextbox.value
    entryDiv.style.display = 'none'
    entriesSection.appendChild(entryDiv)
    
    entryTextbox.value = ""
    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button'
    displayEntryButton.innerText = ++entries
    entriesNav.appendChild(displayEntryButton)
  } 

// Add an event listener
entryForm.addEventListener('submit', handleForm)
