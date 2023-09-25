import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
    .use(initReactI18next) 
    .init({
        resources: {
            ru: {
                translation: {
                    // Sidebar
                    home: "Рекомендации",
                    login: "Вход",
                    logout:"Выход",
                    admin:"Администратор",
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
                    Score:'Оценка пользователей',
                    TagList:'ЛИСТ ТЕГОВ',
                    SelectAll:'Выбрать все',
                    Display:'Отобразить',
                    Assess:'Оценить рекомендацию',
                    // Profile page
                    UserName:'Имя пользователя:',
                    Tag:'Теги:',
                    ImgDowloadHeader:'Загрузите или выберите изображение из DropBox',
                    AddRecommend:'Добавить рекомендацию',
                    AuthorScore:'Оценка автора: ',
                    Book:'Книга',
                    Film:'Фильм',
                    Music:'Музыка',
                    Option:'Выберите категорию',
                    Step1:'Шаг 1',
                    Step2:'Шаг 2',
                    Upload:'Загрузить',
                    dragDrop:'Вы можете скинуть сюда свое изображение',
                    //User Page
                    Users:'ПОЛЬЗОВАТЕЛИ',
                    //COMMON
                    viewComment:'Показать комментарии',
                    Comments:'Комментарии',
                    AddComment:'Добавить комментарий',
                    Search:'Поиск...',
                    Send:'Отправить',
                    UpdateReview:'Обновить рекомендацию',
                    inputTitle:'Напишите заголовок',
                    inputName:'Напишите название',
                    inputGroup:'Напишите вид/жанр',
                    inputCategory:'Выберите категорию: Film/Book/Music',
                    inputTag:'Напишите тег',
                    inputText:'Напишите Вашу рекомендацию',
                    inputComment:'Напишите новый комментарий',
                    RecommendRange:'Количество рекомендаций',
                    logIn:'Зайти с помощью',
                }
            },
            en: {
                translation: {
                    home: "Reviews",
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
                    //Admin table
                    id:'id',
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
                    Score:'Users score',
                    TagList:'TAG LIST',
                    SelectAll:'Select All',
                    Display:'Display',
                    RecommendRange:'Recommendation number',
                    // Profile page
                    UserName:'User name:',
                    Tag:'Tag:',        
                    ImgDowloadHeader:'Upload or choose image from DropBox', 
                    AddRecommend:'Add Recommendation', 
                    AuthorScore:'Author score: ',
                    Book:'Book',
                    Film:'Film',
                    Music:'Music',
                    Option:'Choose the category', 
                    Step1:'Step 1', 
                    Step2:'Step 2',    
                    Upload:'Upload',
                    dragDrop:'You can drop your image here',
                    Assess:'Assess review ',     
                    //User Page
                    Users:'USERS',                    
                    //COMMON
                    viewComment:'View comments',
                    Comments:'Comments',
                    AddComment:'Add comment',
                    Search:'Search...',
                    Send:'Send',
                    UpdateReview:'Update Review',
                    inputTitle:'Type title',
                    inputName:'Type name',
                    inputGroup:'Type genre',
                    inputCategory:'Type category: Film/Book/Music',
                    inputTag:'Type tag',
                    inputText:'Type your recommendation',
                    inputComment:'Type new comment',
                    logIn:'Log in with',
                }
            }
        },
        lng: "ru", 
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });
