document.getElementById('load').addEventListener('click', load)

function load() {
    // console.log('click');
    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then(function(response) {
            console.log(response.json());
            // return response.json()
        })
}