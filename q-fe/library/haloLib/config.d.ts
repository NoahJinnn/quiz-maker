import { IComponent, TImageProps } from "./global.types";
declare const LIB_CONF: {
    /**
     * Turn on debug of library
     */
    DEBUG: boolean;
    CACHE: boolean;
    /**
     * Tracking user interract event ?
     */
    EVENT: boolean;
    LOG_COLOR: {
        TAG_COLOR: {
            info: string;
            bug: string;
            warn: string;
            doin: string;
        };
        TARGET_COLOR: string;
        FUNCT_COLOR: string;
        MESS_COLOR: string;
    };
    /**
     * UI Colors
     */
    COLORS: {
        PRIME: string;
        GREEN: string;
        GRAY: string;
        INDIGO: string;
        CYAN: string;
        YELLOW: string;
        RED: string;
        ORANGE: string;
        TEAL: string;
        PURPLE: string;
        BLUE: string;
        BLACK: string;
        WHITE: string;
    };
    /**
     * UI Sizes
     */
    SIZES: {
        /**
         * Seed size
         */
        SEED: {
            large: number;
            medium: number;
            small: number;
            xsmall: number;
        };
    };
    HALOCOM: {
        SIGNATURE: string;
    };
    COMP: {
        /**
         * Image component
         */
        Image: null;
    };
};
declare class HalocomUI {
    /**
     * Init event for library
     */
    constructor();
    /**
     * Config common lib
     */
    lib: {
        log: {
            setDebug(status: boolean): {
                setDebug(status: boolean): any;
                setTagsColor(colors: typeof LIB_CONF.LOG_COLOR.TAG_COLOR): any;
                setTargetColor(color: string): any;
                setFuctColor(color: string): any;
                setMessColor(color: string): any;
                getCurrent(): {
                    TAG_COLOR: {
                        info: string;
                        bug: string;
                        warn: string;
                        doin: string;
                    };
                    TARGET_COLOR: string;
                    FUNCT_COLOR: string;
                    MESS_COLOR: string;
                };
            };
            setTagsColor(colors: typeof LIB_CONF.LOG_COLOR.TAG_COLOR): {
                setDebug(status: boolean): any;
                setTagsColor(colors: typeof LIB_CONF.LOG_COLOR.TAG_COLOR): any;
                setTargetColor(color: string): any;
                setFuctColor(color: string): any;
                setMessColor(color: string): any;
                getCurrent(): {
                    TAG_COLOR: {
                        info: string;
                        bug: string;
                        warn: string;
                        doin: string;
                    };
                    TARGET_COLOR: string;
                    FUNCT_COLOR: string;
                    MESS_COLOR: string;
                };
            };
            setTargetColor(color: string): {
                setDebug(status: boolean): any;
                setTagsColor(colors: typeof LIB_CONF.LOG_COLOR.TAG_COLOR): any;
                setTargetColor(color: string): any;
                setFuctColor(color: string): any;
                setMessColor(color: string): any;
                getCurrent(): {
                    TAG_COLOR: {
                        info: string;
                        bug: string;
                        warn: string;
                        doin: string;
                    };
                    TARGET_COLOR: string;
                    FUNCT_COLOR: string;
                    MESS_COLOR: string;
                };
            };
            setFuctColor(color: string): {
                setDebug(status: boolean): any;
                setTagsColor(colors: typeof LIB_CONF.LOG_COLOR.TAG_COLOR): any;
                setTargetColor(color: string): any;
                setFuctColor(color: string): any;
                setMessColor(color: string): any;
                getCurrent(): {
                    TAG_COLOR: {
                        info: string;
                        bug: string;
                        warn: string;
                        doin: string;
                    };
                    TARGET_COLOR: string;
                    FUNCT_COLOR: string;
                    MESS_COLOR: string;
                };
            };
            setMessColor(color: string): {
                setDebug(status: boolean): any;
                setTagsColor(colors: typeof LIB_CONF.LOG_COLOR.TAG_COLOR): any;
                setTargetColor(color: string): any;
                setFuctColor(color: string): any;
                setMessColor(color: string): any;
                getCurrent(): {
                    TAG_COLOR: {
                        info: string;
                        bug: string;
                        warn: string;
                        doin: string;
                    };
                    TARGET_COLOR: string;
                    FUNCT_COLOR: string;
                    MESS_COLOR: string;
                };
            };
            getCurrent(): {
                TAG_COLOR: {
                    info: string;
                    bug: string;
                    warn: string;
                    doin: string;
                };
                TARGET_COLOR: string;
                FUNCT_COLOR: string;
                MESS_COLOR: string;
            };
        };
        cache: {
            setActive(status: boolean): {
                setActive(status: boolean): any;
                getActive(): boolean;
            };
            getActive(): boolean;
        };
        setSignature(sig: string): any;
        getSignature(): string;
        comp: {
            setImage(tag: IComponent<TImageProps>): {
                setImage(tag: IComponent<TImageProps>): any;
            };
        };
    };
    /**
     * Config of ui colors
     */
    colors: {
        set(pack: typeof LIB_CONF.COLORS): any;
        get(): {
            PRIME: string;
            GREEN: string;
            GRAY: string;
            INDIGO: string;
            CYAN: string;
            YELLOW: string;
            RED: string;
            ORANGE: string;
            TEAL: string;
            PURPLE: string;
            BLUE: string;
            BLACK: string;
            WHITE: string;
        };
    };
    /**
     * Config of ui sizes
     */
    sizes: {
        setSeed(sizes: typeof LIB_CONF.SIZES.SEED): any;
        getSeed(): {
            large: number;
            medium: number;
            small: number;
            xsmall: number;
        };
    };
    /**
     * Tracking user interract
     */
    tracker: {
        setStatus(status: boolean): any;
        getStatus(): boolean;
    };
}
/**
 * Get config class for libUI
 */
declare const getLibConfig: () => HalocomUI;
export { getLibConfig, LIB_CONF };
