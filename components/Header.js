"use client";
import { useState } from "react";
import Image from "next/image";
import SOne_index_logo from "../assets/images/SOne_index_logo.png";
import SOne_index_iconthai from "../assets/images/SOne_index_iconthai.jpg";
import SOne_index_iconthai2 from "../assets/images/SOne_index_iconthai2.jpg";
import SOne_index_iconeng from "../assets/images/SOne_index_iconeng.jpg";
import SOne_index_iconeng2 from "../assets/images/SOne_index_iconeng2.jpg";
import SOne_index_btsearch from "../assets/images/SOne_index_btsearch.jpg";
import SOne_index_menu01 from "../assets/images/SOne_index_menu01.png";
import SOne_index_menu02 from "../assets/images/SOne_index_menu02.png";
import SOne_index_btfacebook from "../assets/images/SOne_index_btfacebook.png";
import SOne_index_btfacebook1 from "../assets/images/SOne_index_btfacebook1.png";
import SOne_index_bttwitter from "../assets/images/SOne_index_bttwitter.png";
import SOne_index_bttwitter1 from "../assets/images/SOne_index_bttwitter1.png";
import SOne_index_btyoutube from "../assets/images/SOne_index_btyoutube.png";
import SOne_index_btyoutube1 from "../assets/images/SOne_index_btyoutube1.png";

export default function Header() {
  const [thai, setThai] = useState(true);
  const [headers, setHeaders] = useState([
    {
      id: 0,
      title: "Product & Services",
      image: SOne_index_menu02,
    },
    {
      id: 1,
      title: "Promotions",
      image: SOne_index_menu01,
    },
    {
      id: 2,
      title: "News & Events",
      image: SOne_index_menu01,
    },
    {
      id: 3,
      title: "Safety Tips",
      image: SOne_index_menu01,
    },
    {
      id: 4,
      title: "FAQS",
      image: SOne_index_menu01,
    },
    {
      id: 5,
      title: "Location",
      image: SOne_index_menu01,
    },
  ]);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
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
                className="ms-2"
                onClick={() => setThai(!thai)}
              />
            ) : (
              <Image
                src={SOne_index_iconeng2}
                alt=""
                className="ms-2"
                onClick={() => setThai(!thai)}
              />
            )}
          </div>
          <div className="flex justify-end my-2">
            <input
              className="formLoginsearch border border-[#f05a28]"
              defaultValue="Search..."
            />
            <Image src={SOne_index_btsearch} alt="" />
          </div>
          <div className="text_black13">
            <a href="#" className="link_Tblack13 mx-1">
              About S-ONE
            </a>
            |
            <a href="#" className="link_Tblack13 mx-1">
              Job Opportunity
            </a>
            |
            <a href="#" className="link_Tblack13 mx-1">
              Contact Us
            </a>
            |
            <a href="#" className="link_Tblack13 mx-1">
              Site Map
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black grid grid-cols-1 md:grid-cols-4 gap-4 p-2 rounded-lg w-full mt-2">
        <div className="md:col-span-3 flex justify-evenly md:justify-between">
          {headers.map((item) => (
            <div key={item.id} className="flex items-center">
              <Image src={item.image} alt="" className="me-2" />
              <a
                href="#"
                className={item.id == 0 ? "text_orange13" : "link_Twhite13"}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-evenly md:justify-end">
          <Image src={SOne_index_btfacebook} alt="" />
          <Image src={SOne_index_bttwitter} alt="" className="mx-2" />
          <Image src={SOne_index_btyoutube} alt="" />
        </div>
      </div>
    </div>
  );
}
