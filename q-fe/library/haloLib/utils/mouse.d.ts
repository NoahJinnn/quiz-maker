/**
 * Mouse position tracking class
 */
declare class MousePosition {
    x: number;
    y: number;
    constructor();
    get(): {
        x: number;
        y: number;
    };
    set(x: number, y: number): void;
    onMouseMove(e: MouseEvent): void;
}
/**
 * Current MousePosition instance
 */
declare const MousePos: MousePosition;
declare const getMousePosition: () => {
    x: number;
    y: number;
};
export { getMousePosition, MousePos };
