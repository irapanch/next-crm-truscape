import React from 'react';
import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';

import {  getCompanies } from '@/app/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getCompanies();
  return (
    <CompanyTable>

{data.map(({ id, categoryTitle, title, status, hasPromotions,countryTitle, joinedDate, }) => (
          <CompanyRow key={id} 
          id={id} 
          categoryTitle={categoryTitle}
        title={title}
        status={status}
        hasPromotions={hasPromotions}
        countryTitle={countryTitle}
        joinedDate={joinedDate}
          />
       
       
        ))}


      
    </CompanyTable>
  );
}





// import React from 'react';
// import Header from '@/app/components/header';
// import Toolbar from '@/app/components/toolbar';
// import AddCompanyButton from '@/app/components/add-company-button';
// import SearchInput from '@/app/components/search-input';
// import CompanyTable from '@/app/components/company-table';
// import CompanyRow from '@/app/components/company-row';
// import { Status } from '@/app/components/status-label';


// export interface PageProps {}

// export default function Page({}: PageProps) {
//   return (
//     <>
//       <Header>Companies</Header>
//       <main>
//         <Toolbar action={<AddCompanyButton />}>
//           <SearchInput />
//         </Toolbar>
//         <CompanyTable>
//           <CompanyRow
//             id={1}
//             category="Products"
//             company="Costco"
//             status={Status.Pending}
//             promotion={true}
//             country="USA"
//             joinedDate="02.19.2023"
//           />
//         </CompanyTable>
//       </main>
//     </>
//   );
// }