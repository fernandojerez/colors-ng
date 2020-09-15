import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrls: ['./color-input.component.scss']
})
export class ColorInputComponent implements OnInit {
  @Output() color?: string;
  @Input() label?: string;
  @Input("class") className?: string;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  updateColor(event: Event) {
    this.color = (<HTMLInputElement>event.target).value;
  }

  showColorInfo() {
    this.route.navigate(['/info'], { queryParams: { color: this.color } })
  }
}
