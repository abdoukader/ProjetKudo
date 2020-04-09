import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KudowallStructurePage } from './kudowall-structure.page';

describe('KudowallStructurePage', () => {
  let component: KudowallStructurePage;
  let fixture: ComponentFixture<KudowallStructurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KudowallStructurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KudowallStructurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
