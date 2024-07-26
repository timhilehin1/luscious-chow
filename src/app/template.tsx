import TransitionLayout from "@/components/TransitionLayout";
import React from "react";


export default function rootTemplate({ children }:{children:React.ReactNode}) {
  return <TransitionLayout>{children}</TransitionLayout>
}