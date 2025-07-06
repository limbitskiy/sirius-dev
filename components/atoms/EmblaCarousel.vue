<script setup lang="ts">
import emblaCarouselVue from "embla-carousel-vue";
import type { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";

interface Item {
  id: number;
  image: string;
  title: { en: string; ru: string };
  text?: string;
}

interface CarouselProps {
  items: Item[] | [];
  options?: EmblaOptionsType;
}

const props = defineProps<CarouselProps>();

const { locale } = useI18n();
const [emblaRef, emblaApi] = emblaCarouselVue(props.options);

const selectedSlideId = ref(0);

const onSelect = (data: EmblaCarouselType) => {
  selectedSlideId.value = data.selectedScrollSnap();
};

const onDotClick = (slideId: number) => {
  emblaApi.value?.scrollTo(slideId);
};

onMounted(() => {
  emblaApi.value?.scrollTo(selectedSlideId.value);
  emblaApi.value?.on("select", onSelect);
});
</script>

<template>
  <div ref="emblaRef" class="embla">
    <div class="embla__container">
      <div v-for="item in items" :key="item.id" class="embla__slide">
        <UCard class="bg-greybg">
          <template #header>
            <span class="font-bold">
              {{ item.title[locale] }}
            </span>
          </template>
          <img class="rounded-lg object-cover w-full" :src="item.image" />
        </UCard>
      </div>
    </div>

    <div class="flex gap-4 justify-center mt-4 p-4">
      <div
        v-for="(dot, index) in items"
        :key="dot.id"
        :class="index === selectedSlideId ? 'bg-accent scale-115' : 'bg-darkblue opacity-60'"
        class="w-3 h-3 rounded-full cursor-pointer hover:opacity-90 transition-all"
        @click="() => onDotClick(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.embla {
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 3rem;
  --slide-size: 50%;
  overflow: hidden;
}

.embla__viewport {
  overflow: hidden;
}

.embla__container {
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
}

.embla__slide {
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  margin-block: 1rem;
}

.embla__slide__number {
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--slide-height);
  user-select: none;
}

@media (max-width: 1024px) {
  .embla {
    --slide-size: 90%;
  }
}
</style>
