'use client'
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';


export interface PageProps {
  params: {id: string}
}



export default function Page({params}: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id)
    if(Number.isNaN(id)) {
      notFound()
    }
  })
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
      {/* <p>{new Date().toTimeString()}</p> */}
    </>
  );
}