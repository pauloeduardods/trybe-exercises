const fib = (n, b=1, c=0) => n<1? b : fib(n-1, b + c, b)

