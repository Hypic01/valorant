import { useRef } from 'react';
import { useTilt } from '../hooks/useTilt';

const BentoCard = ({ children, className }) => {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  );
};

export default BentoCard; 