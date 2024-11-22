function submitForm() {
    const form = document.getElementById("form");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const suggestion = document.getElementById("suggestion").value;

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobile) {
        alert("Please fill all fields.");
        return;
    }

    const popupMessage = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dob}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile: ${mobile}
        Suggestions: ${suggestion || "None"}
    `;

    alert(popupMessage);
    form.reset();
}
