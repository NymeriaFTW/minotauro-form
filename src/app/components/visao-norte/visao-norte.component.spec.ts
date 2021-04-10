import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoNorteComponent } from './visao-norte.component';

describe('VisaoNorteComponent', () => {
  let component: VisaoNorteComponent;
  let fixture: ComponentFixture<VisaoNorteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoNorteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaoNorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
