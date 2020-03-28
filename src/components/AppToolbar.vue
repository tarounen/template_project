<template>
	<v-app-bar absolute color="primary" dark>

		<v-app-bar-nav-icon @click="showAppDrawer"></v-app-bar-nav-icon>

		<v-toolbar-title  class="ml-0 pointer">Template</v-toolbar-title>
		<v-spacer></v-spacer>
		
		<v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn icon  dark v-on="on" @click="toggleFullScreen">
				<v-icon>fullscreen</v-icon>
			</v-btn>
      </template>
      <span>Fullscreen</span>
    </v-tooltip>

		<v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn icon  dark v-on="on" @click="logout">
				<v-icon>exit_to_app</v-icon>
			</v-btn>
      </template>
      <span>Logout</span>
    </v-tooltip>
	</v-app-bar>
</template>


<script>

export default {
	name: 'app-toolbar',
	components: {
	},
	data: () => ({
	}),
	created(){	
	},
	mounted() {	
	},
	computed: {
	},
	methods: {
	}
};
</script>

<style scoped>

</style>
