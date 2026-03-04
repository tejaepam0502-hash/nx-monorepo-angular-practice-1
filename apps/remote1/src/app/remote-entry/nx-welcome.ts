import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
  <h1>NxWelcome to Remote 1!</h1>
  <h2> EU region  </h2>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
