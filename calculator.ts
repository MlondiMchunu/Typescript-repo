type Operation = 'multiply' | 'add' | 'divide';
type result = number | string;

const calculator = (a: number, b: number, op: Operation): number => {
    /**if (op === 'multiply') {
        return a * b;
    } else if (op === 'add') {
        return a + b;
    } else if (op === 'divide') {
        if (b === 0) return 'can\'t divide by 0!';
        return a / b;
    }**/
    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('Can\'t divide by 0!');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operation is not multiply, add or divide');
    }
}
try {
    console.log(calculator(7, 4, 'divide'));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong:'
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}