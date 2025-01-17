import { toAbsoluteUrl } from "@/utils/urlHelper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerStandard = ({
  bannerStandardData,
}: {
  bannerStandardData: any;
}) => {
  return (
    <div
      style={{
        flexDirection: bannerStandardData?.mediaPlacement.toLowerCase() === "right" ? "row-reverse" : "row",
      }}
      className={`w-full flex`}
    >
      <div className="w-full h-full">
        <Image
          className="w-full h-full"
          src={toAbsoluteUrl(bannerStandardData.image.url)}
          alt={bannerStandardData.image.alt}
          width={500}
          height={500}
        />
      </div>
      <div className={`w-full h-full`}>
        {bannerStandardData.headerTag === "h2" && (
          <h2 className="text-2xl font-bold">{bannerStandardData.title}</h2>
        )}
        {bannerStandardData.headerTag === "h3" && (
          <h3 className="text-2xl font-bold">{bannerStandardData.headerTag}</h3>
        )}
        {bannerStandardData.headerTag === "h4" && (
          <h4 className="text-2xl font-bold">{bannerStandardData.headerTag}</h4>
        )}
        {bannerStandardData?.buttonAction?.fields?.link?.fields?.url ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            <Link
              href={bannerStandardData?.buttonAction?.fields?.link?.fields?.url}
            >
              {bannerStandardData?.buttonAction?.fields?.label ?? "Button"}
            </Link>
          </button>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
            {bannerStandardData?.buttonAction?.fields?.label ?? "Button"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BannerStandard;
