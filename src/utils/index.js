/**
 * Remove duplicates from an Array
 * @param {Array} arr
 * @returns {Array}
 */
export const removeDuplicates = (arr) => [...new Set(arr)];