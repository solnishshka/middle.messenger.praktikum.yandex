import * as styles from "./ChatList.module.scss";

import settingsIcon from "../../images/settings.svg";
import searchIcon from "../../images/search-icon.svg";
import avatar from '../../images/test-avatar-first.jpeg';

export const chatListTemplate = `
<main class="container ${styles.container}">
    <div class="${styles["left-column"]}">
        <div class="${styles.search}">
            {{{Link 
                img="${settingsIcon}" 
                classes="link ${styles.link}" 
                href="/profile"
            }}}
            {{{ControlledInput 
                iconClassName="${styles.input__icon}"
                containerClassName="${styles.search__label}" 
                inputClassName="${styles.search__input} ${styles.input__field}" 
                src="${searchIcon}"
                placeholder="Поиск"
            }}}
        </div>
        <div class="${styles.chats}">
            {{#each chats}}
                {{{Chat
                    onClick=onClick
                    title=title 
                    avatarClassName="avatar__container_type_chat ${styles.avatar__container}"
                    lastMessageContent=last_message.content
                    count=unread_count
                    time=last_message.time
                    src="${avatar}"
                }}}
            {{/each}}
        </div>
    </div>
    <div 
        class="${styles["right-column"]} 
        {{#if hasActiveChat}}${styles["right-column_active"]}{{/if}}"
    >
        {{{MessageCompose 
            hasActiveChat=hasActiveChat 
            userName=userName 
            avatarSrc=avatarSrc
        }}}
    </div>
</main>
`;
