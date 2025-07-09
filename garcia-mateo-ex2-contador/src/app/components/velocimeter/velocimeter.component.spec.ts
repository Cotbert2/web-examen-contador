import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocimeterComponent } from './velocimeter.component';

describe('VelocimeterComponent', () => {
  let component: VelocimeterComponent;
  let fixture: ComponentFixture<VelocimeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocimeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
