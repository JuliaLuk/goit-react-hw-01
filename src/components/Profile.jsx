export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt={username} className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="value">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="value">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="value">30{stats.likes}00</span>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       followers: PropTypes.number.isRequired,
//       views: PropTypes.number.isRequired,
//       likes: PropTypes.number.isRequired,
//     }).isRequired
//   ).isRequired,
// };
