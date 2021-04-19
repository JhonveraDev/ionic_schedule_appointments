import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { BankdraftComponent } from './bankdraft/bankdraft.component';
import { ShiftselectionComponent } from './shiftselection/shiftselection.component';
import { TimeComponent } from './time/time.component';



@NgModule({
  declarations: [FooterComponent,BankdraftComponent,ShiftselectionComponent,TimeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[
    FooterComponent,
    BankdraftComponent,
    ShiftselectionComponent,
    TimeComponent
  ]
})
export class ComponentsModule { }
