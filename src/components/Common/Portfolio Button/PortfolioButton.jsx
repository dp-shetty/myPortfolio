import React, { forwardRef } from 'react';
import './PortfolioButton.scss'

const PortfolioButton = forwardRef(({ 
  text, 
  icon: Icon, 
  href, 
  onClick, 
  target, 
  pRef, 
  aRef, 
  className, 
  iconClassName,
  sx, 
  type = 'button', // Default to 'button' if not specified
  ...props 
}, ref) => {
  if (href) {
    return (
      <div id="downloadDiv" className={className}>
        <div className="dwdIcon">
          <p ref={pRef}>{text}</p>
          <a 
            id="Dsvg" 
            href={href} 
            target={target} 
            ref={aRef}
            style={sx} 
            {...props}
          >
            {Icon && <Icon className={iconClassName}/>} 
          </a>
        </div>
      </div>
    );
  }

  return (
    <button 
      type={type}
      className={className} 
      onClick={onClick}
      style={sx}
      ref={ref}
      {...props}
    >
      {pRef ? <p ref={pRef}>{text}</p> : text}
      {Icon && <Icon className={iconClassName}/>}
    </button>
  );
});

export default PortfolioButton;
