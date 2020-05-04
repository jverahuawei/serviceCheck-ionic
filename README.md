# serviceCheck-ionic
Proyecto Ionic de ejemplo para implementar el plugin "cordova-service-checker"

## Implementacion

1. Agregar plugin al proyecto.

```sh
ionic cordova plugin add https://github.com/onurkenis/cordova-service-checker.git
```

2. importar el pluggin en el proyecto 'app.component.ts' :

```javascript
declare var cordova;
```

2. luego validamos los servicios con el metodo checkservices():

```javascript
this.checkservices();
```

## Detalles del pluggin a utilizar

referirse al archivo README.md https://github.com/onurkenis/cordova-service-checker

