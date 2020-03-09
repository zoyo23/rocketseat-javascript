// https://api.github.com/users/zoyo23
var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/zoyo23');
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject("Erro na requisição");
                }
            }
        }
    });
}

minhaPromise()
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.warn(err);
    });