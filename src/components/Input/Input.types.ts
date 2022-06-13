export type InputProps = {
    labelClasses?: string;
    inputClasses?: string;
    iconClasses?: string;
    containerClasses?: string;
    buttonClasses?: string;
    events?: {
        blur?: () => void;
        input?: () => void;
        focus?: () => void;
    };
}