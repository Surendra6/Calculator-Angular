import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySheetComponent } from './history-sheet.component';

describe('HistorySheetComponent', () => {
  let component: HistorySheetComponent;
  let fixture: ComponentFixture<HistorySheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorySheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
