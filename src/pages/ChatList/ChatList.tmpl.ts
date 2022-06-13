import styles from "./ChatList.module.scss";

export const chatListTemplate = `
{{!< base}}

<main class="container ${styles.container}">
    <div class="${styles["left-column"]}">
        <div class="${styles.search}">
            {{{ Link img="../../images/settings.svg" classes="link ${styles.link}" href="/profile"}}}
            {{{
                Input 
                iconClasses="${styles["input__icon"]}"
                containerClasses="${styles["search__label"]}" 
                inputClasses="${styles["search__input"]} ${styles["input__field"]}" 
                src="../../images/search-icon.svg"
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
                    src="../../images/test-avatar-first.jpeg"
                }}}
            {{/each}}
        </div>
    </div>
    <div class="${styles["right-column"]} {{#if hasActiveChat}}${styles["right-column_active"]}{{/if}}">
        {{{ MessageCompose hasActiveChat=hasActiveChat userName="Театралы" }}}
    </div>
</main>
`;
