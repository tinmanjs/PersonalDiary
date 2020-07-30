// Grab the entryForm element
const entryForm = document.getElementById('entryForm')
console.log(entryForm)

// handler to deal with button click
const handleForm = e => { event.preventDefault() } 

// Add an event listener
entryForm.addEventListener('submit', handleForm)
