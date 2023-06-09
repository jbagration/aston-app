<b>Требования к функциональности.</b><br>
Сайт состоит из шапки, которая не ререндерится между переходами по страницам ✔ <br>
https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Header.tsx<br><br>
При клике на название сайта (картинка/лого) должен произойти переход на корневой рут (/) ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Header.tsx<br><br>
Кнопка Вход - переходит на страницу входа (/signin) ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/SignIn.tsx<br><br>
Кнопка Регистрация - переходит на страницу регистрации (/signup) ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/SignUp.tsx<br><br>
После регистрации или входа по учетной записи, кнопки Вход и Регистрация должны исчезнуть, а вместо них отобразиться имя учетной записи и кнопки ✔<br>
Избранное - переход на страницу /favorites. Там отображаются карточки с единицами информации, которые ранее были добавлены в избранное ✔<br>
урл /favorites доступен только авторизованному пользователю. Неавторизованного пользователя должно редиректить на /signin ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/Favourites.tsx<br><br>
История - переход на страницу /history где будут отображаться все предыдущие запросы к апи, когда происходил поиск ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/History.tsx<br><br>
На этой странице можно увидеть, что искалось ранее и можно было в один клик открыть состояние с выставленными фильтрами и текстом поиска ✔<br>
урл /history доступен только авторизованному пользователю. Неавторизованного пользователя должно редиректить на /signin ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/History.tsx<br><br>
Выход, по нажатию на которую должен произойти выход из учетной записи ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Header.tsx<br><br>
тело сайта, куда будет рендериться содержимое при переходе по урлам ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/App.tsx<br><br>
На главной странице (/) располагается вступительный текст с описанием сайта и панель поиска ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/HomePage.tsx<br><br>
Когда пользователь заполнил поле поиска и нажал Найти, можно перебросить пользователя на урл /search?тут_query_параметры, чтобы удобно работать с поиском и перезагрузками этой страницы ✔<br>
На странице /search будут отображаться Панель поиска и под панелью отображаем карточки единиц информации ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/pages/Search.tsx<br><br>
При нажатии на кнопку подробнее в карточке, происходит переход на страницу с полным описанием единицы информации ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/components/BookDetails.tsx<br><br>
Если приложение перезагрузить находясь на этой странице, то после перезагрузки приложение также должно остаться на этой странице с корректной отображаемой информацией ✔<br>
Регистрацию можно сделать через LocalStorage ✔<br>
На форме входа должна быть валидация ✔<br>
Если логина не существует, должны показать ошибку ✔<br>
Также валидируем форму на обязательность заполненных полей Логина и Пароля ✔<br>
На форме регистрации должна быть валидация на обязательность заполнения полей Логина и Пароля ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/components/AuthForm.tsx<br><br>
При вводе в инпут можно показывать какие-то саджесты ✖<br>
Если логин есть, но пароль написан неправильно, то тоже показываем соответствующую ошибку ✖<br><br>
<b>React.</b><br>
Пишем функциональные компоненты c хуками в приоритете над классовыми ✔<br>
(только один классовый - https://github.com/jbagration/aston-app/blob/main/src/components/ErrorBoundary.tsx)<br><br>
Есть разделение на умные и глупые компоненты ✔<br>
Умный:
https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Loading.tsx
Глупый:
https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Wrapper.tsx
https://github.com/jbagration/aston-app/blob/main/src/pages/NotFound.tsx
<br><br>
Есть рендеринг списков <br>
https://github.com/jbagration/aston-app/blob/redux/src/components/BookList.tsx<br><br>
Реализована хотя бы одна форма<br>
https://github.com/jbagration/aston-app/blob/main/src/components/AuthForm.tsx<br>
https://github.com/jbagration/aston-app/blob/main/src/components/SearchForm.tsx<br><br>
Есть применение Контекст API ✔<br>
https://github.com/jbagration/aston-app/blob/redux/src/store/theme-context.tsx<br><br>
Есть применение предохранителя<br>
https://github.com/jbagration/aston-app/blob/redux/src/components/ErrorBoundary.tsx<br><br>
Есть хотя бы один кастомный хук ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/hooks/use-pagination.ts<br>
https://github.com/jbagration/aston-app/blob/main/src/hooks/use-validation.ts<br><br>
Хотя бы несколько компонентов используют PropTypes<br>
https://github.com/jbagration/aston-app/blob/main/src/components/AuthForm.tsx<br>
https://github.com/jbagration/aston-app/blob/main/src/components/BookList.tsx<br><br>
Поиск не должен триггерить много запросов к серверу ✔<br><br>
Есть применение lazy + Suspense ✔<br>
https://github.com/jbagration/aston-app/blob/redux/src/pages/Favourites.tsx<br>
https://github.com/jbagration/aston-app/blob/redux/src/pages/Search.tsx<br><br>
<b>Redux.</b><br>
Используем Modern Redux with Redux Toolkit ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/store/history-slice.ts<br>
https://github.com/jbagration/aston-app/blob/main/src/store/index.ts<br><br>
Используем слайсы ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/store/favourites-slice.ts<br>
https://github.com/jbagration/aston-app/blob/main/src/store/user-slice.ts<br><br>
Есть хотя бы одна кастомная мидлвара ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/store/index.ts<br><br>
Используется RTK Query ✔<br>
https://github.com/jbagration/aston-app/blob/main/src/store/api-slice.ts<br><br>
Используется Transforming Responses <br>
https://github.com/jbagration/aston-app/blob/main/src/store/api-slice.ts<br><br>
<b>2 уровень (необязательный).</b><br>
Проведена оптимизация приложения ✔<br>
Использование TypeScript ✔<br><br>
Используются мемоизированные селекторы (createSelector) ✔<br>
https://github.com/jbagration/aston-app/blob/redux/src/pages/Favourites.tsx<br>
https://github.com/jbagration/aston-app/blob/redux/src/pages/History.tsx<br><br>
Используется нормализованная структура стейта (createEntityAdapter) ✖<br>
Подключен storybook и созданы несколько сторисов ✖<br>
Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом ✖
