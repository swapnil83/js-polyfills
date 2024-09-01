/**
 * Closure is a function in javascript which has access to the variables of the outer function
 * even after the outer function has successfully executed.
*/

function outerFunc(a, b, c) {
    console.log('Outer Function');

    return {
        additionUsingTwoParameters: function() {
            return a + b;
        },
        additionUsingThreeParameters: function() {
            return a + b +c;
        }
    }
}

const funcRef = outerFunc(12, 20, 143);
console.log(funcRef.additionUsingTwoParameters());
console.log(funcRef.additionUsingThreeParameters());