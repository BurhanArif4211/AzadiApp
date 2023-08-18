import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const Block3D_svelte_svelte_type_style_lang = "";
const ContactForm_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".svelte-1tgyt86.svelte-1tgyt86,.svelte-1tgyt86.svelte-1tgyt86::before,.svelte-1tgyt86.svelte-1tgyt86::after{margin:0;padding:0;box-sizing:border-box}:root{--primary:#002a00;--white:white}.contact.svelte-1tgyt86.svelte-1tgyt86{background-color:transparent;background-size:cover;position:relative;padding:2rem;background-attachment:fixed;z-index:0}.contact.svelte-1tgyt86 .container.svelte-1tgyt86{position:relative;z-index:2}.contact.svelte-1tgyt86 .container .text-contact.svelte-1tgyt86{width:600px;text-align:center;color:var(--white);margin-bottom:1rem;font-size:clamp(0.8rem, 1vw, 3rem)}@media(max-width: 775px){.contact.svelte-1tgyt86 .container .text-contact.svelte-1tgyt86{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}@media(max-width: 375px){.contact.svelte-1tgyt86 .container .text-contact.svelte-1tgyt86{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}}.contact.svelte-1tgyt86 .container form.svelte-1tgyt86{display:flex;margin:auto;max-width:800px}@media(max-width: 767px){.contact.svelte-1tgyt86 .container form.svelte-1tgyt86{display:block}}@media(min-width: 1200px){.contact.svelte-1tgyt86 .container form.svelte-1tgyt86{max-width:880px}}.contact.svelte-1tgyt86 .container form .left.svelte-1tgyt86{flex:1;margin-right:10px}.contact.svelte-1tgyt86 .container form .left input.svelte-1tgyt86{display:block;width:90%;padding:10px;margin-bottom:10px;border:solid 1px var(--white);border-radius:0.7vh;height:45px;background-color:var(--primary);font-size:15px;color:var(--white)}.contact.svelte-1tgyt86 .container form .left input.svelte-1tgyt86:focus{background-color:var(--white);color:var(--primary)\r\n}.contact.svelte-1tgyt86 .container form .left input.svelte-1tgyt86:focus::-webkit-input-placeholder{opacity:0;-webkit-transition:0.3s;transition:0.3s}@media(max-width: 767px){.contact.svelte-1tgyt86 .container form .left.svelte-1tgyt86{width:100%}}.contact.svelte-1tgyt86 .container form .right.svelte-1tgyt86{flex:1;margin-left:10px}.contact.svelte-1tgyt86 .container form .right textarea.svelte-1tgyt86{display:block;width:90%;padding:10px;margin-bottom:10px;border:solid 1px var(--white);height:150px;background-color:var(--primary);border-radius:10px;outline:none;color:var(--white);font-size:15px}.contact.svelte-1tgyt86 .container form .right textarea.svelte-1tgyt86:focus{background-color:var(--white);color:var(--primary)}.contact.svelte-1tgyt86 .container form .right textarea.svelte-1tgyt86:focus::-webkit-input-placeholder{opacity:0;-webkit-transition:0.3s;transition:0.3s}.contact.svelte-1tgyt86 .container form .right input.svelte-1tgyt86{width:90%;height:45px;border:solid var(--white) 1px;padding:10px;background-color:var(--main-color);color:var(--white);font-size:15px;cursor:pointer;outline:none;border-radius:10px;opacity:0.8;transition:0.5s ease-in-out}.contact.svelte-1tgyt86 .container form .right input.svelte-1tgyt86:hover{opacity:1}@media(max-width: 775px){.contact.svelte-1tgyt86 .container form .right.svelte-1tgyt86{margin-left:0}}",
  map: null
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="contact svelte-1tgyt86" data-svelte-h="svelte-10k2xxz"><div class="container svelte-1tgyt86"><p class="text-contact svelte-1tgyt86">Response: ~1Century</p> <form class="svelte-1tgyt86"><div class="left wow animate__backInLeft svelte-1tgyt86" data-wow-duration="1.3s" data-wow-offset="70"><input type="text" placeholder="Enter Your Name" name="name" class="svelte-1tgyt86"> <input type="email" placeholder="Enter Your Email" name="email" class="svelte-1tgyt86"> <input type="phone" placeholder="Enter Your Phone" name="phone" class="svelte-1tgyt86"></div> <div class="right wow animate__backInRight svelte-1tgyt86" data-wow-duration="1.3s" data-wow-offset="70"><textarea placeholder="Enter Your Message" name="message" class="svelte-1tgyt86"></textarea> <input type="submit" value="Send" class="svelte-1tgyt86"></div></form></div> </section>`;
});
const ImageCont_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".cont.svelte-vx3gpn{display:block}",
  map: null
};
const ImageCont = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { src1 = "" } = $$props;
  let { size = "500px" } = $$props;
  let { align = "left" } = $$props;
  let decide;
  if (align == "left") {
    decide = "";
  } else if (align == "right") {
    decide = "position:absolute;right:40px;";
  } else if (align == "center") {
    decide = "position:absolute;left:50%;transform:translate(-50%,0);";
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.src1 === void 0 && $$bindings.src1 && src1 !== void 0)
    $$bindings.src1(src1);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css$3);
  return `<div class="cont svelte-vx3gpn"><picture><source${add_attribute("srcset", src1, 0)} media="(min-width:775px)"> <img style="${"max-width: " + escape(size, true) + ";" + escape(decide, true)}" alt="madick"${add_attribute("src", src, 0)}></picture> </div>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.nav.svelte-m9xw0g.svelte-m9xw0g{top:0;color:white;font-family:nation;position:fixed;z-index:3;text-decoration:none;transform:translateX(-200%);transition:all 1s ease;height:100vh;background:#006400 url("/src/lib/clips/Bunting_nav.jpg");background-position:0 -780px;background-size:1080px;background-repeat:no-repeat;padding:0;text-align:left;padding:30px;display:flex;flex-direction:column;justify-content:center;perspective:1000px}@media(width >= 360px){.nav.svelte-m9xw0g.svelte-m9xw0g{height:117vh}}.slide.svelte-m9xw0g.svelte-m9xw0g{transform:translateX(0);background-position:-270px -15px;background-size:860px}.nav__item.svelte-m9xw0g.svelte-m9xw0g{font-size:clamp(4rem, 4vW, 10rem);display:block;padding:1.16vh 0;position:relative;cursor:pointer;text-shadow:0px 0px 7px black;transition:all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);transform-style:preserve-3d;transform-style:preserve-3d}.nav__item.svelte-m9xw0g.svelte-m9xw0g:hover{animation:svelte-m9xw0g-alterer 2s ease-in-out infinite}@keyframes svelte-m9xw0g-alterer{0%{transform:rotateX(0deg)}50%{transform:rotateX(-360deg)}100%{transform:rotateX(0deg)}}a.svelte-m9xw0g.svelte-m9xw0g{padding:8px 8px 8px 32px;all:unset;display:block}#button.svelte-m9xw0g.svelte-m9xw0g{background-color:transparent;border:none;cursor:pointer;height:80px;outline:none;padding:0px;width:100px}#button.toggled.svelte-m9xw0g #icon.svelte-m9xw0g{background-color:transparent}#button.toggled.svelte-m9xw0g #icon.svelte-m9xw0g:before{top:0px;transform:rotate(-45deg)}#button.toggled.svelte-m9xw0g #icon.svelte-m9xw0g:after{bottom:0px;transform:rotate(45deg)}#button.svelte-m9xw0g #icon.svelte-m9xw0g{background-color:white;border-radius:100px;height:10px;position:relative;transition:all 0.25s;width:100px}#button.svelte-m9xw0g #icon.svelte-m9xw0g:before,#button.svelte-m9xw0g #icon.svelte-m9xw0g:after{background-color:white;border-radius:100px;content:"";height:10px;left:0px;position:absolute;transition:all 0.25s;width:100px}#button.svelte-m9xw0g #icon.svelte-m9xw0g:before{top:-30px}#button.svelte-m9xw0g #icon.svelte-m9xw0g:after{bottom:-30px}.toggle.svelte-m9xw0g.svelte-m9xw0g{z-index:4;position:fixed;transform:scale(0.3);top:30px;left:9px}#overlay.svelte-m9xw0g.svelte-m9xw0g{position:fixed;display:block;width:100%;height:100%;left:0;top:0;background-color:rgba(0, 0, 0, 0.5);transition:all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);backdrop-filter:blur(5px);z-index:1}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div id="button" class="${["toggle svelte-m9xw0g", ""].join(" ").trim()}" data-svelte-h="svelte-g7wh9z"><div id="icon" class="svelte-m9xw0g"></div></div> <div class="overlayIntro overlay"></div> ${``} <nav class="${["nav svelte-m9xw0g", ""].join(" ").trim()}" data-svelte-h="svelte-11ejy9j"><li class="nav__item svelte-m9xw0g"><a href="/" class="svelte-m9xw0g">Home</a></li> <li class="nav__item svelte-m9xw0g"><a href="/About" class="svelte-m9xw0g">About</a></li> <li class="nav__item svelte-m9xw0g"><a href="/Create" class="svelte-m9xw0g">Create</a></li> <li class="nav__item svelte-m9xw0g"><a href="/History" class="svelte-m9xw0g">History</a></li> <li class="nav__item svelte-m9xw0g"><a href="/Games" class="svelte-m9xw0g">Games</a></li> </nav>`;
});
const Separate_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".or-spacer.svelte-1i2hbig.svelte-1i2hbig{margin:auto;width:clamp(100px,40vw,500px);position:relative;transition:all 1s ease-in-out;animation:svelte-1i2hbig-stretch 2s infinite}.or-spacer.svelte-1i2hbig .mask.svelte-1i2hbig{overflow:hidden;height:20px}.or-spacer.svelte-1i2hbig .mask.svelte-1i2hbig:after{content:'';display:block;margin:-25px auto 0;width:100%;height:25px;border-radius:125px / 12px;box-shadow:0 0 10px #b0ffb0}@keyframes svelte-1i2hbig-stretch{0%,100%{width:40%}50%{width:50%}}",
  map: null
};
const Separate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="or-spacer svelte-1i2hbig" data-svelte-h="svelte-1lhs7ov"><div class="mask svelte-1i2hbig"></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@font-face{font-family:nation;src:url(/src/lib/fonts/Nation.ttf)}.svelte-14ajswn{font-family:nation;font-size:62.5%}#video-background.svelte-14ajswn{position:fixed;top:0;left:0;width:100%;height:100%;object-fit:cover;z-index:-1}.main.svelte-14ajswn{font-family:nation;font-size:62.5%;color:white;position:relative;height:100vh}.header__content.svelte-14ajswn{font-size:clamp(1rem, 2.16vw, 3rem);opacity:0;animation:svelte-14ajswn-animate3D 3s forwards cubic-bezier(0.41, 0.03, 0.27, 1.01);position:relative;top:50%;left:50%;transform:translate(-50%, -50%);width:auto;max-width:800px;padding:50px;border-radius:2.375rem;box-shadow:0px 0px 25px 30px rgba(0, 100, 0, 0.25) inset;text-align:center}.ref.svelte-14ajswn{font-size:clamp(0.3rem, 2.6vw, 0.7rem);position:absolute;bottom:0;right:0;transform:translate(-50%, -50%);margin:0;padding:0}.header__top.svelte-14ajswn{font-size:clamp(3rem, 6vw, 22rem);position:absolute;top:90px;left:5.16vw;z-index:2;animation:svelte-14ajswn-intro 3s cubic-bezier(0.41, 0.03, 0.27, 1.01)}.one.svelte-14ajswn{font-size:clamp(1rem, 2.16vw, 3rem) ;height:100vh;padding:100px}.box.svelte-14ajswn{margin-top:30vh;padding:1.16vw;width:55.875rem;flex-shrink:0;border-radius:4.375rem;border:0px solid #FFF;background:rgba(217, 217, 217, 0.03);box-shadow:0px 0px 250px 97px rgba(0, 100, 0, 0.15) inset}.box2.svelte-14ajswn{margin-top:30vh;padding:1.16vw;width:55.875rem;flex-shrink:0;border-radius:4.375rem}.heading.svelte-14ajswn{font-size:clamp(2rem, 6vw, 4rem);padding-bottom:10px}.para.svelte-14ajswn{font-family:'Poppins', sans-serif;font-size:clamp(1rem, 3vw, 2rem)}.two.svelte-14ajswn{height:100vh}.overlayIntro.svelte-14ajswn{position:fixed;display:block;width:100%;height:100%;left:0;top:0;background-color:black;transition:all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);z-index:1;animation:svelte-14ajswn-introOverlay 5s cubic-bezier(0.075, 0.82, 0.165, 1) ;opacity:0}@keyframes svelte-14ajswn-intro{0%{top:50%;left:50%;transform:translate(-50%, -50%)}50%{top:50%;left:50%;transform:translate(-50%, -50%)}100%{top:90px;left:5.16vw;transform:translate(0)}}@keyframes svelte-14ajswn-animate3D{0%,50%{opacity:0}100%{opacity:1}}@keyframes svelte-14ajswn-introOverlay{0%{opacity:1}40%{opacity:1}100%{opacity:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<head class="svelte-14ajswn" data-svelte-h="svelte-19plrcu"><title class="svelte-14ajswn">Azadi | Home</title></head> <video id="video-background" autoplay muted loop class="svelte-14ajswn" data-svelte-h="svelte-14pheav"><source src="/src/lib/backdrop.mp4" type="video/mp4" class="svelte-14ajswn"></video> <div class="main svelte-14ajswn" data-svelte-h="svelte-fcnvj0"><div class="header__top svelte-14ajswn">Azadi</div> <div class="header__content svelte-14ajswn"><p class="header__main svelte-14ajswn">There is no power on the face of the Earth which can undo Pakistan.</p> <p class="ref svelte-14ajswn">~Quaid-e-Azam</p></div></div> <div class="separator svelte-14ajswn">${validate_component(Separate, "Separate").$$render($$result, {}, {}, {})}</div> <div class="one svelte-14ajswn"><div class="two svelte-14ajswn"><div class="box svelte-14ajswn"><div class="heading svelte-14ajswn" data-svelte-h="svelte-1iucjb3">Quaid-E-Azam</div> <div class="para svelte-14ajswn" data-svelte-h="svelte-f2iw35">“You are free. you are free to go to your temples. You are free to go to your mosques or to any other places of worship in this State of Pakistan.”</div> <div class="ImgCont svelte-14ajswn">${validate_component(ImageCont, "ImageCont").$$render(
    $$result,
    {
      src: "/src/lib/images/Mohammad-Ali-Jinnah.webp",
      align: "right",
      size: "700px"
    },
    {},
    {}
  )}</div></div></div></div> <div class="two svelte-14ajswn"><div class="box2 svelte-14ajswn"><div class="heading svelte-14ajswn" data-svelte-h="svelte-1a7ngzj">Contact</div> <div class="para svelte-14ajswn">${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div></div>  ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div> <div class="overlayIntro svelte-14ajswn"></div>`;
});
export {
  Page as default
};
