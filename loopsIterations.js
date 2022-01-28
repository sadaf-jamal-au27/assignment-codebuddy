// level {2}

// level {2}

function fibonacci(n){
    if (n === 0 || n === 1){
        return n
    }

    return fibonacci(n-2) + fibonacci(n-1)
    
    
    
}

console.log(fibonacci(7))



