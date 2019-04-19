import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
    :host { color: red; }
  `],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app-elems';
}
