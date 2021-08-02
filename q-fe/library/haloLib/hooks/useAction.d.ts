/**
 * Make an action that limted calling after threshold time
 */
declare const useActionThreshold: (threshold?: number, once?: boolean) => {
    onAction: (action: () => Promise<void> | void) => Promise<void>;
    refresh: () => void;
};
/**
 * Make an action that have been debounce each given time
 * @param debounceTime Delay after call
 * @param clearWhenCallAgain Renew current timeout if true
 */
declare const useActionDebounce: (debounceTime?: number, clearWhenCallAgain?: boolean) => (_action: () => Promise<void> | void) => void;
export { useActionDebounce, useActionThreshold };
