const loading = document.querySelector(".loading")

setTimeout(() => {

    loading.style.opacity = '0'

    loading.style.visibility = 'hidden'

}, 2000)

const header = document.querySelector(".head-items")

const navImg = document.querySelector(".main nav img")

const navUl = document.querySelector(".main nav ul")

const mainTextP = document.querySelector(".main .main-items .main-text p")

const mainTextH2 = document.querySelector(".main .main-items .main-text h2")

const mainTextA = document.querySelector(".main .main-items .main-text a")

setTimeout(() => {

    header.style.transform = 'translateY(0)'

    navImg.style.transform = 'translateY(0)'

    navImg.style.opacity = '1'

    navUl.style.opacity = '1'

    navUl.style.transform = 'translateY(0)'

    mainTextP.style.opacity = '1'

    mainTextP.style.transform = 'translateY(0)'

    mainTextH2.style.opacity = '1'

    mainTextH2.style.transform = 'translateY(0)'

    mainTextA.style.opacity = '1'

    mainTextA.style.transform = 'translateY(0)'

}, 2500)

const experience = document.querySelectorAll(".about .about-items .our-experience div")

const about = document.querySelector(".about")

const expNumbers = document.querySelectorAll(".about .about-items .our-experience div h3")

let start = false

window.onscroll = function () {

    if (scrollY >= about.offsetTop) {

        experience.forEach(e => {

            e.style.transform = 'translateY(0)'

        })

        if (!start) {

            expNumbers.forEach((sta) => increasNum(sta))

        }

        start = true

    }

    const serH6 = document.querySelector(".services .services-items .services-header h6")

    const serH2 = document.querySelector(".services .services-items .services-header h2")

    const services = document.querySelector(".services")

    const servicesItem = document.querySelectorAll(".services .services-items .services-container .services-showed")

    if (scrollY >= (services.offsetTop - services.clientHeight)) {

        serH6.style.transform = 'translateY(0)'

        serH6.style.opacity = '1'

        serH2.style.transform = 'translateY(0)'

        serH2.style.opacity = '1'

        servicesItem.forEach((e) => {

            e.style.opacity = '1'

            e.style.transform = 'translateY(0)'

        })

    }

    const teamH3 = document.querySelector(".team .team-about h6")

    const teamH2 = document.querySelector(".team .team-about h2")

    const teamP = document.querySelector(".team .team-about p")

    const teamSection = document.querySelector(".team")

    const personalInfo = document.querySelectorAll(".team .team-images")

    if (scrollY >= (teamSection.offsetTop - teamSection.clientHeight)) {

        teamP.style.transform = 'translateY(0)'

        teamP.style.opacity = '1'

        teamH3.style.transform = 'translateY(0)'

        teamH3.style.opacity = '1'

        teamH2.style.transform = 'translateY(0)'

        teamH2.style.opacity = '1'

        personalInfo.forEach((e) => {

            e.style.opacity = '1'

            e.style.transform = 'translateY(0)'

        })

    }

    const contact = document.querySelector(".contact")

    const contactH6 = document.querySelector(".contact h6")

    const contactH2 = document.querySelector(".contact h2")

    const textarea = document.querySelector(".contact form textarea")

    const input = document.querySelectorAll(".contact form input")

    if (scrollY >= (contact.offsetTop - contact.clientHeight)) {

        contactH6.style.opacity = '1'

        contactH6.style.transform = 'translateY(0)'

        contactH2.style.opacity = '1'

        contactH2.style.transform = 'translateY(0)'

        textarea.style.opacity = '1'

        textarea.style.transform = 'translateY(0)'

        input.forEach((e) => {

            e.style.opacity = '1'

            e.style.transform = 'translateY(0)'

        })

    }

    const footer = document.querySelector("footer")

    const icons = document.querySelectorAll("footer .row .footer-heading:first-of-type ul li i")

    if (scrollY >= (footer.offsetTop - footer.clientHeight + 200)) {

        icons.forEach((e) => {

            e.style.transform = 'translateY(0)'

            e.style.opacity = '1'

        })

    }

}

function increasNum(num) {

    let Num = num.dataset.goal

    let increas = setInterval(() => {

        num.textContent++

        if (num.textContent == Num) {

            clearInterval(increas)

        }

    }, 20)

}

