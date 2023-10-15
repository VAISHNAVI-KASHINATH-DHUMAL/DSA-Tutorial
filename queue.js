// Queue Operations

class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the back of the queue
    enqueue(item) {
        this.items.push(item);
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Return the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue:", queue.items);
console.log("Front element:", queue.peek());
console.log("Dequeued element:", queue.dequeue());
console.log("Queue size:", queue.size());
console.log("Is the queue empty?", queue.isEmpty());

queue.clear();
console.log("Queue after clearing:", queue.items);
