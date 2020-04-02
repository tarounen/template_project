<template>
	<v-app id="login" color="primary">
		<snackbar/>
		<v-content>
			<v-container fluid fill-height>
				<v-row align="center" justify="center">

					<!-- Login -->
					<v-col cols="12" sm="8" md="6" lg="4" xl="3">
						<ValidationObserver ref="veeForm" v-slot="{ invalid, validated, passes, validate }">             
							<v-card class="elevation-1 pa-3" >
								<v-card-text>
									<div class="layout column align-center">
										<img src="@/assets/logo.png" alt="logo" width="150" height="125">
										<h1 class="flex my-4 primary--text " >Sign In</h1>
									</div>  

										<v-row  class="pa-5" justify="center">
												<v-btn class="mx-2" fab dark color="facebook" @click="loginSocial('facebook.com')">
													<v-icon>$facebook</v-icon>
												</v-btn>

												<v-btn class="mx-2" fab dark color="white" @click="loginSocial('google.com')">
													<img src="@/assets/google-logo.png" alt="google" >
												</v-btn>

												<v-btn class="mx-2" fab dark color="twitter" @click="loginSocial('twitter.com')">
													<v-icon>$twitter</v-icon>
												</v-btn>
										</v-row>
										<v-row no-gutter align="center" >
											<v-col cols="5">
												<v-divider fill-height/>
											</v-col>
											<v-col class="text-center" cols="2">
												or
											</v-col>
											<v-col cols="5">
												<v-divider fill-height/>
											</v-col>
										</v-row>

										<v-form class="pt-3">
											<validation-provider name="Username"    rules="required" v-slot="{ errors }">
												<v-text-field 
												append-icon="person" 
												name="login" 
												label="Login" 
												ref="username"
												placeholder="username"
												:error-messages="errors"
												v-model="loginModel.username"/>
												
											</validation-provider>
											<validation-provider name="Password"    rules="required" v-slot="{ errors }">
												<v-text-field 
												append-icon="lock" 
												name="password" 
												label="Password" 
												type="password" 
												placeholder="password"
												:error-messages="errors"
												v-model="loginModel.password"/>
											</validation-provider>
										</v-form>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn block  color="primary" @click="login" :loading="loading" :disabled="invalid || !validated">Login</v-btn>
								</v-card-actions>
							</v-card>
						</ValidationObserver>
					</v-col>
				</v-row>
				<v-dialog v-model="displayDialog" persistent max-width="400">
					
				<v-card>
					<v-card-title class="headline">Email adress already in use</v-card-title>
					<v-card-text>The email address of the selected account is already in use from {{formatProvider}} account. </v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="darken-1" text @click="resetDialog">Cancel</v-btn>
						<v-btn color="green darken-1" dark @click="linkAccounts">Link Accounts</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			</v-container>

		</v-content>
	</v-app>
</template>

<script>
import Snackbar from '@/components/Snackbar';
import firebase from 'firebase/app'

export default {
	props: {
		
	},
	components:{
		Snackbar,
	},
	mounted(){
	},
	computed: {
		formatProvider(){
			return (this.provider.length > 0)?this.provider[0].toUpperCase() +  this.provider.slice(1).replace('.com',''):'';
		}
	},
	data: () => ({
		loading: false,
		loginModel : {
			username: '',
			password: '',
		},
		provider: '',
		pendingCred: '',
		displayDialog: false,
		displayForm: false,
	}),
	methods: {
		clearLoginModel(){
			this.loginModel = {
				username: '',
				password: '',
			};	
		},
		login () {
			this.loading = true;          
			firebase.auth()
			.signInWithEmailAndPassword(this.loginModel.username,this.loginModel.password)
			.then(result=>{
				this.$root.$emit('showSnackBar',"success","Login Successfull");
				this.loading = false;
				this.startSession(this.loginModel.username);
			})
			.catch(error=>{
				//console.log(error);
				this.displayError("Wrong username or password.");
				this.$refs.username.focus();
			});
		},
		getProviderForProviderId(providerId){
			switch(providerId){
				case "facebook.com": 
					return new firebase.auth.FacebookAuthProvider();
				case "google.com":
					return new firebase.auth.GoogleAuthProvider();
				case "twitter.com":
					return new firebase.auth.TwitterAuthProvider();
				default:
					return null;
			}

		},
		loginSocial(id){
			var provider = this.getProviderForProviderId(id);

			firebase.auth().signInWithPopup(provider).
			then(result=>{
				var token = result.credential.accessToken;

				var user = result.user.providerData[0];
				console.log(user);

				//checkuser details here 
				var userRef = this.$firestore.collection("users").doc(user.email);
				userRef.get().then((docSnapshot)=>{
					if (docSnapshot.exists){
						console.log("user exists")
						this.$root.$emit('showSnackBar',"success","Login Successfull");
						this.startSession(user.email);
					}
					else{
						console.log("adding new user");
						this.addNewUser(userRef,user);
					}	
				});
			})
			.catch(error=>{
				if (error.code === 'auth/account-exists-with-different-credential') {
					console.error(error);

					var pendingCred = error.credential;
					var email = error.email;

					firebase.auth().fetchSignInMethodsForEmail(email).then(methods=> {
						var provider = this.getProviderForProviderId(methods[0]);
						this.provider = provider;
						this.pendingCred = pendingCred;
						this.displayDialog = true;
					});
				}
				else{
					console.error(error);
					this.displayError("Error Singing User");
				}
			});

		},
		linkAccounts(){
			firebase.auth().signInWithPopup(this.provider).then(result=> {
				result.user.linkWithCredential(this.pendingCred).then(usercred=> {
					this.$root.$emit('showSnackBar',"success","Login Successfull");
					this.resetDialog();
					this.startSession(result.user.email);
				});
			});
		},
		addNewUser(userRef,user){
			var batch = this.$firestore.batch();

			batch.set(
				userRef,{
					uid: user.uid,
					displayName: user.displayName, 
					photoURL: user.photoURL,
					email: user.email,
					phoneNumber: user.phoneNumber,
					providerId: user.providerId
				},
				{merge: true}
			);

			batch.commit()
			.then(result => {
				this.$root.$emit('showSnackBar',"success","Login Successfull");
				this.startSession(user.email);
			})
			.catch(error=>{
				console.error(error);
				this.displayError("Error, please try again.");
				this.logout();
			});
		},
		displayError(errorMessage){
			this.$root.$emit('showSnackBar',"secondary",errorMessage);
			this.loading = false;
		},
		resetDialog(){
			this.provider = '';
			this.pendingCred = '';
			this.displayDialog = false;
		}
	}

};
</script>


<style scoped>
	#login {
		height: 50%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		z-index: 0;
		background: #ce2923; /* from vuetify primary */
	}
</style>
