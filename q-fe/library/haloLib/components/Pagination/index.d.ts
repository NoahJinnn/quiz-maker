import './index.scss';
import React from 'react';
export interface IPaginationProps {
    itemPerPage?: number;
    totalItems: number;
    changePage?: (p: number) => void;
    currentPage?: number;
    mode?: 'circle' | 'button' | 'buttonAndCircle' | undefined;
    shape?: 'circle' | 'square' | 'rectangle';
    nextTitle?: string;
    prevTitle?: string;
    countPageTitle?: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    isShowCountPage?: boolean;
}
export interface IPaginationTotalPageProps {
    totalPage?: number;
}
import { IComponent } from "../../global.types";
declare const Memo: IComponent<IPaginationProps>;
export { Memo as Pagination };
