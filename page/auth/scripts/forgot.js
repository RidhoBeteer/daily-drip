const emailInput = document.getElementById("email-forgot");
const btnSubmit = document.getElementById("btn-forgot");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  checkInput();
});

const checkInput = () => {
  const emailValue = emailInput.value;
  let isValid;
  if (emailValue === "" || emailValue == null) {
    setError(emailInput, "Email should not be empty");
    isValid = false;
  } else if (!isEmail(emailValue)) {
    setError(emailInput, "Invalid email format");
    isValid = false;
  } else {
    setSuccess(emailInput);
    isValid = true;
  }

  if (!isValid) {
    console.log("Oops, something went wrong!");
    return;
  }

  openModal(emailValue);
};

const setSuccess = (input) => {
  const inputGroup = input.parentElement;
  inputGroup.className = "forgot-input-group input-group success";
};

const setError = (input, errorMsg) => {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");

  small.innerText = errorMsg;
  inputGroup.className = "forgot-input-group input-group error";
};

const isEmail = (email) => {
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};

const openModal = (email) => {
  console.log(email);
  const modalContainer = modal.parentElement;
  const loggedUser = document.getElementById("email-user");

  loggedUser.innerText = email;
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
