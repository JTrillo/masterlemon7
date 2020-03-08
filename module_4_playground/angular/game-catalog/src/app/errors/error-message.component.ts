import { Component } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: `
    <h1 class="error-message">
      400'd
    </h1>
  `,
  styles: [`
    .error-message {
      margin-top: 150px;
      font-size: 170px;
      text-align: center;
    }
  `]
})
export class ErrorMessageComponent {}