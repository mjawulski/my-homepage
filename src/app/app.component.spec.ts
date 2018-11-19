import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';

describe('AppComponent', () => {
  beforeEach(async(() => {
    // Create a fake TwainService object with a `getQuote()` spy
    const observableMedia = jasmine.createSpyObj('ObservableMedia', [
      'isActive'
    ]);
    // Make the spy return a synchronous Observable with the test data
    const getIsActive = observableMedia.isActive.and.returnValue(true);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ObservableMedia, useValue: observableMedia }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
