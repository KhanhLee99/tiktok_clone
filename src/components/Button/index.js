import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  children,
  primary = false,
  outline = false,
  rounded = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProp
}) => {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProp,
  };

  // Handle remove event when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] == 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    rounded,
    text,
    small,
    large,
    disabled,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
       <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
