const questions = document.querySelectorAll(".question");
const checkboxes = document.querySelectorAll("input");
const faqCard = document.querySelector(".faqCard");

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
        let count = 0;
        checkboxes.forEach(checkbox =>{
            if(checkbox.checked){
                count++;
            }
        });

        switch(count){
            case 0:
            case 1:
                faqCard.style.height = "500px";
            break;
            case 2:
                faqCard.style.height = "550px";
            break;
            case 3:
                faqCard.style.height = "600px";
            break;
            case 4:
                faqCard.style.height = "650px";
            break;
            case 5:
                faqCard.style.height = "700px";
        }
    })
})

