const toDosStore = ["Shopping", "Home work", "Go to the gym"];

// Write your code here

class TodoApp {
  // constructor () {

  // }

  static insertTodo(item) {
    toDosStore.push(item);
  }
  static createTodos(arr) {
    toDosStore.push(...arr);
  }

  static removeTodo(idx) {
    toDosStore.splice(idx - 1, 1);
  }
  static editTodo(idx, item) {
    toDosStore.splice(idx - 1, 1, item);
  }
  static updateTodos(idx, arr) {
    // console.log();
    for (let i = 0; i < arr.length; i++) {
      toDosStore.splice(idx[i] - 1, 1, arr[i]);
    }
  }
}

// console.log(RenderToDosListTemplate())

TodoApp.insertTodo("test1");
TodoApp.insertTodo("test2");
TodoApp.insertTodo("test3");
TodoApp.insertTodo("test4");
// TodoApp.createTodos([1, 2, 3, 4, 5]);
TodoApp.removeTodo(3);
TodoApp.removeTodo(5);
TodoApp.insertTodo("Call Alex");
TodoApp.editTodo(3, "Pay bills");
TodoApp.editTodo(5, "Visiting Tommy");
TodoApp.createTodos(["Go to supermarket", "Meet with Ghassan", "New test"]);
TodoApp.updateTodos(
  [2, 4, 6],
  ["Meet with PR department", "By milk", "Check the internet connection"]
);

console.log(toDosStore);
