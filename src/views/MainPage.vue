<template>
  <div>
    <HeaderComponent />
    <section class="wrapper">
      <div class="block">
        <div class="block__header">
          <img src="@/assets/images/binance.png" alt="binance image">
          <h3>Binance</h3>
        </div>

        <p>Поиск прибыльных p2p объявлений <span>обмена</span></p>
      </div>

      <div class="block">
        <div class="block__header">
          <img src="@/assets/images/huobi.png" alt="binance image">
          <h3>Huobi</h3>
        </div>

        <p>Поиск прибыльных p2p объявлений <span>обмена</span></p>
      </div>

      <div class="block">
        <div class="block__header">
          <img src="@/assets/images/bybit.png" alt="binance image">
          <h3>ByBit</h3>
        </div>

        <p>Поиск прибыльных p2p объявлений <span>обмена</span></p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useUserStore } from '../stores/userStore';
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { HeaderComponent },
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    onMounted(() => {
      userStore.fetchUserData();
    });

    const goToProfile = () => {
      router.push({ name: 'Profile' });
    };

    return { goToProfile };
  }
});
</script>

<style scoped>
.wrapper {
  display: grid;
  margin: 178px 175px;
  column-gap: 245px;
  grid-template-columns: repeat(3, 1fr);
}

.block__header {
  display: flex;
  column-gap: 40px;
  align-items: center;
}

.block__header img {
  width: 92px;
  height: 92px;
  object-fit: cover;
}

.block__header h3 {
  font-size: 23px;
  line-height: 1.26;
  font-weight: 600;
  color: #fff;
}

.block p {
  font-size: 28px;
  line-height: 1.32;
  font-weight: 700;
  color: #fff;
}

.block p span {
  color: #63E2B7;
}
</style>
