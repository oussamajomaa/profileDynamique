
// on click on the button it will empty the table and show it
$('#btn1').click(() => {
    $('table').empty();
    $('table').show();

    // we get data from strapi by fetch
    fetch('http://localhost:1337/metiers').then(data => {
        data.json()
            .then(data => {
                for (const iterator of data) {
                    new Profile(iterator.acquisition, iterator.mention, iterator.categorie, iterator.intitule, iterator.front);
                }
            })
    })
})

$('#btn2').click(() => {
    $('table').empty();
    $('table').show();
    fetch('http://localhost:1337/techniques').then(data => {
        data.json()
            .then(data => {
                data.forEach(iterator => {
                    new Profile(iterator.acquisition, iterator.mention, iterator.categorie, iterator.intitule);
                });
            })
    })
})

$('#btn3').click(() => {
    $('table').empty();
    $('table').show();
    fetch('http://localhost:1337/humains').then(data => {
        data.json()
            .then(data => {
                let th = document.createElement('th');
                th.textContent = 'Compétences Humaines';
                table.appendChild(th);
                th.setAttribute('colspan', '2');
                data.forEach(iterator => {
                    new Profile(iterator.acquisition, iterator.mention, iterator.categorie)
                })
            })
    })
})



