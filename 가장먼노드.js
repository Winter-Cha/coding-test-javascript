class Queue{
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
    
    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(n, edge) {
    // 노드와 간선, 최단거리
    let graph = Array.from(Array(n + 1), () => []);
    
    for(const [src, dest] of edge) {
        graph[src].push(dest);
        graph[dest].push(src);
    }
    // 가장 멀리 떨어진 노드가 몇개인지를 구하는 것
    //console.log(graph);
    // 각각의 거리를 구한다.
    const distance = Array(n + 1).fill(0);
    distance[1] = 1;
    
    // BSF - 너비우선 탐색. (Queue로 구현가능함.)
    const queue = new Queue();
    queue.enqueue(1);
    while(!queue.isEmpty()){
        const src = queue.dequeue();
        console.log("src",src);
        for(const dest of graph[src]){
            //console.log("dest",dest)
            if(distance[dest] === 0){
                queue.enqueue(dest);
                distance[dest] = distance[src] + 1;
            }
        }
        //console.log(distance);
    }
    console.log(queue);
    var max = Math.max(...distance);
    var cnt = distance.filter(item => max === item).length;
    return cnt;
    
}