import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';

const Footer = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const handleThemeChange = (selectedTheme: string) => {
    changeTheme(selectedTheme);
  };

  return (
    <footer className={`footer ${theme}`}>
      <ul className='themes'>
        <li onClick={() => handleThemeChange('purple')}>Purple</li>
        <li onClick={() => handleThemeChange('blue')}>Blue</li>
      </ul>
    </footer>
  );
};

export default Footer;
