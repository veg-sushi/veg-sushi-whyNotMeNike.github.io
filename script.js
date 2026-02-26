const contentData = [

  {
    title: "WHY NOT ME",
    icon: "fa-question",
    lines: [
      "Why not me?",
      "Because I don’t have enough years of experience?",
      "Wasn’t it a great brand that once said,",
      { text: "“Don’t ask if your dreams are crazy. Ask if they’re crazy enough.”", class: "quote" },
      "So here we are.",
      { text: "〰", class: "highlight" }  // swoosh
    ]
  },

  {
    title: "THIS WASN’T SUPPOSED TO BE SENT HERE",
    icon: "fa-bullseye",
    lines: [
      "This was meant for three stripes.",
      "It chose motion instead.",
      "If I’m taking the swing,",
      "I’m taking it where it counts."
    ]
  },

  {
    title: "SO WHAT ABOUT ME?",
    icon: "fa-user",
    type: "grid-custom"
  },

  {
    title: "MY TECH CAPABILITIES",
    icon: "fa-mobile-screen",
    lines: [
      "Doomscrolling.",
      "UPI.",
      "Add to cart.",
      "Checkout.",
      "And yet here I am building this website from scratch.",
      "Why?",
      "Because I can do it.",
      "(Struggle. But do it.)",
      "Understanding behaviour is half the job."
    ]
  },

  {
    title: "LET’S BUILD",
    icon: "fa-flag-checkered",
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
  icon.className = "top-icon";
  icon.innerHTML = `<i class="fa-solid ${section.icon}"></i>`;
  content.appendChild(icon);

  const title = document.createElement("div");
  title.className = "section-title";
  title.innerText = section.title;
  content.appendChild(title);

  if (section.type === "grid-custom") {

    const intro = document.createElement("div");
    intro.className = "line";
    intro.innerText = "I don’t have the required years of work experience.";
    content.appendChild(intro);

    const grid = document.createElement("div");
    grid.className = "grid";

    const items = [
      { icon: "fa-brain", text: "Pattern recognition" },
      { icon: "fa-store", text: "Marketplace instinct" },
      { icon: "fa-coins", text: "Commercial accountability" },
      { icon: "fa-bolt", text: "Enough audacity to build this website instead of writing another cover letter" }
    ];

    items.forEach(item => {
      const box = document.createElement("div");
      box.className = "grid-box";
      box.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.text}`;
      grid.appendChild(box);
    });

    content.appendChild(grid);

    const closing = document.createElement("div");
    closing.className = "highlight";
    closing.innerText = "Years are a proxy. I optimise for signal.";
    content.appendChild(closing);

  } else {

    section.lines.forEach((lineData, index) => {
      const line = document.createElement("div");
      line.className = "line";

      if (typeof lineData === "object") {
        line.innerText = lineData.text;
        line.classList.add(lineData.class);
      } else {
        line.innerText = lineData;
      }

      if (index === section.lines.length - 1) {
        line.classList.add("highlight");
      }

      content.appendChild(line);
    });
  }

  if (section.contact) {
    const contact = document.createElement("div");
    contact.className = "contact";
    contact.innerHTML = `
      <p><a href="mailto:sharmayushi31@gmail.com">sharmayushi31@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/ayushi-s/" target="_blank">LinkedIn</a></p>
    `;
    content.appendChild(contact);
  }

  backBtn.style.visibility = currentIndex === 0 ? "hidden" : "visible";
  nextBtn.style.visibility = currentIndex === contentData.length - 1 ? "hidden" : "visible";
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
