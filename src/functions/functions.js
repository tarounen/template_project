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
				this.$router.replace('/');
			})
			.catch(error => {
				this.$router.replace('/user');
			});
		},

		/* SESSIONS*/

		startSession(userId){
			//checks if admin
			this.$firestore.collection("admins").doc(this.$auth.currentUser.uid).get()
			.then(docSnapshot=>{
				this.$session.start();
				this.$session.set("userId",userId);
				this.$session.set("isAdmin",false);
				if (docSnapshot.exists){
					this.$session.set("isAdmin",true);
				}
				this.$router.replace('/user');
			})
			.catch(error=>{console.error(error);});
		},

		endSession(){
			this.$session.destroy();
		},

		clearSession(){
			this.$session.clear();
		},


		goHome(){
			this.$router.replace({name: "Home"}).catch();
		},

		goBack(){
			
		},

		checkRedirect(){
			
		},		

		/* /SESSIONS*/
	}
});