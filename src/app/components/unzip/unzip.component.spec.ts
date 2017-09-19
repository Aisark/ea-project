import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnzipComponent } from './unzip.component';

describe('UnzipComponent', () => {
  let component: UnzipComponent;
  let fixture: ComponentFixture<UnzipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnzipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnzipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
