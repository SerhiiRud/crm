'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/button';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new')}>Add company</Button>
  );
};

export default AddCompanyButton;
