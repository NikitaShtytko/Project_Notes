import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  route(){
      this.router.navigateByUrl('note');
  }

}
