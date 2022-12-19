const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const address = document.getElementById("address");
const aptsuitebuild = document.getElementById("apt-suite-build");
const postal = document.getElementById("postal");
const country = document.getElementById("country");
const city = document.getElementById("city");
const phonenumber = document.getElementById("phone-number");

const firstName2 = document.getElementById("firstName2");
const lastName2 = document.getElementById("lastName2");
const dob2 = document.getElementById("dob2");
const email2 = document.getElementById("email2");
const address2 = document.getElementById("address2");
const aptsuitebuild2 = document.getElementById("apt-suite-build2");
const postal2 = document.getElementById("postal2");
const country2 = document.getElementById("country2");
const city2 = document.getElementById("city2");
const phonenumber2 = document.getElementById("phone-number2");

function summary() {
  firstName2.innerHTML = firstName.value;
  lastName2.innerHTML = lastName.value;
  dob2.innerHTML = dob.value;
  email2.innerHTML = email.value;
  address2.innerHTML = address.value;
  aptsuitebuild2.innerHTML = aptsuitebuild.value;
  postal2.innerHTML = postal.value;
  country2.innerHTML = country.value;
  city2.innerHTML = city.value;
  phonenumber2.innerHTML = phonenumber.value;
}

nextBtns.addEventListener("click", summary());
