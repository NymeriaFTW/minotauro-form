import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoSulComponent } from './visao-sul.component';

describe('VisaoSulComponent', () => {
  let component: VisaoSulComponent;
  let fixture: ComponentFixture<VisaoSulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoSulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaoSulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
