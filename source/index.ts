// Import the required module with TypeScript syntax
import isNumber from 'is-number';

// Define the type for the input array
type LastArrayInput = any[];

// Define the type for the second argument of the last function
type LastNumber = number;

// Define the return type of the last function
type LastReturn = any | any[] | null;

// Rewrite the last function with TypeScript syntax
export function last(arr: LastArrayInput, n?: LastNumber): LastReturn {
 if (!Array.isArray(arr)) {
    throw new Error('expected the first argument to be an array');
 }

 let len = arr.length;
 if (len === 0) {
    return null;
 }

 // Process n only if it is not undefined
 if (n !== undefined) {
    n = isNumber(n) ? +n : 1;

    if (n === 1) {
      return arr[len - 1];
    }

    const res: LastReturn = new Array(n);
    while (n--) {
      res[n] = arr[--len];
    }
    return res;
 }

 // If n is undefined, return the last element of the array
 return arr[len - 1];
}
