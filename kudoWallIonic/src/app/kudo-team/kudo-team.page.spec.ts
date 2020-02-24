import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KudoTeamPage } from './kudo-team.page';

describe('KudoTeamPage', () => {
  let component: KudoTeamPage;
  let fixture: ComponentFixture<KudoTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KudoTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KudoTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
