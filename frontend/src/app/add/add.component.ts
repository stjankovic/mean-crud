import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  users$: Object;
  model: any = {};
  stuff: any;
  constructor(private data: DataService, private rt: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.data.addUser(this.model).subscribe(
      data => this.users$ = data
    )
    setTimeout(() => {
      this.rt.navigate(['/users']);
    }, 1200)
  }




  

}
