"use client";

// components
import { Button } from "../components/UI/Button";
import { Backdrop } from "../components/UI/Backdrop";

export default function Hero() {
  const handleBtn = (url: string) => {
    console.log(`bnttt`);
  };

  return (
    <section className="hero grid items-center bg-image relative flex-1 min-h-[70dvh]">
      {/* <Backdrop /> */}
      <div className="container flex flex-col items-center relative">
        <h1>
          Мы создаем <span className="text-accent-color">B2B&nbsp;системы</span>
          <br />
          <span className="text-gray-500">Легкие. Мощные. Быстрые.</span>
        </h1>
        <h3 className="max-w-3xl text-center mt-4 text-clamp">Создание B2B систем с нуля под ваши нужды или доработка уже готового продукта. Мы можем все.</h3>
        <div className="head__btns mt-8 flex gap-x-12 gap-y-4 flex-wrap justify-center">
          <Button type="accent-btn" onClick={() => handleBtn("contacts")}>
            связаться
          </Button>
          <Button type="black-btn" onClick={() => handleBtn("projects")}>
            проекты
          </Button>
        </div>
      </div>
    </section>
  );
}
