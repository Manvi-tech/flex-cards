
class Todo{
    constructor(title, deadline){
        this.title = title;
        this.deadline = new Date(deadline);
    }
}

class UI{
    addTodoToList(todo){
        const list = document.getElementById('todo-list');
        const row = document.createElement('tr');
        row.innerHTML =`
            <td> ${todo.title} </td>
            <td> ${todo.deadline} </td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    clearFormFields(){
        document.getElementById('title').value='';
        document.getElementById('deadline').value='';
    }

    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const form = document.querySelector("#todo-form");
        container.insertBefore(div, form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);

    }

    deleteTodo(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }

}

class Store{
    static getTodos(){
        let todos;

        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
    }

    static displayTodos(){
        const todos = Store.getTodos();
        todos.forEach((todo)=>{
            const ui = new UI;
            ui.addTodoToList(todo);
        })
    }

    static addTodo(todo){
        console.log(todo);
        const todos = Store.getTodos();
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    static removeTodo(title){
        const todos = Store.getTodos();
        todos.forEach((todo, index)=>{
            if(todo.title === title){
                todos.splice(index,1);
            }
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    static filterTodos(title){
        console.log('inside filter ');
       
        const todos = Store.getTodos();
       
        todos.forEach((todo, index)=>{
           if(todo.title.find(title)){
                
           }
           else{

           }
        })
    }

}

//load Books list
document.addEventListener('DOMContentLoaded', Store.displayTodos);

//form submit event
document.getElementById('todo-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const deadline = document.getElementById('deadline').value;

    const todo = new Todo(title, deadline);

    Store.addTodo(todo);

    const ui = new UI();

    if(title === "" || deadline === "" ){
        ui.showAlert("Provide all fields", 'error');
    }
    else{
        ui.addTodoToList(todo);
        Store.showAlert('todo added succesfully', 'success');
        ui.clearFormFields();
    }
    e.preventDefault();
});

//delete event listener
document.getElementById('todo-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteTodo(e.target);
    Store.removeTodo(e.target.parentElement.parentElement.textContent);
    e.preventDefault();
});

//filter todo form : event listener
document.getElementById('todo-flter-form').addEventListener('submit', function(e){
    // const ui = new UI();
    Store.filterTodos(document.getElementById('filter_title').value);
    e.preventDefault();
}); 

