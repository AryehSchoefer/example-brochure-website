const homeNav = document.querySelector('.home')
const homeSection = document.querySelector('.introduction-section')
const teamNav = document.querySelector('.team')
const teamSection = document.querySelector('.team-section')
const pricingNav = document.querySelector('.pricing')
const pricingSection = document.querySelector('.pricing-section')
const contactNav = document.querySelector('.contact')
const contactSection = document.querySelector('.contact-section')

//const introductionSection = document.querySelector('.introduction-section')
//const header = document.querySelector('header')

// needs to be changed
// window.onscroll = () => stickyHeader()

// function stickyHeader() {
//     const sticky = header.offsetTop
//     if (window.pageYOffset - 80 > sticky) {
//         console.log('aight')
//         header.classList.add('sticky')
//         introductionSection.style.paddingTop = '11em'
//     } else {
//         header.classList.remove('sticky')
//         introductionSection.style.paddingTop = '8em'
//     }
// }

homeNav.addEventListener('click', () => {
    homeSection.scrollIntoView({
        behavior: "smooth"
    })
})

teamNav.addEventListener('click', () => {
    teamSection.scrollIntoView({
        behavior: "smooth"
    })
})

pricingNav.addEventListener('click', () => {
    pricingSection.scrollIntoView({
        behavior: "smooth"
    })
})

contactNav.addEventListener('click', () => {
    contactSection.scrollIntoView({
        behavior: "smooth"
    })
})
