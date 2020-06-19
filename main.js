//Varibles
const form = document.querySelector("#form"),
   username = document.querySelector("#username"),
   email = document.querySelector("#email"),
   password = document.querySelector("#password"),
   password2 = document.querySelector("#password2");

//Event Listeners
form.addEventListener("submit", (e) => {
   e.preventDefault();
   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 20);
   checkEmail(email);
   checkPasswordMatch(password, password2);
});

//Shpw error input
const showError = (input, message) => {
   const formControl = input.parentElement;
   formControl.className = "form-control error";
   const small = formControl.querySelector("small");
   small.innerText = message;
};

//Show success outline
const showSuccess = (input) => {
   const formControl = input.parentElement;
   formControl.className = "form-control success";
};

//Check Email is valid
const checkEmail = (input) => {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   /*  return re.test(String(email).toLowerCase()); */
   if (re.test(input.value.trim())) {
      showSuccess(input);
   } else {
      showError(input, "Email is not valid");
   }
};

//Check Required Fields
const checkRequired = (inputArr) => {
   inputArr.forEach((input) => {
      if (input.value.trim() === "") {
         showError(input, `${firstLetterToUpperCase(input.id)} is required`);
      } else {
         showSuccess(input);
      }
   });
};

//Get First Letter Uppercase
const firstLetterToUpperCase = (input) => {
   return input.charAt(0).toUpperCase() + input.slice(1);
};

//Check input Length
const checkLength = (input, min, max) => {
   if (input.value.length < min) {
      showError(input, `${firstLetterToUpperCase(input.id)} must be at least ${min} characters`);
   } else if (input.value.length > max) {
      showError(input, `${firstLetterToUpperCase(input.id)} must be less than ${max} characters`);
   } else {
      showSuccess(input);
   }
};

//Check Password Match
const checkPasswordMatch = (input1, input2) => {
   if (input1.value !== input2.value) {
      showError(input2, "Password do not match");
   }
};
