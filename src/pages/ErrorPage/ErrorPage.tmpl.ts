import * as styles from './ErrorPage.module.scss';

export const errorPageTemplate = `
    <main class="container ${styles.container}">
        <h1 class="${styles.title}">
            {{errorStatus}}
        </h1>
        <p class="text ${styles.text}">
            {{errorText}}
        </p>
        {{{Link href=mainPage text=buttonText classes="link ${styles.link}" }}}
    </main>
`;
