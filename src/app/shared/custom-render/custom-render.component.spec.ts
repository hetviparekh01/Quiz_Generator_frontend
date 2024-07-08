import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRenderComponent } from './custom-render.component';

describe('CustomRenderComponent', () => {
  let component: CustomRenderComponent;
  let fixture: ComponentFixture<CustomRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRenderComponent]
    });
    fixture = TestBed.createComponent(CustomRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
