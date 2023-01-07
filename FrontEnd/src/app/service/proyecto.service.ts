import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'http://localhost:8080/proyecto/'


  constructor(private httpClient: HttpClient) { }


  //se utiliza el Observable para las busquedas asincronas
  //traemos a toda la lista de experiencia
  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

   //buscamos la experiencia por el id
   public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`)
  }

  //aca actualizamos los datos
  public update(proyecto: Proyecto, id: number): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto)
  }

  //creamos una nuevo experiencia
  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + `create`, proyecto);
  }

  //aca borramos la experiencia
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`)
  }

}
