import { Component, Input, OnInit, Output } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { toggle } from '../models/theme.actions';

@Component({
  selector: 'app-theme-chooser',
  templateUrl: './theme-chooser.component.html',
  styleUrls: ['./theme-chooser.component.scss']
})
export class ThemeChooserComponent implements OnInit {
  private _className: string = "";

  faMoon = faMoon;
  theme$: Observable<IconDefinition>;

  constructor(private store: Store<{ theme: string }>) {
    this.theme$ = store.pipe(select("theme")).pipe(map(theme => theme === 'light' ? faSun : faMoon));
  }

  get className() {
    return `colors-theme-chooser ${this._className}`;
  }

  @Input("class") set className(value: string) {
    this._className = value;
  }

  toggle(): void {
    this.store.dispatch(toggle());
  }

  ngOnInit(): void {
  }

}
