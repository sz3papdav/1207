document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(valasz => valasz.json())
        .then(bejegyzesek => {
            const getEredmenyek = document.getElementById('getEredmenyek');
            bejegyzesek.forEach(bejegyzes => {
                const sor = document.createElement('tr');
                sor.innerHTML = `
                    <td>${bejegyzes.id}</td>
                    <td>${bejegyzes.title}</td>
                    <td>${bejegyzes.body}</td>
                    <td>${bejegyzes.userId}</td>
                `;
                getEredmenyek.appendChild(sor);
            });
        })
        .catch(hiba => console.error('GET Kérés Sikertelen', hiba));

    const postAdatok = {
        title: "Új Bejegyzés Címe",
        body: "Új Bejegyzés Szövege",
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postAdatok),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(valasz => valasz.json())
        .then(postValasz => {
            const postValaszElem = document.getElementById('postValasz');
            //postValaszElem.textContent = JSON.stringify(postValasz, null, 2);
        })
        .catch(hiba => console.error('POST Kérés Sikertelen', hiba));
});