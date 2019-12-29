import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount: number=4;
  btnTexte: string='Add an item ';
  goalText: string='My first life goal';
  goals=[];

  constructor(private route: ActivatedRoute, private router: Router, private dataservice:DataService) {
    this.goals=this.dataservice.getGoal();
   }

  ngOnInit() {
  }
  addItem(){
    this.dataservice.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.dataservice.goals.length;
  }

}
