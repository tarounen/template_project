<template>
	<v-app id="" color="primary">
		<v-content>
			<section id="hero">
				<v-row no-gutters>
					<v-img
						:max-height="'calc(75vh - ' + $vuetify.application.top + 'px)'"
						src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
					>
						<v-theme-provider dark>
							<v-container fill-height>
								<v-row
									align="center"
									class="white--text mx-auto"
									justify="center"
								>
									<v-col
										class="white--text text-center"
										cols="12"
										tag="h1"
									>
										<span
											:class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
											class="font-weight-black"
										>
											Title
										</span>
									</v-col>
								</v-row>
							</v-container>
						</v-theme-provider>
					</v-img>
				</v-row>
			</section>

			<section id="details">
				<div class="py-6"></div>

				<v-container class="text-center">
					<h2 class="display-2 font-weight-bold mb-3">ABOUT</h2>

					<v-responsive
						class="mx-auto mb-8"
						width="56"
					>
						<v-divider class="mb-1"></v-divider>

						<v-divider></v-divider>
					</v-responsive>

					<v-responsive
						class="mx-auto title font-weight-light mb-8"
						max-width="720"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat velit neque, quis facilisis tellus eleifend et. Curabitur lobortis, metus quis blandit feugiat, ante velit bibendum nibh, ac vulputate quam diam ut velit.
						</p>
						<p>
							Vestibulum nec rhoncus massa, aliquam vulputate elit. Pellentesque feugiat aliquam tellus et consequat. Etiam eget dolor consequat, varius ante at, bibendum tellus. Aenean elementum neque id arcu posuere tempus. Mauris vehicula est consequat condimentum rutrum. Donec gravida ipsum nibh, vitae auctor libero vulputate quis. Quisque congue, ligula quis scelerisque scelerisque, nibh nibh placerat odio, non finibus sem augue ac mi. Proin lacinia arcu eu metus auctor condimentum. Praesent non consectetur nibh. Nunc eleifend nunc nec justo pellentesque, nec dignissim ipsum dapibus.
						</p>
					</v-responsive>

					<div></div>

					<v-btn
						color="grey"
						href="/login"
						outlined
						large
					>
						<span class="grey--text text--darken-1 font-weight-bold">
							Get Started
						</span>
					</v-btn>
				</v-container>

				<div class="py-12"></div>
			</section>

			<!-- <section
				id="features"
				class="grey lighten-3"
			>
				<div class="py-12"></div>
			
				<v-container class="text-center">
					<h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>
			
					<v-responsive
						class="mx-auto mb-12"
						width="56"
					>
						<v-divider class="mb-1"></v-divider>
			
						<v-divider></v-divider>
					</v-responsive>
			
					<v-row>
						
					</v-row>
				</v-container>
			
				<div class="py-12"></div>
			</section> -->

			<!-- <section id="stats">
				<v-parallax
					:height="$vuetify.breakpoint.smAndDown ? 700 : 500"
					src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
				>
					<v-container fill-height>
						<v-row class="mx-auto">
						</v-row>
					</v-container>
				</v-parallax>
			</section> -->
		</v-content>
		<app-footer color="footer" />
	</v-app>
</template>

<script>
	import AppFooter from '@/components/AppFooter';

	export default {
		props: {

		},
		components:{
			AppFooter
		},
		mounted(){
		},
		created () {

		},
		computed:{
		},
		watch: {

		},
		data: () => ({
		}),
		methods: {
		}
	};
</script>

<style  scoped>

</style>