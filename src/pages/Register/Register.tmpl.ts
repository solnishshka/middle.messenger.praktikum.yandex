export const registerPageTemplate = `
    <main class="container container_position_center">
        {{{ 
            Form 
                title="Регистрация"
                buttonText="Создать аккаунт"
                linkText="Уже есть аккаунт? Войти"
                linkHref="/login"
                inputs=inputs
                onSubmit=onSubmit
        }}}
    </main>
`;
