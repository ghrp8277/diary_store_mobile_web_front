<template>
  <transition class="overlay">
    <div class="container">
      <div class="user-info">
        <img class="user-img" src="@/assets/logo.png" alt="" />
        <div class="user-name">유저이름</div>
      </div>
      <div class="menu">
        <li v-for="(link, index) in link_list" :key="index" @click="link.click">
          <router-link :to="link.to">{{ link.name }}</router-link>
        </li>
      </div>

      <div class="footer">
        <router-link to="/store" @click="onShowClose" tag="div">
          <strong>DiaryStudio<em>Emoticon</em> Shop</strong>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'slideMenu',
  emits: ['onShowClose'],
  setup(props, { emit }) {
    function onShowClose() {
      emit('onShowClose', false);
    }

    const link_list = [
      {
        name: '홈',
        to: '/content',
        click: (e: Event) => {
          onShowClose();
        },
      },
      {
        name: '구매내역',
        to: '/payment',
        click: (e: Event) => {
          onShowClose();
        },
      },
      {
        name: '즐겨찾기',
        to: '/favorite',
        click: (e: Event) => {
          onShowClose();
        },
      },
      {
        name: '고객센터',
        to: '/content',
        click: (e: Event) => {
          onShowClose();
        },
      },
    ];
    return {
      link_list,
      onShowClose,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  position: fixed;
  top: 60px;

  width: 300px;
  height: calc(100% - 60px);

  z-index: 1000;
}

.user-info {
  width: 300px;
  height: 250px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-name,
.user-img {
  width: 200px;
  margin: 5px auto;
  font-weight: bold;
  font-size: 17px;
}
img {
  border-radius: 100px;
}

li {
  list-style: none;
  width: 200px;
  height: 50px;
  margin: auto;
  text-align: left;
  line-height: 50px;
}

li:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: black;
}

.overlay {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease-out;
  }

  &-enter,
  &-leave-to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.footer {
  position: absolute;
  bottom: 0;

  font-size: small;

  padding: 10px 20px;

  border-top: 1px solid #5f5f5f;

  width: 260px;
  height: 30px;

  text-align: left;
  line-height: 30px;

  font-size: 12px;

  .router-link-active {
    cursor: pointer;
  }

  em {
    font-style: normal;
    color: #000;
  }
}

// /* 미디어 쿼리 */
// @media all and (max-width: 760px) {
// }
</style>
