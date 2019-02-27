import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSubmenuComponent } from './btn-submenu.component';

describe('BtnSubmenuComponent', () => {
  let component: BtnSubmenuComponent;
  let fixture: ComponentFixture<BtnSubmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSubmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
