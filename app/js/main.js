`use strict`;

class SuperMath {
    check(obj) {
        if (this.isValidOperator(obj.znak)) {
            return this.calculate(obj.X, obj.Y, obj.znak);
        } else {
            return NaN;
        }
    }

    input() {
        const X = parseFloat(prompt('Enter value for X:'));
        const Y = parseFloat(prompt('Enter value for Y:'));
        const znak = prompt('Enter an operator (+ - / * %):');
        return {X, Y, znak};
    }

    isValidOperator(operator) {
        return /^[+\-*/%]$/.test(operator);
    }

    calculate(X, Y, operator) {
        switch (operator) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                return X % Y;
            default:
                return NaN;
        }
    }
}

document.getElementById("runSuperMath").addEventListener("click", function () {
    const p = new SuperMath();
    const obj = p.input();
    const result = p.check(obj);

    if (!isNaN(result)) {
        document.getElementById("result").innerText = `Result of the operation: ${result}`;
    } else {
        document.getElementById("result").innerText = "Invalid operator entered.";
    }

    document.getElementById("superMathModal").style.display = "block";
});

document.getElementById("closeSuperMathModal").addEventListener("click", function () {
    document.getElementById("superMathModal").style.display = "none";
});
