<template>
	<v-footer absolute height="75" class="pa-3 app--footer justify-center " :color="color">
		<div class="text-center">
			<div class="font-weight-light white--text text--lighten-1">
				Made with <v-icon small color="red">$heart</v-icon> by <a href="https://github.com/tarounen" target="_blank" class="font-weight-bold white--text">Tarounen</a>.
			</div>
			<div class="font-weight-light text--lighten-1">
				<a href="/terms" class="white--text" style="text-decoration: none;">Terms of Service</a>
			</div>
		</div>
	</v-footer>
</template>

<script>

	export default {
		props: {
			color:{
				type: String,
				default: "primary"
			}
		},
	};
</script>