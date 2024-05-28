// import Header from '@/app/components/header';
// import React from 'react';

// export interface PageProps {}

// export default function Page({}: PageProps) {
//   return (
//     <>
//       <Header>Dashboard</Header>
//     </>
//   );
// }

import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton/>
    </main>
  );
}