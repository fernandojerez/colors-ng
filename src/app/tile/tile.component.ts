import { Component, Input, OnInit } from '@angular/core';

export enum TileMode {
  Large = "large",
  Compact = "compact"
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() color?: string;
  @Input() mode: TileMode = TileMode.Large;

  constructor() { }

  ngOnInit(): void {
  }

}
