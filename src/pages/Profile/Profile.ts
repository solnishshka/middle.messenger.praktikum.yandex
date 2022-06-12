import { Block } from "../../core";

import { ProfileProps } from "./Profile.types";

import { profilePageTemplate } from "./Profile.tmpl";

export default class Profile extends Block {
  constructor(props: ProfileProps) {
    super({
      ...props,
      loginPage: "/login",
      mainPage: "/",
      deleteProfile: "/error",
      name: "Анастасия",
      avatarSrc: "../../images/avatar.jpg",
      buttonImg: "../../images/button.svg",
      uploadIcon: "../../images/upload.svg",
    });
  }
  render() {
    return profilePageTemplate;
  }
}
