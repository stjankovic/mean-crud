import { Component, OnInit, Inject } from '@angular/core';

import { DataService } from '../data.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  model: any = {};
  user$: any;
  pathid: String;
  vis: Boolean = false;
  togvis: Boolean = false;
  

  constructor(private data: DataService, private route: ActivatedRoute, private rt: Router) { 
    this.route.params.subscribe( params => this.user$ = params.id)
  }

  ngOnInit() {
    this.reqUser();
  }

  reqUser() {
    this.data.getUser(this.user$).subscribe(data => this.user$ = data)
    this.pathid = this.user$.toString();
  }

  delUser() {
    this.vis = true;
    
    this.data.deleteUser(this.pathid).subscribe(
      result => console.log(result),
      err => console.error(err)
    )
    setTimeout(() => {
      this.rt.navigate(['/users']);
    }, 1400)
  }

  patchUser() {
    this.vis = true;
    this.data.updateUser(this.user$._id, this.model).subscribe(data => this.user$ = data)

    setTimeout(() => {
      this.togvis = false;
      this.vis = false;
      this.rt.navigate(['/users']);
    }, 1400)
  }

  toggleUpdate() {
    if(this.togvis == false) {
      this.vis = true;
      setTimeout(()=> {
        this.togvis = true;
        this.vis = false;
      }, 500) 
    } else if (this.togvis == true) {
      this.togvis = false;
    }    
  }

}
