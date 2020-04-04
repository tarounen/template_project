<template>
	<v-app id="" color="primary">
		<v-content>
			<section id="hero">
				<v-row no-gutters>
					<v-img
						:max-height="'calc(70vh - ' + $vuetify.application.top + 'px)'"
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
											Terms of Service
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

				<v-container  class="text-left">

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

				</v-container>

				<v-container class="pt-0 text-center margin-fix">
					<v-btn
						color="grey"
						href="/"
						outlined
						large
					>
						<span class="grey--text text--darken-1 font-weight-bold">
							Homepage
						</span>
					</v-btn>
				</v-container>

				<div class="py-12"></div>
			</section>
			
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
	.margin-fix{
		margin-top: -2%;
	}
</style>