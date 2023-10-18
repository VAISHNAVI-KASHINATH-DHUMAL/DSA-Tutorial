//Stack Operations

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push: Add an element to the top of the stack
    push(item) {
      this.items.push(item);
    }
  
    // Pop: Remove and return the element from the top of the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Peek: Return the element at the top of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log(stack.peek()); // Outputs: 3
  console.log(stack.pop());  // Outputs: 3
  console.log(stack.pop());  // Outputs: 2
  console.log(stack.size()); // Outputs: 1
  console.log(stack.isEmpty()); // Outputs: false
  
  stack.clear();
  console.log(stack.isEmpty()); // Outputs: true
  