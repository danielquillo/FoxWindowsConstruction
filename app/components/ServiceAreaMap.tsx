"use client";

import dynamic from "next/dynamic";

const ServiceAreaMapInner = dynamic(
  () => import("./ServiceAreaMapInner"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[430px] items-center justify-center bg-neutral-100 text-sm text-neutral-500">
        Loading service area map...
      </div>
    ),
  }
);

export default function ServiceAreaMap() {
  return <ServiceAreaMapInner />;
}
