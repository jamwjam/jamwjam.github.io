import React from 'react';
import './animatedText.css';

interface AnimatedTextProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const AnimatedText = ({
  label,
  ...props
}: AnimatedTextProps) => {
  return (
    <div className={'animated-text'} {...props}>
      <h1>{label}</h1>
    </div>
  );
};
