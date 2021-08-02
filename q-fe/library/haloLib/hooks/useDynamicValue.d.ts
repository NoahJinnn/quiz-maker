/**
 * Make dynamic value base on client screen status
 */
export declare const useDynamicValue: (breakPoints?: number[], mode?: 'width' | 'height') => <T = {}>(values: [T, T, T]) => T;
