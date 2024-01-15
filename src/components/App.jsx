import users from '../users.json';
import { PageTitle } from './PageTitle/PageTitle';
import { UsersList } from './UsersList/UsersList';
import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <PageTitle text="the best instagramerses" />
      <UsersList person={users} />
    </div>
  );
};
