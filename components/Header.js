"use client";
import Image from "next/image";
import SOne_index_logo from "../assets/images/SOne_index_logo.png";
import SOne_index_iconthai from "../assets/images/SOne_index_iconthai.jpg";
import SOne_index_iconthai2 from "../assets/images/SOne_index_iconthai2.jpg";
import SOne_index_iconeng from "../assets/images/SOne_index_iconeng.jpg";
import SOne_index_iconeng2 from "../assets/images/SOne_index_iconeng2.jpg";
import SOne_index_btsearch from "../assets/images/SOne_index_btsearch.jpg";
import SOne_index_menu01 from "../assets/images/SOne_index_menu01.png";
import SOne_index_menu02 from "../assets/images/SOne_index_menu02.png";
import { useState } from "react";

export default function Header() {
  const [thai, setThai] = useState(true);
  return (
    <div>
      <div className="flex justify-between w-full">
        <Image src={SOne_index_logo} alt="" />
        <div>
          <div className="flex justify-end">
            {thai ? (
              <Image
                src={SOne_index_iconthai}
                alt=""
                onClick={() => setThai(!thai)}
              />
            ) : (
              <Image
                src={SOne_index_iconthai2}
                alt=""
                onClick={() => setThai(!thai)}
              />
            )}
            {!thai ? (
              <Image
                src={SOne_index_iconeng}
                alt=""
                onClick={() => setThai(!thai)}
              />
            ) : (
              <Image
                src={SOne_index_iconeng2}
                alt=""
                onClick={() => setThai(!thai)}
              />
            )}
          </div>
          <div className="flex justify-end">
            <input className="formLoginsearch" defaultValue="Search..." />
            <Image src={SOne_index_btsearch} alt="" />
          </div>
          <div className="text_black13">
            <a href="#" className="link_Tblack13">
              About S-ONE
            </a>
            |
            <a href="#" className="link_Tblack13">
              Job Opportunity
            </a>
            |
            <a href="#" className="link_Tblack13">
              Contact Us
            </a>
            |
            <a href="#" className="link_Tblack13">
              Site Map
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black grid grid-cols-2 gap-4 p-2 rounded-lg">
        <div className="flex  justify-between">
          <div className="flex items-center">
            <Image src={SOne_index_menu02} alt="" />
            <a href="#" className="text_orange13">
              Product & Services
            </a>
          </div>
          <div className="flex items-center">
            <Image src={SOne_index_menu01} alt="" />
            <a href="#" className="link_Twhite13">
              Promotions
            </a>
          </div>
          <div className="flex items-center">
            <Image src={SOne_index_menu01} alt="" />
            <a href="#" className="link_Twhite13">
              News & Events
            </a>
          </div>
          <div className="flex items-center">
            <Image src={SOne_index_menu01} alt="" />
            <a href="#" className="link_Twhite13">
              Safety Tips
            </a>
          </div>
          <div className="flex items-center">
            <Image src={SOne_index_menu01} alt="" />
            <a href="#" className="link_Twhite13">
              FAQS
            </a>
          </div>
          <div className="flex items-center">
            <Image src={SOne_index_menu01} alt="" />
            <a href="#" className="link_Twhite13">
              Location
            </a>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={SOne_index_menu02} alt="" />
          <Image src={SOne_index_menu01} alt="" />
          <Image src={SOne_index_menu01} alt="" />
        </div>
      </div>
    </div>
  );
}
