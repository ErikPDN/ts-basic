function throwError(): never {
  // Never type
  throw new Error("This function should never be called");
}

throwError();
