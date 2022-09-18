import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')}>
        <FontAwesomeIcon icon={faChevronCircleLeft} onClick={onBack} />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
};

export default Header;
