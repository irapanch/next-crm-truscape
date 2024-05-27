'use client'
import React from 'react';

export interface GlobalErrorProps {
 
}

export default function GlobalError({  }: GlobalErrorProps) {

  return  (
//   так як GlobalErrorComponent замінює собою кореневий layout, то йому необхідно додати власні теги html, body

 
    <html>
    <body>
      <div>
        <p>Something globally went wrong.</p>
      </div>
    </body>
  </html>
  )
}
