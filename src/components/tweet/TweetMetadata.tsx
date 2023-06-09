import { useFormattedDate } from "@/hooks/useFormattedDate";
import React from "react";
import { TweetProps, UserData } from "@/types";
import {
  ColorType,
  PickVerificationIcon,
} from "@/icons/PickVerificationIcon";

export default function TweetMetadata({
  color,
  ...props
}: { user: UserData } & ColorType & TweetProps) {
  const formattedDate = useFormattedDate(props?.createdAt);

  return (
    <>
      <div className="flex">
        <h1 className="flex gap-1 items-center text-base font-[650] leading-6 text-gray-800 dark:text-white">
          {props?.User?.username}
          <PickVerificationIcon color={color} />
          <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            @{props?.User?.username} · {formattedDate}
          </span>
        </h1>
      </div>
    </>
  );
}