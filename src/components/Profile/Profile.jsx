// import clsx from 'clsx';

import css from '../Profile/Profile.module.css';
import { BsApple, BsEnvelopePaperFill } from 'react-icons/bs';
import defaultAvatar from './default-avatar.png';

export const Profile = ({ user: { username, tag, location, active, avatar, stats } }) => {
  const profileImage = avatar || defaultAvatar;

  // const statusClasses = clsx(css.status, {
  //   [css.isActive]: active,
  //   [css.isRetured]: !active,
  // });
  const statusClasses = active ? css.isActive : css.isRetured;

  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={profileImage} alt={username} className={css.avatar} />
          <p className={css.name}>Name: {username}</p>
          <BsApple className={css.icon} size="20" />
          <p className={css.tag}>Nick Name: {tag}</p>

          <p className={css.location}>
            {' '}
            <BsEnvelopePaperFill />
            Location: {location}
          </p>
          <p className={statusClasses}>Status: {active ? 'Active' : 'Retired'}</p>
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
