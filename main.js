// Variables
var newTaskForm = document.querySelector('.new-task-container form');
var tasksContainer = document.querySelector('.tasks-container ul');

// On DOM load
document.addEventListener('DOMContentLoaded', function() {
	bindAddTaskEvents();
	showTasks();
});


var tasks = [
	'Prepare a presentation',
	'Arrange a birthday party for my mum',
	'Pay for car insurance',
	'Go shopping'
];
// Add new task
function addNewTask(title) {
	var taskLi = document.createElement('li');
	
	taskLi.classList.add('single-task');
	taskLi.innerHTML = prepareTaskHTML(title);
	
	// Events - toggle and delete
	var toggleCompleteBtn = taskLi.querySelector('.toggle-complete-btn');
	var deleteBtn = taskLi.querySelector('.delete-task-btn');
	
	toggleCompleteBtn.addEventListener('click', function() {
		toggleTaskComplete(this);
	});
	
	deleteBtn.addEventListener('click', function() {
		deleteTask(this);
	});
	
	// Add task to DOM
	tasksContainer.appendChild(taskLi);
}

// Prepare HTML before adding new task
function prepareTaskHTML(title) {
	return '<div class="input-group">' +
			'<span class="input-group-btn">' +
				'<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check" title="Check the task"></i></button>' +
					'</span>' +

		'<input type="text" class="form-control" placeholder="Name the task to do" value="' + title + '">' +

			  '<span class="input-group-btn">' +
				'<button class="btn btn-danger delete-task-btn"><i class="fa fa-trash-o" title="Delete the task"></i></button>' +
				
				'</span>' +
		'</div>';
		
}


// Handle new task form events
function bindAddTaskEvents() {
	
	// On submit
	newTaskForm.addEventListener('submit', function(event) {
		event.preventDefault();
		
		var title = this.querySelector('input').value;
		
		if (title) {
			addNewTask(title);
		}
		
	});
}

// Show tasks
function showTasks() {
	tasks.forEach(function(title) {
		addNewTask(title);
	});
}

// Toggle complete
function toggleTaskComplete(toggleBtn) {
	toggleBtn.classList.toggle('btn-success');
}

// Delete task
function deleteTask(deleteBtn) {
	var liToDelete = deleteBtn.closest('li');
	deleteBtn.closest('ul').removeChild(liToDelete);
}


