import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscomprasItemModalPage } from './miscompras-item-modal.page';

describe('MiscomprasItemModalPage', () => {
  let component: MiscomprasItemModalPage;
  let fixture: ComponentFixture<MiscomprasItemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscomprasItemModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscomprasItemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
