import { useFetcher } from "@remix-run/react";

import {
  Bookmark,
  Clipboard,
  Heart,
  PictureInPicture,
  Pin,
  PinIcon,
  PinOffIcon,
  Star,
  Unlink,
} from "lucide-react";
import { FunctionComponent, useState } from "react";

export default function Interactions() {
  return (
    <div className="flex gap-10 *:cursor-pointer  ">
      <ItemCount icon={<PictureInPicture size={20} />}></ItemCount>
      <ItemCount icon={<Bookmark size={20} />}>19</ItemCount>
      <ItemCount icon={<Heart size={20} />}>0</ItemCount>
      <ItemCount icon={<Star size={20} />}></ItemCount>
      <ItemCount icon={<Unlink size={20} />}></ItemCount>
      <ItemCount icon={<Clipboard size={20} />}></ItemCount>
    </div>
  );
}

export function ItemCount({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const [likes, setLikes] = useState(children ? Number(children) : 0);
  const [animationLikes, setAnimationLikes] = useState("initial");

  const handleLikes = () => {
    // 1. Old number goes up
    setTimeout(() => setAnimationLikes("goUp"), 0);
    // 2. Incrementing the counter
    setTimeout(() => setLikes(likes + 1), 100);
    // 3. New number waits down
    setTimeout(() => setAnimationLikes("waitDown"), 100);
    // 4. New number stays in the middle
    setTimeout(() => setAnimationLikes("initial"), 200);
  };

  return (
    <div className="flex Grid">
      <div
        className="Likes flex  w-[50px] gap-1 items-center justify-center text-[18px]"
        onClick={handleLikes}
      >
        {icon}
        <span className={animationLikes}>{likes}</span>
      </div>
    </div>
  );
}
