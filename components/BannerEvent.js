"use client";
import { useState } from "react";
import Image from "next/image";
import SOne_index_bullet1 from "../assets/images/SOne_index_bullet1.png";
import SOne_index_bullet2 from "../assets/images/SOne_index_bullet2.png";
import SOne_Mobile_pic from "../assets/images/SOne_Mobile_pic.jpg";
import SOne_index_search from "../assets/images/SOne_index_search.png";
import SOne_index_tips1 from "../assets/images/SOne_index_tips1.png";
import SOne_index_btgo from "../assets/images/SOne_index_btgo.jpg";

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
      <div className="flex justify-between">
        <div className="h-[220] w-[280]">
          <div className="bg-[#f05a28] h-[36] Su_white21 flex items-center ps-2">
            ค้นหาศูนย์บริการใกล้บ้านคุณ
          </div>
          <div className="bg-black h-full flex flex-col items-end">
            <div className="flex">
              <p className="Su_white21">จังหวัด</p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--จังหวัด--</option>
              </select>
            </div>
            <div className="flex">
              <p className="Su_white21">เขต/อำเภอ</p>
              <select name="select2" className="formLogintype" id="select2">
                <option>--เขต/อำเภอ--</option>
              </select>
            </div>
            <div className="flex">
              <p className="Su_white21">ถนน</p>
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
        <div className="h-[220] w-[900]">
          <div className="flex justify-between">
            <div>
              <div className="grid grid-cols-2">
                <p>News & Events</p>
                <div className="flex justify-end items-center">
                  <Image src={SOne_index_bullet1} alt="" />
                  <Image src={SOne_index_bullet2} alt="" className="mx-2" />
                  <Image src={SOne_index_bullet2} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                {news.map((item) => (
                  <div key={item.id} className="px-2">
                    <Image src={item.image} alt="" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="background_Tip_Person h-[220]"></div>
              <div className="background_Tip_Person_Text h-[220]"></div>
              <div className="flex justify-end">
                <p>สมัครรับข่าวสาร </p>
                <input
                  className="formLoginsend"
                  defaultValue="กรุณาใส่อีเมล์"
                />
                <Image src={SOne_index_btgo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
