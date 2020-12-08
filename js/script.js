const todoList = $('.todo-list');
const completedList = $('.completed-list');

function addTask() {
	var title = $('.addTask').find('input[type=text]').val();
	todoList.append(addItem(title, false));
}

function addItem(title, isComplete) {
	var completed = isComplete? "checked": "";
	var item = `<li class="task">
				<span class="task-left">${title}</span>
				<span class="task-right">
				<button class="edit" onclick="editTask(this)">Edit</button>
				<button class="delete" onclick="deleteTask(this)">Delete</button>
				<input type="checkbox" onchange="changeStatus(this)" ${completed}>
				</span>
				</li>`;
	return item;
}

function editTask(element) {
	$('body').find('.updateForm').remove();
	var title = $(element).parents('li').find('.task-left').text();
	var item = `<div class="break"></div>
				<div class="updateForm">
				<input id="updateTitle" type="text" value="${title}">
				<button onclick="updateTask(this)">Update</button>
				</div>`;
	$(element).parents('li').append(item);
}

function updateTask(element){
	var title = $("#updateTitle").val();
	$(element).parents("li").find('.task-left').html(title);
	$(element).parents("li").find('.updateForm').remove();
}

function deleteTask(element) {
	$(element).parents(".task").remove();
}
function changeStatus(element) {
	$('body').find('.updateForm').remove();
	let title = $(element).parents(".task").find('.task-left').text();
	if($(element).is(':checked')) {
		completedList.append(addItem(title, true));
	}
	else {
		todoList.append(addItem(title, false));
	}
	deleteTask(element);
}

$(function(){
	$('form').submit(function(event) {
		event.preventDefault();
		addTask();
	});
});