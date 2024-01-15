import { Profile } from '../Profile/Profile';

export const UsersList = ({ person }) => {
  return (
    <ul>
      {person.map(user => (
        <li key={user.id}>
          <Profile user={user} />
        </li>
      ))}
    </ul>
  );
};
