import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import {Invoice} from '../../bill.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  allTasks:Invoice[];
  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    this.allTasks=this.globalService.invoice;
    console.log(this.allTasks);
  }

  findProgress(remaining:number, total:number){
    console.log(remaining,total);
    return (total-remaining/total);
  }

}
