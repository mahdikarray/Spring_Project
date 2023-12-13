import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
      <a href="/">
        <img
          src="./assets/images/logos/logo.png"
          class="align-middle m-2 img-fluid"
          alt="logo"
          style="width: 200px"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
