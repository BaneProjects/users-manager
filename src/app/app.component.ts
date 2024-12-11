import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { CoreComponent } from './core/core.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,CoreComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
