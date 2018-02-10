var todos = ['buy new turtle'];
var input = prompt('What would you like to do');


while(input != 'quit') {
	
	// show list
	if (input === 'list') {
		listTodo();

	// add to list
	} else if (input === 'new') {
		addTodo();

	//  delete a todo
	} else if (input === 'delete') {
		deleteTodo();
	}

	// ask for new input
	input = prompt('What would you like to do');
}
console.log('App closed');


function listTodo(){
	console.log('**********');
	todos.forEach(function(todo,i) {
		console.log(i + ": " + todo);
	})
	console.log('**********');
}

function addTodo(){
	// ask for new todo
	var newTodo = prompt('Enter new todo');
	// display item added
	console.log('added ' + newTodo);
	// add to todo array
	todos.push(newTodo);
}

function deleteTodo(){
	// ask for index of todo to be deleted
	var index = prompt('Enter index of todo to delete');
	// display item about to be deleted
	console.log('deleted todo: ' + todos[index])
	// delete todo
	todos.splice(index,1);
}
