const searchInput = document.querySelector('#Search1');
const ShowList = document.querySelector('#data1');
searchInput.addEventListener('keyup', function() {
    const input = searchInput.value;
    ShowList.innerHTML = '';
    const suggestions = countries.filter(function(country) {
        return country.name.toLowerCase().startsWith(input.toLowerCase());
    });

    if (input === '') {
        countries.forEach(m => {
            const div = document.createElement('li');
            div.innerHTML = m.name;
            div.dataset.id = m.id;
            div.addEventListener("click", getName);
            ShowList.appendChild(div);
        });
    } else {
        suggestions.forEach(function(suggested) {
            const div = document.createElement('li');
            div.innerHTML = suggested.name;
            div.dataset.id = suggested.id;
            div.addEventListener("click", getName);
            ShowList.appendChild(div);
        });
    }
})

function getName() {
    searchInput.value = this.innerHTML;
}