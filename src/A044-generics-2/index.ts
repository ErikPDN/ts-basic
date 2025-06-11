const arrNumbers: Array<number> = [1, 2, 3, 4, 5, 6]
console.log(arrNumbers)

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

promiseAsync().then(res => console.log(res + 1))
myPromise().then(res => console.log(res + 1))
