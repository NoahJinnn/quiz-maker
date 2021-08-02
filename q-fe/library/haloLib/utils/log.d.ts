/**
 * Support tags
 */
declare const tagName: {
    info: string;
    bug: string;
    warn: string;
    doin: string;
};
/**
 * Simple log class for better log filter
 */
declare class Logger {
    name: string;
    constructor(name: string);
    /**
     * Print and info with custom color
     */
    print(msg: string, opts?: {
        background: string;
        color: string;
        bold: boolean;
    }): void;
    log<T = {}>(tag: keyof typeof tagName, fnName: string, fnMessage: string, fnData?: T): void;
    /**
     * Info log, use for logging info, data and api
     */
    i<T = {}>(fnName: string, fnMessage: string, fnData?: T): void;
    /**
     * Warning log, use for error that not affect user
     */
    w<T = {}>(fnName: string, fnMessage: string, fnData?: T): void;
    /**
     * Error log, use for critical log => will be tracked into server
     */
    b<T = {}>(fnName: string, fnMessage: string, fnData?: T): void;
    /**
     * Call when doing something before info
     */
    d<T = {}>(fnName: string, fnMessage: string, fnData?: T): void;
}
/**
 * For internal library logger
 */
export declare const makeLibLogger: (name: string) => Logger;
/**
 * Global lib logger
 */
export declare const libDebug: Logger;
export { Logger };
