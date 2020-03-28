<template>
	<div id="appRoot">
		<template v-if="!$route.meta.public">
			<v-app id="app" :style="{background: $vuetify.theme.themes['light'].background}">
				<app-toolbar/>
				<v-content style="padding-top: 64px;" >
					<app-drawer />
					<div class="page-wrapper">
						<router-view/>
					</div> 
					<!-- Go to top -->
					<app-fab/>
					<!-- App Footer -->
					<app-footer class="app--footer"/>
				</v-content>
				<snackbar/> 
				
			</v-app>
		</template>
		<template v-else>
			<transition>
				<keep-alive>
					<router-view :key="$route.fullpath"/>
				</keep-alive>
			</transition>
		</template>
	</div>
</template>
<script>

import AppToolbar from '@/components/AppToolbar';
import AppDrawer from '@/components/AppDrawer';
import AppFab from '@/components/AppFab';
import Snackbar from '@/components/Snackbar';
import AppFooter from '@/components/AppFooter';

export default {
	name: 'App',
	components: {
		AppToolbar,
		AppDrawer,
		AppFab,
		Snackbar,
		AppFooter
	},
	mounted(){
	},
	data: () => ({
	}),
	computed: {
	},
	created() {  
	},
	methods: {
		
	},

};
</script>


<style>
 
</style>