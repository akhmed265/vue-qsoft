<template>
  <nav class="main-menu">
    <div class="container">
      <ul class="main-menu-list">
        <li
          v-for="menuItem in menu"
          :key="menuItem.link"
          class="main-menu-item"
        >
          <router-link
            :to="menuItem.link"
            class="main-menu-link"
          >
            {{ menuItem.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'TheMenu',

  setup() {
    const menu = [
      {
        link: '/',
        name: 'Главная'
      },
      {
        link: '/goods',
        name: 'Товары'
      },
      {
        link: '/shipping-and-payment',
        name: 'Доставка и оплата'
      },
      {
        link: '/guarantee',
        name: 'Гарантия'
      },
      {
        link: '/about',
        name: 'О нас'
      },
      {
        link: '/contacts',
        name: 'Контакты'
      },
    ]

    return {
      menu
    }
  }
})
</script>

<style lang="scss" scoped>
.main-menu {
  padding-top: 16px;
  padding-bottom: 15px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.main-menu-list {
  display: flex;
  font-size: 18px;
}

.main-menu-item {
  margin-right: 60px;
  line-height: 29px;
}

.main-menu-link {
  color: #768298;
  text-decoration: none;
}

.main-menu-link:hover,
.main-menu-link.router-link-exact-active {
  color: #F95A59;
}
</style>