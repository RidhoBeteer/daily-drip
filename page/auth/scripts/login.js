const userDBdummy = [
  { email: "admin@gmail.com", password: "admin" },
  { email: "ridho@gmail.com", password: "ridho123" },
  { email: "daily@drip.com", password: "dailydrip" },
];

const emailInputLogin = document.getElementById("email-login");
const passwordInputLogin = document.getElementById("password-login");
const submitLogin = document.getElementById("btn-login");

const toast = document.getElementById("toast");
const toastClose = document.getElementById("close");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

submitLogin.addEventListener("click", (e) => {
  e.preventDefault();

  checkInputLogin();
});

const checkInputLogin = () => {
  const emailValue = emailInputLogin.value;
  const passwordValue = passwordInputLogin.value;
  const userData = [];

  if (emailValue === "" || emailValue == null) {
    setError(emailInputLogin, "Email should not be empty");
    userData.push(false);
  } else if (!isEmail(emailValue)) {
    setError(emailInputLogin, "Invalid email format");
    userData.push(false);
  } else {
    setSuccess(emailInputLogin);
    userData.push(emailValue);
  }

  if (passwordValue === "" || passwordValue == null) {
    setError(passwordInputLogin, "Password should not be empty");
    userData.push(false);
  } else {
    setSuccess(passwordInputLogin);
    userData.push(passwordValue);
  }

  const isValidUserData = userData.every((el) => {
    return el !== "" && el != null && el !== false;
  });

  if (isValidUserData) {
    checkLogin(userData);
  }
};

const checkLogin = (dataArr) => {
  // console.log(dataArr);
  const findResult = userDBdummy.find((el) => {
    return el.email === dataArr[0] && el.password === dataArr[1];
  });

  if (findResult === undefined) {
    showToastError();
    return;
  }

  openModal(findResult);
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

const showToastError = () => {
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);
};

toastClose.addEventListener("click", () => {
  toast.classList.remove("active");
});

const openModal = (loginObj) => {
  console.log(loginObj);
  const modalContainer = modal.parentElement;
  const loggedUser = document.getElementById("logged-user");

  loggedUser.innerText = loginObj.email;
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
