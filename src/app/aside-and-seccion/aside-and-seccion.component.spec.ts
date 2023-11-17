import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAndSeccionComponent } from './aside-and-seccion.component';

describe('AsideAndSeccionComponent', () => {
  let component: AsideAndSeccionComponent;
  let fixture: ComponentFixture<AsideAndSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideAndSeccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideAndSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
