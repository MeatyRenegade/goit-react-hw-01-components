import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{
          background: isOnline
            ? 'linear-gradient(-180deg, #89ff8f 0%, #2cc01f 100%)'
            : 'linear-gradient(-180deg, #ff8989 0%, #c01f1f 100%)',
        }}
      ></span>
      <img className={styles.avatar} src={avatar} alt="" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://www.clearmountainbank.com/wp-content/uploads/2020/04/male-placeholder-image.jpeg',
  name: '(empty)',
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
