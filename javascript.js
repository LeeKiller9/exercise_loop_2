function showPic() {
    //exercise 1
    let numFibonacci = +(prompt('Enter amount of number Fibonacci: '))
    let result = 'Exercise 1:<br>' + numFibonacci + ' Fibonacci numbers: 1'
    let a1 = 1;
    let a2 = 1;
    let a = null;
    for (let i = 2; i <= numFibonacci; i++) {
        result = result + "; " + a2
        a = a1 + a2
        a1 = a2;
        a2 = a;
    }
    result = result + '<br><br>'

    //exercise 2
    let numFactorial = +(prompt('Enter number to factorial: '))
    result = result + 'Exercise 2:<br>' + numFactorial + '!: '
    let multi = 1;
    for (let i = 1; i <= numFactorial; i++) {
        multi = multi * i;
        result = result + i + "* "
    }
    result = result + " = " + multi
    result = result + '<br>'
    result = result + '<br>'


    //image 1
    result = result + 'Exercise 3:<br>'
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= i; j++) {
            result = result + '*'
        }
        result = result + '<br>'
    }
    result = result + '<br>'

    //image 2
    for (let i = 10; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            result = result + '*'
        }
        result = result + '<br>'
    }
    result = result + '<br>'

    //image 3
    result = result + '<pre>'
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10 - i; j++) {
            result = result + ' '
        }
        for (let j = 1; j <= i; j++) {
            result = result + '*'
        }
        result = result + '<br>'
    }
    result = result + '</pre>'
    result = result + '<br>'

    //image 4
    result = result + '<pre>'
    for (let i = 10; i >= 1; i--) {
        for (let j = 0; j < 10 - i; j++) {
            result = result + ' '
        }
        for (let j = i; j >= 1; j--) {
            result = result + '*'
        }
        result = result + '<br>'
    }
    result = result + '</pre>'
    result = result + '<br>'

    //exercise 4
    result = result + 'Exercise 4:<br>'
    result = result + '<pre>'
    let length = parseInt(prompt("Enter length of rectangle:"))
    let width = parseInt(prompt("Enter width of rectangle:"))
    for (let i = 1; i <= width; i++) {
        if (i === 1 || i === width) {
            for (let j = 1; j <= length; j++) {
                result = result + '*'
            }
        } else {
            for (let j = 1; j <= length; j++) {
                if (j === 1 || j === length) {
                    result = result + '*'
                } else {
                    result = result + ' '
                }
            }
        }
        result = result + '<br>'
    }
    result = result + '</pre>'
    result = result + '<br>'

    //exercise 5
    result = result + 'Exercise 5:<br>'
    let loan = +(prompt("Enter the loan:"))
    let month = +(prompt("Enter month:"))
    let rate = +(prompt("Enter rate per month:"))
    let loanMonth = null;
    for (let i = 1; i <= month; i++) {
        loanMonth = loan * rate / 100
        loan = loan + loanMonth
        result = result + "Rate of loan in month " + i + "th is: " + loanMonth + "<br>"
    }
    result = result + "Sum of loan: " + loan
    result = result + '<br>'
    result = result + '<br>'

    //exercise 6
    result = result + 'Exercise 6:<br>'
    result = result + '<pre>'
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 6; j++) {
            if ((i === 0 && j % 3 !== 0) || (i === 1 && j % 3 === 0)) {
                result = result + '*'
            } else if (i - j === 2 || i + j === 8) {
                result = result + '*'
            } else {
                result = result + ' '
            }
        }
        result = result + '<br>'
    }
    document.write(result)
}