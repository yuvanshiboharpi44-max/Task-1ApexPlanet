// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.innerText = "Please fill all fields!";
    } 
    else if (!email.includes("@")) {
        error.innerText = "Please enter a valid email!";
    } 
    else {
        error.innerText = "Form submitted successfully!";
        error.style.color = "green";
    }
});
// TO-DO LIST
document.getElementById("addTask").addEventListener("click", function () {
    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerText = taskText;
    // remove on click
    li.onclick = function () {
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value="";
});