import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert'
@Component({
  selector: 'categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
  providers:[]
})
export class CategoriesComponent implements OnInit {
  searchText;
  heroes = [
    { id: 11, CategoryName: 'Mr. Nice'},
    { id: 12, CategoryName: 'Narco'},
    { id: 13, CategoryName: 'Bombasto'},
    { id: 14, CategoryName: 'Celeritas'},
    { id: 15, CategoryName: 'Magneta'},
    { id: 16, CategoryName: 'RubberMan'},
    { id: 17, CategoryName: 'Dynama'},
    { id: 18, CategoryName: 'Dr IQ'},
    { id: 19, CategoryName: 'Magma'},
    { id: 20, CategoryName: 'Tornado'}
  ];
  constructor() { }
  
  // public collapse = true;
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
