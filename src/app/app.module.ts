import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module';    // Angular material components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DisplayComponent } from './components/display/display.component';
import { HistoryComponent } from './components/history/history.component';
import { KeypadComponent } from './components/keypad/keypad.component';
import { HistorySheetComponent } from './components/history-sheet/history-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageNotFoundComponent,
    DisplayComponent,
    HistoryComponent,
    KeypadComponent,
    HistorySheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  entryComponents: [HistorySheetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
