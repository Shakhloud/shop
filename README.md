# Использованный стек технологий и библиотек:

### - HTML, CSS, REACT, TypeScript

### - MobX, Formik, AntD, ReactRouterDom v.6

### - Figma, Photoshop

# Описание проекта:

### 1. Сервер: в проекте используется самописный эмулятор сервера, написанный в файле формата tsx (src/store/Server.tsx)

### 2. Реализована авторизация (только вход), данные для входа:

#### Login: admin, Password: admin

#### Login: user1, Password: user1

#### Login: user2, Password: user2

### 3. При авторизации за admin, реализована панель администратора, через которую возможно выполнять CRUD операций над продуктами каталога

### 4. Реализована пользовательская корзина с возможностью добавления, удаления и изменения товара, а также оформлением итогового заказа

### 5. Реализован каталог с пагинацией и фильтрацией товаров

### 6. Любая карточка товара может быть добавлена в корзина, а также пользователь может ознакмиться с товаром подробнее перейдя по кнопке (Подробнее)

### 7. В приложении реализованы 2 вида отзывов:

#### Одни относятся ко всему магазину

#### Другие относятся к конкретному товару с возможностью добавления своего отзыва

### 8. Возможность авторизации и добавления нового отзыва к товару реализована с помощью модального окна

### 9. Также в проекте реализованы слайдеры без вспомогательных библиотек

### 10. В проекте используется валидация для форм

# За основу был взят бесплатный макет из Figma:

#### https://www.figma.com/file/IQ4BnIikAm9HTDeg0yG0Oe/Branding-WordShop?node-id=0%3A1&t=5PQ6GeQHp5rtSblE-1

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Author by: Shakhmovedev Marat Andreevich