import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSetComponent } from './tile-set.component';

describe('TileSetComponent', () => {
  let component: TileSetComponent;
  let fixture: ComponentFixture<TileSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
