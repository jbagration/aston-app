import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { favouritesActions } from '../store/favourites-slice';
import Icon from './Icon';
import { RootState } from '../types/types';
import React from 'react';

interface HeartIconProps {
  id: number;
}

const HeartIcon: React.FC<HeartIconProps> = ({ id }) => {
  const navigate = useNavigate();
  const favourites = useSelector((state: RootState) => state.favourites);
  const { email: user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  let isFavourite = favourites[id];
  
  if (!user) {
    isFavourite = false;
  }

  const heartIconClasses = classNames('heart-icon', { favourite: isFavourite });

  const clickIconHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (!user) {
      navigate('/signin');
    } else {
      dispatch(favouritesActions.toggleFavourites(id));
    }
  };

  return <Icon onIconClick={clickIconHandler} classes={heartIconClasses} />;
};

export default React.memo(HeartIcon);
