import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  constructor() { }

  // Solicitar permiso al usuario
  solicitarPermiso() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          alert('Permiso concedido ✅');
        } else {
          alert('Permiso denegado ❌');
        }
      });
    } else {
      alert('Tu navegador no soporta notificaciones');
    }
  }

  // Mostrar notificación local
  mostrarNotificacion() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Notificación de prueba', {
        body: '¡Hola! Esto es una notificación local desde la app.',
        icon: 'assets/icon.png' // opcional
      });
    } else {
      alert('No tienes permiso para mostrar notificaciones');
    }
  }
}
