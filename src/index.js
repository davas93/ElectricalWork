'use strict';

import modal from './modules/modal';
import toggleMenu from './modules/toggleMenu';
import smoothScroll from './modules/smoothScroll';
import slider from './modules/slider';
import carousel from './modules/carousel';
import accordion from './modules/accordion';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskedPhone';

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

//Form submission and input validation
sendForm();

//Mask phone
maskPhone(`form[name = "form-callback"]>.form-group>input[name="tel"]`);
