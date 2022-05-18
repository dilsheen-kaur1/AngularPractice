import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestStyleComponent } from './test-style/test-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { StructuralDirectivesSecondComponent } from './structural-directives-second/structural-directives-second.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestStyleComponent,
    EventBindingComponent,
    TemplateRefVariableComponent,
    StructuralDirectivesComponent,
    StructuralDirectivesSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
