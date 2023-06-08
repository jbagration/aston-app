const saveUserData = (store: any) => (next: any) => (action: any) => {
  let result = next(action);

  switch (action.type) {
    case 'user/logout': {
      const savedStore = localStorage.getItem('store');
      const parsedSavedStore = savedStore ? JSON.parse(savedStore) : {};
      const userData = store.getState();
      parsedSavedStore[userData.user.email] = {
        user: userData.user,
        history: userData.history,
        favourites: userData.favourites,
      };

      localStorage.setItem('store', JSON.stringify(parsedSavedStore));
      localStorage.removeItem('currentUser');
      break;
    }
    case 'user/login': {
      const savedStore = localStorage.getItem('store');
      const parsedSavedStore = savedStore ? JSON.parse(savedStore) : {};
      const userData = parsedSavedStore[action.payload];
      const history = JSON.stringify(store.getState().history);
      const favourites = JSON.stringify(store.getState().favourites);
    
      if (userData) {
        localStorage.setItem('currentUser', JSON.stringify(userData.user));
        localStorage.setItem('history', history);
        localStorage.setItem('favourites', favourites);
      } else {
        alert("We couldn't find your email. Please, sign up.");
    
        let result = next({
          type: 'user/login',
          payload: {
            error: true,
          },
        });
    
        return result;
      }
      break;
    }
    
    case 'user/signup': {
      const savedStore = localStorage.getItem('store');
      const parsedSavedStore = savedStore ? JSON.parse(savedStore) : {};
      const userData = parsedSavedStore[action.payload];
    
      if (userData) {
        alert('This email already exists. Please, sign In.');
    
        let result = next({
          type: 'user/signup',
          payload: {
            error: true,
          },
        });
    
        return result;
      } else {
        const user = {
          email: action.payload,
          password: action.payload.password
                };
    
        localStorage.setItem('currentUser', JSON.stringify(user));
        parsedSavedStore[action.payload] = { user: user };
        localStorage.setItem('store', JSON.stringify(parsedSavedStore));
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
