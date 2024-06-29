import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./ui/button/button.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ButtonComponent, SignUpComponent]
})
export class AppComponent {
  title = 'test';
}
