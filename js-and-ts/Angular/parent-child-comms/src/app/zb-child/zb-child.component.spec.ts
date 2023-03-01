import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbChildComponent } from './zb-child.component';

describe('ZbChildComponent', () => {
  let component: ZbChildComponent;
  let fixture: ComponentFixture<ZbChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZbChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZbChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
