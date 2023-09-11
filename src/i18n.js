import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
    /* .use(Backend) */
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            ru: {
                translation: {
                    // Sidebar
                    home: "Дома",
                    login: "Вход",
                    logout:"Выход",
                    admin:"Страница администратора",
                    profile:"Профиль",
                    users:"Пользователи",


                    // Login Page
                    name:"Имя пользователя",
                    password:"Пароль",
                    submit:"Подтвердить",
                    registration:"Регистрация",
                    textReg:"Нету аккаунта?",
                    email:"почтовый адрес",
                    textLog:"Есть аккаунт?",
                    signin:"Войти"                    


                }
            },
            en: {
                translation: {
                    home: "Home",
                    login: "Login",
                    logout:"Logout",
                    admin:"Admin",
                    profile:"Profile",
                    users:"Users",


                    // Login and Registration pages
                    name:"Name",
                    password:"Password",
                    submit:"Submit",
                    registration:"Registration",
                    textReg:"Don't have an account yet?",
                    email:"e-mail",
                    textLog:"Already have an account?",
                    signin:"Sign In"
                }
            }

        },
        lng: "ru", // change here
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
