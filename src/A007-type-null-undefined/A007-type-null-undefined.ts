let x;
if (typeof x === "undefined") {
  x = 20;
}

console.log(x ** x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === "number") {
    return x * x;
  }

  return null;
}

if (squareOf(2) === null) {
  console.log("Invalid value");
} else {
  console.log(squareOf(2));
}
