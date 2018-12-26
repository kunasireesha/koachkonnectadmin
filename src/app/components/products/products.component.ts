import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  delete(){
      
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete",
        icon: "warning",
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
          swal("Deleted!", "Your file has been deleted!", "success");
        }
      });
  }
}
