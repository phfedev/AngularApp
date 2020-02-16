import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-procudt-alerts',
  templateUrl: './procudt-alerts.component.html',
  styleUrls: ['./procudt-alerts.component.css']
})
export class ProcudtAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

}
