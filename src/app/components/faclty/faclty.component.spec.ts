import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacltyComponent } from './faclty.component';

describe('FacltyComponent', () => {
  let component: FacltyComponent;
  let fixture: ComponentFixture<FacltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
