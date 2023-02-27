const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const fullNameInput = document.getElementById("full-name");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const birthdayInput = document.getElementById("birthday");
const radioButton = document.getElementsByName("gender");
const saveBtn = document.getElementById("btn-save");

saveBtn.addEventListener("click", (e) => {
  checkInput();
});

const checkInput = () => {
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const addressValue = addressInput.value;
  const fullNameValue = fullNameInput.value;
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const birthdayValue = birthdayInput.value;

  if (emailValue === "" || emailValue == null) {
    setError(emailInput, "Email should not be blank");
  } else if (!isEmail(emailValue)) {
    setError(emailInput, "Invalid email format");
  } else {
    setSuccess(emailInput);
  }
};

const setSuccess = (input) => {
  const inputGroup = input.parentElement;
  inputGroup.className = "profile-input-group input-group success";
};

const setError = (input, errorMsg) => {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");

  input.style.borderBottom = "1px solid red";
  small.innerText = errorMsg;
  inputGroup.className = "profile-input-group input-group error";
};

const isEmail = (email) => {
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};
