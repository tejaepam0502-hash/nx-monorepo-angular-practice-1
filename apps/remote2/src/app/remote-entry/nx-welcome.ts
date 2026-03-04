import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <h1>NxWelcome to Remote 2!</h1>
    <h2> LATAM region  </h2>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
