'use client';

import React from 'react';
import Button, { ButtonProps } from '@/app/components/button';

const MagicButton = ({}: ButtonProps) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (count > 2) {
      throw new Error();
    }
  }, [count]);

  return <Button onClick={() => setCount(count + 1)}>MagicButton</Button>;
};

export default MagicButton;
