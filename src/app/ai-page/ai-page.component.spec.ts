import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPageComponent } from './ai-page.component';

describe('AiPageComponent', () => {
  let component: AiPageComponent;
  let fixture: ComponentFixture<AiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
