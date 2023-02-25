<template>
  <header class="header">
    <div class="container header_flex">
      <img src="../../assets/images/logo.svg" class="header__logo" alt="">

      <div class="header__search">
        <input type="search" placeholder="Поиск...">
      </div>

      <div class="header__contacts">
        <span class="header__phone">8 (999) 666-00-13</span>
        <span class="header__time">Звоните с 8 до 23!</span>
      </div>

      <div class="profile">
        <button
          type="button"
          class="profile__login"
        >
          Вход или регистрация
        </button>

        <div class="profile__menu">
          <router-link to="/compare" class="profile__link">
            <i class="fa fa-balance-scale profile__icon-compare" aria-hidden="true" />
            <span>Сравнение</span>
          </router-link>

          <router-link to="/favorite" class="profile__link">
            <i class="fa fa-heart-o profile__icon-favorite" aria-hidden="true" />
            <span>Избранное</span>
          </router-link>
        </div>

        <router-link to="/cart" class="profile__link">
          <i class="fa fa-shopping-cart profile__icon-cart" aria-hidden="true" />
        </router-link>
      </div>


    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheHeader',

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding-top: 15px;
  padding-bottom: 18px;
  border-bottom: 1px solid #EBEBF1;

  &_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__search input {
    width: 660px;
    height: 40px;
    padding-left: 39px;
    font-size: 14px;
    color: #BBC4D6;
    background-image: url('../../assets/images/loupe.svg');
    background-repeat: no-repeat;
    background-position: 10px center;
    border: 1px solid #EBEBF1;
    border-radius: 5px;
  }

  &__contacts {
    margin-left: 50px;
  }

  &__phone {
    display: block;
    font-size: 18px;
    line-height: 29px;
  }

  &__time {
    display: block;
    color: #BBC4D6;
    font-size: 14px;
    line-height: 22px;
  }
}

.profile {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;

  &__login {
    background-color: transparent;
    border: none;
    font-size: 15px;
    margin-bottom: 10px;

    &:hover {
      color: #F95A59;
    }
  }

  &__link {
    color: #000000;
    font-size: 16px;
    text-decoration: none;

    &:first-child {
      margin-right: 11px;
    }
  }

  &__icon-compare {
    margin-right: 3px;
  }

  &__icon-favorite {
    margin-right: 3px;
  }

  &__icon-cart {
    font-size: 25px;
    position: absolute;
    left: 250px;
    right: 0;
    bottom: 0;
    top: 5px;
  }
}
</style>