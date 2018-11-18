import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import { AboutMeComponent } from './about-me/about-me.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { ProjectsAndConferencesComponent } from './projects-and-conferences/projects-and-conferences.component';
import { ContactComponent } from './contact/contact.component';

library.add(faTwitter, faLinkedin, faGithub);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutMeComponent,
    ProjectsAndConferencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
