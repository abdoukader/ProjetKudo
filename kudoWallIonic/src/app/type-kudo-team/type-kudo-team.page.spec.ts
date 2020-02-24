import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeKudoTeamPage } from './type-kudo-team.page';

describe('TypeKudoTeamPage', () => {
  let component: TypeKudoTeamPage;
  let fixture: ComponentFixture<TypeKudoTeamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeKudoTeamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeKudoTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
