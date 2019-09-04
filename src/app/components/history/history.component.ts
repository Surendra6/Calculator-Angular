import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { HistorySheetComponent } from '../history-sheet/history-sheet.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  showHistory() {
    this._bottomSheet.open(HistorySheetComponent);
  }

  ngOnInit() {
  }

}
