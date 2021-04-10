import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoLesteComponent } from './visao-leste.component';

describe('VisaoLesteComponent', () => {
  let component: VisaoLesteComponent;
  let fixture: ComponentFixture<VisaoLesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoLesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaoLesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
