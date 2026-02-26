const sections = [

`<h1>WHY NOT ME.</h1>
<p>Wasn’t it a great brand that once said,
“Don’t ask if your dreams are crazy. Ask if they’re crazy enough.”</p>
<p>I did.<br>And here we are.</p>`,

`<h2>This Wasn’t Supposed To Be Sent Here</h2>
<p>This was supposed to be sent to adidas. It isn’t.</p>
<p>Because I think Nike is cooler.</p>
<p>Also because if you’re going to take a swing,
you might as well aim properly.</p>`,

`<h2>So What About Me</h2>
<p>I don’t have the “required” years.</p>
<p>What I do have is:</p>
<p>• Pattern recognition<br>
• Marketplace instinct<br>
• Commercial accountability<br>
• Enough audacity to build a website instead of writing another cover letter</p>
<p>Years are a proxy.<br>I optimise for signal.</p>`,

`<h2>My Tech Capabilities</h2>
<p>My tech experience includes doomscrolling, UPI payments, adding to cart, and online shopping.</p>
<p>And yet here I am. Building a website from scratch.</p>
<p>Initiative beats comfort zones.</p>
<p>Also, if we are being honest,
understanding how people browse, hesitate, compare, abandon and finally checkout
is half the job.</p>`,

`<h2>I Love Stories</h2>
<p>I am obsessed with stories.</p>
<p>Books. Reddit threads at 2am. People explaining why they bought something they did not need.</p>
<p>Marketplace is storytelling with checkout buttons.</p>
<p>The best products do not just sell.
They signal.</p>`,

`<h2>Basic But Self Aware</h2>
<p>I like dogs. Yes, I am basic.</p>
<p>Specifically the slightly derpy, tongue-out, no-thoughts-just-vibes kind.</p>
<p>What that says about me:</p>
<p>• I notice emotional signals<br>
• I value loyalty<br>
• I believe consistency builds trust</p>
<p>Also, they are just great.</p>`,

`<h2>I Plan Things Aggressively Well</h2>
<p>I plan holidays like product launches.</p>
<p>Budget. Experience map. Contingencies. Backup airport snacks.</p>
<p>Execution is attractive.<br>Chaos is overrated.</p>`,

`<h2>What I Bring To The Table</h2>
<p>Marketplace thinking beyond listings.</p>
<p>Comfort owning revenue, not just reach.</p>
<p>Drop and launch sensitivity with commercial discipline.</p>
<p>Paid and platform integration instinct.</p>
<p>Ability to zoom out and zoom in.</p>
<p>Structured experimentation muscle.</p>
<p>Cross functional fluency.</p>
<p>Calm under commercial pressure.</p>
<p>And yes, audacity.</p>
<p>I do not just launch campaigns.
I think about second order effects.</p>`,

`<h2>Ask Better Questions.</h2>
<p>Don’t ask if I have enough years.
Ask if I think big enough.</p>`,

`<h2>Ask Better Questions.</h2>
<p>Don’t ask if it’s safe.
Ask if it scales.</p>`,

`<h2>Ask Better Questions.</h2>
<p>Don’t ask if I fit the mould.
Ask if the mould is outdated.</p>`,

`<h2>Closing</h2>
<p>If you are looking for safe,
you probably already have 200 options.</p>
<p>If you are looking for sharp,
slightly unconventional,
commercially serious but culturally awake</p>
<p>Why not me.</p>`,

`<h2>Let’s build something worth lining up for.</h2>
<p><a href="mailto:sharmayushi31@gmail.com" style="color:#fff;">sharmayushi31@gmail.com</a></p>
<p class="blue"><a href="https://www.linkedin.com/in/ayushi-s/" target="_blank" style="color:#3fa9ff;">LinkedIn</a></p>`
];

let current = 0;
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function render() {
  content.innerHTML = sections[current];
  backBtn.style.visibility = current === 0 ? "hidden" : "visible";
  nextBtn.style.display = current === sections.length - 1 ? "none" : "inline-block";
}

nextBtn.onclick = () => {
  if(current < sections.length - 1){
    current++;
    render();
  }
};

backBtn.onclick = () => {
  if(current > 0){
    current--;
    render();
  }
};

render();
