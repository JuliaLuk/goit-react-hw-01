// import clsx from 'clsx';

export const Profile = ({ user: { username, tag, location, active, avatar, stats } }) => {
  return (
    <>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt={username} className="avatar" />
          <p className="name">Name: {username}</p>
          <p className="tag">Nick Name: {tag}</p>
          <p className="location">Location: {location}</p>
          <p className="active">Status: {active ? 'Active' : 'Retired'}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers: </span>
            <span className="value">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views: </span>
            <span className="value">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes: </span>
            <span className="value">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
