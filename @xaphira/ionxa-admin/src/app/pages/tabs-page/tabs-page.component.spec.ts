import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';

import { TabsPageComponent } from './tabs-page.component';

describe('TabsPage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should create the tabs page', () => {
    const fixture = TestBed.createComponent(TabsPageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
