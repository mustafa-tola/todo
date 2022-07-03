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
    list.appendChild(_li)
    _input.value = ""
    if(currentElement.innerText == "Edit Todo") {
        currentElement.innerText = "Add Todo"
    }
}

function editButton(currentElement) {
    currentElement.parentNode.remove()
    var ind = currentElement.parentNode.innerText.indexOf("Edit")
    _input.value = currentElement.parentNode.innerText.slice(0,ind)
    btn.innerText = "Edit Todo"
}

function deleteButton(currentElement) {
    console.log(currentElement.parentNode)
    currentElement.parentNode.remove();
}

function delAllTodos(currentElement){
    list.innerHTML = ''
}
