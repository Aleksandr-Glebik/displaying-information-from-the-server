document.getElementById('load').addEventListener('click', load)

// function load() {
//     // console.log('click');
//     let url = 'https://jsonplaceholder.typicode.com/users'

//     fetch(url)
//         .then(function(response) {
//             // console.log(response.json());
//             return response.json()
//         })
//         .then(function(data) {
//             let ul = document.getElementById('list')
//             // console.log(ul);
//             let html = data.map(function(item) {
//                 return `<li>${item.id} ${item.name} (${item.email})</li>`
//             })
//             // console.log(html);
//             // ul.insertAdjacentHTML('afterbegin', html.join(' '))

//             if (ul.querySelector('li')) {
//             } else {
//                 ul.insertAdjacentHTML('afterbegin', html.join(' '))
//             }
//         })
// }

//оптимизируем код с помощью методов async / await
//пока часть кода с методом await не выполниться мы не выполняем код ниже, так как наша функиця load стала async

async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    let response = await fetch(url)
    let data = await response.json()

    let ul = document.getElementById('list')
    let html = data.map(function(item) {
        return `<li>${item.id} ${item.name} (${item.email})</li>`
    })

    if (ul.querySelector('li')) {
    } else {
        ul.insertAdjacentHTML('afterbegin', html.join(' '))
    }
}