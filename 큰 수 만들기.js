// 백만 자리일경우 O(N) 또는 O(N log N) 정도 되어야 효율성에서 통과 가능함.
// stack을 활용
function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for(const item of number){
        while(count < k && stack[stack.length -1] < item){
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }
    while(count < k){
        stack.pop();
        count += 1;
    }
    //console.log(stack.join())
    return stack.join("");
}