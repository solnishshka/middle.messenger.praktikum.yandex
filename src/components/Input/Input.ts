import { Block } from "../../core";
import { inputTemplate } from "./Input.tmpl";
import { InputProps } from "./Input.types";

export default class Input extends Block{
    constructor(props: InputProps) {
        super(props);
    }

    render() {
        return inputTemplate;
    }
}