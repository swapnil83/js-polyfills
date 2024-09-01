/**
 * Debouncing and Throttling are techniques used to control the rate at which a function is executed
 * particularly in scenarios where frequent events (like user interactions)
 * can lead to excessive calls and potentially impact performace.
 * 
 * Debouncing: Deboucing is a technique that delays the execution of a function
 * until a certain amount of time has passed
 * since the last event's occurence
 */

const searchInputId = document.getElementById('search');
let searchNameResult = [];
let ulElement = null;

function debounceInputSearch(cb) {
    let timerId;

    return function(...args) {
        let context = this;
        if(timerId) clearTimeout(timerId);

        timerId = setTimeout(() => {
            timerId = null;
            cb.apply(context, args);
        }, 500);
    }
}

function handleSearch(event) {
    const { value } = event.target;

    if(ulElement) {
        ulElement.remove();
        ulElement = null;
    }

    if(value !== '') {
        ulElement = document.createElement('ul');

        fetch(`https://demo.dataverse.org/api/search?q=name:${value}`)
            .then(res => res.json())
            .then(json => {
                searchNameResult = json.data.items;

                for(let i = 0; i < searchNameResult.length; i++) {
                    const liElement = document.createElement('li');
                    liElement.innerText = searchNameResult[i].name;
                    ulElement.appendChild(liElement);
                }

                searchInputId.after(ulElement);
            });
    }
}

searchInputId.addEventListener('input', debounceInputSearch(handleSearch));