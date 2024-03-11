import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomepageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
];

@NgModule({
  declarations: [HomepageComponent],
  imports: [RouterModule.forRoot(routes),IonicModule, BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  bootstrap: [HomepageComponent],
})
export class AppRoutingModule { }


