//Imports
import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

//JS interactivity functions
new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"),75);

new RevealOnScroll(document.querySelectorAll(".testimonial"),60);

new StickyHeader();

//Webpack dev-server
if (module.hot) {
    module.hot.accept();
};

