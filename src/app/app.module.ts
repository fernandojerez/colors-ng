import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeChooserComponent } from './theme-chooser/theme-chooser.component';
import { StoreModule } from '@ngrx/store';
import { themeReducer } from './models/theme.reducer';
import { ViewComponent } from './view/view.component';
import { HomeComponent } from './home/home.component';
import { ColorInfoComponent } from './color-info/color-info.component';
import { TileComponent } from './tile/tile.component';
import { TileSetComponent } from './tile-set/tile-set.component';
import { ColorPanelComponent } from './color-panels/color-panels.component';
import { ColorInputComponent } from './color-input/color-input.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeChooserComponent,
    ViewComponent,
    HomeComponent,
    ColorInfoComponent,
    TileComponent,
    TileSetComponent,
    ColorPanelComponent,
    ColorInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({ theme: themeReducer }, {})
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/colors-ng' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
