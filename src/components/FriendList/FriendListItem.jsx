import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log('🚀 ~ FriendListItem ~ isOnline', isOnline);

  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
