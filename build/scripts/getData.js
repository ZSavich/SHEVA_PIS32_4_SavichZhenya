let requestURL = 'https://raw.githubusercontent.com/ZSavich/SHEVA_PIS32_4_SavichZhenya/master/data.json';
let request = new XMLHttpRequest();
const comSub = document.getElementById('comment-send');
let comments = [];
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = () => {
    comments = request.response;

    writeComments(comments);
};


function writeComments(data) {
    data.forEach((item) =>
    {
        let date = new Date(item.date);

        let commentsList = document.querySelector('.comments__list');

        let li = document.createElement('li');
        li.className = "comments__item";

        let name = document.createElement('span');
        name.className = "comments__name";
        let imgWrrap = document.createElement('div');
        imgWrrap.className = "comments__user";
        let img = document.createElement('img');
        img.className = "comments__img";
        img.setAttribute('src', './img/feedback/1.jpg');
        img.setAttribute('alt', item.name);

        let text = document.createElement('p');
        text.className = "comments__mess";
        let time = document.createElement('time');
        time.className = "comments__date";

        name.textContent = item.name;
        text.textContent = item.text;

        time.textContent = date.toLocaleString("ru", {day: 'numeric', month: 'long', year: 'numeric'});

        commentsList.appendChild(li);
        li.appendChild(imgWrrap);
        imgWrrap.appendChild(img);
        imgWrrap.appendChild(name);
        li.appendChild(text);
        li.appendChild(time);
    });
}

function createComment() {
    const name = document.getElementById('name');
    const text = document.getElementById('message');
    const date = new Date().toJSON();
    let commentsList = document.querySelector('.comments__list');

    const element = {
        "name" : name.value,
        "text" : text.value,
        "date" : date
    };

    name.value = '';
    text.value = '';

    const jsonMess = JSON.stringify(element);

    comments.push(element);

    while(commentsList.firstChild)
        commentsList.removeChild(commentsList.firstChild);

    writeComments(comments);
}

comSub.addEventListener('click', (event) => {
    event.preventDefault();
    createComment();
});