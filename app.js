const li_1 = document.getElementById("choose_title_container");
const li_2 = document.getElementById("choose_description");
const li_3 = document.getElementById("choose_confirm");
const text_contenu = document.getElementById("text_contenu");
const submit_btn = document.getElementById("submit_btn");
const back_btn = document.getElementById("back_btn");
const description_btn = document.getElementById("description_btn");
const no_btn = document.getElementById("no_btn");
const yes_btn = document.getElementById("yes_btn");
let finish = 0;

li_1.classList.add("active");
li_1.style.color = "black"
text_contenu.innerText = "Choose title content"

submit_btn.addEventListener("click", () => {
    text_contenu.innerText = "Choose description content"
    submit_btn.style.display = "none"
    back_btn.style.display = "inline"
    description_btn.style.display = "inline"
    li_2.classList.add("active")
    li_2.style.color = "black"
})

back_btn.addEventListener("click", () => {
    text_contenu.innerText = "Choose title content"
    li_2.classList.remove("active")
    li_2.style.color = "#797979"
    back_btn.style.display = "none"
    description_btn.style.display = "none"
    submit_btn.style.display = "block"
})

description_btn.addEventListener("click", () => {
    text_contenu.innerText = "Are you happy now ?"
    no_btn.style.display = "inline"
    yes_btn.style.display = "inline"
    back_btn.style.display = "none"
    description_btn.style.display = "none"
    li_3.classList.add("active")
    li_3.style.color = "black"
})

no_btn.addEventListener("click", () => {
    text_contenu.innerText = "Choose title content"
    li_3.classList.remove("active")
    li_3.style.color = "#797979"
    back_btn.style.display = "inline"
    description_btn.style.display = "inline"
    no_btn.style.display = "none"
    yes_btn.style.display = "none"
})

yes_btn.addEventListener("click", () => {
    text_contenu.innerText = "Ok, we're done. Thanks for sending us your data!"
    no_btn.style.display = "none"
    yes_btn.style.display = "none"
    finish = 1;
})

li_1.addEventListener("click", () => {
    finish = 0;
    li_1.classList.add("active");
    li_1.style.color = "black"
    text_contenu.innerText = "Choose title content"
    submit_btn.style.display = "inline"
    no_btn.style.display = "none"
    yes_btn.style.display = "none"
    description_btn.style.display = "none"
    back_btn.style.display = "none"
    li_2.classList.remove("active")
    li_3.classList.remove("active")
    li_2.style.color = "#797979"
    li_3.style.color = "#797979"
})

li_2.addEventListener("click", () => {
    finish = 1;
    li_3.classList.remove("active")
    li_3.style.color = "#797979"
    li_2.classList.add("active")
    li_2.style.color = "black"
    submit_btn.style.display = "none"
    no_btn.style.display = "none"
    yes_btn.style.display = "none"
    description_btn.style.display = "inline"
    back_btn.style.display = "inline"
    text_contenu.innerText = "Choose description content"
})

li_3.addEventListener("click", () => {
    if (finish === 1) {
        li_3.classList.add("active")
        li_3.style.color = "black"
        submit_btn.style.display = "none"
        no_btn.style.display = "inline"
        yes_btn.style.display = "inline"
        description_btn.style.display = "none"
        back_btn.style.display = "none"
        text_contenu.innerText = "Are you happy now ?"
    }
})