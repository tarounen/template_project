<template>
	<div id="">
		<v-container pa-6 fluid>

			<v-row>
					
					<v-btn color="primary" text icon dark>
						<v-icon>$home</v-icon>
					</v-btn>

					<div class="breadcrumb">
						<h3 class="">Home</h3>
					</div>

					<div class="breadcrumb">
						<h3 class="breadcrumb-icon">&gt;</h3>
					</div>

					<div class="breadcrumb">
						<h3 class="">User</h3>
					</div>

			</v-row>

			<v-row>
				<v-col lg=12>
					<v-card class="">
						<!-- <v-container style="height: 1500px;">
						</v-container> -->
					</v-card>
				</v-col>  
			</v-row>

		</v-container>
	</div>
</template>

<script>


	export default {
		props: {

		},
		components:{

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
			search: '',
		}),
		methods: {
		}
	};
</script>

<style  scoped>

</style>