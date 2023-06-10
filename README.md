<b>Требования к функциональности.</b><br>
<b>React.</b><br>
Пишем функциональные компоненты c хуками в приоритете над классовыми ✔<br>
(только один классовый - [ErrorBoundary](https://github.com/jbagration/aston-app/blob/main/src/components/ErrorBoundary.tsx))<br>
Есть разделение на умные и глупые компоненты ✔<br>
Умный:
[Loading](https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Loading.tsx)<br>
Глупый:
[Wrapper](https://github.com/jbagration/aston-app/blob/main/src/components/Layout/Wrapper.tsx),
[NotFound](https://github.com/jbagration/aston-app/blob/main/src/pages/NotFound.tsx)
<br>
Есть рендеринг списков ✔<br>
[BookList](https://github.com/jbagration/aston-app/blob/redux/src/components/BookList.tsx)<br>
Реализована хотя бы одна форма ✔<br>
[AuthForm](https://github.com/jbagration/aston-app/blob/main/src/components/AuthForm.tsx),
[SearchForm](https://github.com/jbagration/aston-app/blob/main/src/components/SearchForm.tsx)<br>
Есть применение Контекст API ✔<br>
[theme-context](https://github.com/jbagration/aston-app/blob/redux/src/store/theme-context.tsx)<br>
Есть применение предохранителя ✔<br>
[ErrorBoundary](https://github.com/jbagration/aston-app/blob/redux/src/components/ErrorBoundary.tsx)<br>
Есть хотя бы один кастомный хук ✔<br>
[use-pagination](https://github.com/jbagration/aston-app/blob/main/src/hooks/use-pagination.ts),
[use-validation](https://github.com/jbagration/aston-app/blob/main/src/hooks/use-validation.ts)<br>
Хотя бы несколько компонентов используют PropTypes ✔<br>
[AuthForm](https://github.com/jbagration/aston-app/blob/main/src/components/AuthForm.tsx),
[BookList](https://github.com/jbagration/aston-app/blob/main/src/components/BookList.tsx)<br>
Поиск не должен триггерить много запросов к серверу ✔<br>
Есть применение lazy + Suspense ✔<br>
[Favourites](https://github.com/jbagration/aston-app/blob/main/src/pages/Favourites.tsx),
[Search](https://github.com/jbagration/aston-app/blob/redux/src/pages/Search.tsx)<br>
<b>Redux.</b><br>
Используем Modern Redux with Redux Toolkit ✔<br>
[history-slice](https://github.com/jbagration/aston-app/blob/main/src/store/history-slice.ts),
[index](https://github.com/jbagration/aston-app/blob/main/src/store/index.ts)<br>
Используем слайсы ✔<br>
[favourites-slice](https://github.com/jbagration/aston-app/blob/main/src/store/favourites-slice.ts),
[user-slice](https://github.com/jbagration/aston-app/blob/main/src/store/user-slice.ts)<br>
Есть хотя бы одна кастомная мидлвара ✔<br>
[saveUserData](https://github.com/jbagration/aston-app/blob/main/src/helpers/saveUserData.ts)<br>
Используется RTK Query ✔<br>
[api-slice](https://github.com/jbagration/aston-app/blob/main/src/store/api-slice.ts)<br>
Используется Transforming Responses ✔<br>
[api-slice](https://github.com/jbagration/aston-app/blob/main/src/store/api-slice.ts)<br>
<b>2 уровень (необязательный).</b><br>
Использование TypeScript ✔<br>
Используются мемоизированные селекторы (createSelector) ✔<br>
[Favourites](https://github.com/jbagration/aston-app/blob/main/src/pages/Favourites.tsx),
[History](https://github.com/jbagration/aston-app/blob/redux/src/pages/History.tsx)<br>
Используется нормализованная структура стейта (createEntityAdapter) ✖<br>
Подключен storybook и созданы несколько сторисов ✖<br>
Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом ✖<br>
Проведена оптимизация приложения ✖
