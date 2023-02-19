<template>
  <header class="page-header">
    <div class="container page-header-flex">
      <img src="../../assets/images/logo.svg" class="logo" alt="">

      <div class="search">
        <input type="search" placeholder="Поиск...">
      </div>

      <div class="header-contacts">
        <span class="header-phone">8 (999) 666-00-13</span>
        <span class="header-time">Звоните с 8 до 23!</span>
      </div>

      <button class="header-login" type="button">Войти</button>
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
.page-header {
  padding-top: 15px;
  padding-bottom: 18px;
  border-bottom: 1px solid #EBEBF1;
}

.page-header-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search input {
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

.content-title {
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 30px;
  color: #121920;
  margin-top: 105px;
  text-transform: uppercase;
}

.header-contacts {
  margin-left: 50px;
}

.header-phone {
  display: block;
  font-size: 18px;
  line-height: 29px;
}


.header-time {
  display: block;
  color: #BBC4D6;
  font-size: 14px;
  line-height: 22px;
  margin-top: -4px;
}

.header-login {
  margin-left: 30px;
  background: #34AADD;
  border: 1px solid #34AADD;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
}
</style>