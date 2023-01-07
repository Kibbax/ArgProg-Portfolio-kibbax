import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL, listAll } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceProyects {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `imagen-Proyects/${file.name}`)
    uploadBytes(imgRef, file)
      .then( _response => 
        getDownloadURL(imgRef)
        .then(_url => this.url = _url)
        )
      .catch(error => console.log(error))
  }

  getImages() {
    const imageRef = ref(this.storage, 'imagen-Proyects')
    listAll(imageRef)
      .then(async response => {
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          console.log("la url es: " + url)
        }
      })
      .catch(error => console.log(error))
  }
};