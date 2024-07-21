import Pill from "../components/UI/Pill";
import Image from "next/image";

export default function Architecture() {
  return (
    <section className="architecture my-12">
      <div className="container">
        <h2 className="section-title text-center">Внедряем современную архитектуру</h2>
        <h3 className="section-title text-center">Далее идет техническая информация</h3>
        <div className="pills-cnt mt-12 flex flex-col gap-12">
          <Pill>
            <div className="architecture-info grid lg:grid-cols-2">
              <Image src="/arch-1.png" alt="Vercel Logo" className="" width={100} height={24} priority />
              <div className="architecture-info__text flex flex-col justify-center p-12">
                <span className="text-3xl font-bold">Архитектура 2000-х и 2010-х годов</span>
                <ul className="max-w-[80%] mt-4">
                  <li className="list-disc list-inside">для доработки бизнес-логики требуются изменения в десятках сервисах на всех 4-х слоях</li>
                  <li className="list-disc list-inside">обмен данным через множество слоев делает систему сложной и низкопроизводительной</li>
                  <li className="list-disc list-inside">
                    обработка данных с использование устаревшего SQL-стандарта существенно замедляет разработку и увеличивает стоимость системы
                  </li>
                </ul>
              </div>
            </div>
          </Pill>

          <Pill>
            <div className="architecture-info grid lg:grid-cols-2">
              <Image src="/arch-2.png" alt="Vercel Logo" className="" width={100} height={24} priority />
              <div className="architecture-info__text flex flex-col justify-center p-12 lg:-order-1">
                <span className="text-3xl font-bold">Архитектура 2020-х годов</span>
                <ul className="max-w-[80%] mt-4">
                  <li className="list-disc list-inside">
                    бизнес-логика определяется только в одном слое ("База данных"), что существенно ускоряет разработку и повышает надежность системы
                  </li>
                  <li className="list-disc list-inside">хранение и обработка данных производится в базе данных, что повышает производительность и безопасность системы</li>
                  <li className="list-disc list-inside">
                    использование SQL-2023 для обработки запросов делает код компактным и понятным, а также снижает стоимость разработки и дальнейшей поддержки
                  </li>
                </ul>
              </div>
            </div>
          </Pill>
        </div>
      </div>
    </section>
  );
}
