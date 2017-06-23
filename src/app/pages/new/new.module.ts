import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NewComponent } from './new.component';
import { NewService } from './new.service'
import { routing } from './new.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    NewComponent
  ],
  providers: [
    NewService,
  ]
})
export class NewModule {}