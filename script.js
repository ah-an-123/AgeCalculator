let btn = document.getElementById("btn");
let dob = document.getElementById("dob");
let ageShow = document.getElementById("age");
let message = document.querySelector(".message");
let impossible = document.getElementById("impossible");
btn.addEventListener('click', (event) => {
    event.preventDefault();
    const DOB = new Date(dob.value);
    const CureentDate = new Date();
    const timeDiff = CureentDate - DOB;
    const Age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    if (Age <= 0) {
        impossible.hidden = false;
        message.hidden = true;
    }
    else {
        impossible.hidden = true;
        message.hidden = false;
        if (Age == 1) {
            ageShow.innerText = Age + " year";
        }
        else {
            ageShow.innerText = Age + " years";
        }
    }
})