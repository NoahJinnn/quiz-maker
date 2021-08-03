/**
 * Join an item into array like
 *
 * ```js
 * joinIntoArray([1,2,3], "x") => [1,"x",2,"x",3]
 * ```
 * @param arr Array need to be joined
 * @param value Item will be join into array
 */
declare const joinIntoArray: <T = {}, B = {}>(arr: T[], value: B) => (T | B)[];
/**
 * Delay current function by given time
 * @param {number} ms Time delayed
 */
declare const letDelay: (ms: number) => Promise<boolean>;
/**
 * Check if item is array or not, if not create an array with itself
 * @param {object | string} item Item need to return array
 */
declare const whetherArray: (item: object | string | null) => (object | string | null)[];
export { joinIntoArray, letDelay, whetherArray };
