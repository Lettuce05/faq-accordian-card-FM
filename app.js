const questions = document.querySelectorAll(".question");
const checkboxes = document.querySelectorAll("input");
const faqCard = document.querySelector(".faqCard");
const answers = document.querySelectorAll(".answer");
let answerHeight;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", ()=>{
        let id = checkbox.id;
        switch(id){
            case "Q1":
                questions[0].classList.toggle("active");
                questions[0].querySelector("img").classList.toggle("active-arrow");
            break;
            case "Q2":
                questions[1].classList.toggle("active");
                questions[1].querySelector("img").classList.toggle("active-arrow");
            break;
            case "Q3":
                questions[2].classList.toggle("active");
                questions[2].querySelector("img").classList.toggle("active-arrow");
            break;
            case "Q4":
                questions[3].classList.toggle("active");
                questions[3].querySelector("img").classList.toggle("active-arrow");
            break;
            case "Q5":
                questions[4].classList.toggle("active");
                questions[4].querySelector("img").classList.toggle("active-arrow");
            break;
        }

        answers.forEach(answer => {
            if(answer.offsetHeight > 0){
                answerHeight = answer.offsetHeight;
            }
        });
        let count = 0;
        checkboxes.forEach(checkbox =>{
            if(checkbox.checked){
                count++;
            }
        });
        console.log(count);
        let offSetHeight;
        let extraHeight = 10;
        if(window.innerWidth < 900){
            extraHeight = 15;
        } else if(window.innerWidth < 700){
            extraHeight = 20;
        }
        offSetHeight = (answerHeight * count) + (count * extraHeight);
        console.log(answerHeight);
        console.log(offSetHeight);
        faqCard.style.height = `${offSetHeight + 600}px`;
    })
})

