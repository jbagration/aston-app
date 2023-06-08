import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

import HistoryItem from '../components/HistoryItem';
import Wrapper from '../components/Layout/Wrapper';
import { historyActions } from '../store/history-slice';
import { RootState } from '../types/types';

const History = () => {
  const navigate = useNavigate();
  const history = useSelector((state: RootState) => state.history);
  const isHistoryEmpty = history.length === 0;
  const { email: user } = useSelector((state: RootState) => state.user);

  const historyList = history.map((item) => {
    const clickItemHandler = () => {
      navigate(
        `/search?search=${item.search || 'all'}&copyright=${
          item.copyright || 'all'
        }&languages=${item.languages || 'all'}&page=1`,
        { state: { page: 'history' } }
      );
    };

    return (
      <HistoryItem
        key={Math.random().toString()}
        data={item}
        onClick={clickItemHandler}
      />
    );
  });

  const dispatch = useDispatch();
  const clearHistoryHandler = () => {
    dispatch(historyActions.deleteAll());
    navigate(0);
  };

  if (!user) {
    return <Navigate to='/signin' replace />;
  }

  return (
    <Wrapper>
      <div className='history'>
        <button className={`button ${isHistoryEmpty ? 'disabled' : ''}`} onClick={clearHistoryHandler}>
          Clear history
        </button>
        <ul>{historyList}</ul>
      </div>
    </Wrapper>
  );
};

export default History;