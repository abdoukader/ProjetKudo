import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VainqueurPage } from './vainqueur.page';

describe('VainqueurPage', () => {
  let component: VainqueurPage;
  let fixture: ComponentFixture<VainqueurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VainqueurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VainqueurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
