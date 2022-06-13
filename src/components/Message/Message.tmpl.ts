import styles from "./Message.module.scss";

export const messageTemplate = `
    <article class="${styles.message} {{#if isMy}}${styles["message_type_my"]}{{/if}} {{#if image}}${styles["message_type_image"]}{{/if}}">
        {{#if text}}<p>{{text}}</p>{{/if}}
        {{#if image}}<img class="${styles["message__image"]}" src="{{image}}" alt="Сообщение"/>{{/if}}
        {{#if isMy}}<img class="${styles["message__status"]}" src="../../images/status-icon-read.svg" alt="Сообщение прочитано"/>{{/if}}
        <time class="${styles["message__time"]}">{{time}}</time>    
    </acticle>
`;
