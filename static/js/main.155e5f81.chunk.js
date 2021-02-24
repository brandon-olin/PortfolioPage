(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a.n(i),c=a(12),n=a.n(c),r=(a(18),a(19),a(5)),l=a(0),o=function(){var e=Object(i.useState)("header"),t=Object(r.a)(e,2),a=t[0],s=t[1],c=function(e){return window.scrollY<=70?s("header"):window.scrollY>70?s("header-visible"):void 0};return Object(i.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),Object(l.jsx)("header",{id:"header"===a?"header-container":"header-container-visible",children:Object(l.jsxs)("div",{className:"header"===a?"container header":"container header-visible",children:[Object(l.jsx)("a",{id:"header-title",href:"#hero-container",children:"Brandon Olin"}),Object(l.jsxs)("nav",{id:"nav-links",children:[Object(l.jsx)("a",{className:"nav-link",href:"#about",children:"About"}),Object(l.jsx)("a",{className:"nav-link",href:"#projects",children:"Projects"}),Object(l.jsx)("a",{className:"nav-link",href:"#testimonials",children:"Testimonials"}),Object(l.jsx)("a",{className:"nav-link",href:"#contact",children:"Contact"})]})]})})},d=a(3),j=a(4),h=a.p+"static/media/headshot.5fda21d7.png",b=a(13),m=a.n(b),u=function(e){var t=e.delay,a=e.children,s=e.threshold,c=void 0===s?0:s,n=Object(i.useState)(!1),o=Object(r.a)(n,2),d=o[0],j=o[1],h=Object(i.useRef)(),b=new IntersectionObserver((function(e){var a=Object(r.a)(e,1)[0];setTimeout((function(){return j(a.isIntersecting)}),t)}),{threshold:c});return Object(i.useEffect)((function(){return b.observe(h.current),function(){return b.unobserve(h.current)}}),[]),Object(l.jsx)("div",{className:"fade-in-section ".concat(d?"is-visible":""),ref:h,children:a})},x=function(){return Object(l.jsxs)("div",{id:"hero-container",children:[Object(l.jsxs)("div",{className:"container",id:"hero-content-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{id:"hero-title",children:Object(l.jsx)(m.a,{strings:["Hello there!^500 I'm Brandon Olin.^500 <br>Full-stack developer based in Denver."],typeSpeed:40})}),Object(l.jsx)(u,{delay:5500,children:Object(l.jsxs)("div",{id:"hero-buttons",children:[Object(l.jsx)("a",{href:"https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo",id:"resume-button",children:Object(l.jsx)("button",{className:"hero-button",children:"RESUME"})}),Object(l.jsx)("a",{href:"#contact",id:"resume-button",children:Object(l.jsx)("button",{className:"hero-button",children:"CONTACT ME"})})]})})]}),Object(l.jsx)(u,{delay:1400,children:Object(l.jsx)("img",{src:h,alt:"headshot",id:"avatar-image"})})]}),Object(l.jsx)("a",{className:"arrow bounce",href:"#about",children:Object(l.jsx)(d.a,{className:"fa fa-arrow-down fa-3x",icon:j.a})})]})},p=function(){return Object(l.jsxs)("div",{className:"about-container",id:"about",children:[Object(l.jsx)("h1",{id:"about-title",children:"About Me"}),Object(l.jsxs)("div",{className:"about-fade-in",children:[Object(l.jsx)(u,{delay:250,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"about-text",children:"Born in the frigid tundra of Buffalo, NY, the long winters indoors left plenty of time for fiddling with technology. I showed a knack for computers and spent much of my early years building gaming rigs and learning their ins and outs."}),Object(l.jsx)("p",{className:"about-text",children:"I ended up pursuing a business degree and working various jobs in the field, eventually going down the path of entrepreneurship and location independence. This culminated in 3 years spent living and working remotely in South America, Europe, and Asia."})]})}),Object(l.jsx)(u,{delay:750,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"about-text",children:"My travels ended in early 2020 with a 9 week full-stack coding bootcamp at Le Wagon in Bali where I learned Ruby on Rails, HTML, CSS, And JavaSCript. This was followed by a mad dash back to the U.S. in early April in response to the covid pandemic."}),Object(l.jsx)("p",{className:"about-text",children:"From there I shifted my focus to React and JavaScript as my languages of choice, completing a number of Udemy courses around React and Node.js, building a number of smaller projects in those languages along the way."})]})}),Object(l.jsx)(u,{delay:1250,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"about-text",children:"In August of 2020 I took on the role of tech lead for ScrapIt, a compost pickup and rewards app that's been approved as part of the MIT Sandbox Innovation Fund, and will be piloting at two of their graduate dorms in the spring 2021 semester."}),Object(l.jsx)("p",{className:"about-text",children:"From here I'm continuing to build out features and functionality for ScrapIt, while I look for a full-time programming position. I'm open to both remote opportunities, and ones based in the greater Denver area!"})]})})]})]})},O=a(7),f=a(11),g=a.p+"static/media/landingpage.264da387.jpg",v=a.p+"static/media/rewards.f2cfd558.jpg",N=a.p+"static/media/success.4b2f8a9a.png",w=a.p+"static/media/qrcode.3b5f6e25.jpg",y=a.p+"static/media/homepage.eda65385.png",k=a.p+"static/media/jobspage.96059191.png",S=a.p+"static/media/jobpage.936b38b8.png",I=function(){var e={duration:5e3,autoplay:!0,transitionDuration:500,arrows:!1,easing:"ease",indicators:!0};return Object(l.jsxs)("div",{className:"projects-container",id:"projects",children:[Object(l.jsx)("h1",{id:"projects-title",children:"Projects"}),Object(l.jsxs)("div",{className:"project-container",children:[Object(l.jsx)(u,{delay:500,children:Object(l.jsxs)("div",{className:"project-text-container",children:[Object(l.jsx)(u,{delay:500,children:Object(l.jsx)("h2",{className:"project-title",children:"ScrapIt"})}),Object(l.jsx)(u,{delay:1e3,children:Object(l.jsx)("p",{className:"project-text",children:"Lead creation of a client facing application written in React Native with the Expo framework, Redux, and Google Firebase/Cloud Firestore."})}),Object(l.jsx)(u,{delay:1500,children:Object(l.jsx)("p",{className:"project-text",children:"Designed the data structure, implemented QR code creation and scanning functionality, as well as hot reloading with asynchronous data reading and writing."})}),Object(l.jsx)(u,{delay:2e3,children:Object(l.jsx)("p",{className:"project-text",children:"Collaborated with UX designer to plan out the structure of the app, optimizing for ease of use, then implemented the design with a combination of CSS and a UI components library."})})]})}),Object(l.jsx)("div",{className:"slide-container",children:Object(l.jsx)(u,{delay:2500,threshold:.7,children:Object(l.jsxs)(f.Slide,Object(O.a)(Object(O.a)({},e),{},{children:[Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:g,alt:"landingpage",className:"scrapit-slide"})}),Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:N,alt:"success",className:"scrapit-slide"})}),Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:w,alt:"qrcode",className:"scrapit-slide"})}),Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:v,alt:"rewards",className:"scrapit-slide"})})]}))})})]}),Object(l.jsxs)("div",{className:"project-container",children:[Object(l.jsx)(u,{delay:500,children:Object(l.jsxs)("div",{className:"project-text-container",children:[Object(l.jsx)(u,{delay:500,children:Object(l.jsx)("h2",{className:"project-title",children:"SustainABLE"})}),Object(l.jsx)(u,{delay:1e3,children:Object(l.jsx)("p",{className:"project-text",children:"Lead front-end team in development of a gig platform app built in Ruby on Rails with HTML, CSS, and JavaScript. Back-end build with ActiveRecord and PostgreSQL."})}),Object(l.jsx)(u,{delay:1500,children:Object(l.jsx)("p",{className:"project-text",children:"Built in a two week sprint as the final project of the Le Wagon coding bootcamp. "})}),Object(l.jsx)(u,{delay:2e3,children:Object(l.jsx)("p",{className:"project-text",children:"Collaborated with UX designer to plan out the structure of the app, optimizing for ease of use, then implemented the design with a combination of CSS and a UI components library."})})]})}),Object(l.jsx)("div",{className:"slide-container",children:Object(l.jsx)(u,{delay:2500,threshold:.7,children:Object(l.jsxs)(f.Slide,Object(O.a)(Object(O.a)({},e),{},{children:[Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:y,alt:"homepage",className:"scrapit-slide"})}),Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:k,alt:"jobspage",className:"scrapit-slide"})}),Object(l.jsx)("div",{className:"each-slide",children:Object(l.jsx)("img",{src:S,alt:"jobpage",className:"scrapit-slide"})})]}))})})]})]})},C=a.p+"static/media/alex.f1df48db.jfif",B=a.p+"static/media/elad.8251bdd1.jfif",T=function(){return Object(l.jsxs)("div",{className:"testimonials-container",id:"testimonials",children:[Object(l.jsx)("h1",{id:"testimonials-title",children:"Testimonials"}),Object(l.jsx)(u,{delay:500,children:Object(l.jsxs)("div",{className:"testimonial-card",children:[Object(l.jsxs)("div",{className:"testimonial-left-container",children:[Object(l.jsx)("p",{className:"testimonial-content",children:"\"I'd strongly recommend Brandon as a high-quality developer and teammate. Brandon has been working with Scrapit, the MIT-based startup I co-founded, as the Lead Developer and he consistently impresses with his ability to build rapidly with an eye for detail, all while maintaining a lens on the big picture of what the product has to deliver."}),Object(l.jsx)("p",{className:"testimonial-content",children:'Brandon is an extremely quick learner and has a passion for high-quality work that shines through. I think that his ability to learn while building is one of the most important qualities to look for in a strong developer, and he absolutely nails it. He is also a great, collaborative teammate with a strong sense of ownership over his work\u2013anyone ought to be thrilled to have him join their team!"'}),Object(l.jsx)("h5",{className:"testimonial-left-subtext",children:"-Alexandra Prather, Co-Founder at ScrapIt"})]}),Object(l.jsx)("div",{className:"testimonial-right-container",children:Object(l.jsx)("img",{src:C,alt:"alex",className:"testimonial-picture"})})]})}),Object(l.jsx)(u,{delay:1e3,children:Object(l.jsxs)("div",{className:"testimonial-card",children:[Object(l.jsxs)("div",{className:"testimonial-left-container",children:[Object(l.jsx)("p",{className:"testimonial-content",children:'"Brandon was amazing! Smart, hard working, and went the extra 10 miles to makes sure everything was done correctly. He didn\'t just write functional code and called it a day. He made sure it met my high standards and did a fantastic job!"'}),Object(l.jsx)("h5",{className:"testimonial-left-subtext",children:"-Elad Karni, Founder & CEO at EK Solutions"})]}),Object(l.jsx)("div",{className:"testimonial-right-container",children:Object(l.jsx)("img",{src:B,alt:"elad",className:"testimonial-picture"})})]})})]})},A=a(8),E=function(){return Object(l.jsx)("div",{className:"contact-container",id:"contact",children:Object(l.jsx)(u,{delay:500,children:Object(l.jsxs)("div",{className:"contact-card",children:[Object(l.jsx)("h1",{id:"contact-title",children:"Interested in working with me?"}),Object(l.jsxs)("div",{className:"contact-wrapper",children:[Object(l.jsxs)("div",{className:"professional",children:[Object(l.jsx)(u,{delay:1250,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"contact-section-header",children:"Send me an email"}),Object(l.jsx)("nav",{id:"",children:Object(l.jsx)("a",{className:"social-icon-link",href:"mailto:dev@brandonolin.com",children:Object(l.jsx)(d.a,{className:"social-icon",icon:j.b})})})]})}),Object(l.jsx)(u,{delay:2e3,children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:"contact-section-header",children:"View my resume"}),Object(l.jsx)("nav",{id:"",children:Object(l.jsx)("a",{className:"social-icon-link",href:"https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo",children:Object(l.jsx)(d.a,{className:"social-icon",icon:j.c})})})]})})]}),Object(l.jsx)(u,{delay:2750,children:Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("h3",{className:"contact-section-header",children:"...or connect with me below!"}),Object(l.jsxs)("nav",{id:"social-links",children:[Object(l.jsx)("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/brandon-olin/",children:Object(l.jsx)(d.a,{className:"social-icon",icon:A.b})}),Object(l.jsx)("a",{className:"social-icon-link",href:"https://twitter.com/BrandonOlin",children:Object(l.jsx)(d.a,{className:"social-icon",icon:A.c})}),Object(l.jsx)("a",{className:"social-icon-link",href:"https://github.com/brandon-olin",children:Object(l.jsx)(d.a,{className:"social-icon",icon:A.a})})]})]})})]})]})})})};var L=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(x,{}),Object(l.jsx)(p,{}),Object(l.jsx)(I,{}),Object(l.jsx)(T,{}),Object(l.jsx)(E,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(L,{})}),document.getElementById("root")),F()}},[[26,1,2]]]);
//# sourceMappingURL=main.155e5f81.chunk.js.map