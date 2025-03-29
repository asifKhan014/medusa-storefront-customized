import React from 'react'
import { Metadata } from 'next';
import Breadcrumb from '@modules/home/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: "Clearance | Shooting Sports Canada",
};

const Clearance = () => {
  return (
    <>
      <Breadcrumb />
      <div className="max-w-base w-full mx-auto px-4 xl:px-9 min-h-screen">
        <h1 className="font-rajdhani font-bold text-3xl uppercase mb-4">Clearance</h1>
        <p className="font-jet-brains-mono text-[15px] pb-5">Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sollicitudin vitae feugiat elementum ultrices habitasse nulla.</p>
      </div>
    </>
  )
}

export default Clearance
