window.onload = () => {
    // Runs automatically

    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let message = document.getElementById("message");
    let submitButton = document.getElementById("submit");
    let contactForm = document.getElementById("contactForm");
    let thanks = document.getElementById("thankYou");

    submitButton.onclick = (event) => {
        contactForm.remove();
        thanks.innerHTML = `
            <h3>Thank you ${firstName.value} ${lastName.value}!</h3>
            <p>We'll get back to you in 5-7 business days</p>
        `;
    }


    document.getElementById("shopLink").onclick = event => {
        let password = prompt("What's the password");
        console.log(password);

        if (password !== 'hamster') {
            event.preventDefault();
            event.stopPropagation();
            alert("wrong password");
        }
    }
}



