(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("lOtfOloQiJkLq8vxP");
})();

const text = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const hidden = document.querySelector("input[type='hidden']");
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const successMessage = document.querySelector(".success");
const button = document.querySelector(".success-form");

window.onload = function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    button.style.color = "#fbc531";
    button.innerHTML = "";
    button.innerHTML = `"SEND IN PROGRESS..."`;
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", this).then(
      function () {
        console.log("SUCCESS!");
        button.style.color = "#fbc531";
        button.innerHTML = "";
        button.innerHTML = `"SUCCESSFULLY SENT DATA"`;
        setTimeout(() => {
          button.style.color = "white";
          button.innerHTML = "";
          button.innerHTML = `<i class="fa-regular fa-paper-plane postfix"></i>`;
        }, 2000);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    text.value = "";
    email.value = "";
    hidden.value = "";
    textarea.value = "";
  });
};
