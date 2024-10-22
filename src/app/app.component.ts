import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ElementoService, Elemento } from './servicios/elemento.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HttpClientModule, CommonModule], 
  providers: [ElementoService] 
})
export class AppComponent implements OnInit {
  title = 'API Consumida';
  elementos: Elemento[] = [];

  constructor(private elementoService: ElementoService) {}

  ngOnInit(): void {
    this.elementoService.obtenerElementos().subscribe(
      (data) => {
        console.log('Datos recibidos:', data); 
        this.elementos = data;
      },
      (error) => {
        console.error('Error al obtener los elementos:', error);
      }
    );
  }
}
