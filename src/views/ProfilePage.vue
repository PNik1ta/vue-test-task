<template>
	<div>
		<HeaderComponent />
		<h1>Личный кабинет</h1>
		<section class="profile">
			<img src="@/assets/images/profile-avatar.png" alt="profile image">

			<div class="profile__data">
				<h1>Пользователь</h1>
				<div class="item">
					<p>Фамилия</p>
					<p>
						{{ userStore.profile.second_name }} </p>
				</div>

				<div class="item">
					<p>Имя</p>
					<p>
						{{ userStore.profile.first_name }} </p>
				</div>

				<div class="item">
					<p>Отчество</p>
					<p>
						{{ userStore.profile.middle_name }} </p>
				</div>

				<div class="item">
					<p>Номер телефона</p>
					<p>
						{{ userStore.profile.phone }} </p>
				</div>
				<button class="btn" @click="goToMain">На Главную</button>

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
			if (!userStore.profile.second_name) {
				userStore.fetchUserData();
			}
		})

		const goToMain = () => {
			router.push({ name: 'Main' });
		};

		return { userStore, goToMain };
	}
});
</script>

<style scoped>
.profile {
	margin: 116px auto;
	display: flex;
	column-gap: 85px;
	align-items: center;
	justify-content: center;
}

.profile img {
	width: 433px;
	height: 418px;
	border-radius: 50%;
	object-fit: cover;
	overflow: hidden;
}

.profile__data h1 {
	text-align: center;
	font-size: 48px;
	line-height: 1.2;
	color: #fff;
	font-weight: 400;
}

.item {
	max-width: 481px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;

	&:first-child {
		margin-top: 62px;
	}

	&:not(:last-child) {
		margin-bottom: 23px;
	}
}

.item p {
	font-size: 24px;
	line-height: 1.2;
	font-weight: 400;
	color: #fff;
}

.btn {
	margin-top: 139px;
	min-width: 600px;
	padding: 3px 0;
	border-radius: 50px;
	background-color: #63E2B7;

	font-size: 36px;
	line-height: 1.19;
	color: #fff;
	font-weight: 400;
	cursor: pointer;
	transition: all .3s ease 0s;

	&:hover {
		background-color: #62d7b0;
	}
}
</style>