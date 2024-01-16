// import clsx from 'clsx';

import css from '../Profile/Profile.module.css';
import { BsApple, BsEnvelopePaperFill, BsEmojiSunglassesFill } from 'react-icons/bs';
import defaultAvatar from './default-avatar.png';

export const Profile = ({ user: { username, tag, location, active, avatar, stats } }) => {
  const profileImage = avatar || defaultAvatar;
  const profileName = username || 'we do not know yet it';

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
          <p className={css.name}>
            <BsApple className={css.icon} size="18" />
            name: {profileName}
          </p>

          <p className={css.tag}>
            <BsEmojiSunglassesFill className={css.icon} size="18" />
            nick: {tag}
          </p>

          <p className={css.location}>
            <BsEnvelopePaperFill className={css.icon} size="18" />
            location: {location}
          </p>
          <p className={statusClasses}>status: {active ? 'Active' : 'Retired'}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>followers: {stats.followers}</span>
          </li>
          <li>
            <span className={css.label}>views: {stats.views}</span>
          </li>
          <li>
            <span className={css.label}>likes: {stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
