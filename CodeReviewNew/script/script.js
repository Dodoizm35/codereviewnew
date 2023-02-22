const incrementButton1 = document.querySelector("#increment-button-1");
let priorityLevel1 = 1;

incrementButton1.addEventListener("click", function() {
    priorityLevel1++;
    if (priorityLevel1 > 5) {
        priorityLevel1 = 0;
    }
    incrementButton1.innerHTML = priorityLevel1;
    if (priorityLevel1 >= 0 && priorityLevel1 <= 1) {
        incrementButton1.classList.remove("bg-warning");
        incrementButton1.classList.remove("bg-danger");
        incrementButton1.classList.add("bg-success");
    } else if (priorityLevel1 >= 2 && priorityLevel1 <= 3) {
        incrementButton1.classList.remove("bg-success");
        incrementButton1.classList.remove("bg-danger");
        incrementButton1.classList.add("bg-warning");
    } else if (priorityLevel1 >= 4 && priorityLevel1 <= 5) {
        incrementButton1.classList.remove("bg-success");
        incrementButton1.classList.remove("bg-warning");
        incrementButton1.classList.add("bg-danger");
    }
});

// Set the deadline date and time (YYYY-MM-DD hh:mm:ss)
const deadline = "2023-04-01 15:00:00";

// Calculate the remaining time and update the countdown element every second
setInterval(function() {
    // Calculate the remaining time in seconds
    let remainingTime = Math.floor((new Date(deadline).getTime() - new Date()
        .getTime()) / 1000);

    // Calculate the remaining days, hours, minutes, and seconds
    let days = Math.floor(remainingTime / (24 * 60 * 60));
    remainingTime -= days * 24 * 60 * 60;
    let hours = Math.floor(remainingTime / (60 * 60));
    remainingTime -= hours * 60 * 60;
    let minutes = Math.floor(remainingTime / 60);
    remainingTime -= minutes * 60;
    let seconds = remainingTime;

    // Update the countdown element with the remaining time
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s";
}, 1000);


const card1 = document.querySelector(".card-container .col-md-4:first-child .card");
const deleteButton1 = card1.querySelector(".btn-danger");

deleteButton1.addEventListener("click", function() {
    card1.style.display = "none";
});


function makeCardTransparent(button) {
    const cardBody = button.parentElement.parentElement;
    cardBody.parentElement.classList.add("transparent");
}


const incrementButton2 = document.querySelector("#increment-button-2");
let priorityLevel2 = 5;

incrementButton2.addEventListener("click", function() {
            priorityLevel2++;
            if (priorityLevel2 > 5) {
                priorityLevel2 = 0;
            }
            incrementButton2.innerHTML = priorityLevel2;
            if (priorityLevel2 >= 0 && priorityLevel2 <= 1) {
                incrementButton2.classList.remove("bg-warning");
                incrementButton2.classList.remove("bg-danger");
                incrementButton2.classList.add("bg-success");
            } else if (priorityLevel2 >= 2 && priorityLevel2 <= 3) {
                incrementButton2.classList.remove("bg-success");
                incrementButton2.classList.remove("bg-danger");
                incrementButton2.classList.add("bg-warning");
            } else if (priorityLevel2 >= 4 && priorityLevel2 <= 5) {
                incrementButton2.classList.remove("bg-success");
                incrementButton2.classList.remove("bg-warning");
                incrementButton2.classList.add("bg-danger");

                // Priority level increment/decrement buttons for third card
                const incrementButton3 = document.querySelector("#increment-button-3");
                let priorityLevel3 = 3;
                incrementButton3.addEventListener("click", function() {
                    priorityLevel3++;
                    if (priorityLevel3 > 5) {
                        priorityLevel3 = 0;
                    }
                    incrementButton3.innerHTML = priorityLevel3;
                    if (priorityLevel3 >= 0 && priorityLevel3 <= 1) {
                        incrementButton3.classList.remove("bg-warning");
                        incrementButton3.classList.remove("bg-danger");
                        incrementButton3.classList.add("bg-success");
                    } else if (priorityLevel3 >= 2 && priorityLevel3 <= 3) {
                        incrementButton3.classList.remove("bg-success");
                        incrementButton3.classList.remove("bg-danger");
                        incrementButton3.classList.add("bg-warning");
                    } else if (priorityLevel3 >= 4 && priorityLevel3 <= 5) {
                        incrementButton3.classList.remove("bg-success");
                        incrementButton3.classList.remove("bg-warning");
                        incrementButton3.classList.add("bg-danger");
                    }
                });

                // Delete button for third card
                const card3 = document.querySelector(".card-container .col-md-4:last-child .card");
                const deleteButton3 = card3.querySelector(".btn-danger");

                deleteButton3.addEventListener("click", function() {
                    card3.style.display = "none";
                });

                // Make card transparent when Done button is clicked
                function makeCardTransparent(button) {
                    const cardBody = button.parentElement.parentElement;
                    cardBody.parentElement.classList.add("transparent");
                }