import { Component, Input, OnInit } from '@angular/core';
import { TileMode } from '../tile/tile.component';

const default_colors = ['#e0ece4', '#ff4b5c', '#056674', '#66bfbf',
  '#f1f3de', '#eb8f8f', '#ec0101', '#cd0a0a', '#ffc93c', '#07689f',
  '#40a8c4', '#a2d5f2', '#ff7171', '#ffaa71', '#6e6d6d'];

@Component({
  selector: 'app-tile-set',
  templateUrl: './tile-set.component.html',
  styleUrls: ['./tile-set.component.scss']
})
export class TileSetComponent implements OnInit {
  TileMode = TileMode;
  @Input() mode: TileMode = TileMode.Large;
  @Input() colors: string[] = default_colors;

  constructor() { }

  ngOnInit(): void {
  }

}
