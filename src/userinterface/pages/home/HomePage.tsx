import Header from '../../components/header/Header';
import TodoForm from '../../components/todos/TodoForm/TodoForm';
import TodoList from '../../components/todos/TodoList/TodoList';

import './HomePage.scss';

import { useSelector } from '../../../store/store';
import { selectTheme } from '../../../domain/usecases/settings-slice';

const HomePage = () => {
  const theme = useSelector(selectTheme)

  return (
    <section className="home-page">
      {theme === 'dark-theme' ? (
        <img src="/images/bg-desktop-dark.jpg" alt="Banner" className="home-page__banner" />
      ) : (
        <img src="/images/bg-desktop-light.jpg" alt="Banner" className="home-page__banner" />
      )}
      <section className='home-page__container'>
        <Header />
        <TodoForm />
        <TodoList />
      </section>
    </section>
  );
};

export default HomePage;