'use client';

import React from 'react';
import Button from '@/app/components/button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: ErrorComponentProps) => {
  return (
    <>
      <div>{`Something went wrong. ${error.message}`}</div>
      <Button onClick={() => reset()}>Back</Button>
    </>
  );
};

export default ErrorComponent;
