import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: './home-page/home-page.component.html',
  styleUrls: ['./home-page/home-page.component.css'],
  standalone: true,
  imports: [IonicModule], // Correct import statement for HomepageComponent
  
})

export class AppComponent {
  title = 'Shubham-Portfolio';
}

