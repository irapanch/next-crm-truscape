import React from 'react';

export interface FProps {
  children: React.ReactNode;
}

export default function F({ children }: FProps) {
  return <div>{children}</div>;
}
