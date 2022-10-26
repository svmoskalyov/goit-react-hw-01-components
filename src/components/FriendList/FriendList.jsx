import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Box as="section" mx="auto" my={6} width={400} bg="white">
      <ul>
        {/* {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))} */}

        {friends.map(({ id, ...rest }) => (
          <FriendListItem key={id} {...rest} />
        ))}
      </ul>
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
