
import PropTypes from "prop-types";
import { clsx } from "clsx";
import styles from "./styles.module.scss";

function Button({ variant = "ghost", children, className, ...props}) {
  return (
    <button className={clsx(styles.button, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

// Prop types validation
Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export { Button };
