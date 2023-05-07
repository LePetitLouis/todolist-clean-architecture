import IconSun from "../../../shared/icons/icon-sun.svg";
import IconMoon from "../../../shared/icons/icon-moon.svg";

import "./Header.scss";

import { useDispatch, useSelector } from "../../../store/store";
import { selectTheme, myUpdateTheme } from "../../../domain/usecases/settings-slice";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () => {
    theme === "dark" ? dispatch(myUpdateTheme('light')) : dispatch(myUpdateTheme('dark'));
  };

  return (
    <header className="header">
      <h1 className="header__title">TODO</h1>
      {theme === "dark" ? (
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
