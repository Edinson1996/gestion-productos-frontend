import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  productos : Producto[]=[];
  constructor(private productosService : ProductoService) { }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe(response=>{
      this.productos=response;
    })
  }



}
