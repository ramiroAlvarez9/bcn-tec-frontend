Requirimientos previos:
Tener instalado la version LTS de node js. 
La misma puede ser instalada siguiendo la documentación oficial en:

https://nodejs.org/en


Después de esto, se pueden seguir los siguientes pasos:

# Paso 1: 

clonar repositorio, esto se puede realizar con:

SSH:
```
git clone git@github.com:ramiroAlvarez9/bcn-tec-frontend.git
```
HTTPS:
```
https://github.com/ramiroAlvarez9/bcn-tec-frontend.git
```


# Paso 2:
Abrir el proyecto en la terminal de su sistema operativo,
y ejecutar el comando para la instalacion de depedencias en el proyecto:

```
npm install
```

posterior a esto, se debe de ejecutar el siguiente comando para poder correr el proyecto localmente:
```
npm run dev
```

# Paso 3:

Crear una variable de entorno local, con el nombre .env.local, la cual contenga la siguiente informacion
```
CI = false
CONTENTFUL_SPACE_ID= "space id de contentful"
CONTENTFUL_ACCESS_TOKEN= "access token de contentful"
```

Es importante que esta variable sea cargada dentro del servidor de produccion.


