/**
 * Use effect hook that only call function after rendered
 * @returns {void} Custom hooks
 */
declare const useDidUpdateEffect: (fn: (() => void) | undefined, deps: any[]) => void;
export default useDidUpdateEffect;
