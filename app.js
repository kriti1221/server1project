const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/users/21');
request.send();
const containerEle = document.querySelector('#container');
request.addEventListener("load", () => {
    console.log((request.responseText));
    let data = JSON.parse(request.responseText);
    console.log(data);

    const doc = `<div>
<image src=${data.image} alt="not found"></image>
<h3>${data.firstName}</h3>
<h3>${data.lastName}</h3>
<h3>${data.email}</h3>
</div>`
    containerEle.innerHTML = doc;
});






