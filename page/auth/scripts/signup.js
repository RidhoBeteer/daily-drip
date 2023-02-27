const emailInputRegister = document.getElementById("email-register");
const passwordInputRegister = document.getElementById("password-register");
const phoneInputRegister = document.getElementById("phone-register");
const submitRegister = document.getElementById("btn-register");

const toast = document.getElementById("toast");
const toastClose = document.getElementById("close");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

submitRegister.addEventListener("click", (e) => {
  e.preventDefault();

  checkInputRegister();
});

const checkInputRegister = () => {
  const emailValue = emailInputRegister.value;
  const passwordValue = passwordInputRegister.value;
  const phoneValue = phoneInputRegister.value;
  const userData = [];

  if (emailValue === "" || emailValue == null) {
    setError(emailInputRegister, "Email should not be empty");
    userData.push(false);
  } else if (!isEmail(emailValue)) {
    setError(emailInputRegister, "Invalid email format");
    userData.push(false);
  } else {
    setSuccess(emailInputRegister);
    userData.push(emailValue);
  }

  if (passwordValue === "" || passwordValue == null) {
    setError(passwordInputRegister, "Password should not be empty");
    userData.push(false);
  } else {
    setSuccess(passwordInputRegister);
    userData.push(passwordValue);
  }

  if (phoneValue === "" || phoneValue == null) {
    setError(phoneInputRegister, "Phone should not be empty");
    userData.push(false);
  } else if (!isPhoneNumber(phoneValue)) {
    setError(phoneInputRegister, "Invalid phone number format");
    userData.push(false);
  } else {
    setSuccess(phoneInputRegister);
    userData.push(phoneValue);
  }

  // console.log(userData);

  const isValidUserData = userData.every((el) => {
    return el !== "" && el != null && el !== false;
  });

  if (isValidUserData) {
    openModal(userData);
  }
};

const setSuccess = (input) => {
  const inputGroup = input.parentElement;
  inputGroup.className = "input-group success";
};

const setError = (input, errorMsg) => {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");

  small.innerText = errorMsg;
  inputGroup.className = "input-group error";
};

const isEmail = (email) => {
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};

const isPhoneNumber = (phone) => {
  const phonePattern =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/;
  return phonePattern.test(phone);
};

const showToastError = () => {
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);
};

toastClose.addEventListener("click", () => {
  toast.classList.remove("active");
});

const openModal = (RegisterObj) => {
  // console.log(RegisterObj);
  const modalContainer = modal.parentElement;
  const submittedEmail = document.getElementById("email-submitted");
  const submittedPassword = document.getElementById("password-submitted");
  const submittedPhone = document.getElementById("phone-submitted");

  submittedEmail.innerText = `Email     : ${RegisterObj[0]}`;
  submittedPassword.innerText = `Password     : ${RegisterObj[1]}`;
  submittedPhone.innerText = `Phone     : ${RegisterObj[2]}`;
  modalContainer.classList.add("active");

  const body = document.querySelector("body");
  body.classList.add("modal-active");
};

modalClose.addEventListener("click", () => {
  const modalContainer = modal.parentElement;
  const body = document.querySelector("body");

  modalContainer.classList.remove("active");
  body.classList.remove("modal-active");
});
