require('./index.scss');

let setH1 = () => {
    document.getElementById("root").innerText = "Good bye";
    document.getElementById("root").className = "mz";
}

window.setH1 = setH1;