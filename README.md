## Personal Diary
This is an HTML, CSS, JavaScript personal diary website developed as Section 4 of Module 3 of the [Scrimba Frontend Developer Career Path](https://scrimba.com/path/gfrontend).

### Challenge 1
Change h1 title to "My Personal Diary"
Create a new form with an ID of "entryForm"
Inside the form, create a textarea with class of "entry-textbox"

### Challenge 2
Add a button - and make the button render underneath the textarea.

### Challenge 3
  - Go over to the index.html file and give the button a class of "button"
  - Back in the index.css file, target the button using its class
  - Give the button rounded edges using the border-radius property
  - Use the padding property to add space between the button's text and its edges
  - move the button to the right of the page

### Challenge 4
Remove the CSS outline on the input field focus

### Challenge 5
- Create a variable named "entryForm" and use the document.getElementById method to make its value the entryForm from our HTML document.
- Add an event listener to the entryForm variable that prevents the page from reloading whenever the submit button is clicked.

### Challenge 6
- Create a new section in the index.html and give it an id of "entries"
- Create a new variable named "entriesSection" and assign it a value of the HTML section we just created

### Challenge 7
- Inside the handleForm function, create a new variable named entryDiv.
- Use the document.createElement method to create an html Div and make it the new variable's value.
- On a new line, give the new div a class of 'single-entry'.
- Change the div's innerText property to the user's input from the textbox
- Use the appendChild method to add the new div to the entriesSection variable created on line 2
