import PropTypes from 'prop-types';
import s from '../Button/Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore} className={s.button}>
        Load more{' '}
      </button>
    </div>
  );
};
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
