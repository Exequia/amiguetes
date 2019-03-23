import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeNewsWrapperComponent } from './fake-news-wrapper.component';

describe('FakeNewsWrapperComponent', () => {
  let component: FakeNewsWrapperComponent;
  let fixture: ComponentFixture<FakeNewsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeNewsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeNewsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
