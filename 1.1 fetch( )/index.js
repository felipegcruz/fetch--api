// console.log('I can see a rainbow');

// fetch('rainbow.jpg')
//     .then(res => {
//         console.log(res);
//         return res.blob();
//     })

//     .then(blob => {
//         console.log(blob);
//         document.getElementById('rainbow').src = URL.createObjectURL(blob);
//     })

//     .catch(err => {
//         console.log(err);
//     })

catchRainbow()
    .then(response => {
        console.log('it is working fine');
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    })

async function catchRainbow() {
    const response = await fetch('rainbow.jpg');
    const blob = await response.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}