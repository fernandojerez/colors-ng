import { Component, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  private _className: string = "";
  theme$: Observable<string>;
  @Output() @Input("show_back") showBack: boolean = false;

  constructor(private store: Store<{ theme: string }>) {
    this.theme$ = store.pipe(select("theme"));
  }

  get className() {
    return this.theme$.pipe(map(theme => `colors-view colors-${theme}-theme`));
  }

  ngOnInit(): void {
  }

}
