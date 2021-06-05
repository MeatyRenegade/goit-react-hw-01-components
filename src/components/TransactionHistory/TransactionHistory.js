import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.head}>
        <tr className={styles.table_row}>
          <th className={styles.table_head}>Type</th>
          <th className={styles.table_head}>Amount</th>
          <th className={styles.table_head}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.table_body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.table_row}>
            <td className={styles.table_data}>{type}</td>
            <td className={styles.table_data}>{amount}</td>
            <td className={styles.table_data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
