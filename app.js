document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const frequencySelect = document.getElementById("frequency");
  
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const frequencyError = document.getElementById("frequency-error");
  
    const formMessage = document.getElementById("form-message");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      formMessage.textContent = "";
      formMessage.classList.remove("success");
  
      let isValid = true;
      let firstErrorField = null;
  
      const nameVal = nameInput.value.trim();
      if (nameVal === "") {
        nameError.textContent = "Enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
        isValid = false;
        if (!firstErrorField) firstErrorField = nameInput;
      } else {
        nameError.textContent = "";
        nameInput.removeAttribute("aria-invalid");
      }
  
      const emailVal = emailInput.value.trim();
      if (emailVal === "") {
        emailError.textContent = "Enter your email address.";
        emailInput.setAttribute("aria-invalid", "true");
        isValid = false;
        if (!firstErrorField) firstErrorField = emailInput;
      } else if (!emailRegex.test(emailVal)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailInput.setAttribute("aria-invalid", "true");
        isValid = false;
        if (!firstErrorField) firstErrorField = emailInput;
      } else {
        emailError.textContent = "";
        emailInput.removeAttribute("aria-invalid");
      }
  
      const frequencyVal = frequencySelect.value.trim();
      if (frequencyVal === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencySelect.setAttribute("aria-invalid", "true");
        isValid = false;
        if (!firstErrorField) firstErrorField = frequencySelect;
      } else {
        frequencyError.textContent = "";
        frequencySelect.removeAttribute("aria-invalid");
      }
  
      if (!isValid) {
        if (firstErrorField) {
          firstErrorField.focus();
        }
      } else {
        formMessage.textContent = `Thank you, ${nameVal}! You're on the mailing list.`;
        formMessage.classList.add("success");
        form.reset();
      }
    });
  });