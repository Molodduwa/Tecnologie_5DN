import { Component } from '@angular/core';
import { Auto } from '../models/model';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  suvs:Auto[]
  constructor(private dataService: DataService) {
    this.suvs = this.dataService.autoSuv as Auto[]
   }

}
