import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalidadComponent } from './personalidad.component';

describe('PersonalidadComponent', () => {
  let component: PersonalidadComponent;
  let fixture: ComponentFixture<PersonalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
