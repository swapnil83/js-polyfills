const datas = [
    {
        id: 1,
        name: 'Suresh Raina',
        profession: 'Cricketer'
    },
    {
        id: 2,
        name: 'Yuvraj Singh',
        profession: 'Cricketer'
    }
];

function getDatas() {
    setTimeout(() => {
        console.log('Get Data');
        let output = '';
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}


/** Using callback */
function createData(newUserData, cb) {
    setTimeout(() => {
        console.log('Create User');
        datas.push(newUserData);
        cb();
    }, 2000);
}

// createData({
//     id: datas.length+1,
//     name: 'Amit Mishra',
//     profession: 'Cricketer'
// }, getDatas);


/** Using Promise */
function createDataUsingPromise(newUserData) {
    return new Promise((resolve, reject) => {
        console.log('Create User using Promise');
        datas.push(newUserData);

        let error = false;
        if(!error) {
            resolve();
        } else {
            reject('Getting error');
        }
    });
}

// createDataUsingPromise({
//     id: datas.length+1,
//     name: 'Amit Mishra',
//     profession: 'Cricketer'
// }).then(getDatas).catch(err => alert(err));


/** Using async-await */
async function start() {
    await createDataUsingPromise({
            id: datas.length+1,
            name: 'Amit Mishra',
            profession: 'Cricketer'
        });
    getDatas();
}

start();
