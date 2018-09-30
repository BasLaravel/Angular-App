import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // output moet voor de eventemitter anders kan de parentclasse deze niet ontvangen.
  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  onSelect(feature: string){
    this.featureSelected.emit(feature);

  }

  ngOnInit() {
  }


}
