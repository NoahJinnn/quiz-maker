import { TComponentColorAddon } from "../global.types";
/**
 * Get color by type
 * */
declare const getColor: (name: TComponentColorAddon, opts?: {
    alpha?: number | undefined;
    darken?: number | undefined;
    brighten?: number | undefined;
} | undefined) => string;
/**
 * Get color class by type
 * */
declare const getClassColor: (name: TComponentColorAddon, prefix?: string) => string;
export { getClassColor, getColor };
