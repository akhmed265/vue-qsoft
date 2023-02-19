<template>
  <div class="news">
    <div class="container">
      <h2 class="section-title news-title">Новости компании</h2>
      <ul class="news-list">
        <li class="news-item">
          <h3>Цветок, который стоит на столе, такой загадочный.</h3>
          <p>А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя</p>
        </li>
        <li class="news-item news-item-large">
          <h2>Длинный заголовок большой новости</h2>
          <p>А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя</p>
        </li>
        <li class="news-item news-item-large">
          <h2>Длинный заголовок большой новости</h2>
          <p>А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя</p>
        </li>
        <li class="news-item">
          <h3>Цветок, который стоит на столе, такой загадочный.</h3>
          <p>А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CompanyNews'
})
</script>

<style lang="scss" scoped>
.news {
  background-color: #F0F0F0;
}

.news-title {
  line-height: 58px;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 50px;
  padding-top: 50px;
}

.news-list {
  display: flex;
  flex-wrap: wrap;
}

.news-item {
  width: 369px;
  min-height: 369px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: flex-end;
  color: #fff;
  position: relative;
}

.news-item:nth-child(1) {
  background-color: #34AADD;
  margin-right: 30px;
  margin-bottom: 30px;
}

.news-item:nth-child(2) {
  margin-bottom: 30px;
  background-image: url(../../assets/images/news-item2.jpg);
}

.news-item:nth-child(2)::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(167, 80, 123, 0.8);
}

.news-item:nth-child(3)::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(102, 128, 174, 0.8);
}

.news-item:nth-child(3) {
  margin-right: 30px;
  background-image: url(../../assets/images/news-item3.jpg);
}

.news-item:nth-child(4) {
  background-color: #F95A59;
}

.news-item-large {
  width: 770px;
  justify-content: center;
}

.news-item h2 {
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 25px;
  position: relative;
  z-index: 2;
}

.news-item p {
  font-size: 14px;
  line-height: 22px;
  position: relative;
  z-index: 2;
}

.news-item-large h3 {
  font-size: 30px;
  line-height: 42px;
}
</style>
