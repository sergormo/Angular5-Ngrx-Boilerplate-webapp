import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(
    public baseService: BaseService
  ) { }

}
