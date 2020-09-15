import { Component, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  @Output() @Input("show_back") showBack: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    window.history.back();
  }

}
