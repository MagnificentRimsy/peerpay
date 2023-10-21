
import React, { ReactNode } from 'react';

type SocialIconProps = {
  icon: ReactNode;
};

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <div className='w-[42px] h-[32px] bg-[#D5E2E4] rounded-xl flex justify-center items-center bg-opacity-10'>
      {icon}
    </div>
  );
}

export default SocialIcon;