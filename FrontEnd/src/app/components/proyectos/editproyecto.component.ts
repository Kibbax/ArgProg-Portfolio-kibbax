import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ImageServiceProyects } from 'src/app/service/image-service-proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit{
  
  proyecto: Proyecto = null;
  
  constructor(private activateRouter: ActivatedRoute,
              private proyectoService: ProyectoService,
              private router: Router,
              public imageService: ImageServiceProyects){ }



  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
      this.proyectoService.detail(id).subscribe(
        data => {
          this.proyecto = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyecto.img = this.imageService.url
    this.proyectoService.update(this.proyecto, id).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Proyecto Editado")
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }


  uploadImage($event: any){
    this.imageService.uploadImage($event);
  }




}
