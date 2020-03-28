import Vue from "vue";

Vue.mixin({
	methods: {
		showAppDrawer: function(){
			this.$root.$emit('showAppDrawer');
		},

		toggleFullScreen: function(){
			let doc = window.document;
			let docEl = doc.documentElement;

			let requestFullScreen =
			docEl.requestFullscreen ||
			docEl.mozRequestFullScreen ||
			docEl.webkitRequestFullScreen ||
			docEl.msRequestFullscreen;
			let cancelFullScreen =
			doc.exitFullscreen ||
			doc.mozCancelFullScreen ||
			doc.webkitExitFullscreen ||
			doc.msExitFullscreen;

			if (
				!doc.fullscreenElement &&
				!doc.mozFullScreenElement &&
				!doc.webkitFullscreenElement &&
				!doc.msFullscreenElement
				) {
				requestFullScreen.call(docEl);
			} else {
				cancelFullScreen.call(doc);
			}
		},

		logout: function(){
			this.$auth.signOut()
      .then( () => {
        this.endSession();
        this.$router.replace('/login');
      })
      .catch(error => {
        this.$router.replace('/');
      });
		},

		/* SESSIONS*/

		startSession(){
			this.$session.start();
		},

		endSession(){
			this.$session.destroy();
		},

		clearSession(){
			this.$session.clear();
		},


		goHome(){
			this.clearSession();
			this.$router.replace({name: "Home"}).catch();
		},

		goBack(){
			
		},

		checkRedirect(){
			
		},

		/* /SESSIONS*/
	}
});