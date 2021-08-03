interface IRange {
    label: string;
    range: () => {
        startDate: Date;
        endDate: Date;
    };
}
export declare function createStaticRanges(ranges: Array<IRange>): Array<any>;
export interface IDefaultDateRanges {
    label: string;
    range: {
        startDate: Date;
        endDate: Date;
    };
}
export declare const defaultDateRanges: IDefaultDateRanges[];
export declare const defaultStaticRanges: () => any[];
export {};
