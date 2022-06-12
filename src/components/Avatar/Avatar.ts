import { Block } from "../../core";
import { avatarTemplate } from "./Avatar.tmpl";
import { AvatarProps } from "./Avatar.types";
import './Avatar.scss';

export default class Avatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return avatarTemplate;
  }
}
