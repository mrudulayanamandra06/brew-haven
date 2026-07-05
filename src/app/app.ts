import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeaturedComponent } from './components/featured/featured';
import { AboutComponent } from './components/about/about';
import { GalleryComponent } from './components/gallery/gallery';
import { TestimonialsComponent } from './components/testimonials/testimonials';
import { ReserveComponent } from './sections/reserve/reserve';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturedComponent,
    AboutComponent,
    GalleryComponent,
    TestimonialsComponent,
    ReserveComponent,
    ContactComponent,
    FooterComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}