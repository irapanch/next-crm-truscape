'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: { id: string, title: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  return (
    <PromotionFormModal
    companyTitle={params.title}
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}