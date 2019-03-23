import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RumorWrapperComponent } from './rumor-wrapper.component';

describe('RumorWrapperComponent', () => {
  let component: RumorWrapperComponent;
  let fixture: ComponentFixture<RumorWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RumorWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RumorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
