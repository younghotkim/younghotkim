type Todo = { id: number; title: string; done: boolean };
let todoItems: Todo[];

//api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

//CRUD methods
function fetchTodo() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo) {
  todoItems.push(todo);
}

function deleteTodo(index) {
  todoItems.splice(index, 1);
}

function completeTodo(index, todo: Todo) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

//business Logic

function logFirstTodo(): Todo {
  //할 일 목록에서 첫번째 출력
  return todoItems[0];
}

function showComplete(): Todo[] {
  return todoItems.filter((item) => item.done);
}

function log(): void {
  console.log(todoItems);
}

// 2개의 새 할 일을 추가하는 함수

function addTwoTodoItmes(): void {
  const item1 = {
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

let completedTodoList = showComplete();

console.log(completedTodoList);

deleteTodo(3);

log();
