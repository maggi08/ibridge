<template>
  <div class="light-white-bg py-16">
    <v-container>
      <p class="label grey-color">{{ $t('subtitle') }}</p>
      <h2 class="mt-3 blue-color m-w-480">{{ $t('title') }}</h2>

      <div class="gallery mt-14">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          class="gallery-image"
        >
          <img class="" v-if="item" :src="item" alt="" />
        </div>
      </div>
      <h2
        v-if="gallery && gallery.length < 1"
        class="blue-color m-w-480 text-center my-16 mx-auto"
      >
        {{ $t('nothing') }}
      </h2>
    </v-container>
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Photos of our students",
    "subtitle": "Photos",
    "nothing": "Nothing found"
  },
  "ru": {
    "title": "Фотографии наших студентов",
    "subtitle": "Фотогалерея",
    "nothing": "Ничего не найдено"
  }
}
</i18n>

<script>
export default {
  data: () => ({
    gallery: [
      require('../assets/img/gallery/1.jpg'),
      require('../assets/img/gallery/2.jpg'),
      require('../assets/img/gallery/3.jpg'),
      require('../assets/img/gallery/4.jpg'),
      require('../assets/img/gallery/5.jpg'),
      require('../assets/img/gallery/1.jpg'),
      require('../assets/img/gallery/2.jpg'),
      require('../assets/img/gallery/3.jpg'),
      require('../assets/img/gallery/4.jpg'),
      require('../assets/img/gallery/5.jpg'),
    ],
  }),
}
</script>

<style scoped lang="scss">
.gallery {
  width: 100%;
  height: 480px;

  overflow-x: scroll;
  overflow-y: hidden;

  display: flex;
  grid-gap: 24px;
  // grid-template-columns: repeat(3, 1fr);
  // grid-template-rows: repeat(8, 5vw);
  // grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  // grid-template-rows: repeat(2, 226px);
  // grid-auto-flow: dense;

  &-image {
    position: relative;
    object-fit: cover;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    height: 40px;
  }
  &::-webkit-scrollbar-thumb {
    border-bottom: 2px solid #d2840d;
  }
}
</style>
