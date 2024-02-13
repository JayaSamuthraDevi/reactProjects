import React from 'react';
import { CardProps } from '../../types/card';
import { ProfileCard } from './profile';
import { DashboardCard } from './dashboard';
import { ScrollerComponent } from './scrollercomponent';

export const Card: React.FC<CardProps> = ({
  profile,
  dashboard,
  assetswap,
  cardtype,
}) => {
  return (
    <>
      {dashboard && <DashboardCard/>}
      {profile && <ProfileCard/>}
      {cardtype==='vendor' && <ScrollerComponent/>}
      {cardtype==='asset' && <ScrollerComponent check={assetswap}/>}    
    </>
  );
};
