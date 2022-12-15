# React-Redux-0-Expert




# Estructura de directorios

style.css: Estilos globales en la aplicacion
main.jsx : Routing (BrowserRouter) y Functional Component Principal (MainApp.jsx)
assets: recursos estaticos en la aplicacion (imagenes, fixtures)
authModule or auth: 
(moduleName):  todo los relacionado a los heroes

Layouts: Cascaron (estilo)
pages: Cubre toda la pantalla desde el punto de vista del usuario (full screen). Toma todo el espacio de la vision del clientes
hooks: customHooks del modulo
componentes: Piezas pequeñas del modulo (Navbar, SideBar, Buttons, etc)
helpers: relacionados  a los heroes
Views: Functional component que engloba todo lo que se visualice dentro de una página


# Reducers: Funciones puras
- Funcion pura que maneja un estado
- Le sirve la informacion a la vista
- La vista no modifica el estado (readOnly)
- Cuando se necesite hacer una modificacion, la vista genera una accion (CRUD/others)
- Esta accion llega al reducer y el reducer decide que hacer con ella
- El reducer genera el nuevo estado y se lo proporciona a la vista

# Redux
- Contenedor predecible del estado de una aplicación.
- Forma de contorlar donde se encuentra la información de la aplicación en todo momento
- Ayuda que la modificacion de la información sea de una sola vía de manera predecible
- 



## Store
-  Fuente unica de la verdad
-  Es donde se encuentra la informacion que los componentes consumiran
-  Busqueda de usuario activo
-  Proporciona un state
- Le sirve la informacion a la vista
- La vista no modifica el estado (readOnly)
- Cuando se necesite hacer una modificacion, la vista genera una accion (CRUD/others)
- Esta accion llega al dispatcher (parecido al reducer), lo analiza y lo envia a un reducer especial
- El reducer es una combinacion de todos los reducers que tiene la aplicación  (auth/todo/journal)
- El reducer genera el nuevo estado y se lo proporciona a la vista
- El modelo es aplicable si y solo si los procesos es sincrono (no peticiones HTTP o tareas asincronas)


- En el caso de tareas de autenticacion (esperar la respuesta)
- Se genera la accion
- Se envia al dispatcher
- En el dispatcher se implementar middlewares para procesos asincronos.
- Ejecuta la accion o la llamada a un API, espera la respuesta, notifica y luego le envia el resultado al reducer especial


npm install @reduxjs/toolkit react-redux

## Slice
- Permite rapidamente crear una serie de reducer
- Definir initial State
- Definir un nombre de accion con la que se 
  

## Thunk
- Accion que es asincrona que dispara otra accion (condicional o dependencia)


## Middleware 
- Funcion que se ejecuta antes que otra


https://gist.github.com/Klerith/060281f76f3b7f0a458e4b83b1fc0062