import './index.scss';
//import monitor from './monitor.png';
import './index.hbs'

let submit = () => {
    let newComment = document.getElementById('new-comment').value;
    let commentBox = document.getElementById('comment-box');
    commentBox.innerHTML += `<p class='comment'>${newComment}</p>`;

    commentBox.innerHTML += `<img class="img" src=${monitor} />`;
}

window.submit = submit;