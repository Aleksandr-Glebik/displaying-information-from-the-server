document.getElementById('load').addEventListener('click', load)

function load() {
    // console.log('click');
    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then(function(response) {
            // console.log(response.json());
            return response.json()
        })
        .then(function(data) {
            let ul = document.getElementById('list')
            // console.log(ul);
            let html = data.map(function(item) {
                return `<li>${item.id} ${item.name} (${item.email})</li>`
            })
            // console.log(html);
            // ul.insertAdjacentHTML('afterbegin', html.join(' '))

            if (ul.querySelector('li')) {
            } else {
                ul.insertAdjacentHTML('afterbegin', html.join(' '))
            }
        })
}