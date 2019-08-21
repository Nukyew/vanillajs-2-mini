document.querySelector('form').addEventListener('submit', addTodo)
// 'submit' because that's what a form does
// querySelector targets the form
// addEventListener takes that targeted form, and ADDS an event listener
// this is similar to adding onclick="addTodo()" in the html
// when the form is submitted (the button is hit) it will run the next arg
// the next arg is the function below. So it works!

function addTodo (event) {
    event.preventDefault();
    // this event.preventDefault is something I need to google
    // we almost always tie a document.X to a variable to make it easier to reference
    const item = document.createElement("li")
    // this ties list item to variable item
    const input = document.querySelector("#item")
    // this ties new var input to the ID of the input id="item" html
    item.innerText = input.value
    // this sets it so that the input, which is in the form, is added,
    // it will add it to the innerText of the item (which is the list item
    // from above)

    const button = document.createElement('button')
    // this creates a new button element and ties it to a var of the same name
    button.innerText = "X"
    // sets the inner text of the button to be "x"
    button.addEventListener('click', removeTodo)
    // similar to what's at the very top. Looks for var button and adds
    // 

    const list = document.querySelector('ul')
    // append and appendChild will both work
    // this sets the variable list to the unlisted item thing
    list.append(item)
    // this ADDS the li item from above to the ul list
}

