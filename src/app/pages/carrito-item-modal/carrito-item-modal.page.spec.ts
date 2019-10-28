import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoItemModalPage } from './carrito-item-modal.page';

describe('CarritoItemModalPage', () => {
  let component: CarritoItemModalPage;
  let fixture: ComponentFixture<CarritoItemModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoItemModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoItemModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
