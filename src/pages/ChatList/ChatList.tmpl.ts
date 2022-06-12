import styles from "./ChatList.module.scss";

export const chatListTemplate = `
{{!< base}}

<main class="container ${styles.container}">
    <div class="${styles["left-column"]}">
        <div class="${styles.search}">
            {{{ Link img=settingsIcon classes="link ${styles.link}" href=profilePage}}}
            {{{
                Input 
                iconClasses="${styles["input__icon"]}"
                containerClasses="${styles["search__label"]}" 
                inputClasses="${styles["search__input"]} ${styles["input__field"]}" 
                src=searchIcon
                placeholder="Поиск"
            }}}
        </div>
        <div class="${styles.chats}">
            {{#each chats}}
                {{{ 
                    Chat
                    title=title 
                    avatarClasses="avatar__container_type_chat ${styles["avatar__container"]}"
                    lastMessageContent=last_message.content
                    count=unread_count
                    time=last_message.time
                    src=avatar
                }}}
            {{/each}}
        </div>
    </div>
    <div class="${styles["right-column"]}">
        {{#if hasActiveChat}}
            <div class="${styles["right-column__active-chat"]}">
                <div>Шапка</div>
                <div>Тело</div>
                <div>Футер</div>
            </div>
        {{else}}
            <p class="${styles["right-column__empty-text"]}">{{emptyText}}</p>
        {{/if}}
    </div>
</main>
`;
