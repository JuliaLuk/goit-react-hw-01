// function App() {
//   return <div>App</div>;
// }

// export default App;

import user from '../user.json';
import Profile from '../components/Profile.jsx';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}
