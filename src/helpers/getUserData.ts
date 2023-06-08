const getUserData = () => {
  try {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const history = JSON.parse(localStorage.getItem('history') || '[]');
    const favourites = JSON.parse(localStorage.getItem('favourites') || '{}');

    return {
      user: { email: currentUser },
      history,
      favourites,
    };
  } catch (e) {
    return { user: { email: null }, favourites: {}, history: [] };
  }
};

export default getUserData;
