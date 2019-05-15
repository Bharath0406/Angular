import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InBuildPipeLineComponentComponent } from './in-build-pipe-line-component.component';

describe('InBuildPipeLineComponentComponent', () => {
  let component: InBuildPipeLineComponentComponent;
  let fixture: ComponentFixture<InBuildPipeLineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuildPipeLineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuildPipeLineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
