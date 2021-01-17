<template>
  <!--  эти компоненты у нас будут на каждой странице (см. App.vue - все что подключено в template-->
  <!--  будет на каждой странице, а тег <router-view /> будет заменяться уникальным контентом страниц-->
  <!--  которые указаны в @/router/index.ts-->

  <!--  <site-header></site-header>-->
  <!--   <site-footer></site-footer>-->

  <h1>I'm main page from main-route</h1>
</template>

<!-- Тут ты указываешь, что скрипт будет иметь синтаксис TypeScript. Если с ts не сталкивалась,-->
<!-- то лучше не надо его использовать - с непривычки запутаешься.-->
<!--<script lang="ts">-->
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainProductCatalog",
  components: {}
});
</script>
