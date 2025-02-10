"use client";

import { Three } from "@/app/helpers/Three";
import * as THREE from "three";
import View1 from "./components/View1";

export default function Home() {
  console.log("THREE", THREE);
  return (
    <>
      <div>Hellossss</div>
      <Three>
        <View1 />
      </Three>
    </>
  );
}
