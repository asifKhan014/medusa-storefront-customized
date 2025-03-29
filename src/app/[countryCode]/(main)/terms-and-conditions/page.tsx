import React from 'react'
import { Metadata } from 'next';
import Breadcrumb from '@modules/home/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: "Terms and Conditions | Shooting Sports Canada",
};

const TermsAndConditions = () => {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-content mx-auto mb-10 px-4 xl:px-9">
        <h1 className="font-rajdhani font-bold text-2xl text-brand-black uppercase pb-5">Terms and Conditions</h1>
        <p className="font-jet-brains-mono text-[15px] pb-5">Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sollicitudin vitae feugiat elementum ultrices habitasse nulla. Aliquet integer vehicula eros; torquent laoreet lacus. Litora aliquet sapien potenti faucibus sodales ultricies. Cubilia ridiculus sapien eleifend phasellus sodales fames blandit mollis purus. Interdum at ad donec potenti magna vulputate. Natoque integer etiam feugiat neque, dapibus euismod. Elit porttitor aliquam elementum quis arcu augue. Litora sollicitudin fringilla duis eros mauris semper ac pellentesque blandit.</p>
      </div>
    </>
  )
}

export default TermsAndConditions
