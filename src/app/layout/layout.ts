import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // IMPORTANTE

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],  // ← aquí va RouterOutlet
  templateUrl: './layout.html'
})
export class Layout {}
