export type InputProps = {
    labelClasses?: string;
    inputClasses?: string;
    iconClasses?: string;
    events?: {
        blur?: () => void;
        input?: () => void;
        focus?: () => void;
    };
}