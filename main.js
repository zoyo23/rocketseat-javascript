// https://api.github.com/users/zoyo23
axios.get("https://api.github.com/users/zoyo23")
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (err) {
        console.warn(err);
    });