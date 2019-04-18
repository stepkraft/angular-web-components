import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TestElmComponent } from './test-elm/test-elm.component';

@NgModule({
  declarations: [
    TestElmComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [
    TestElmComponent,
  ],
})
export class AppModule {
  constructor(private injector: Injector) {
    const testElm = createCustomElement(TestElmComponent, { injector });
    customElements.define('test-elm', testElm);
  }

  ngDoBootstrap() { }
}
