<template>
	<header>
		<div @click="goToMain" class="logo">
			<img :src="logoUrl" alt="Logotype" />
		</div>
		<button @click="goToProfile" class="user-info">
			{{ userStore.profile.second_name }} {{ userStore.profile.first_name }}
		</button>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';
import logoUrl from '@/assets/logo.svg';


export default defineComponent({
	data() {
		return {
			logoUrl,
		};
	},
	setup() {
		const userStore = useUserStore();
		const router = useRouter();

		const goToMain = () => {
			router.push({ name: 'Main' });
		};

		const goToProfile = () => {
			router.push({ name: 'Profile' });
		};

		return { userStore, goToMain, goToProfile };
	}
});
</script>

<style scoped>
	header {
		background-color: #63E2B7;
		box-sizing: border-box;
		height: 142px;
		padding: 39px 180px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		width: 81px;
		height: 81px;
		object-fit: cover;
		cursor: pointer;
	}

	.logo img {
		width: 100%;
		height: 100%;
	}

	.user-info {
		background: #fff;
		min-width: 250px;
		font-size: 24px;
		line-height: 1.2;
		font-weight: 600;
		color: #000;
		padding: 17px 0;
		border: none;
		outline: none;
		transition: all .3s ease 0s;
		cursor: pointer;

		&:hover {
			background: #f1f8fd;
		}
	}


</style>