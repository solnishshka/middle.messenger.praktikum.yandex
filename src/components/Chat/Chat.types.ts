export interface ChatProps {
    src: string;
    events?: {
        click?: () => void;
    }
}