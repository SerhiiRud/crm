'use client';
import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  console.log(params.id);

  useEffect(() => {
    const id = Number.parseInt(params.id);
    console.log(id);

    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
