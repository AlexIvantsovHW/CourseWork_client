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
                    home: "Рекомендации",
                    login: "Вход",
                    logout:"Выход",
                    admin:"Страница администратора",
                    profile:"Профиль",
                    users:"Пользователи",
                    Dark:'Темная',
                    Light:'Светлая',

                    // Login Page
                    name:"Имя пользователя",
                    password:"Пароль",
                    submit:"Подтвердить",
                    registration:"Регистрация",
                    textReg:"Нету аккаунта?",
                    email:"почтовый адрес",
                    textLog:"Есть аккаунт?",
                    signin:"Войти",
                    
                    // Admin page
                    Admin:'Страница администратора',
                    
                    // Recommendation list
                    RecommendationHeader:'СПИСОК РЕКОМЕНДАЦИЙ',
                    Book:'Книги',
                    Film:'Фильмы',
                    Music:'Музыка',
                    Read:'Читать',
                    RecommendationTitle:'Название рекомендации',
                    RecName:'Название произведения',
                    category:'Категория',
                    Date:'Дата рекомендации',
                    Sort:'Сортировать',
                    Score:'Рейтинг',
                    TagList:'Лист тэгов',
                    SelectAll:'Выбрать все',
                    Display:'Отобразить',

                    //User Page
                    Users:'ПОЛЬЗОВАТЕЛИ',

                    //COMMON
                    viewComment:'Показать комментарии',
                    Comments:'Комментарии',
                    AddComment:'Добавить комментарий',
                    Search:'Поиск...',
                }
            },
            en: {
                translation: {
                    home: "Recommendation list",
                    login: "Login",
                    logout:"Logout",
                    admin:"Admin",
                    profile:"Profile",
                    users:"Users",
                    Dark:'Dark',
                    Light:'Light',

                    // Login and Registration pages
                    name:"Name",
                    password:"Password",
                    submit:"Submit",
                    registration:"Registration",
                    textReg:"Don't have an account yet?",
                    email:"e-mail",
                    textLog:"Already have an account?",
                    signin:"Sign In",

                    // Admin page
                    Admin:'Admin page',

                    // Recommendation list
                    RecommendationHeader:'RECOMMENDATION LIST',
                    Book:'Book',
                    Film:'Film',
                    Music:'Music',
                    Read:'Read',
                    RecommendationTitle:'Recommendation title',
                    RecName:'Name',
                    category:'Category',
                    Date:'Date',
                    Sort:'Sort by',
                    Score:'Score',
                    TagList:'Tag list',
                    SelectAll:'Select All',
                    Display:'Display',

                    //User Page
                    Users:'USERS',                    

                    //COMMON
                    viewComment:'View comments',
                    Comments:'Comments',
                    AddComment:'Add comment',
                    Search:'Search...'
                }
            }

        },
        lng: "ru", // change here
        fallbackLng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });
