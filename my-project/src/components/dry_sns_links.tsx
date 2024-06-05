import React from "react";

interface SocialMediaItemProps {
  name: string;
  username: string;
  icon: string;
  actionIcon: string;
}

const socialMediaData: SocialMediaItemProps[] = [
  {
    name: "Instagram",
    username: "@username",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eadbf0cbc12a349fd0de9302e317f669f2f109349d4e2d7f016b2ea088f36b86?apiKey=4a1888a422dc47629b808ba7880854a6&",
    actionIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/603ebf3030ca4da09139a7b02bcecd6901d48a106dfc6634f74254065314b4f5?apiKey=4a1888a422dc47629b808ba7880854a6&",
  },
  {
    name: "Facebook",
    username: "@username",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab80d6b34978d5d6fa430f99b347acb81490ca966fa6d815104a2f6d6bb655b1?apiKey=4a1888a422dc47629b808ba7880854a6&",
    actionIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e6c93b0524e65d1b1db681c90aac15abff52710e8f281e01b7206857396b7433?apiKey=4a1888a422dc47629b808ba7880854a6&",
  },
  // 他のソーシャルメディアデータを続ける...
];

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({
  name,
  username,
  icon,
  actionIcon,
}) => (
  <div className="flex gap-5 justify-center px-4 py-3 w-full bg-white">
    <div className="flex gap-4">
      <div className="flex flex-col justify-center p-3 bg-gray-100 rounded-lg">
        <div className="flex flex-col justify-center items-start">
          <img loading="lazy" src={icon} className="w-6 aspect-square" />
        </div>
      </div>
      <div className="flex flex-col justify-center self-start whitespace-nowrap leading-[150%]">
        <div className="flex flex-col justify-center text-base font-medium text-neutral-900">
          <div className="justify-center">{name}</div>
        </div>
        <div className="flex flex-col justify-center text-sm text-slate-500">
          <div className="justify-center">{username}</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center my-auto">
      <div className="flex flex-col justify-center p-0.5">
        <div className="flex justify-center items-center">
          <img loading="lazy" src={actionIcon} className="w-6 aspect-square" />
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaList = () => (
  <div className="flex flex-col max-w-[390px]">
    {socialMediaData.map((data, index) => (
      <SocialMediaItem key={index} {...data} />
    ))}
  </div>
);

export default SocialMediaList;
