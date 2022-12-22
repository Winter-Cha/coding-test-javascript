// 순열의 시간복잡도는 O(n!) 입니다.
function permutations(arr, n) {
    // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
    if(n === 1) return arr.map((v) => [v]);
    let result = [];

    // 요소를 순환한다
    arr.forEach((fixed, idx, arr) => {
        // 현재 index를 제외한 요소를 추출한다.
        // index번쨰는 선택된 요소
        const rest = arr.filter((_, index) => index !== idx);
        // 선택된 요소를 제외하고 재귀 호출한다.
        const perms = permutations(rest, n - 1);
        // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
        const combine = perms.map((v) => [fixed, ...v]);
        // 결과 값을 추가한다.
        result.push(...combine);
        
    });

    // 결과 반환
    return result;
}

const arr = [2,3,4,5,6,7];
const permutationsArr = permutations(arr, 2)
console.log(permutationsArr);

// 조합
// 조합의 시간복잡도는 O(2n) 입니다.
function combinations(arr, n){
    // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
    if (n === 1) return arr.map((v) => [v]);
    const result = [];

    // 요소를 순환한다.
    arr.forEach((fixed, idx, arr) => {
        // 현재 index 이후 요소를 추출한다.
        // index번째는 선택된 요소
        const rest = arr.slice(idx + 1);
        // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
        const conbis = combinations(rest, n - 1);
        // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
        const combine = conbis.map((v) => [fixed, ...v]);
        // 결과 값을 추가한다.
        result.push(...combine);
    });
    return result;
}

const combinationsArr = combinations(arr, 3);
console.log(combinationsArr);