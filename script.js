const currDate = document.getElementById("currDate");
const dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const Age = document.getElementById("age");

const today = new Date();
currDate.innerText = `Today's Date is: ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click", () => {
    const birthDate = new Date(dateOfBirth.value);
    if (isNaN(birthDate)) {
        Age.innerText = "Please enter a valid date.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    Age.innerText = `You are ${age} years old.`;
});