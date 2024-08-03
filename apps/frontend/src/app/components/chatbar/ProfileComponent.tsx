import Image from "next/image";
import React, { useMemo } from "react";

interface ProfileComponentProps {
  level: number;
  profilePic?: string;
}

const levelToColor = (level: number) => {
  if (level < 10) {
    return "#6B7280"; // gray-500
  } else if (level < 20) {
    return "#10B981"; // green-500
  } else if (level < 30) {
    return "#3B82F6"; // blue-500
  } else if (level < 50) {
    return "#FBBF24"; // yellow-400
  } else {
    return "#8B5CF6"; // purple-500
  }
};

export const ProfileComponent: React.FC<ProfileComponentProps> = ({ level, profilePic }) => {
  const levelColor = useMemo(() => levelToColor(level), [level]);

  return (
    <div className="relative flex-shrink-0 w-[40px] h-[51.2px] sm:w-[50px] sm:h-[64px]">
      <div
        className="relative rounded-full border-2 flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] p-1"
        style={{ borderColor: levelColor }}
      >
        <div className="absolute bg-black rounded-full flex justify-center items-center overflow-clip w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]">
          <Image
            src={profilePic ? profilePic : "/icons/portrait-09.png"}
            alt="profile"
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px]"
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border-2 border-chatbar_bg inline-flex justify-center items-center z-30 px-[4px] py-[3.2px] sm:px-[5px] sm:py-[4px]"
        style={{ backgroundColor: levelColor }}
      >
        <span className="text-black text-[8px] sm:text-3xs font-bold text-center">{level}</span>
      </div>
    </div>
  );
};
