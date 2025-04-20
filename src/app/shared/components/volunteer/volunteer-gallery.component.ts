import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-volunteer-gallery',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './volunteer-gallery.component.html',
  styleUrls: ['./volunteer-gallery.component.scss']
})
export class VolunteerGalleryComponent {
  galleryImages = [
    {
      url: 'assets/images/gallery/volunteer/v-monks.jpg',
      caption: 'Volunteer teachers are offering food to monks as part of a public school ceremony.'
    },
    {
      url: 'assets/images/gallery/volunteer/v-yoga.jpg',
      caption: 'Volunteers are teaching yoga to students during the morning class.'
    },
    {
      url: 'assets/images/gallery/volunteer/v-donation.jpg',
      caption: 'Volunteer teachers generously donate study materials to support the students learning.'
    },
    {
      url: 'assets/images/gallery/volunteer/v-scholarship.png',
      caption: 'Rob and Kat with the scholarship student and her mother'
    },
    {
      url: 'assets/images/gallery/volunteer/v-familyhome.png',
      caption: 'Karol visited the scholarship student and their family at home'
    },
    {
      url: 'assets/images/gallery/volunteer/v-teaching.png',
      caption: 'A volunteer teacher is teaching English.'
    },
    {
      url: 'assets/images/gallery/volunteer/v-meeting.png',
      caption: 'Volunteer teachers are meeting with the district educational director.'
    },
    {
      url: 'assets/images/gallery/volunteer/v-weeding.png',
      caption: 'Volunteer in a Khmer wedding dress.'
    },
    {
      url: 'assets/images/gallery/volunteer/v-khmernewyear.png',
      caption: 'A photo with volunteer during Khmer New Year at High school in the district '
    },
    {
      url: 'assets/images/gallery/volunteer/v-paiting.png',
      caption: 'Volunteer painting the school wall'
    }
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  };
}