
// =============================
// TO-DO LIST
// =============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();


    // Check empty task
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    // Create list item
    const li = document.createElement("li");


    // Create task text
    const span = document.createElement("span");

    span.textContent = taskText;


    // Create delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // Mark task as completed
    span.addEventListener("click", function () {

        li.classList.toggle("completed");

    });


    // Delete task
    deleteBtn.addEventListener("click", function () {

        li.remove();

    });


    // Add elements to list item
    li.appendChild(span);

    li.appendChild(deleteBtn);


    // Add list item to task list
    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";

});


// =============================
// CONTACT FORM VALIDATION
// =============================

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();


    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // Name validation
    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required.";

        isValid = false;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required.";

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Enter a valid email.";

        isValid = false;
    }


    // Message validation
    if (messageInput.value.trim() === "") {

        messageError.textContent = "Message is required.";

        isValid = false;
    }


    // Success
    if (isValid) {

        successMessage.textContent =
            "Form submitted successfully!";

        contactForm.reset();

    }

});
