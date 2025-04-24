const body = document.querySelector("body")!; // force non-null assertion
body.style.backgroundColor = "black";

// outra maneira de fazer
// Type assertion
const body2 = document.querySelector("body") as HTMLBodyElement; // as HTMLBodyElement
body2.style.backgroundColor = "black";
