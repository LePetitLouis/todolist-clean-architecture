import IconSun from "../../../shared/icons/icon-sun.svg";
import IconMoon from "../../../shared/icons/icon-moon.svg";

import "./Header.scss";

import { useDispatch, useSelector } from "../../../store/store";
import { selectTheme, myUpdateTheme } from "../../../domain/usecases/settings-slice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    console.log(theme);
    theme === "dark-theme" ? dispatch(myUpdateTheme('light-theme')) : dispatch(myUpdateTheme('dark-theme'));
  };

  return (
    <header className="header">
      <h1 className="header__title">TODO</h1>
      {theme === "dark-theme" ? (
        <img
          src={IconMoon}
          alt="Moon icon"
          className="header__icon"
          onClick={toggleTheme}
        />
      ) : (
        <img
          src={IconSun}
          alt="Sun icon"
          className="header__icon"
          onClick={toggleTheme}
        />
      )}
    </header>
  );
};

export default Header;
