import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/rishyym0927" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/rishyy/" },
  { icon: <FaTwitter />, path: "https://x.com/Rishy39485223" },
  {
    icon: <FaReddit />,
    path: "https://https://www.reddit.com/user/OldenAticus/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link target="_blank" href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
