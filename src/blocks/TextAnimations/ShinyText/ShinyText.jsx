/*
  jsrepo 1.34.0
  Installed from https://reactbits.dev/default/
  10-02-2025
*/

import './ShinyText.css';

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default ShinyText;
