# Vuejs - Vuetify - Firebase Project Template

## Description

This is a [VueJs](https://vuejs.org/index.html/) project using 
 [Vuetify](https://vuetifyjs.com/) Material Design Component Framework and configured to be connected to [Firebase](https://firebase.google.com/)

 ## Instruction
	
Create a firebase project and set config details under: 

``` bash
├── src
│   ├── firebase
│   │   ├── firebase.js
```

``` 

const config = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
};
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Reference

* [Vuetifyjs](https://vuetifyjs.com/)
* [Vue](https://vuejs.org/index.html/)
* [Parallax Theme](https://github.com/vuetifyjs/vuetify/tree/master/packages/docs/src/themes/parallax-starter/)