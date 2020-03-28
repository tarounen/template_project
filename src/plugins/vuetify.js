import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				background: "#fafafa",
				primary: "#ce2923",
				secondary: "#424242",
				hover: "#ffffff",
				accent: '#ebedef',
				error: "#cc0000",
				error_message: "#424242",
				info: "#2196F3",
				success: "#4CAF50",
				warning: "#FFC107",
				white:"#FFFFFF",
				red:  "#cc0000",
			},
		},
	},
	customProperties: true,
	icons: {
		iconfont: 'fa',
		values: {
			'home': 'fas fa-home',
		},
	}
});
