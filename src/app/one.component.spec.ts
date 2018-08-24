import { TestBed, async } from '@angular/core/testing';
import { OneComponent } from './one.component';
describe('OneComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OneComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(OneComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'one'`, async(() => {
    const fixture = TestBed.createComponent(OneComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('one');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(OneComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to one!');
  }));
});
