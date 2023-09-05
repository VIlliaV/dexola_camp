import astronaut_flies_back from '@/images/features/astronaut_flies_back.jpg';
import astronaut_flies_back_mob from '@/images/features/astronaut_flies_back@mob.webp';
import astronaut_flies_back_tab from '@/images/features/astronaut_flies_back@tab.webp';
import astronaut_flies_back_desk from '@/images/features/astronaut_flies_back@desk.webp';
import astronaut_flies_back_desk2x from '@/images/features/astronaut_flies_back@desk2x.webp';

import astronaut_flies_forv from '@/images/features/astronaut_flies_forv.jpg';
import astronaut_flies_forv_mob from '@/images/features/astronaut_flies_forv@mob.webp';
import astronaut_flies_forv_tab from '@/images/features/astronaut_flies_forv@tab.webp';
import astronaut_flies_forv_desk from '@/images/features/astronaut_flies_forv@desk.webp';
import astronaut_flies_forv_desk2x from '@/images/features/astronaut_flies_forv@desk2x.webp';
import astronaut_swim from '@/images/features/astronaut_swim.jpg';
import astronaut_swim_mob from '@/images/features/astronaut_swim@mob.webp';
import astronaut_swim_tab from '@/images/features/astronaut_swim@tab.webp';
import astronaut_swim_desk from '@/images/features/astronaut_swim@desk.webp';
import astronaut_swim_desk2x from '@/images/features/astronaut_swim@desk2x.webp';

export const featuresData = [
  {
    title: 'NFT minting',
    description: ` Every StarRunner NFT tells a story – YOUR story. This NFT encapsulates the essence of your journey
              like never before.`,
    img: {
      desk: astronaut_swim_desk,
      desk2x: astronaut_swim_desk2x,
      tab: astronaut_swim_tab,
      mob: astronaut_swim_mob,
      default: astronaut_swim,
    },
  },
  {
    title: 'STRU Token sale',
    description:
      ' The StarRunner Token the exclusive crypto currency fueling the adventure of the Play-to-Earn sensation.',
    img: {
      desk: astronaut_flies_back_desk,
      desk2x: astronaut_flies_back_desk2x,
      tab: astronaut_flies_back_tab,
      mob: astronaut_flies_back_mob,
      default: astronaut_flies_back,
    },
  },
  {
    title: 'Staking',
    description: `Join a thriving community
              of stakers, united by their passion for exploration, strategy, and gaming.`,
    img: {
      desk: astronaut_flies_forv_desk,
      desk2x: astronaut_flies_forv_desk2x,
      tab: astronaut_flies_forv_tab,
      mob: astronaut_flies_forv_mob,
      default: astronaut_flies_forv,
    },
  },
];
