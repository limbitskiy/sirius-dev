"use client";

import Image from "next/image";
import SocialIcons from "../components/UI/SocialIcons";
import Logo from "../components/UI/Logo";
import { Button } from "../components/UI/Button";

export default function Footer() {
  const handleBtn = (e: string) => {
    console.log(`click`);
  };

  return (
    <section className="footer bg-black text-gray-300 text-lg grey-gradient relative text-center lg:text-start">
      <div className="bg-squares absolute inset-0 z-0"></div>
      <div className="container relative z-10 px-4">
        <div className="footer-main flex items-center justify-between flex-col lg:flex-row">
          <div className="footer-start flex-1 py-12">
            <div className="footer col flex flex-col gap-6 max-w-60 items-center lg:items-start">
              <Logo variant="white" />
              <p>Быстрая разработка гибких B2B систем на современных технологиях</p>
              <Button type="accent-btn" onClick={() => handleBtn("contacts")}>
                связаться
              </Button>
            </div>
          </div>
          <div className="footer-end flex flex-1 items-center justify-between flex-col lg:flex-row gap-8 lg:gap-0">
            <div className="footer-col">
              <span className="text-2xl text-white">Российский офис</span>
              <p className="mt-4">
                Новодмитровская ул., 2 <br />
                корпус 1, 12 этаж
                <br />
                Москва, Россия,
                <br /> 127015
              </p>
              <a className="text-white underline" href="#">
                на карте
              </a>
            </div>
            <div className="footer-col mb-8 lg:mb-0">
              <span className="text-2xl text-white">Европейский офис</span>
              <p className="mt-4">
                Sirius-dev D.O.O. <br />
                Fruškogorska 1, office 2-VIII, <br />
                Novi Sad, Republic of Serbia, <br />
                21102
              </p>
              <a className="text-white underline" href="#">
                на карте
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between border-t border-gray-400 py-4">
          <SocialIcons />
          <div className="copyright">
            <span className="text-sm">Created and maintained by Sirius Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}
