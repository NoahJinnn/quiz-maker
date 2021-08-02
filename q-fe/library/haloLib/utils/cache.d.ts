import { UseStore } from 'idb-keyval';
import { Logger } from './log';
declare const CACHE_TIME_TEMPLATE: {
    '1min': number;
    '2min': number;
    '5min': number;
    '1hr': number;
    '12hr': number;
    '1day': number;
    '2day': number;
    '7day': number;
};
/**
 * Caching using indexDB for better data cache on client
 */
declare class Cache {
    /**
     * Get template cache time
     */
    static TIME(): typeof CACHE_TIME_TEMPLATE;
    debug: Logger;
    store: UseStore;
    storeName: string;
    loadStatus: 'init' | 'denied' | 'loaded';
    constructor(storeName: string);
    private createStore;
    /**
     * Remove all cache
     */
    clear(): void;
    /**
     * Clean current cache
     */
    clean(opts?: {
        tag?: string;
        tags?: string[];
    }): Promise<void>;
    /**
     * Clean cache by a tag
     */
    clearByTag(tag: string): Promise<void>;
    /**
     * Clean cache by multi tags
     */
    clearByTags(tags: string[]): Promise<void>;
    /**
     * Get an cache
     */
    set<T = {}>({ key, data, tl, tags, }: {
        key: string;
        data: T;
        tl?: keyof typeof CACHE_TIME_TEMPLATE | number;
        tags?: string[];
    }): Promise<void>;
    /**
     * Set an cache
     */
    get<T = {}>({ key, tl, tags, generator, }: {
        key: string;
        tl?: keyof typeof CACHE_TIME_TEMPLATE | number;
        tags?: string[];
        generator?: () => Promise<T>;
    }): Promise<T | null>;
    setMany<T = {}>(data: {
        key: string;
        tl?: keyof typeof CACHE_TIME_TEMPLATE | number;
        tags?: string[];
        data: T;
    }[]): Promise<void>;
    getMany(keys: string[]): Promise<any>;
}
export { Cache };
