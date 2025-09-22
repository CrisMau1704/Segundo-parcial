## Framework CSS elegido
Bootstrap 5


## Template usado
**Agency** — Start Bootstrap  
Preview: https://startbootstrap.com/previews/agency  


## 8 Offline para la página principal
1. se aumento en el archivo ngsw-config.json la siguiente linea de codigo "installMode": "prefetch" esto permite que la pgina home trabaje offline
2. Ejecutar `npx http-server dist/Segundo-parcial -p 8080`.
3. Abrir `http://localhost:8080`.
4. Verificar en DevTools → Application → Service Workers.
5. Cambiar a Network Offline y recargar la página.
6. La página principal (Home) debe cargarse correctamente sin conexión.