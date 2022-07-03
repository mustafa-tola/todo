var list = document.getElementById("todo_list")
var _input = document.getElementById("todo_data")
var btn = document.getElementById("toBeChangedButton")

function addTodo(currentElement) {
    var _li = document.createElement("li")
    var _editButton = document.createElement("button")
    var _deleteButton = document.createElement("button")
    var editText = document.createTextNode("Edit")
    var deleteText = document.createTextNode("Delete")
    var liText = document.createTextNode(_input.value)
    _li.appendChild(liText)
    _editButton.appendChild(editText)
    _deleteButton.appendChild(deleteText)
    _editButton.setAttribute("onclick","editButton(this)")
    _deleteButton.setAttribute("onclick","deleteButton(this)")
    _li.appendChild(_editButton)
    _li.appendChild(_deleteButton)
    _li.setAttribute("class","flex")
    list.appendChild(_li)
    _input.value = ""
    if(currentElement.innerText == "Edit Todo") {
        currentElement.innerText = "Add Todo"
    }
}

function editButton(currentElement) {
    var todo = prompt("Enter todo")
    currentElement.parentNode.firstChild.data = todo
}

function deleteButton(currentElement) {
    console.log(currentElement.parentNode)
    currentElement.parentNode.remove();
}

function delAllTodos(currentElement){
    list.innerHTML = ''
}
