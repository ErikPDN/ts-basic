const clientData1: [number, string] = [1, "Erik"]; // NO IMMUTABLE

clientData1[0] = 2; // OK
clientData1.push(3); // OK
// clientData1[2] = 3; // NOT OK
console.log(clientData1);

const clientData2: readonly [number, string] = [1, "Erik"]; // IMMUTABLE

// clientData2.push(3); // NOT OK
console.log(clientData2);
