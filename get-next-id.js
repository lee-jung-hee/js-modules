/**
 * Represents a simple Todo List manager.
 */
class TodoList {
  /**
   * @param {Array<object>} initialTodos An array of initial todo items.
   */
  constructor(initialTodos = []) {
    this.todos = [...initialTodos];
  }

  /**
   * Calculates the next available ID for a new todo item.
   * @returns {number} The next ID.
   */
  getNextId() {
    if (this.todos.length === 0) {
      return 0;
    }
    const maxId = Math.max(...this.todos.map((item) => item.id));
    return maxId + 1;
  }

  /**
   * Adds a new todo item to the list.
   * @param {string} content The content of the new todo.
   */
  addTodo(content) {
    const newTodo = {
      id: this.getNextId(),
      content,
    };
    this.todos.push(newTodo);
    console.log(`Added: "${content}" (ID: ${newTodo.id})`);
  }
}

// Initial data
const initialData = [
  { id: 0, content: "To do 1" },
  { id: 9, content: "To do 2" },
  { id: 2, content: "To do 3" },
];

// Create a new TodoList instance
const myTodoList = new TodoList(initialData);
console.log("Initial list:", myTodoList.todos);

// Add a new item
myTodoList.addTodo("Learn about constructor functions");
console.log("Updated list:", myTodoList.todos);

// Add another new item
myTodoList.addTodo("Write modern JavaScript");
console.log("Updated list:", myTodoList.todos);

// You can still get the next ID directly if needed
const nextId = myTodoList.getNextId();
console.log("The next ID will be:", nextId);