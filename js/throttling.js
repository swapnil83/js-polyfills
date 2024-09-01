/**
 * Debouncing and Throttling are techniques used to control the rate at which a function is executed
 * particularly in scenarios where frequent events (like user interactions)
 * can lead to excessive calls and potentially impact performance.
 * 
 * Throttling: Throttling limits the number of times a function is executed
 * over a certain time period.
 */

const clickMeBtn = document.getElementById('clickMeBtn');

function throttle(cb) {
    let shouldCall = true;
    
    return function(...args) {
        if(!shouldCall) return;

        cb(...args);
        shouldCall = false;

        setTimeout(() => {
            shouldCall = true;
        }, 1000);
    }
}

function throttle1(cb) {
    let lastCall = 0;

    return function(...args) {
        let now = new Date().getTime();

        if((now - lastCall) < 500) return;

        lastCall = now;
        cb(...args);
    }
}

function handleClick() {
    console.log('Button clicked!');
}

clickMeBtn.addEventListener('click', throttle1(handleClick));