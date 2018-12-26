import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sub-cat',
    templateUrl: './subcategories.html',
    styleUrls: ['./subcategories.css']

})
export class SubCatComponent implements OnInit {

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