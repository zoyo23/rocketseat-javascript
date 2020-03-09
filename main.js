// https://api.github.com/users/zoyo23
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/zoyo23');
xhr.send(null);

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}