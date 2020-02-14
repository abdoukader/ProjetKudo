import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixBeneficiairePage } from './choix-beneficiaire.page';

describe('ChoixBeneficiairePage', () => {
  let component: ChoixBeneficiairePage;
  let fixture: ComponentFixture<ChoixBeneficiairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixBeneficiairePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixBeneficiairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
