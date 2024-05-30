import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import StatusLabel, { Status } from '@/app/components/status-label';
// import { CompanyStatus } from '../lib/api';

export interface CompanyRowProps {
  
  id: string;
  title: string;
  description?: string;
  status: Status;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId?: string;
  categoryTitle: string;
  countryId?: string;
  countryTitle: string;
  avatar?: string;
}

// const labelByStatus = {
//   [Status.Active]: 'Active',
//   [Status.NotActive]: 'Not Active',
//   [Status.Pending]: 'Pending',
//   [Status.Suspended]: 'Suspended',
// };

export default function CompanyRow({

  id, categoryTitle, title, status, hasPromotions,countryTitle, joinedDate,
}: CompanyRowProps) {
  
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-l border-l-4 border-blue-700">
        {categoryTitle}
      </td>
      <td>
        <a href={`/companies/${id}`}>{ title}</a>
      </td>
      <td>
        <StatusLabel status={status}>{status}</StatusLabel>
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${hasPromotions ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              hasPromotions? 'text-green-700' : 'text-red-700',
            )}
          >
            {hasPromotions? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{countryTitle}</td>
      <td className="rounded-r">
      {new Date(joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}