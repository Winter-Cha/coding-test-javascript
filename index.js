const arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = Array.from(6);

let s = [];
s.push(1);
s.pop();
s.pop();

function solution(s){
    if(s.length % 2 != 0) return false;
    var stack = Array.from(s.length / 2);
    for( c of s){
        if(c === "("){
            stack.push(c);
        } else {
            if(stack.length == 0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(solution(")()("));



class Queue {
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value){
        this.queue[this.rear++] = value;
    }

    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    peek(){
        return this.queue[this.front];
    }

    size(){
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());   // 1
queue.enqueue(0);
console.log(queue.size());   // 3
console.log(queue.peek());   // 2
console.log(queue.dequeue());   // 2
console.log(queue.dequeue());   // 4

