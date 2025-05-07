import { isEmail } from "validator";

const SHOW_ERROR_MESSAGES = "show-error-message";
const username = document.querySelector("#username") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;
const password2 = document.querySelector("#password2") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;

const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  hideMessages(form);
  let hasError = false;
  hasError = checkIfInputIsEmpty(username, password, password2, email);

  if (!isEmail(email.value)) {
    showErrorMessage(email, "Email is not valid");
    hasError = true;
  }

  if (password.value !== password2.value) {
    showErrorMessage(password2, "Passwords do not match");
    hasError = true;
  }

  if (!hasError) {
    alert("Form submitted successfully");
    hideMessages(form);
    form.reset();
  }
});

function checkIfInputIsEmpty(...inputs: HTMLInputElement[]): boolean {
  let hasError = false;

  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, "This field is required");
      hasError = true;
    }
  });

  return hasError ? true : false;
}

function hideMessages(form: HTMLFormElement): void {
  form.querySelectorAll("." + SHOW_ERROR_MESSAGES).forEach((item) => {
    item.classList.remove(SHOW_ERROR_MESSAGES);
  });
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    ".error-message",
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGES);
}
