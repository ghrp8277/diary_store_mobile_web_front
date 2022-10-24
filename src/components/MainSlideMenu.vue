<template>
  <transition class="overlay">
    <div class="container">
      <div class="user-info">
        <img class="user-img" src="@/assets/logo.png" alt="" />
        <div class="user-name">{{ username }}</div>
      </div>
      <ul class="menu">
        <li v-for="(link, index) in link_list" :key="index" @click="link.click">
          <router-link :to="link.to"
            ><span>{{ link.name }}</span></router-link
          >
        </li>
      </ul>

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
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MainSlideMenu',
  emits: ['onSlideShow'],
  setup(props, { emit }) {
    const store = useMainStore();

    const { username } = storeToRefs(store);

    function onShowClose() {
      emit('onSlideShow', false);
    }

    const link_list = [
      {
        name: '홈',
        to: '/home',
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
        to: '/service',
        click: (e: Event) => {
          onShowClose();
        },
      },
    ];
    return {
      link_list,
      onShowClose,
      username,
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

ul {
  list-style: none;
  padding-inline-start: 0;

  text-align: center;
  margin: 0;

  li {
    list-style: none;
    height: 50px;

    line-height: 50px;
    font-weight: 300;

    a > span {
      display: inline-block;
      width: 200px;
      text-align: left;
    }

    &:hover {
      cursor: pointer;

      background: rgba(#f5f5f5, 0.6);

      font-weight: bold;
    }
  }
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

/* 미디어 쿼리 */
@media all and (max-height: 582px) {
  .footer {
    display: none;
  }
}

/* 미디어 쿼리 */
@media all and (max-width: 760px) {
  .container {
    width: 100%;

    height: auto;
  }

  .user-info {
    display: none;
  }

  .menu {
    li {
      width: 100%;
      border-bottom: 1px solid rgba(128, 128, 128, 0.2);

      span {
        width: 100%;

        text-align: center;
      }
    }
  }

  .footer {
    display: none;

    width: 100%;

    text-align: center;

    padding: 10px 0;
  }
}
</style>
