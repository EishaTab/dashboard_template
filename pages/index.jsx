import RootLayout from '@/app/layout'
import Dashboard from '@/components/dashboard/Dashboard'
import React from 'react'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXpecnRUR2BdVUZ2WEU=');
 
const Home = () => {
 
  return (
    <RootLayout>
     <Dashboard />
      
    </RootLayout>
  )
}

export default Home
