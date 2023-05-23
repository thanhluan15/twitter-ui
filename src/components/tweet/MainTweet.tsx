/** @format */

import React from "react";

import type { Variants } from "framer-motion";
import { TweetProps } from "@/types";
import NextLink from "../NextLink";
import Avatar from "../shared/Avatar";
import { TweetMetadata } from "./TweetMetadata";
import { BodyContent } from "./BodyContent";

export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
export default function MainTweet({
  reply,
  tweet,
}: {
  reply?: boolean;
  tweet: TweetProps;
}) {
  return (
    <NextLink disabled={reply} href={`/tweet/`}>
      <div className="tweet-hover main-border border-b p-4 ">
        <div className="fade-in flex   cursor-pointer space-x-2  transition-all  ease-in-out">
          <div className=" flex min-h-full flex-col items-center ">
            <Avatar src={""} />
            {reply && (
              <div className="hover-animation  bg-line-reply dark:bg-dark-line-reply  h-[80%] w-0.5"></div>
            )}
          </div>
          <div className="flex w-full grow flex-col">
            <NextLink href={`/`}>
              {/* <TweetMetadata color={tweet.user.badge} {...tweet} /> */}
            </NextLink>
            <BodyContent {...tweet} />
            {/* <TweetActions {...tweet} /> */}
          </div>
          {/* <TweetOptions id={} /> */}
        </div>
      </div>
    </NextLink>
  );
}