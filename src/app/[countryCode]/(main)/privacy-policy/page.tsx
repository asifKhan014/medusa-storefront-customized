import React from 'react'
import { Metadata } from 'next';
import Breadcrumb from '@modules/home/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: "Privacy Policy | Shooting Sports Canada",
};

const PrivacyPolicy = () => {
  return (
    <>
      <Breadcrumb />
      <div className="content-container mb-10 px-4 xl:px-9">
        <h1 className="font-rajdhani font-bold text-2xl text-brand-black uppercase pb-5">Privacy Policy</h1>
        <p className="font-jet-brains-mono text-[15px] pb-5">Lorem ipsum odor amet, consectetuer adipiscing elit. Massa nibh tempor aptent inceptos lobortis pellentesque diam. Nec ad donec odio scelerisque taciti dapibus tristique purus. Purus potenti lacus per est porttitor maecenas parturient nunc felis. Sociosqu hendrerit mattis; aptent elementum habitant neque diam. Tellus porttitor fusce lectus ut ornare. Platea nibh quis nulla fames ligula vestibulum diam. Velit feugiat fames dolor per cras facilisi.</p>
        <p className="font-jet-brains-mono text-[15px] pb-5">Habitant bibendum mauris sed fusce tortor cras cubilia. Fringilla egestas senectus vivamus; rhoncus vitae non. Fringilla elementum vel hendrerit; quis diam etiam aliquet. Risus eleifend scelerisque ante vehicula adipiscing vulputate justo risus quisque. Luctus elit enim sapien ultrices donec. Facilisi nostra platea malesuada libero commodo. Nisl erat fusce suscipit habitant lacinia mauris. Taciti parturient dui nisl enim odio quis eu.</p>
        <p className="font-jet-brains-mono text-[15px] pb-5">Habitant netus taciti torquent et primis augue. Nullam nascetur condimentum eros ad tortor efficitur cursus turpis. Parturient vehicula condimentum vestibulum eu class quis; vestibulum aliquet. Nostra in rutrum platea mollis dapibus. Interdum porttitor magna elementum luctus habitasse, elit vestibulum lorem! Enim aliquam vivamus massa varius hendrerit praesent malesuada varius ultrices. Dui tincidunt interdum mus consequat velit ut. Augue ligula aliquet sagittis porttitor ultricies justo diam. Himenaeos rhoncus ipsum mollis feugiat; aliquam integer.</p>
      </div>
    </>
  )
}

export default PrivacyPolicy
