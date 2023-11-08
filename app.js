
function displayCards(id) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://dummyjson.com/users/${id}`);
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
        containerEle.insertAdjacentHTML("beforeend", doc) = doc;
    });

}

for (let i = 1; i < 10; i++) {
    displayCards(i);
}

// displayCards(10);
// displayCards(1);






