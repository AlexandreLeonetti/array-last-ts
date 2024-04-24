// Import the required module with TypeScript syntax
import isNumber from 'is-number';
// Rewrite the last function with TypeScript syntax
export function last(arr, n) {
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
        const res = new Array(n);
        while (n--) {
            res[n] = arr[--len];
        }
        return res;
    }
    // If n is undefined, return the last element of the array
    return arr[len - 1];
}
