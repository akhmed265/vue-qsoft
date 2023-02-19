<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <img src="../../assets/images/Group.svg" alt="" class="logo">

        <div class="footer-social">
          <img src="../../assets/images/tube.svg" class="youtube" alt="">
          <img src="../../assets/images/inst.svg" class="instagram" alt="">
        </div>

        <ul class="footer-menu">
          <li>
            <a href="#" class="footer-menu-link regulations">Правила</a>
          </li>
          <li>
            <a href="#" class="footer-menu-link document">Документы</a>
          </li>
          <li>
            <a href="#" class="footer-menu-link politics">Политика конфиденциальности</a>
          </li>
        </ul>

        <button class="footer-contact-btn">Заказать звонок</button>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheFooter',

  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  background-color: #FAFAFA;
  height: 110px;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.youtube {
  margin-left: 81px;
  margin-right: 23px;
}

.instagram {
  margin-right: 81px;
}

.footer-menu {
  display: flex;
}

.document {
  margin-left: 30px;
  margin-right: 30px;
}

.footer-menu-link {
  color: #34AADD;
  text-decoration: none;
}

.phone {
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 30px;
  padding-right: 10px;
}

.footer-contact-btn {
  margin-left: auto;
  background-color: #34AADD;
  border-radius: 5px;
  height: 50px;
  margin-bottom: auto;
  margin-top: auto;
  border: none;
  position: relative;
  padding-left: 58px;
  padding-right: 40px;
  color: #FFFFFF;
}

.footer-contact-btn::after {
  content: "";
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 17px;
  background-image: url(../../assets/images/phone-icone.svg);
  background-repeat: no-repeat;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
