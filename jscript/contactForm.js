function submitForm() {


    const regex_name = /^[a-zA-Z]{2,}\s?[a-zA-Z]{2,}?$/;

    const regex_email_simple = /^\S{2,64}@[\S{1,}\.\w{2,}]{4,253}$/;


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    let isPass = true;

    if (!name.match(regex_name)) {
        let warning = document.getElementById("warning_invalid");
        warning.innerHTML = "Name did not match pattern of: 1 letter or 2 letters \
            (no numbers or special characters)!";
        warning.setAttribute("class", "warnings");
        isPass = false;
    }

    if (!email.match(regex_email_simple)) {
        let warning = document.getElementById("warning_invalid");
        warning.innerHTML = "Invalid email! Are you sure that is really your email?";
        warning.setAttribute("class", "warnings");
        isPass = false;
    }

    return isPass;
}