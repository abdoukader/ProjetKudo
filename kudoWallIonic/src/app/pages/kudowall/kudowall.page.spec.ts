import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KudowallPage } from './kudowall.page';

describe('KudowallPage', () => {
  let component: KudowallPage;
  let fixture: ComponentFixture<KudowallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KudowallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KudowallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
