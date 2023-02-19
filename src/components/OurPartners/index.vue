<template>
  <div class="partners">
    <h1 class="partners-title section-title">Наши партнёры</h1>

    <ul class="partners-list">
      <li class="partner henkel">
        <img src="../../assets/images/henkel.png" alt="">
      </li>

      <li class="partner john">
        <img src="../../assets/images/john-deere.png" alt="">
      </li>

      <li class="partner">
        <img src="../../assets/images/mc-donald-s.png" alt="">
      </li>

      <li class="partner">
        <img src="../../assets/images/ikea.png" alt="">
      </li>

      <li class="partner reebok">
        <img src="../../assets/images/reebok.png" alt="">
      </li>

      <li class="partner">
        <img src="../../assets/images/nike.png" alt="">
      </li>

      <li class="partner">
        <img src="../../assets/images/caterpillar.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'OurPartners'
})

</script>

<style lang="scss" scoped>
.partners {
  width: 1170px;
  padding-top: 90px;
  padding-bottom: 90px;
  margin-left: auto;
  margin-right: auto;
}

.partner {
  border: 1px solid #EBEBF1;
  border-radius: 5px;
  height: 100px;
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.news-item-large p {
  font-size: 16px;
  line-height: 26px;
  padding-right: 165px;
}


.partners-title {
  line-height: 58px;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 50px;
}

.partners-list {
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  display: grid;
  list-style: none;
  padding-left: 0;
  grid-template-columns: repeat(4, 270px);
  grid-gap: 30px
}
</style>