var todoItems;
//api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}
//CRUD methods
function fetchTodo() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
//business Logic
function logFirstTodo() {
    //할 일 목록에서 첫번째 출력
    return todoItems[0];
}
function showComplete() {
    return todoItems.filter(function (item) { return item.done; });
}
function log() {
    console.log(todoItems);
}
// 2개의 새 할 일을 추가하는 함수
function addTwoTodoItmes() {
    var item1 = {
        id: 4,
        title: "아이템 4",
        done: false,
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: "아이템 5",
        done: true,
    });
}
todoItems = fetchTodoItems();
addTwoTodoItmes();
log();
completeTodo(1, todoItems[1]);
log();
showComplete();
log();
var completedTodoList = showComplete();
console.log(completedTodoList);
deleteTodo(3);
log();
