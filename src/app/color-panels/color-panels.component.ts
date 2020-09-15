import { Component, Input, OnInit, Output } from '@angular/core';
import Color from 'color';
import { TileMode } from '../tile/tile.component';

@Component({
    selector: 'app-color-panel',
    templateUrl: './color-panel.component.html',
    styleUrls: ['./color-panels.component.scss'],
})
export class ColorPanelComponent {
    @Output() compact = TileMode.Compact;
    @Input() color?: String;
    @Input() func: (color: Color) => string[] = (color: Color) => [color.hex()];

    constructor() { }

    @Output() get colors() {
        return this.func(Color(this.color));
    }
}