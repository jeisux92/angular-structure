import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceReadOnlyComponent } from './reference-read-only.component';

describe('ReferenceReadOnlyComponent', () => {
  let component: ReferenceReadOnlyComponent;
  let fixture: ComponentFixture<ReferenceReadOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceReadOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceReadOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
