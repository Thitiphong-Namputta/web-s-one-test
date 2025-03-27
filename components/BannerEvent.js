"use client";
import { useState } from "react";
import Image from "next/image";
import SOne_index_bullet1 from "../assets/images/SOne_index_bullet1.png";
import SOne_index_bullet2 from "../assets/images/SOne_index_bullet2.png";
import SOne_Mobile_pic from "../assets/images/SOne_Mobile_pic.jpg";
import SOne_index_search from "../assets/images/SOne_index_search.png";
import SOne_index_call from "../assets/images/SOne_index_call.png";
import SOne_index_btgo from "../assets/images/SOne_index_btgo.jpg";
import SOne_index_dash from "../assets/images/SOne_index_dash--.png";

export default function BannerEvent() {
  const [news, setNews] = useState([
    {
      id: 0,
      date: "19 NOV 2014",
      text: "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม",
      image: SOne_Mobile_pic,
    },
    {
      id: 1,
      date: "19 NOV 2014",
      text: "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม",
      image: SOne_Mobile_pic,
    },
    {
      id: 2,
      date: "19 NOV 2014",
      text: "ข่าวใหม่!! ข่าวและกิจกรรมข่าว และกิจกรรมข่าวและกิจกรรมข่าว และกิจกรรม",
      image: SOne_Mobile_pic,
    },
  ]);
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
        <div className="md:h-[220] md:w-[280] md:me-2">
          <div className="bg-[#f05a28] h-[36] Su_white21 flex items-center ps-2">
            ค้นหาศูนย์บริการใกล้บ้านคุณ
          </div>
          <div className="bg-black h-[184] flex flex-col items-end p-2">
            <div className="flex">
              <p className="Su_white21 me-1">จังหวัด</p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--จังหวัด--</option>
              </select>
            </div>
            <div className="flex my-2">
              <p className="Su_white21 me-1">เขต/อำเภอ</p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--เขต/อำเภอ--</option>
              </select>
            </div>
            <div className="flex">
              <p className="Su_white21 me-1">ถนน</p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--ถนน--</option>
              </select>
            </div>
            <div>
              <p className="text_orange13">
                หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
              </p>
              <div className="self-center mt-2">
                <a href="#">
                  <Image src={SOne_index_search} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[220] md:w-[900]">
          <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
            <div className="w-[600] mt-2 md:mt-0 md:me-2">
              <div className="grid grid-cols-2 p-1 border border-[#f05a28]">
                <p>News & Events</p>
                <div className="flex justify-end items-center">
                  <Image src={SOne_index_bullet1} alt="" />
                  <Image src={SOne_index_bullet2} alt="" className="mx-2" />
                  <Image src={SOne_index_bullet2} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center p-2 border border-t-0 border-b-4  border-[#f05a28]">
                {news.map((item) => (
                  <div key={item.id} className="static px-2">
                    <div className="absolute bg-stone-800 text-white m-2 p-1 rounded-md">
                      {item.date}
                    </div>
                    <Image
                      src={item.image}
                      alt=""
                      height={90}
                      className={
                        item.id == 0
                          ? "border-b-6 border-[#f05a28]"
                          : "border-b-6 border-stone-800"
                      }
                    />
                    <a href="#" className="link_T-black13">
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 md:mt-0">
              <div className="flex">
                <div className="background_Tip_Person h-[128] w-[150]"></div>
                <div className="bg-stone-800 h-[120] w-[128] -ml-2 text-zinc-50 border-y-1 border-t-1  border-y-orange-500 border-r-orange-500">
                  <p className="Su_orange21">Safety Tips</p>
                  <p className="text_white13 text-center">
                    " ควรเติมน้ำมันตอนเช้า <br /> ขณะที่อุณหภูมิบนพื้น <br />{" "}
                    ดินยังเย็นอยู่ "
                  </p>
                </div>
                <div className="background_Tip_Person_Text h-[128]"></div>
              </div>
              <div className="flex justify-between">
                <p className="Su_black18">สมัครรับข่าวสาร </p>
                <div className="flex">
                  <input
                    className="formLoginsend border border-[#f05a28]"
                    defaultValue="กรุณาใส่อีเมล์"
                  />
                  <Image src={SOne_index_btgo} alt="" />
                </div>
              </div>
              <div className="background_Dash w-full h-[1] my-3"></div>
              <Image src={SOne_index_call} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
