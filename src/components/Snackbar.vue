<template>
	<div class="snackbar">
		<v-snackbar
		:timeout="timeout"
		:color="color"
		:top="y === 'top'"
		:bottom="y === 'bottom'"
		:right="x === 'right'"
		:left="x === 'left'"
		:vertical="mode === 'vertical'"
		v-model="snackbar"
		@input="closeSnackbar"
		>
		{{ text }}
		<v-btn  icon dark @click.native="closeSnackbar">
				<v-icon>close</v-icon>
		</v-btn>
	</v-snackbar>
</div>
</template>

<script>

	export default {
		props: {
		},
		data: () => ({
			y: 'top',
			x: null,
			mode: '',
			timeout: 1500,
			color: '',
			text: '',
			snackbar: false
		}),
		mounted() {
			this.$root.$on('showSnackBar', (type,txt) => {
				this.showSnackBar(type,txt);
			});
		},
		computed: {
		},
		methods: {
			closeSnackbar(){
				this.snackbar = false;
				this.$emit('update:snackbar',false); 
			},
			showSnackBar(type,txt) {
				this.snackbar = true;
				this.color = type;
				this.text = txt;
				this.$emit('update:snackbar',true); 
			},
		},
	};
</script>

<style lang="stylus" scoped>
</style>