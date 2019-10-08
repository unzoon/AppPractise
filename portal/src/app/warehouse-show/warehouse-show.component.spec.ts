import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseShowComponent } from './warehouse-show.component';

describe('WarehouseShowComponent', () => {
  let component: WarehouseShowComponent;
  let fixture: ComponentFixture<WarehouseShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
