import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmographyWrapperComponent } from './filmography-wrapper.component';

describe('FilmographyWrapperComponent', () => {
  let component: FilmographyWrapperComponent;
  let fixture: ComponentFixture<FilmographyWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmographyWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmographyWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
