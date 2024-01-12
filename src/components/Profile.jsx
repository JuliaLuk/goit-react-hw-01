// import clsx from 'clsx';
import css from '../components/Profile.module.css';

export const Profile = ({ user: { username, tag, location, active, avatar, stats } }) => {
  return (
    <>
      <div className="profile">
        <div className={css.description}>
          <img src={avatar} alt={username} className={scc.avatar} />
          <p className={css.name}>Name: {username}</p>
          <p className={css.tag}>Nick Name: {tag}</p>
          <p className={css.location}>Location: {location}</p>
          <p className={css.active}>Status: {active ? 'Active' : 'Retired'}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers: </span>
            <span className={css.value}>{stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>Views: </span>
            <span className={css.value}>{stats.views}</span>
          </li>
          <li>
            <span className={css.label}>Likes: </span>
            <span className={css.value}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
