console.log('I can see a rainbow');

fetch('rainbow.jpg')
    .then(res => {
        console.log(res);
        return res.blob();
    })

    .then(blob => {
        console.log(blob);
        document.getElementById('rainbow').src = URL.createObjectURL(blob);
    })

    .catch(err => {
        console.log(err);
    })