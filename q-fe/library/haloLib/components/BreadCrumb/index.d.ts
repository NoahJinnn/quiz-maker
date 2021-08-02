import './index.scss';
import { IComponent } from "../../global.types";
export interface IBreadCrumbProps {
    path: object[];
    customClassName?: string;
    colorText?: string;
    onClick: (pathname: string) => void;
    dark?: boolean;
}
declare const Memo: IComponent<IBreadCrumbProps>;
export { Memo as BreadCrumb };
