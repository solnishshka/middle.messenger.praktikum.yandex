import styles from "./MessageCompose.module.scss";

export const messageComposeActiveChatTemplate = `
    <div class="${styles["compose__wrapper_active"]}">
        <div class="${styles["compose__header"]}">
            <div class="${styles["compose__user-info"]}">
                {{{ Avatar src=avatarSrc classes="${styles.avatar}" imageClasses=avatarImgClasses }}}
                <p class="${styles["compose__user-name"]}">{{userName}}</p>
            </div>
            {{{ Button img="../../images/compose-menu.svg" classes="${styles["compose__menu-button"]}"}}}
        </div>
        <div class="${styles["compose__main"]}">
            {{#each messages}}
                {{{ 
                    Message 
                        text=text
                        image=image
                        isMy=isMy
                        status=status
                        time=time
                }}}
            {{/each}}
        </div>
        <div class="${styles["compose__footer"]}">
            <form class="${styles["compose__form"]}" >
                {{{ Input 
                    containerClasses="${styles["compose__input"]}" 
                    inputClasses="${styles["compose__input-field"]}" 
                    placeholder="Сообщение"
                    buttonIcon="../../images/attach-button.svg"
                    buttonClasses="${styles["compose__input-attach"]}"
                    name="message"
                }}}
                {{{ Button 
                    img="../../images/button.svg" 
                    classes="${styles["compose__send-button"]}"
                }}}
            </form>
        </div>
    </div>
`;

export const messageComposeEmptyChatTemplate = `
     <p class="${styles["compose__empty-text"]}">Выберите чат чтобы отправить сообщение</p>
`;
