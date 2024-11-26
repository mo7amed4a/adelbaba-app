"use client";
import React from "react";
import LinkApp from "./LinkApp";
import { usePathname } from "next/navigation";

export default function ProductAccountLinks({ lng }: { lng: string }) {
  const pathname = usePathname();
  const active = "text-primary-foreground border-b-2 border-primary";
  return (
    <div className="grid grid-cols-3 gap-4 items-center text-gray-400 pt-5 md:pt-0">
      <div className="col-span-1">
        <LinkApp
          href="/account/overview"
          lng={lng}
          className={`text-nowrap md:text-xl text-start w-full`}
        >
          <span className={pathname.endsWith("account/overview") ? active : ""}>
            Previous Orders
          </span>
        </LinkApp>
      </div>
      <div className="col-span-1 flex items-center">
        <LinkApp
          href="/account/overview/cart"
          lng={lng}
          className={`text-nowrap md:text-xl text-center w-full`}
        >
          <span className={pathname.endsWith("cart") ? active : ""}>Cart</span>
        </LinkApp>
      </div>
      <div className="col-span-1 flex justify-end">
        <LinkApp
          href="/account/overview/wishlist"
          lng={lng}
          className={`text-notext-xlwrap md:text-xl text-end w-full 
           
          `}
        >
          <span className={pathname.endsWith("wishlist") ? active : ""}>
            Wishlist
          </span>
        </LinkApp>
      </div>
    </div>
  );
}
