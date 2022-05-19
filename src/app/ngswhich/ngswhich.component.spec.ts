import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswhichComponent } from './ngswhich.component';

describe('NgswhichComponent', () => {
  let component: NgswhichComponent;
  let fixture: ComponentFixture<NgswhichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswhichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswhichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
