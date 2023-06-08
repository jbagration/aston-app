import React from 'react';
import searchAll from '../constants/searchAll';

const HistoryItem: React.FC<{
  onClick: () => void;
  data: {
    search: string;
    copyright: string | boolean;
    languages: string | string[];
  };
}> = ({ onClick, data }) => {
  const { search, languages, copyright } = data;

  return (
    <li className='history-item' onClick={onClick}>
      <div>
        Search: <span className='bold'>{search || searchAll}</span>
      </div>
      {languages && (
        <div>
          Language: <span className='bold'>{languages || searchAll}</span>
        </div>
      )}
      {copyright && (
        <div>
          Copyright: <span className='bold'>{copyright || searchAll}</span>
        </div>
      )}
    </li>
  );
};

export default React.memo(HistoryItem);
