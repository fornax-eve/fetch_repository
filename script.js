

const getData = function (url) {
    return fetch(url)
        .catch(err => console.log(err))
        .then((response) => response.json())
}

const sendData = (url, info) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
}

getData('db.json')
    .then(data => {
       return sendData('https://jsonplaceholder.typicode.com/posts', data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err))

