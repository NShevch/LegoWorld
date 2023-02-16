import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {
  @Input() addedStyles!: Styles;
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.clickEvent.emit();
  }
}
