const contentData = [

  {
    id: "why",
    icon: "fa-question",
    title: "WHY NOT ME",
    lines: [
      "Because I don’t have enough years of experience?",
      "Wasn’t it a great brand that once said,",
      { text: "“Don’t ask if your dreams are crazy. Ask if they’re crazy enough.”", class: "quote" },
      "So here we are."
    ]
  },

  {
    id: "about",
    icon: "fa-user",
    title: "SO WHAT ABOUT ME?",
    type: "experience"
  },

  {
    id: "tech",
    icon: "fa-mobile-screen",
    title: "MY TECH CAPABILITIES",
    type: "tech"
  },

  {
    id: "table",
    icon: "fa-fire",
    title: "WHAT I BRING TO THE TABLE",
    type: "grid"
  },

  {
    id: "final",
    icon: "fa-flag-checkered",
    title: "LET’S BUILD",
    lines: [
      "Let’s build something people line up for.",
      "The kind that moves inventory.",
      "And moves conversations."
    ],
    contact: true
  }

];

let currentIndex = 0;
const content = document.getElementById("content");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function renderSection() {

  content.innerHTML = "";
  content.className = "fade";

  const section = contentData[currentIndex];

  const icon = document.createElement("div");
  icon.className = "top-icon reveal";
  icon.innerHTML = `<i class="fa-solid ${section.icon}"></i>`;
  content.appendChild(icon);

  const title = document.createElement("div");
  title.className = "section-title reveal";
  title.innerText = section.title;
  content.appendChild(title);

  if (section.type === "experience") {

    addLine("I don’t have the required years of work experience.");
    addLine("But what I do have is");

    const grid = document.createElement("div");
    grid.className = "grid";

    const items = [
      { icon: "fa-brain", text: "Pattern recognition" },
      { icon: "fa-store", text: "Marketplace instinct" },
      { icon: "fa-coins", text: "Commercial accountability" },
      { icon: "fa-bolt", text: "Enough audacity to build this website instead of writing another cover letter" }
    ];

    items.forEach((item, index) => {
      const box = document.createElement("div");
      box.className = "grid-box reveal";
      box.style.animationDelay = `${index * 0.08}s`;
      box.innerHTML = `
        <div class="icon-wrap"><i class="fa-solid ${item.icon}"></i></div>
        <div class="text-wrap">${item.text}</div>
      `;
      grid.appendChild(box);
    });

    content.appendChild(grid);

    addHighlight("Years are a proxy. I optimise for signal.");

  }

  else if (section.type === "tech") {

    addLine("Doomscrolling.");
    addLine("UPI.");
    addLine("Add to cart.");
    addLine("Checkout.");
    addLine("And yet here I am building this website from scratch.");
    addLine("Why?");

    addHTMLLine(`<strong>Just</strong> because I can <strong>do</strong> <strong>it</strong>`);
    addHTMLLine(`Struggle, but still, <strong>do it</strong>`);
    addLine("Initiative > comfort zones.");
    addLine("Also, if we’re being honest");
    addLine("knowing how people browse, hesitate, compare, abandon and finally checkout");
    addHighlight("is half the job.");

  }

  else if (section.type === "grid") {

    const grid = document.createElement("div");
    grid.className = "grid";

    const items = [
      { icon: "fa-chart-line", text: "Marketplace thinking beyond listings." },
      { icon: "fa-coins", text: "Comfort owning revenue, not just reach." },
      { icon: "fa-bolt", text: "Drop and launch sensitivity with commercial discipline." },
      { icon: "fa-layer-group", text: "Paid and platform integration instinct." },
      { icon: "fa-magnifying-glass", text: "Ability to zoom out and zoom in." },
      { icon: "fa-flask", text: "Structured experimentation muscle." },
      { icon: "fa-people-group", text: "Cross functional fluency." },
      { icon: "fa-shield-halved", text: "Calm under commercial pressure." },
      { icon: "fa-star", text: "Audacity." }
    ];

    items.forEach((item, index) => {
      const box = document.createElement("div");
      box.className = "grid-box reveal";
      box.style.animationDelay = `${index * 0.05}s`;
      box.innerHTML = `
        <div class="icon-wrap"><i class="fa-solid ${item.icon}"></i></div>
        <div class="text-wrap">${item.text}</div>
      `;
      grid.appendChild(box);
    });

    content.appendChild(grid);
  }

  else {

    section.lines.forEach((lineData, index) => {
      if (typeof lineData === "object") {
        addLine(lineData.text, lineData.class);
      } else {
        if (index === section.lines.length - 1) {
          addHighlight(lineData);
        } else {
          addLine(lineData);
        }
      }
    });
  }

  if (section.contact) {
    const contact = document.createElement("div");
    contact.className = "contact reveal";
    contact.innerHTML = `
      <p><a href="mailto:sharmayushi31@gmail.com">sharmayushi31@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/ayushi-s/" target="_blank">LinkedIn</a></p>
    `;
    content.appendChild(contact);
  }

  backBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentIndex === contentData.length - 1 ? "hidden" : "visible";
}

function addLine(text, extraClass = "") {
  const line = document.createElement("div");
  line.className = `line reveal ${extraClass}`;
  line.innerText = text;
  content.appendChild(line);
}

function addHTMLLine(html) {
  const line = document.createElement("div");
  line.className = "line reveal";
  line.innerHTML = html;
  content.appendChild(line);
}

function addHighlight(text) {
  const highlight = document.createElement("div");
  highlight.className = "highlight reveal";
  highlight.innerText = text;
  content.appendChild(highlight);
}

nextBtn.onclick = () => {
  if (currentIndex < contentData.length - 1) {
    currentIndex++;
    renderSection();
  }
};

backBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderSection();
  }
};

renderSection();
