<template>
  <section id="architecture" class="architecture">
    <div v-if="locale === 'ru'" class="container">
      <h2 class="section-title text-center">Внедряем современную архитектуру</h2>
      <h3 class="section-title text-center">Далее идет техническая информация</h3>
      <div class="pills-cnt my-12 flex flex-col gap-12">
        <UIPill>
          <div class="architecture-info grid lg:grid-cols-2 place-items-center">
            <NuxtImg src="/arch-1.png" alt="Architecture chart 1" class="w-auto h-80 object-contain" />
            <div class="architecture-info__text flex flex-col justify-center p-0 mt-8 sm:mt-0 sm:p-12">
              <span class="text-3xl font-bold">Архитектура 2000-х и 2010-х годов</span>
              <ul class="mt-4 mb-8">
                <li class="list-disc list-inside pl-6">для доработки бизнес-логики требуются изменения в десятках сервисах на всех 4-х слоях</li>
                <li class="list-disc list-inside pl-6">обмен данным через множество слоев делает систему сложной и низкопроизводительной</li>
                <li class="list-disc list-inside pl-6">
                  обработка данных с использование устаревшего SQL-стандарта существенно замедляет разработку и увеличивает стоимость системы
                </li>
              </ul>
            </div>
          </div>
        </UIPill>

        <UIPill>
          <div class="architecture-info grid lg:grid-cols-2 place-items-center">
            <NuxtImg src="/arch-2.png" alt="Architecture chart 2" class="w-auto h-80 object-contain" />
            <div class="architecture-info__text flex flex-col justify-center p-0 mt-8 sm:mt-0 sm:p-12 lg:-order-1">
              <span class="text-3xl font-bold">Архитектура 2020-х годов</span>
              <ul class="mt-4 mb-8">
                <li class="list-disc list-inside pl-6">
                  бизнес-логика определяется только в одном слое ("База данных"), что существенно ускоряет разработку и повышает надежность системы
                </li>
                <li class="list-disc list-inside pl-6">хранение и обработка данных производится в базе данных, что повышает производительность и безопасность системы</li>
                <li class="list-disc list-inside pl-6">
                  использование SQL-2023 для обработки запросов делает код компактным и понятным, а также снижает стоимость разработки и дальнейшей поддержки
                </li>
              </ul>
            </div>
          </div>
        </UIPill>
      </div>
    </div>
    <div v-else class="container">
      <h2 class="section-title text-center">Transform Architecture 200x to 202x</h2>
      <!-- <h3 class="section-title text-center">Далее идет техническая информация</h3> -->
      <div class="pills-cnt my-12 flex flex-col gap-12">
        <UIPill>
          <div class="architecture-info grid lg:grid-cols-2 place-items-center">
            <NuxtImg src="/arch-1.png" alt="Architecture chart 1" class="w-auto h-80 object-contain" />
            <div class="architecture-info__text flex flex-col justify-center p-0 mt-8 sm:mt-0 sm:p-12">
              <span class="text-3xl font-bold">Architecture 200x - 201x</span>
              <ul class="mt-4 mb-8">
                <li class="list-disc list-inside pl-6">any Business logic update leads to multiple updates on four! layers inside dozens of services</li>
                <li class="list-disc list-inside pl-6">data exchange via multiple layers makes the system complex and low-performance</li>
                <li class="list-disc list-inside pl-6">data processing using non-SQL languages (Python, Ruby, etc) slows down the software development</li>
              </ul>
            </div>
          </div>
        </UIPill>

        <UIPill>
          <div class="architecture-info grid lg:grid-cols-2 place-items-center">
            <NuxtImg src="/arch-2.png" alt="Architecture chart 2" class="w-auto h-80 object-contain" />
            <div class="architecture-info__text flex flex-col justify-center p-0 mt-8 sm:mt-0 sm:p-12 lg:-order-1">
              <span class="text-3xl font-bold">Architecture 202x</span>
              <ul class="mt-4 mb-8">
                <li class="list-disc list-inside pl-6">two of three layers are static => no need to spend time on coding and testing of them</li>
                <li class="list-disc list-inside pl-6">
                  only one layer for business-logic => no need to develop hundreds of interfaces and to exchange data between multiple layers
                </li>
                <li class="list-disc list-inside pl-6">
                  data processing using SQL-2023 => less code & higher performance comparing to usage of Python, Ruby and other non-SQL languages
                </li>
              </ul>
            </div>
          </div>
        </UIPill>
      </div>

      <UIPill>
        <div class="arch-table-cnt">
          <div tabindex="0">
            <div class="arch-table" role="region" tabindex="0">
              <table>
                <thead>
                  <tr>
                    <th><b>Process</b></th>
                    <th><b>Typical dev.</b></th>
                    <th><b>UR &amp; UB</b></th>
                    <th><b>Result</b></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data architecture</td>
                    <td>based on SQL-1986</td>
                    <td>based on SQL-2023</td>
                    <td>High flexibility and 10x performance</td>
                  </tr>
                  <tr>
                    <td>Business logic</td>
                    <td>
                      <p>Frontend<br />Backend</p>
                    </td>
                    <td>All major business logic in Database</td>
                    <td>Simple and high-performance system without extra connectors</td>
                  </tr>
                  <tr>
                    <td>Frontend</td>
                    <td>
                      <p>Business logic</p>
                      <p>API to backend</p>
                      <p>API test cases</p>
                    </td>
                    <td>Not required</td>
                    <td>Exclude redundant elements and save thousands of hours</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Backend<br />(except Database)</p>
                    </td>
                    <td>
                      <p>Business logic</p>
                      <p>API to frontend</p>
                      <p>API test cases</p>
                      <p>Queries to database</p>
                    </td>
                    <td>Not required</td>
                    <td>Exclude redundant elements and save thousands of hours</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>
                      <p>Relational structure</p>
                      <p>Simple SQL-1986 queries</p>
                    </td>
                    <td>
                      <p>Flexible structure</p>
                      <p>High-power SQL-2023 queries</p>
                    </td>
                    <td>
                      <p>High flexibility</p>
                      <p>High performance</p>
                      <p>Low code</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </UIPill>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = userStore;
</script>

<style scoped>
.arch-table {
  overflow: auto;
  width: 100%;
}

.arch-table table {
  border: 1px solid #dededf;
  height: 100%;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 1px;
  text-align: left;
}

.arch-table caption {
  caption-side: top;
  text-align: left;
}

.arch-table th {
  border: 1px solid #dededf;
  background-color: #eceff1;
  color: #000000;
  padding: 5px;
}

.arch-table td {
  border: 1px solid #dededf;
  background-color: #ffffff;
  color: #000000;
  padding: 5px;
}
</style>
