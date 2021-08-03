export interface IEventKey {
    BUTTON: string;
    INPUT: string;
    TOOLTIP: string;
    TABBAR: string;
    SLIDER_VIEW: 'swipe' | 'press';
    AVATAR: string;
}
export declare const UITracker: {
    addLibEventListener: <K extends keyof IEventKey>(eventName: K, listenner: (value: CustomEvent<IEventKey[K]>) => void) => void;
    dispatchLibEvent: <K_1 extends keyof IEventKey>(key: K_1, data: IEventKey[K_1]) => void;
    removeLibEventListener: <K_2 extends keyof IEventKey>(eventName: K_2, listenner: (value: CustomEvent<IEventKey[K_2]>) => void) => void;
};
