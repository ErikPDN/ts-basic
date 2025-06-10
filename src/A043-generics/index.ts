type FilterCallback<T> = (
  value: T,
  index?: number,
  array?: T[],
) => boolean;

function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const array = [1, 2, 3, 4, 5, 6];
const arrName = ["Erik", "Gabs", "Patricia", "Guilherme"]

let filterArr = array.filter(value => value % 2 === 0);
console.log('filter:', filterArr);

// Correto uso do myFilter:
filterArr = myFilter(array, value => value % 2 === 0);
console.log('myFilter:', filterArr);

const filterAndSort = myFilter(arrName, name => name.includes('a')).sort()
console.log('filtered and sorted:', filterAndSort);
