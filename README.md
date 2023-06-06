Требования к функциональности.<br>
Сайт состоит из шапки, которая не ререндерится между переходами по страницам ✔ <br>
При клике на название сайта (картинка/лого) должен произойти переход на корневой рут (/) ✔<br>
Кнопка Вход - переходит на страницу входа (/signin) ✔<br>
Кнопка Регистрация - переходит на страницу регистрации (/signup) ✔<br>
После регистрации или входа по учетной записи, кнопки Вход и Регистрация должны исчезнуть, а вместо них отобразиться имя учетной записи и кнопки ✔<br>
Избранное - переход на страницу /favorites. Там отображаются карточки с единицами информации, которые ранее были добавлены в избранное ✔<br>
урл /favorites доступен только авторизованному пользователю. Неавторизованного пользователя должно редиректить на /signin ✔<br>
История - переход на страницу /history где будут отображаться все предыдущие запросы к апи, когда происходил поиск ✔<br>
На этой странице можно увидеть, что искалось ранее и можно было в один клик открыть состояние с выставленными фильтрами и текстом поиска ✔<br>
урл /history доступен только авторизованному пользователю. Неавторизованного пользователя должно редиректить на /signin ✔<br>
Выход, по нажатию на которую должен произойти выход из учетной записи ✔<br>
тело сайта, куда будет рендериться содержимое при переходе по урлам ✔<br>
На главной странице (/) располагается вступительный текст с описанием сайта и панель поиска ✔<br>
При вводе в инпут можно показывать какие-то саджесты ✖<br>
Когда пользователь заполнил поле поиска и нажал Найти, можно перебросить пользователя на урл /search?тут_query_параметры, чтобы удобно работать с поиском и перезагрузками этой страницы ✔<br>
На странице /search будут отображаться Панель поиска и под панелью отображаем карточки единиц информации ✔<br>
При нажатии на кнопку подробнее в карточке, происходит переход на страницу с полным описанием единицы информации ✔<br>
Если приложение перезагрузить находясь на этой странице, то после перезагрузки приложение также должно остаться на этой странице с корректной отображаемой информацией ✔<br>
Регистрацию можно сделать через LocalStorage ✔<br>
На форме входа должна быть валидация ✔<br>
Если логина не существует, должны показать ошибку ✔<br>
Если логин есть, но пароль написан неправильно, то тоже показываем соответствующую ошибку ✖<br>
Также валидируем форму на обязательность заполненных полей Логина и Пароля ✔<br>
На форме регистрации должна быть валидация на обязательность заполнения полей Логина и Пароля ✔<br>
<br>
<br>
React.<br>
Пишем функциональные компоненты c хуками в приоритете над классовыми ✔<br>
Есть разделение на умные и глупые компоненты ✔<br>
Есть рендеринг списков <br>
Реализована хотя бы одна форма<br>
Есть применение Контекст API ✔<br>
Есть применение предохранителя<br>
Есть хотя бы один кастомный хук ✔<br>
Хотя бы несколько компонентов используют PropTypes<br>
Поиск не должен триггерить много запросов к серверу ✔<br>
Есть применение lazy + Suspense ✔<br>
<br>
<br>
Redux.<br>
Используем Modern Redux with Redux Toolkit ✔<br>
Используем слайсы ✔<br>
Есть хотя бы одна кастомная мидлвара ✔<br>
Используется RTK Query ✔<br>
Используется Transforming Responses <br>
<br>
<br>
2 уровень (необязательный).<br>
Проведена оптимизация приложения <br>
Используются мемоизированные селекторы (createSelector)<br>
Используется нормализованная структура стейта (createEntityAdapter) <br>
Использование TypeScript ✔<br>
Подключен storybook и созданы несколько сторисов ✖<br>
Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом ✖<br>
