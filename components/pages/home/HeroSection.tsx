import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="my-10 px-4">
      <div
        style={{
          background: "linear-gradient(90deg, #F3B852 0%, #FBE7C5 100%)",
        }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 rounded-2xl md:h-72 pt-10 md:pt-0"
      >
        <div className="flex items-center">
            <div className="flex flex-col justify-between ms-10 space-y-7">
                <h2 className="text-sm">Best Deal Online on smart watches</h2>
                <h1 className="text-xl md:text-3xl font-bold">SMART WEARABLE.</h1>
                <p className="font-bold">UP to 40% OFF</p>
                <svg
                    width="69"
                    height="8"
                    viewBox="0 0 69 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="35" cy="4" r="4" fill="#121212" />
                    <circle cx="50" cy="4" r="4" fill="#121212" />
                    <circle cx="65" cy="4" r="4" fill="#121212" />
                    <rect width="24" height="8" rx="4" fill="#121212" />
                </svg>
            </div>
        </div>
        <div className="relative h-72 flex justify-center p-5">
          <svg
            width={472}
            height={161}
            className="hidden md:block absolute top-0 start-5"
            viewBox="0 0 472 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx={232}
              cy={-79}
              r="239.5"
              fill="url(#paint0_linear_999_134)"
              stroke="url(#paint1_linear_999_134)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_999_134"
                x1={-8}
                y1={-79}
                x2={472}
                y2={-79}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F3B852" />
                <stop offset={1} stopColor="#FBE7C5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_999_134"
                x1={-8}
                y1={-79}
                x2={472}
                y2={-79}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F3B852" />
                <stop offset={1} stopColor="#FBE7C5" />
              </linearGradient>
            </defs>
          </svg>
          <Image
            className="h-full relative z-[1]"
            src={"/icons/watch.png"}
            width={300}
            height={300}
            alt=""
          />
          <svg
            className="hidden md:block absolute bottom-0 start-5 z-0"
            width="148"
            height="61"
            viewBox="0 0 148 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M147.5 73.5C147.5 113.814 114.596 146.5 74 146.5C33.4039 146.5 0.5 113.814 0.5 73.5C0.5 33.1864 33.4039 0.5 74 0.5C114.596 0.5 147.5 33.1864 147.5 73.5Z"
              fill="url(#paint0_linear_999_136)"
              stroke="url(#paint1_linear_999_136)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_999_136"
                x1="0"
                y1="73.5"
                x2="148"
                y2="73.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3B852" />
                <stop offset="1" stop-color="#FBE7C5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_999_136"
                x1="0"
                y1="73.5"
                x2="148"
                y2="73.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F3B852" />
                <stop offset="1" stop-color="#FBE7C5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
