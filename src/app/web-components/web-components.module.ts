import { CommonModule } from '@angular/common';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TestElmComponent } from './test-elm/test-elm.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TestElmComponent,
  ],
  providers: [],
  entryComponents: [
    TestElmComponent,
  ],
})
export class WebComponentsModule {
  constructor(private injector: Injector) {
    const testElm = createCustomElement(TestElmComponent, { injector });
    customElements.define('test-elm', testElm);
  }
}
