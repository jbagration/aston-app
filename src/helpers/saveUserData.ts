import { Store, Dispatch, AnyAction } from 'redux';
import { RootState } from '../types/types';

const saveUserData = (store: Store<RootState, AnyAction>) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  let result = next(action);
  const savedStore = localStorage.getItem('store');
  const parsedSavedStore = savedStore ? JSON.parse(savedStore) : {};

  switch (action.type) {
    case 'user/logout': {
      const { user, history, favourites } = store.getState();
      parsedSavedStore[user.email] = { user, history, favourites };

      localStorage.setItem('store', JSON.stringify(parsedSavedStore));
      localStorage.removeItem('currentUser');
      localStorage.removeItem('history');
      localStorage.removeItem('favourites');
      localStorage.removeItem('searchQueries');

      break;
    }
    case 'user/login': {
      const userData = parsedSavedStore[action.payload];
      const { history, favourites } = store.getState();
      const currentUser = userData?.user;

      if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem(`${currentUser.email}_history`, JSON.stringify(history));
        localStorage.setItem(`${currentUser.email}_favourites`, JSON.stringify(favourites));
      } else {
        alert("We couldn't find your email. Please sign up.");

        result = next({
          type: 'user/login',
          payload: {
            error: true,
          },
        });
      }
      break;
    }
    case 'user/signup': {
      const userData = parsedSavedStore[action.payload];

      if (userData) {
        alert('This email already exists. Please sign in.');

        result = next({
          type: 'user/signup',
          payload: {
            error: true,
          },
        });
      } else {
        const user = {
          email: action.payload,
          password: action.payload.password,
        };

        localStorage.setItem('currentUser', JSON.stringify(user));
        parsedSavedStore[action.payload] = { user };
        localStorage.setItem('store', JSON.stringify(parsedSavedStore));
        localStorage.removeItem('searchQueries');
        localStorage.removeItem('favourites');
      }
      break;
    }
    case 'history/add': {
      const { history } = store.getState();
      localStorage.setItem('history', JSON.stringify(history));
      break;
    }
    case 'history/deleteAll': {
      localStorage.removeItem('history');
      break;
    }
    case 'favourites/toggleFavourites': {
      const { favourites } = store.getState();
      localStorage.setItem('favourites', JSON.stringify(favourites));
      break;
    }
    case 'favourites/deleteAll': {
      localStorage.removeItem('favourites');
      break;
    }
    default:
      break;
  }

  return result;
};

export default saveUserData;
