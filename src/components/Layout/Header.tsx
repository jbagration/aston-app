import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Fragment, useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { userActions } from '../../store/user-slice';
import Wrapper from './Wrapper';
import ThemeContext from '../../store/theme-context';
import { RootState } from '../../types/types';

const activeLinkStyle = {
  textDecoration: 'underline',
};
const linkStyle = { textDecoration: 'none' };

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email: user } = useSelector((state: RootState) => state.user);  const favourites = useSelector((state: RootState) => state.favourites);
  const amountOfFavourites = Object.keys(favourites).length;
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setIsBtnAnimated(true);
    const timeout = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [amountOfFavourites]);

  const favouritesBadgeClasses = classNames('favourites-badge', {
    animated: isBtnAnimated,
  });
  const headerClasses = classNames('header', {
    purple: theme === 'purple',
    blue: theme === 'blue',
  });

  const logoutHandler = () => {
    dispatch(userActions.logout());
    navigate(0);
  };
  const username =
  typeof user === 'string'
    ? user
    : (user as { email: string })?.email?.split('@')[0] || '';

  return (
    <header className={headerClasses}>
      <Wrapper>
        <div className='flex-2-column'>
          <div className='logo'>
            <Link to='/'>
              <h1>Book Search App</h1>
              <span>From the largest online collection of literature</span>
            </Link>
          </div>
          <nav className='navigation'>
            <ul>
              {!user && (
                <Fragment>
                  <li>
                    <NavLink
                      to='/signin'
                      style={({ isActive }) =>
                        isActive ? activeLinkStyle : linkStyle
                      }
                    >
                      Sign in
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/signup'
                      style={({ isActive }) =>
                        isActive ? activeLinkStyle : linkStyle
                      }
                    >
                      Sign up
                    </NavLink>
                  </li>
                </Fragment>
              )}
              {user && (
                <Fragment>
                  <li>
                    <span className="username">{username}</span>
                  </li>
                  <li>
                    <NavLink
                      to='/favourites'
                      style={({ isActive }) =>
                        isActive ? activeLinkStyle : linkStyle
                      }
                    >
                      Favourites
                      <span className={favouritesBadgeClasses}>
                        {amountOfFavourites}
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/history'
                      style={({ isActive }) =>
                        isActive ? activeLinkStyle : linkStyle
                      }
                    >
                      History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/signin'
                      style={({ isActive }) =>
                        isActive ? activeLinkStyle : linkStyle
                      }
                      onClick={logoutHandler}
                    >
                      Log out
                    </NavLink>
                  </li>
                </Fragment>
              )}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
