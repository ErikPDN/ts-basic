type MapStringCallback = (arrItem: string) => string;

export function mapStrings(
  arr: string[],
  callBackFn: MapStringCallback,
): string[] {
  const newArr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBackFn(arr[i]));
  }

  return newArr;
}

const abc = ["a", "b", "c"];
const abcMapped = mapStrings(abc, (item: string) => item.toUpperCase());
console.log(abcMapped); // [ 'A', 'B', 'C' ]
