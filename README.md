## Intro a React Native

### Bootstrapping del proyecto:
#### Pre-requisitos

- Es necesario tener instaladas las ultimas versiones LTS de **Node** y **npm**: https://nodejs.org/en/download/

- Instalar **yarn** globalmente según la siguiente guía: https://classic.yarnpkg.com/en/docs/install/

#### Clone
```git clone https://github.com/MaxiSuppes/intro-react-native.git```

#### Instalar expo-cli globalmente
```npm install -g expo-cli```

#### Instalar dependencias
Ejecutar el comando ```yarn install``` en el root del proyecto

#### Variables de entorno
Crear un archivo ```environments.js``` en el directorio root y copiarle el contenido del archivo ```environments.example.js```.

*apiUrl*: Estamos usando la API gratuita https://reqres.in/api

*usingFakeApi*: True si se quieren usar los mocks o vacío si se quiere usar la API antes mencionada.  

#### Run en Android o iOS
Es necesario tener descargada la última versión de Expo en el celular. Luego correr el siguiente comando en la consola: ```expo start```. Escanear el código QR que aparece en la ventana del navegador que se abrió. (En Android se puede escanear desde dentro de la app, en iOS directamente con la cámara)

### Que falta?
No se agregó ningún test!

### Otros links de utilidad

[React Native documentation](https://reactnative.dev/)

[Tests con Jest](https://jestjs.io/)

[Airbnb React conventions](https://github.com/airbnb/javascript/tree/master/react)
