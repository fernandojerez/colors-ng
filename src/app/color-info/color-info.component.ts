import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Color from 'color';

function produce_colors(color: Color, fn: (color: Color, n: number) => Color) {
  let c = Color(color);
  const result = [c.hex()];
  for (let i = 1; i < 11; i++) {
    result.push(fn(c, i / 10).hex());
  }
  return result;
}

function shades(color: Color) {
  return produce_colors(color, (c, n) => {
    return c.darken(n);
  });
}

function tint(color: Color) {
  return produce_colors(color, (c, n) => {
    return c.whiten(n);
  });
}

@Component({
  selector: 'app-color-info',
  templateUrl: './color-info.component.html',
  styleUrls: ['./color-info.component.scss']
})
export class ColorInfoComponent implements OnInit {
  shade = (color: Color) => shades(color);
  tint = (color: Color) => tint(color);
  complementary = (color: Color) => [Color(color).hex(), Color(color).rotate(180).hex()];
  triadic = (color: Color) => [Color(this.color).hex(), Color(this.color).rotate(120).hex(), Color(this.color).rotate(240).hex()];
  analogous = (color: Color) => [Color(this.color).hex(), Color(this.color).rotate(30).hex(), Color(this.color).rotate(330).hex()];

  @Output() showAlert: boolean = false;
  @Input() color?: string;
  @Output() use_color?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.color = params['color'] as string;
      const tmpColor = (() => {
        try {
          return Color(decodeURIComponent(this.color || '')).hex();
        } catch {
          return null;
        }
      })();
      this.showAlert = !tmpColor;
      this.use_color = tmpColor || Color("black").hex();
      if (this.showAlert) {
        setTimeout(() => this.showAlert = false, 4000);
      }
    });
  }

}
