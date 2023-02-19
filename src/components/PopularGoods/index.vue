<template>
  <div class="popular">
    <div class="container">
      <h2 class="section-title">Популярные товары</h2>

      <ul class="popular-list">
        <li class="popular-item">
          <div class="popular-item-top">
            <ul class="popular-item-tags">
              <li class="popular-item-tag stock">Акция</li>
              <li class="popular-item-tag hit">Хит</li>
              <li class="popular-item-tag best">Лучшая цена</li>
            </ul>
            <img src="../../assets/images/popular-1.jpg" alt="" class="popular-item-image">
          </div>

          <div class="popular-item-content">
            <h3 class="popular-item-name">Цветок, который стоит на столе, такой загадочный.</h3>
            <p class="popular-item-description">А тут описание цветка, придающее ему загадочности и вызывающее интерес
              пользователя</p>
          </div>

          <div class="popular-item-bottom">
            <div class="popular-item-prices">
              <span class="popular-item-price-old">1 499  ₽</span>
              <span class="popular-item-price">799  ₽</span>
            </div>

            <button class="popular-item-add"></button>
          </div>
        </li>

        <li class="popular-item">
          <div class="popular-item-top">
            <ul class="popular-item-tags">
              <li class="popular-item-tag stock">Акция</li>
            </ul>
            <img src="../../assets/images/popular-2.jpg" alt="" class="popular-item-image">
          </div>

          <div class="popular-item-content">
            <h3 class="popular-item-name">Набор юного инстаблогера</h3>
            <p class="popular-item-description">Посмотрите на него. Он покажет всем какой вы классный и творческий.
              Главное не забыть посидеть на подоконнике с бокаль...</p>
          </div>
          <div class="popular-item-bottom">
            <span class="popular-item-price">13 666 ₽</span>

            <button class="popular-item-add"></button>
          </div>
        </li>

        <li class="popular-item">
          <div class="popular-item-top">
            <ul class="popular-item-tags">
              <li class="popular-item-tag hit">Хит</li>
            </ul>
            <img src="../../assets/images/popular-3.jpg" alt="" class="popular-item-image">
          </div>

          <div class="popular-item-content">
            <h3 class="popular-item-name">Лампа. Просто лампа.</h3>
            <p class="popular-item-description">В паре с загадочным цветком добавит загадочности вашему интерьеру</p>
          </div>

          <div class="popular-item-bottom">
            <div class="popular-item-prices">
              <span class="popular-item-price-old">2 699 ₽</span>
              <span class="popular-item-price">1 789 ₽</span>
            </div>
            <button class="popular-item-add"></button>
          </div>
        </li>

        <li class="popular-item">
          <div class="popular-item-top">
            <ul class="popular-item-tags">
              <li class="popular-item-tag hit">Хит</li>
              <li class="popular-item-tag stock">Акция</li>
            </ul>
            <img src="../../assets/images/popular-4.jpg" alt="" class="popular-item-image">
          </div>

          <div class="popular-item-content">
            <h3 class="popular-item-name">Классные деревянные минималистичные часы с..</h3>
            <p class="popular-item-description">В паре с загадочным цветком добавит загадочности вашему интерьеру</p>
          </div>

          <div class="popular-item-bottom">
            <div class="popular-item-prices">
              <span class="popular-item-price-old">2 199 ₽</span>
              <span class="popular-item-price">1 899 ₽</span>
            </div>
            <buttom class="popular-item-add"></buttom>
          </div>
        </li>
      </ul>

      <a href="" class="popular-link">Смотреть каталог</a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'PopularGoods'
})

</script>

<style lang="scss" scoped>
.popular {
  padding-bottom: 90px;
}

.popular-link {
  display: inline-block;
  padding: 18px 55px 18px 30px;
  color: #34AADD;
  font-size: 14px;
  line-height: 14px;
  border: 1px solid #34AADD;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  background-image: url(../../assets/images/arrow.svg);
  background-repeat: no-repeat;
  background-position: calc(100% - 30px) center;
}

.section-title {
  line-height: 58px;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 50px;
}


.popular-list {
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-column-gap: 30px;
  margin-bottom: 30px;
}

.popular-item {
  border: 1px solid #EBEBF1;
  border-radius: 6px;
}

.popular-item-top {
  position: relative;
  margin-bottom: 10px;
}

.popular-item-image {
  display: block;
  width: 100%;
}

.popular-item-tags {
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 22px;
}

.popular-item-tag {
  margin-right: 3px;
  margin-bottom: 3px;
  padding: 3px 10px;
  color: #FFFFFF;
}

.popular-item-tag.stock {
  background-color: #FAC300;
}

.popular-item-tag.hit {
  background-color: #DC2C53;
}

.popular-item-tag.best {
  background-color: #A7507B;
}

.popular-item-content {
  min-height: 121px;
  margin-bottom: 7px;
}

.popular-item-name {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  color: #121920;
  line-height: 25px;
  margin-bottom: 5px;
}

.popular-item-description {
  margin-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #768298;
}

.popular-item-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
}

.popular-item-add {
  width: 50px;
  height: 50px;
  background-color: #34AADD;
  box-shadow: -2px -2px 8px rgba(0, 0, 0, 0.05), 2px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  border: none;
  background-image: url(../../assets/images/cart-add-icon.svg);
  background-position: center;
  background-repeat: no-repeat;
}

.popular-item-price-old {
  position: relative;
  display: block;
  line-height: 20px;
  font-size: 14px;
  color: #768298;
  margin-bottom: 1px;
}

.popular-item-price-old::after {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 46px;
  background-color: #F95A59;
  border: 1px solid #F95A59;
  transform: rotate(24deg);
}

.popular-item-price {
  line-height: 22px;
  font-size: 14px;
  color: #121920;
  font-weight: 700;
}
</style>