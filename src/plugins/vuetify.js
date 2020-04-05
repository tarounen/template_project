import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				background: "#fafafa",
				primary: "#292929",
				/*primary: "#ce2923",*/
				secondary: "#424242",
				hover: "#ffffff",
				accent: '#ebedef',
				error: "#cc0000",
				error_message: "#cc0000",
				info: "#2196F3",
				success: "#4CAF50",
				warning: "#FFC107",
				white:"#FFFFFF",
				red:  "#cc0000",
				facebook: "#337ab7",
				twitter: "#5bc0de",
				google: "#d9534f",
				microsoft: "#495057",
				footer: "#292929"
			},
		},
	},
	customProperties: true,
	icons: {
		iconfont: 'fa',
		values: {
			'facebook': 'fab fa-facebook-f',
			'google': 'fab fa-google',
			'twitter': 'fab fa-twitter',
			'microsoft': 'fab fa-microsoft',
			'home': 'fas fa-home',
			'heart': 'fas fa-heart',
		},
	}
});
