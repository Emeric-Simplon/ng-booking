import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesSidebarComponent } from './cities-sidebar.component';

describe('CitiesSidebarComponent', () => {
  let component: CitiesSidebarComponent;
  let fixture: ComponentFixture<CitiesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
