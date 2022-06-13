import styles from "./Chat.module.scss";

export const getChatTemplate = (id: string) => `
    <div data-key=${id} class="chat ${styles.chat} {{classes}}">
        {{{ Avatar src=src classes=avatarClasses imageClasses=imageClasses}}}
        <div class="${styles["chat__content"]}">
            <div>
                <h2 class="chat__title ${styles["chat__title"]}">{{title}}</h2>
                <p class="${styles["chat__text"]}">{{lastMessageContent}}</p>
            </div>
            <div class="chat__badges">
                <time class="${styles["chat__time"]}">{{time}}</time>
                {{#if count}}<span class="${styles["chat__count"]}">{{count}}</span>{{/if}}
            </div>
        </div>
    </div>
`;
