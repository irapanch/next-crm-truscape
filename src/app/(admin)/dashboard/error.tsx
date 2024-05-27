'use client'
import Button from '@/app/components/button';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;  // при виклику функції reset() next.js намагається заново відрендерити компоненти, які обмежує прерхоплювач помилок
}

export default function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return <div>
    <p>{`Something went wrong. ${error.message}`}</p>
  <Button onClick={() => reset()}>Try again</Button>
  </div>;
}
