gsap.registerPlugin(ScrollTrigger);

var tlHead = gsap.timeline({
  ease:'elastic'
});
tlHead.from('header', {
    y: -5,
    duration: 1,
    opacity: 0,
    
  })
  .from('nav li', {
    y: -20,
    duration: .3,
    opacity: 0,
    stagger: {
      each: 0.3,
      from: 0
    }
  })
  .from('nav .cta-btn', {
    y: -20,
    duration: .3,
    opacity: 0,

  })
  
 var home = gsap.timeline()
 home.from('#home h1', {
    y: 20,
    duration: .3,
    opacity: 0,

  })
 home.from('#home img', {
    y: 20,
    duration: .3,
    opacity: 0,

  })
 home.from('#home p', {
    y: 20,
    duration: .3,
    opacity: 0,

  })
tlHead.add(home)


gsap.from('#about p',{
  y:20,
  opacity:0,
  scrollTrigger:{
    trigger:'#about p'
  }
})
gsap.from('#about h2',{
  y:20,
  opacity:0,
  scrollTrigger:{
    trigger:'#about h2'
  }
})
gsap.from('#blog h2',{
  y:20,
  opacity:0,
  scrollTrigger:{
    trigger:'#blog h2'
  }
})
gsap.from('#about .card',{
  y:20,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:'#about .card'
  },
  stagger:{
    each:0.3,
    from:0
  }
  
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)