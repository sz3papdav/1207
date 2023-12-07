document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const userIdSelect = document.getElementById('userId');
        users.forEach(user => {
            const option = document.createElement('option');
            option.value = user.id;
            option.text = user.name;
            userIdSelect.appendChild(option);
        });
    })
    .catch(error => console.error('GET Kérés Sikertelen', error));
});

function createPost() {
const title = document.getElementById('title').value;
const body = document.getElementById('body').value;
const userId = document.getElementById('userId').value;

const postData = {
    title: title,
    body: body,
    userId: userId
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(postResponse => {
        const postDetailsElem = document.getElementById('postDetails');
        const postDetailsListElem = document.getElementById('postDetailsList');
        const postResponseElem = document.getElementById('postResponse');

        postDetailsListElem.innerHTML = '';

        const detailsOutput = [
            `Cím: ${title}`,
            `Szöveg: ${body}`,
            `Felhasználó ID: ${userId}`,
            `ID: ${postResponse.id}`,
        ];

        detailsOutput.forEach(detail => {
            const listItem = document.createElement('li');
            listItem.textContent = detail;
            postDetailsListElem.appendChild(listItem);
        });

        postDetailsElem.style.display = 'block';
    })
    .catch(error => console.error('POST Kérés Sikertelen', error));
}