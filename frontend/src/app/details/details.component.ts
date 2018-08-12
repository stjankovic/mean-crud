import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  user$: Object;
  pathid: String;
  vis: Boolean = false;

  constructor(private data: DataService, private route: ActivatedRoute, private rt: Router) { 
    this.route.params.subscribe( params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    )
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
    }, 1200)
    
  }

}
