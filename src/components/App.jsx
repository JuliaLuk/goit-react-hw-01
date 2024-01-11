import users from '../users.json';
import { PageTitle } from './PageTitle';

import { UsersList } from './UsersList';

export const App = () => {
  return (
    <div>
      <PageTitle text="the best instagramerses" />
      <UsersList person={users} />
    </div>
  );
};
