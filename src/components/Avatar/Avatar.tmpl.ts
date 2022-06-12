export const avatarTemplate = `
    <div class="avatar__container {{classes}}">
        <img 
            src="{{#if src}}{{src}}{{else}}../../images/default-avatar.png{{/if}}" 
            alt="Аватар пользователя" 
            class="avatar"
        />
        {{#if uploadIcon}}{{{ Button classes=uploadClasses img=uploadIcon}}}{{/if}}
    </div>
`