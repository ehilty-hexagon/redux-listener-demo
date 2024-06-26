/**
 * Binary Search
 * @param array Sorted input array
 * @param value Value to search for
 * @param range Range of array to search (if not specified, searches entire range)
 * @returns Index of value if found, otherwise null
 */
export function binarySearch(array: number[], value: number, range: [number, number] | null = null): number | null {
    const [low, high] = range ?? [0, array.length - 1];
    if (high < low) return null;
    const mid = low + Math.floor((high - low) / 2);
    if (array[mid] === value) {
        return mid;
    }
    if (array[mid] > value) {
        return binarySearch(array, value, [low, mid - 1]);
    }
    return binarySearch(array, value, [mid + 1, high]);
}