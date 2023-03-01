import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbParentComponent } from './zb-parent.component';

describe('ZbParentComponent', () => {
  let component: ZbParentComponent;
  let fixture: ComponentFixture<ZbParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZbParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZbParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
