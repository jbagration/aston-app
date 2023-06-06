import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { ThemeProvider } from './store/theme-context';
import store from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

reportWebVitals();
