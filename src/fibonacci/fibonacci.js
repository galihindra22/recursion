function fibonacci(n) {
    if (n === 0) return [];
    else if (n === 1) return [0];
    else if (n === 2) return [0, 1];

    const arr = fibonacci(n-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}

function fibonacciIterative(n, arr=[]) {
    for (let i = 0; i < n; i++) {
        if (i === 0) arr.push(0);
        else if (i === 1) arr.push(1);
        else arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

export { fibonacci, fibonacciIterative };