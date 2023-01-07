import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data =>{this.proyecto= data;
      //console.log(this.proyecto)
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      let respuesta = confirm("Estas seguro que quieres eliminar?")
      if (respuesta == true) {
        this.proyectoService.delete(id).subscribe(
          data => {
            this.cargarProyecto();
            alert("Proyecto Borrada")
          }, err => {
            alert("No se pudo borrar la Proyecto");
          }
        )
      } else {
        alert("No se borro la Proyecto");
      }
    }
  }

}
