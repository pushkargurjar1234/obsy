function locomotive_animation(){gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  
    // for tablet smooth
    tablet: { smooth: true },
  
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  
    // follwoing line is not required to work pinning on touch screen
  
    /* pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"*/
  });
  
  
  
  
  
  tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
 }

  function loadingAnimation(){
      var tl = gsap.timeline();
      tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.5,
      });
      
      tl.from(".line1-part1  ,.line h2", {
        opacity: 0,
        onStart: function () {
          let h5counter = document.querySelector(".line1-part1 h5");
          let count = 0;
          setInterval(function () {
            if (count < 100) {
              count++;
              h5counter.innerHTML = count++;
            } else {
              h5counter.innerHTML = count;
            }
          }, 30);
        },
      });
      tl.to("#loader", {
        opacity: 0,
        duration:2.5,
        delay: 1,
      });
      
      tl.from("#page1", {
         y:1600,
           delay:0.2,
          opacity:0,
          // ease:power4,
        });
      
      tl.to("#loader",{
          display:"none",
      })
  
      tl.from(".hero h1",{
        y:150,
        stagger:0.2,
  
      })
      
  }
  

  
  document.addEventListener("mousemove",function(dets){
  
  
    gsap.to(".crsr",{
      left:dets.x,
      top:dets.y,
    })
  })
  
  Shery.makeMagnet("#nav_part2 h4" , {
  
  });
  loadingAnimation();

  // locomotive_animation();

  function sheryAnimation(){
    Shery.imageEffect(".image-div",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.7501875468867217,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8846249868465305},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
    })
    
  }

  sheryAnimation()
  

  