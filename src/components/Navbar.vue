<template>
	<div>
		<b-navbar class="navbar is-dark">
					<template #brand>
							<b-navbar-item tag="router-link" :to="{ path: '/' }">
									<h1 class="logo">TEZER</h1>
							</b-navbar-item>
					</template>
					<template #start>
							<b-navbar-item href="/">
									Rewards Projection
							</b-navbar-item>
							<b-navbar-item href="#">
									Rewards History
							</b-navbar-item>
							<b-navbar-dropdown label="Contact">
									<b-navbar-item href="https://t.me/TezerToken">
											Telegram
									</b-navbar-item>
									<b-navbar-item href="https://Tezercoin.com">
											Website
									</b-navbar-item>
							</b-navbar-dropdown>
					</template>

					<template #end>
							<b-navbar-item tag="div">
									<div class="buttons">
											<a class="button is-primary">
													<strong @click="metamaskClicked()">Connect Metamask</strong>
											</a>
									</div>
							</b-navbar-item>
					</template>
			</b-navbar>

			<template v-if="metamaskWarning==true">
				<b-notification
            type="is-warning"
            has-icon
            aria-close-label="Close notification"
            role="alert">
            Sorry but this option isn't available yet, this website is under heavy development, stay tuned!
        </b-notification>
			</template>
	</div>
</template>

<script>
	export default {
		name: "Navbar",

		data() {
			return {
				metamaskWarning: Boolean,
			}
		},

		methods: {
			//very bad solution ikr
			metamaskClicked() {
				this.metamaskWarning = true
			}
		}
	}
</script>

<style scoped>
	.logo {
		font-weight: 900;
		font-size: 1.5rem;
	}
</style>