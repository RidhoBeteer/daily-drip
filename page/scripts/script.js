const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const displayNameInput = document.getElementById("full-name");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const birthdayInput = document.getElementById("birthday");
const genderOption = document.getElementsByName("gender");
const saveBtn = document.getElementById("btn-save");

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

saveBtn.addEventListener("click", (e) => {
  checkInput();
});

const checkInput = () => {
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const addressValue = addressInput.value;
  const displayNameValue = displayNameInput.value;
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const birthdayValue = birthdayInput.value;
  const profileData = {};

  if (emailValue === "" || emailValue == null) {
    setError(emailInput, "Email should not be blank");
    profileData.email = null;
  } else if (!isEmail(emailValue)) {
    setError(emailInput, "Invalid email format");
    profileData.email = null;
  } else {
    setSuccess(emailInput);
    profileData.email = emailValue;
  }

  if (phoneValue === "" || phoneValue == null) {
    setError(phoneInput, "Email should not be blank");
    profileData.phone = null;
  } else if (!isPhoneNumber(phoneValue)) {
    setError(phoneInput, "Invalid phone format");
    profileData.phone = null;
  } else {
    setSuccess(phoneInput);
    profileData.phone = phoneValue;
  }

  if (addressValue === "" || addressValue == null) {
    setError(addressInput, "Address should not be blank");
    profileData.address = null;
  } else {
    setSuccess(addressInput);
    profileData.address = addressValue;
  }

  if (displayNameValue === "" || displayNameValue == null) {
    setError(displayNameInput, "Full Name should not be blank");
    profileData.displayName = null;
  } else {
    setSuccess(displayNameInput);
    profileData.displayName = displayNameValue;
  }

  if (firstNameValue === "" || firstNameValue == null) {
    setError(firstNameInput, "First Name should not be blank");
    profileData.firstName = null;
  } else {
    setSuccess(firstNameInput);
    profileData.firstName = firstNameValue;
  }

  if (lastNameValue === "" || lastNameValue == null) {
    setError(lastNameInput, "Last Name should not be blank");
    profileData.lastName = null;
  } else {
    setSuccess(lastNameInput);
    profileData.lastName = lastNameValue;
  }

  if (birthdayValue === "" || birthdayValue == null) {
    setError(birthdayInput, "Birthday should not be blank");
    profileData.birthday = null;
  } else {
    setSuccess(birthdayInput);
    profileData.birthday = birthdayValue;
  }

  genderOption.forEach((el) => {
    if (el.checked) {
      profileData.gender = el.value;
    }
  });

  const isNotEmpty = Object.values(profileData).every((el) => el != null);

  if (!isNotEmpty) {
    console.log("All inputs should be filled!");
    return;
  }

  openModal(profileData);
};

const setSuccess = (input) => {
  const inputGroup = input.parentElement;
  inputGroup.className = "profile-input-group input-group";
};

const setError = (input, errorMsg) => {
  const inputGroup = input.parentElement;
  const small = inputGroup.querySelector("small");

  small.innerText = errorMsg;
  inputGroup.className = "profile-input-group input-group error";
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

const openModal = (obj) => {
  const modalContainer = modal.parentElement;

  const emailModal = document.getElementById("email-modal");
  const phoneModal = document.getElementById("phone-modal");
  const addressModal = document.getElementById("address-modal");
  const displayNameModal = document.getElementById("display-name-modal");
  const firstNameModal = document.getElementById("first-name-modal");
  const lastNameModal = document.getElementById("last-name-modal");
  const birthdayModal = document.getElementById("birthday-modal");
  const genderModal = document.getElementById("gender-modal");

  emailModal.innerText = `Email:  ${obj.email}`;
  phoneModal.innerText = `Phone: ${obj.phone}`;
  addressModal.innerText = `Address: ${obj.address}`;
  displayNameModal.innerText = `Display Name: ${obj.displayName}`;
  firstNameModal.innerText = `First Name: ${obj.firstName}`;
  lastNameModal.innerText = `Last Name: ${obj.lastName}`;
  birthdayModal.innerText = `Birthday: ${obj.birthday}`;
  genderModal.innerText = `Gender: ${obj.gender}`;
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
