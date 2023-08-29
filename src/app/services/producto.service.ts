import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl: string = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl+'/listar');
  }

  getCategorias(): Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.baseUrl+'/categorias');
  }

  crearProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.baseUrl+'/crear',producto);

  }

  obtenerProducto(id:number):Observable<Producto>{
return this.http.get<Producto>(this.baseUrl+'/'+id);
  }

  actualizarProducto(producto: Producto):Observable<Producto>{
    return this.http.put<Producto>(this.baseUrl+'/actualizar/'+producto.id,producto);

  }

  eliminarProducto(id : number):Observable<any>{
  return this.http.delete<Producto>(this.baseUrl+'/eliminar/'+id)
  }

}
