import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoModalPage } from './producto-modal.page';

describe('ProductoModalPage', () => {
  let component: ProductoModalPage;
  let fixture: ComponentFixture<ProductoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
