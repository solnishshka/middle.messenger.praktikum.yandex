import * as styles from "./MessageCompose.module.scss";

import composeMenuIcon from "../../images/compose-menu.svg";

export const messageComposeActiveChatTemplate = `
    <div class="${styles.compose__wrapper_active}">
        <div class="${styles.compose__header}">
            <div class="${styles["compose__user-info"]}">
                {{{Avatar 
                    src=avatarSrc 
                    className="${styles.avatar}" 
                    imageClassName=avatarImgClasses 
                }}}
                <p class="${styles["compose__user-name"]}">{{userName}}</p>
            </div>
            {{{Button 
                img="${composeMenuIcon}" 
                className="${styles["compose__menu-button"]}"
            }}}
        </div>
        <div class="${styles.compose__main}">
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
        <div class="${styles.compose__footer}">
            {{{ ComposeForm }}}
        </div>
    </div>
`;

export const messageComposeEmptyChatTemplate = `
     <p class="${styles["compose__empty-text"]}">
        Выберите чат чтобы отправить сообщение
    </p>
`;
