
package com.portfolio.mec.Dto;

import javax.validation.constraints.NotBlank;


public class dtoProyecto {
    @NotBlank
    private String nombre;
    @NotBlank
    private String description;
    @NotBlank
    private String img;
    @NotBlank
    private String url_imagen;
    
    //Constructor

    public dtoProyecto() {
    }

    public dtoProyecto(String nombre, String description, String img, String url_imagen) {
        this.nombre = nombre;
        this.description = description;
        this.img = img;
        this.url_imagen = url_imagen;
    }
    
    //Getter y Setter

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getUrl_imagen() {
        return url_imagen;
    }

    public void setUrl_imagen(String url_imagen) {
        this.url_imagen = url_imagen;
    }
    
    
    
    
    
}
