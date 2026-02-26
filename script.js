function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openChapter(id) {
  const content = {
    c1: `
      <h2>This wasn’t supposed to be sent here.</h2>
      <p>This was supposed to be sent to adidas. It isn’t.</p>
      <p>Because I think Nike is cooler.</p>
      <p>If you’re going to take a swing, you might as well aim properly.</p>
    `,
    c2: `
      <h2>I don’t have the required years.</h2>
      <p>Pattern recognition.</p>
      <p>Marketplace instinct.</p>
      <p>Commercial accountability.</p>
      <p>Enough audacity to build a website instead of writing another cover letter.</p>
      <p class="red">Years are a proxy. I optimise for signal.</p>
    `,
    c3: `
      <h2>My tech experience includes doomscrolling, UPI payments, adding to cart and online shopping.</h2>
      <p>And yet here I am building this.</p>
      <p>Initiative beats comfort zones.</p>
      <p>Understanding how people browse, hesitate, compare, abandon and finally checkout is half the job.</p>
    `,
    c4: `
      <h2>I am obsessed with stories.</h2>
      <p>Books. Reddit threads at 2am. People explaining why they bought something they did not need.</p>
      <p class="red">Marketplace is storytelling with checkout buttons.</p>
      <p>The best products do not just sell. They signal.</p>
    `,
    c5: `
      <h2>I like dogs. Yes, I am basic.</h2>
      <p>Specifically the slightly derpy, tongue-out, no-thoughts-just-vibes kind.</p>
      <p>I notice emotional signals. I value loyalty. I believe consistency builds trust.</p>
    `,
    c6: `
      <h2>I plan holidays like product launches.</h2>
      <p>Budget. Experience map. Contingencies. Backup airport snacks.</p>
      <p class="blue">Execution is attractive.</p>
      <p class="red">Chaos is overrated.</p>
    `,
    c7: `
      <h2>What I bring to the table.</h2>
      <p>Marketplace thinking beyond listings.</p>
      <p>Comfort owning revenue, not just reach.</p>
      <p>Paid and platform integration instinct.</p>
      <p>Ability to zoom out and zoom in.</p>
      <p>Structured experimentation muscle.</p>
      <p>Cross functional fluency.</p>
      <p>Calm under commercial pressure.</p>
      <p class="blue">And yes, audacity.</p>
    `
  };

  document.getElementById('chapterContent').innerHTML = content[id];
  goTo('chapterView');
}
