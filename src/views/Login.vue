<template>
	<v-app id="login" :style="{background: $vuetify.theme.themes['light'].primary}">
		<snackbar/>
		<v-content >
			<v-container fluid>
				<v-row  align="center" justify="center">
					<!-- Login -->
					<v-col v-if="this.displayLogin" cols="12" sm="8" md="6" lg="4" xl="3" transition="scale-transition" origin="center center">
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
											<validation-provider name="Username" rules="required" v-slot="{ errors }">
												<v-text-field 
												append-icon="person" 
												name="login" 
												label="Login" 
												ref="username"
												placeholder="example@email.com"
												:error-messages="errors"
												v-model="loginModel.username"/>
												
											</validation-provider>
											<validation-provider name="Password" rules="required" v-slot="{ errors }">
												<v-text-field 
												append-icon="lock" 
												name="password" 
												label="Password" 
												type="password" 
												placeholder="password"
												:error-messages="errors"
												v-model="loginModel.password"/>
											</validation-provider>
											<div class="text-right">
												<a @click="resetEmail = '';displayDialogReset = true;">Forgot Password?</a>
											</div>
										</v-form>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn block  color="primary" @click="login" :loading="loading" :disabled="invalid || !validated">Login</v-btn>
								</v-card-actions>
								<div class="pt-3 text-center">
									Not registed? <a @click="switchLogin">Register</a>
								</div>
							</v-card>
						</ValidationObserver>
					</v-col>

					<v-col v-else cols="12" sm="8" md="6" lg="4" xl="3" transition="scale-transition" origin="center center">
						<ValidationObserver ref="veeForm" v-slot="{ invalid, validated, passes, validate }">             
							<v-card class="elevation-1 pa-3" >
								<v-card-text>
									<div class="layout column align-center">
										<img src="@/assets/logo.png" alt="logo" width="150" height="125">
										<h1 class="flex my-4 primary--text " >Register</h1>
									</div>  
									<v-form class="pt-3">
										<v-row> 
											<v-col cols="12" md="6">
												<validation-provider name="Email" rules="required|email" v-slot="{ errors }">
													<v-text-field 
													append-icon="email" 
													name="email" 
													label="Email" 
													ref="email"
													placeholder="example@email.com"
													:error-messages="errors"
													v-model="registerModel.email"/>
												</validation-provider>
											</v-col>
											<v-col cols="12" md="6">
												<validation-provider name="Email Confirm" rules="required|email|match:@Email" v-slot="{ errors }">
													<v-text-field 
													append-icon="email" 
													name="emailConfirm" 
													label="Email Confirm" 
													ref="email"
													placeholder="example@email.com"
													:error-messages="errors"
													v-model="registerModel.emailConfirm"/>
												</validation-provider>
											</v-col>
											<v-col cols="12" md="6">
												<validation-provider name="Password" rules="required|min:8" v-slot="{ errors }">
													<v-text-field 
													append-icon="lock" 
													name="password" 
													label="Password" 
													type="password" 
													placeholder="password"
													:error-messages="errors"
													v-model="registerModel.password"/>
												</validation-provider>
											</v-col>
											<v-col cols="12" md="6">
												<validation-provider name="Password Confirm" rules="required|match:@Password" v-slot="{ errors }">
													<v-text-field 
													append-icon="lock" 
													name="passwordConfirm" 
													label="Password Confirm" 
													type="password" 
													placeholder="password confirm"
													:error-messages="errors"
													v-model="registerModel.passwordConfirm"/>
												</validation-provider>
											</v-col>
										</v-row>
									</v-form>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn block  color="primary" @click="register" :loading="loading" :disabled="invalid || !validated">Register</v-btn>
								</v-card-actions>
								<div class="pt-3 text-center">
									Already registed? <a @click="switchLogin">Sign In</a>
								</div>
							</v-card>
						</ValidationObserver>
					</v-col>

				</v-row>
				<v-dialog v-model="displayDialogLinkAccount" persistent max-width="400">
					<ValidationObserver ref="veeDialogLinkAccount" v-slot="{ invalid, validated, passes, validate }">
						<v-card>
							<v-card-title class="headline">Email adress already in use</v-card-title>
							<v-card-text>
								The email address of the selected account is already in use from {{formatProvider}} account.
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="darken-1" text @click="resetDialog">Cancel</v-btn>
								<v-btn color="green darken-1" dark @click="linkAccounts(false)">Link Accounts</v-btn>
							</v-card-actions>
						</v-card>
					</ValidationObserver>
				</v-dialog>
				<v-dialog v-model="displayDialogLinkAccountPassword" persistent max-width="400">
					<ValidationObserver ref="veeDialogLinkAccountPassword" v-slot="{ invalid, validated, passes, validate }">
						<v-card>
							<v-card-title class="headline">Email adress already in use</v-card-title>
							<v-card-text>
								Enter password for email {{pendingEmail}} to link account. 
								<validation-provider name="Password" rules="required" v-slot="{ errors }">
									<v-text-field 
										name="password" 
										label="Password" 
										type="password" 
										placeholder="password"
										:error-messages="errors"
										v-model="pendingPassword"/>
								</validation-provider>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="darken-1" text @click="resetDialog">Cancel</v-btn>
								<v-btn color="primary darken-1" @click="linkAccounts(true)" :disabled="invalid || !validated">Link Accounts</v-btn>
							</v-card-actions>
						</v-card>
					</ValidationObserver>
				</v-dialog>
				<v-dialog v-model="displayDialogReset" persistent max-width="400">
					<ValidationObserver ref="veeDialogReset" v-slot="{ invalid, validated, passes, validate }">
						<v-card>
							<v-card-title class="headline">Reset Password</v-card-title>
							<v-card-text>
								<validation-provider name="Email" rules="required|email" v-slot="{ errors }">
									<v-text-field 
										name="email" 
										label="Email" 
										placeholder="example@email.com"
										:error-messages="errors"
										v-model="resetEmail"/>
								</validation-provider>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="darken-1" text @click="resetDialog">Cancel</v-btn>
								<v-btn color="primary darken-1" @click="resetPassword()" :disabled="invalid || !validated">Reset</v-btn>
							</v-card-actions>
						</v-card>
					</ValidationObserver>
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
	created(){
	},
	computed: {
		formatProvider(){
			return (this.provider.length > 0)?this.provider[0].toUpperCase() +  this.provider.slice(1).replace('.com',''):'';
		}
	},
	data: () => ({
		displayLogin: true,
		loading: false,
		loginModel : {
			username: '',
			password: '',
		},
		registerModel : {
			email: '',
			emailConfirm: '',
			password: '',
			passwordConfirm: '',
		},
		provider: '',
		pendingCred: '',
		pendingEmail: '',
		pendingPassword: '',
		resetEmail: '',
		displayDialogLinkAccount: false,
		displayDialogLinkAccountPassword: false,
		displayDialogReset: false,
	}),
	methods: {
		clearModel(){
			this.loading = false;
			this.loginModel = {
				username: '',
				password: '',
			};	
			this.registerModel = {
				email: '',
				emailConfirm: '',
				password: '',
				passwordConfirm: '',
			};	
		},
		switchLogin(){
			this.clearModel();
			this.displayLogin = !this.displayLogin;
		},
		login () {
			this.loading = true;          
			firebase.auth()
			.signInWithEmailAndPassword(this.loginModel.username,this.loginModel.password)
			.then(result=>{
				//check user type 
				var user = firebase.auth().currentUser;
				firebase.firestore()
				.collection("admins")
				.doc(user.uid).get()
				.then(docSnapshot=>{
					if (!docSnapshot.exists && !user.emailVerified){
						//user is not admin and email is not verified
						this.displayError("Please verify email.");
						firebase.auth().signOut();
					}
					else{
						this.$root.$emit('showSnackBar',"success","Login Successfull");
						this.loading = false;
						this.startSession(user.email);
					}
				})
				.catch(error=>{
					console.error(error);
					this.displayError("Error singing in, please try again later.")
				});
			})
			.catch(error=>{
				//console.log(error);
				this.displayError("Wrong username or password.");
				this.$refs.username.focus();
			});
		},
		register(){
			this.loading = true;    
			firebase.auth()
			.createUserWithEmailAndPassword(this.registerModel.email, this.registerModel.password)
			.then(result=>{
				var user = firebase.auth().currentUser;
				user.sendEmailVerification()
				.then(result=> {
					//adding user record 
					firebase.firestore().collection("users").doc(user.email).set({
						uid: user.uid
					})
					.then(result=>{
						console.log("user entry created");
						//signout user after creation
						firebase.auth().signOut();
						this.$root.$emit('showSnackBar',"success","Account created, please verify your email.");
						this.switchLogin();
					})
					.catch(error=>{
						console.error(error);
					});
				})
				.catch(error=> {
					console.error(error);
					this.displayError("Error sending verification mail.");
					firebase.firestore().collection("users").doc(user.email).delete()
					.then(result=>{
						console.log("user entry deleted");
						//delete user auth entry if sending email fails
						user.delete();
					});				
				});
			})
			.catch((error)=> {
				console.error(error);
				if (error.code == "auth/email-already-in-use"){
					firebase.auth().fetchSignInMethodsForEmail(this.registerModel.email).then(methods=> {
						var message = "This email is already registered";
						if (methods[0] != "password"){
							var provider = methods[0];
							provider = provider[0].toUpperCase() + provider.slice(1).replace('.com','');
							message = "This email is already linked to your " + provider + " account.";
						}
						this.displayError(message);
					});
				}
				else{
					this.displayError(error.message);
				}
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
				case "password": 
					return "password";
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
				var userRef = firebase.firestore().collection("users").doc(user.email);
				userRef.get().then((docSnapshot)=>{
					if (docSnapshot.exists){
						console.log("user exists")
						this.$root.$emit('showSnackBar',"success","Login Successfull");
						this.startSession(user.email);
					}
					else{
						console.log("adding new user");
						this.addNewUser(result.user);
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
						this.pendingEmail = email;
						
						if (methods[0] == "password"){
							this.displayDialogLinkAccountPassword = true;
						}
						else{
							this.displayDialogLinkAccount = true;
						}
					});
				}
				else{
					console.error(error);
					this.displayError("Error Singing In");
				}
			});
		},
		linkAccounts(password){
			if (password){
				firebase.auth().signInWithEmailAndPassword(this.pendingEmail,this.pendingPassword)
				.then(result=> {
					result.user.linkWithCredential(this.pendingCred)
					.then(usercred=> {
						this.$root.$emit('showSnackBar',"success","Login Successfull");
						this.resetDialog();
						this.startSession(result.user.email);
					});
				})
				.catch(error=>{
					console.error(error);
					if (error.code == "auth/wrong-password"){
						this.displayError("Incorrect password");
					}
					else{
						this.displayError(error.message);
					}
				});
			}
			else{
				firebase.auth().signInWithPopup(this.provider)
				.then(result=> {
					result.user.linkWithCredential(this.pendingCred)
					.then(usercred=> {
						this.$root.$emit('showSnackBar',"success","Login Successfull");
						this.resetDialog();
						this.startSession(result.user.email);
					})
					.catch(error=>{
						console.error(error);
						this.displayError("Error linking user accounts");
					});
				})
				.catch(error=>{
					console.error(error);
					this.displayError(error.message);
				});
			}
		},
		addNewUser(user){
			var userRef = firebase.firestore().collection("users").doc(user.email);

			var batch = firebase.firestore().batch();

			batch.set(
				userRef,{
					uid: user.uid,
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
			this.$root.$emit('showSnackBar',"error_message",errorMessage);
			this.loading = false;
		},
		resetDialog(){
			this.provider = '';
			this.pendingCred = '';
			this.pendingEmail = '';
			this.pendingPassword = '';
			this.resetEmail = '';
			this.displayDialogLinkAccount = false;
			this.displayDialogLinkAccountPassword = false;
			this.displayDialogReset = false;
		},
		resetPassword(){
			console.log("reset");
			firebase.auth().sendPasswordResetEmail(this.resetEmail)
			.then(result=>{
				this.$root.$emit('showSnackBar',"success","Email Sent.");
			})
			.catch(error=>{
				console.error(error);
				this.displayError("Error sending reset mail");
			});
			this.resetDialog();
		}
	},

};
</script>


<style scoped>
	#login {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		z-index: 0;
	}
</style>
