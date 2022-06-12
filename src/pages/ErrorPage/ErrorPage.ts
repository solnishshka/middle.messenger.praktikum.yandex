import { Block } from "../../core";
import { errorPageTemplate } from "./ErrorPage.tmpl";
import { ErrorPageProps } from "./ErrorPage.types";

export default class ErrorPage extends Block {
  constructor(props: ErrorPageProps) {
    super({
      ...props,
      mainPage: "/",
      buttonText: "На главную",
      errorStatus: 500,
      errorText:
        "Произошла ошибка на сервере. Мы уже чиним ее. Попробуйте повторить запрос чуть позже.",
    });
  }

  render() {
    return errorPageTemplate;
  }
}
