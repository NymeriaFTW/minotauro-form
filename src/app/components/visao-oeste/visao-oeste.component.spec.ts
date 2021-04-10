import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoOesteComponent } from './visao-oeste.component';

describe('VisaoOesteComponent', () => {
  let component: VisaoOesteComponent;
  let fixture: ComponentFixture<VisaoOesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoOesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaoOesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
