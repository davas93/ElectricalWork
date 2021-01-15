'use strict';

import modal from './modules/modal';
import toggleMenu from './modules/toggleMenu';
import smoothScroll from './modules/smoothScroll';
import slider from './modules/slider';
import carousel from './modules/carousel';
import accordion from './modules/accordion';

//Modal window
modal();

//Mobile menu
toggleMenu();

//Smooth scroll to section and scroll top btn
smoothScroll();

//Main slider
slider();

//Slider-carousel
carousel();

//FAQ block
accordion();
