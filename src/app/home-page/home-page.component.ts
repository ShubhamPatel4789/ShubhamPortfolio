import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';


Swiper.use([Navigation, Mousewheel]);
@Component({
  selector: 'app-root',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
 
})

export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initializeIconBoxes();
    this.initializeCloseButtons();
    this.initializeDocumentClicks();
    this.initializeMaximizeButtons();
    this.initializeSwiper();
  }

  private initializeIconBoxes(): void {
    const iconBoxes = document.querySelectorAll<HTMLElement>('.icon-box');
    const body = document.querySelector('body');

    iconBoxes.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        if (modalId) {
          const modal = document.getElementById(modalId);
          if (modal) {
            modal.style.display = 'block';
            body?.classList.add('prevent-background-scroll');
          }
        }
      });
    });
  }

  private initializeCloseButtons(): void {
    const closeBtns = document.querySelectorAll<HTMLElement>('.close-btn');
    const iconBoxContainers = document.querySelectorAll<HTMLElement>('.icon-container');
    const body = document.querySelector('body');

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.popup') as HTMLElement;
        modal.style.display = 'none';
        body?.classList.remove('prevent-background-scroll');
        iconBoxContainers.forEach((container) => {
          container.style.display = 'flex';
        });
      });
    });
  }

  private initializeDocumentClicks(): void {
    const body = document.querySelector('body');

    document.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('popup')) {
        (e.target as HTMLElement).style.display = 'none';
        body?.classList.remove('prevent-background-scroll');
      }
    });
  }

  private initializeMaximizeButtons(): void {
    const maximizeBtns = document.querySelectorAll<HTMLElement>('.maximize-btn');
    
    maximizeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.popup') as HTMLElement;
        const container = modal.querySelector('.popup-container') as HTMLElement;
        const body = modal.querySelector('.popup-body') as HTMLElement;

        if (modal.classList.contains('maximized')) {
          container.style.width = 'min(900px, 90%)';
          container.style.top = '45%';
          body.style.height = '70vh';
        } else {
          container.style.width = '100%';
          container.style.top = '50%';
          body.style.height = '90vh';
        }

        modal.classList.toggle('maximized');
        body.classList.toggle('prevent-scroll');
      });
    });
  }

  private initializeSwiper(): void {
    new Swiper('.swiper', {
      preventClicks: true,
      noSwiping: true,
      freeMode: false,
      spaceBetween: 10,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      mousewheel: {
        invert: false,
        thresholdDelta: 50,
        sensitivity: 1,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        680: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    });
  }
}

export default HomepageComponent;