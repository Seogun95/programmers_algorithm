function solution(num_list, n) {
    let result = [];

    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }
    return result;
}

// solution([1, 2, 3, 4, 5, 6, 7, 8], 2); //[[1, 2], [3, 4], [5, 6], [7, 8]]
