<template>
	<v-app id="login" class="primary">
		<snackbar/>
		<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>

					<!-- Login -->
					<v-flex xs12 sm8 md4 lg4 v-if="displayLogin">
						<ValidationObserver ref="veeForm" v-slot="{ invalid, validated, passes, validate }">             
							<v-card class="elevation-1 pa-3" >
								<v-card-text>
									<div class="layout column align-center">
										<img src="@/assets/logo.png" alt="logo" width="150" height="125">
										<h1 class="flex my-4 primary--text " >Login</h1>
									</div>   
										<v-form>
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
					</v-flex>
				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Snackbar from '@/components/Snackbar';

export default {
	props: {
		
	},
	components:{
		Snackbar,
	},
	mounted(){
	},
	computed: {
	},
	data: () => ({
		displaySnackbar: false,
		loading: false,
		displayLogin: true,
		loginModel : {
			username: '',
			password: '',
		},
		registerModel:{
			email: '',
			name: '',
			password: '',
			confirmPassword: '',
		},
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
			this.$auth
			.signInWithEmailAndPassword(this.loginModel.username,this.loginModel.password)
			.then(result=>{
				this.$root.$emit('showSnackBar',"success","Login Successfull");
				this.loading = false;
				this.startSession();
				this.$router.replace('/');
			})
			.catch(error=>{
						//console.log(error);
						this.displayError("Wrong username or password.");
						this.$refs.username.focus();
					});
		},
		displayError(errorMessage){
			this.$root.$emit('showSnackBar',"secondary",errorMessage);
			this.loading = false;
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
	}
</style>
