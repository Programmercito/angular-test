#Test de Angular
Este proyecto es una aplicación de login desarrollada con Angular que tiene login, y crud de posts.

#Instalación
Para instalar el proyecto localmente, se debe clonar el repositorio, instalar las dependencias y levantar el servidor:

git clone https://github.com/Programmercito/angular-test.git
cd angular-test  
npm install
ng serve

Luego, se puede acceder a la aplicación desde el navegador en http://localhost:4200/angular-test

#Posibles mejoras

La aplicación, a pesar de cumplir con lo básico, tiene varios puntos que podrían mejorarse. A continuación algunas ideas:

Manejo de sesiones
Actualmente se utiliza session storage para mantener la sesión del usuario. Una mejora importante sería guardar adicionalmente un JSON Web Token (JWT) en el session storage y un token extra de cookie. Esto evitaría ataques de cross-site scripting (XSS), ya que la información importante no se almacenaría solo en el session storage del navegador.

Pantalla de inicio
La pantalla de inicio o home actualmente se encuentra vacía. Para mejorar la experiencia de usuario, se podrían incluir imágenes, un mensaje de bienvenida o algún tipo de animación.

Posts
En la pantalla de posts se podrían aplicar varias mejoras:

Uso de pipes para hacer la busqueda y evitar mantener un array no filtrado
Consumir los posts desde un API en lugar de tenerlos hardcodeados
Usar signals para la optimizacion de la actualizacion de los registros
Los botones tienen el estilo por defecto. Una mejora visual sería aplicar estilos personalizados o utilizar librerías como Bootstrap o Angular Material.

Testing
Actualmente el proyecto cuenta con algunos test unitarios básicos. Se podría aumentar la cobertura de pruebas, especialmente para:

Probar el borrado de posts
Probar la modificación de posts
Probar la búsqueda de posts

El repositorio es: Programmercito/angular-test (github.com)
Aplicacion desplegada: https://programmercito.github.io/angular-test 

Aqui como instalar:

# Angular-test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
