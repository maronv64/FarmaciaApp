import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisentregasItemModalPage } from './misentregas-item-modal.page';

describe('MisentregasItemModalPage', () => {
  let component: MisentregasItemModalPage;
  let fixture: ComponentFixture<MisentregasItemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisentregasItemModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisentregasItemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
