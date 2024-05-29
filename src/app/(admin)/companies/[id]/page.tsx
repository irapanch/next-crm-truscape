import React from 'react';
// import Header from '@/app/components/header';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}

// 'use client'
// import Header from '@/app/components/header';
// import { notFound } from 'next/navigation';
// import React, { useEffect } from 'react';


// export interface PageProps {
//   params: {id: string}
// }



// export default function Page({params}: PageProps) {
//   useEffect(() => {
//     const id = Number.parseInt(params.id)
//     if(Number.isNaN(id)) {
//       notFound()
//     }
//   })
//   return (
//     <>
//       <Header>Company ({String(params.id)})</Header>
//       {/* <p>{new Date().toTimeString()}</p> */}
//     </>
//   );
// }