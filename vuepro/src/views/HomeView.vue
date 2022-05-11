<template>
  <div>
    <div class="home">
          <LeftContainer />
          <RightContainer />
    </div>
      <FirstSection />
      <SecondSection />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RightContainer from '@/views/MainPage/RightContainer.vue'
import LeftContainer from '@/views/MainPage/LeftContainer.vue'
import FirstSection from '@/views/MainPage/FirstSection.vue'
import SecondSection from '@/views/MainPage/SecondSection.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    RightContainer, LeftContainer, FirstSection, SecondSection,
  },
});
</script>

<style scoped>
.home{
  padding: 40px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
  background-image: url('../assets/img/Wallpaperbody.jpg');
  /* opacity: 0.8; */
  /* height: 700px; */
}

/* .leftContainer{
  width: 50vw;
}

.rightContainer{

  width: 50vw;
} */

@media screen and (max-width: 768px) {

}

</style>
