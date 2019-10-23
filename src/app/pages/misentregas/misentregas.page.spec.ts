import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisentregasPage } from './misentregas.page';

describe('MisentregasPage', () => {
  let component: MisentregasPage;
  let fixture: ComponentFixture<MisentregasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisentregasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisentregasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
