const header = document.querySelector("header");
const project01 = document.querySelector(".project01");
const project02 = document.querySelector(".project02");
const project03 = document.querySelector(".project03");
const project04 = document.querySelector(".project04");
const project05 = document.querySelector(".project05");
const project06 = document.querySelector(".project06");

let projects = [
  {
    title: "Bar à Vins",
    display: false,
    link: "https://thomas-dauriac.fr/wine-bar",
    img: "https://images.unsplash.com/photo-1658176561417-7ae088c88994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        quod totam repellat! Corrupti maxime voluptate atque iste assumenda
        temporibus autem odit, libero nam enim maiores, quas sint. In error,
        accusantium ea consectetur facere consequatur, asperiores amet
        distinctio eaque repellat perferendis libero obcaecati nihil. Repellat
        consequuntur vero dicta tempore impedit exercitationem!`,
  },
  {
    title: "Climb Gr",
    display: false,
    link: "https://thomas-dauriac.fr/climbgr",
    img: "https://images.unsplash.com/photo-1658217456399-8e5cf10c128a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
      quod totam repellat! Corrupti maxime voluptate atque iste assumenda
      temporibus autem odit, libero nam enim maiores, quas sint. In error,
      accusantium ea consectetur facere consequatur, asperiores amet
      distinctio eaque repellat perferendis libero obcaecati nihil. Repellat
      consequuntur vero dicta tempore impedit exercitationem!`,
  },
  {
    title: "Bloblog News",
    display: false,
    link: "https://thomas-dauriac.fr/bloblog-news",
    img: "https://images.unsplash.com/photo-1659183572769-a22124c4c97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
      quod totam repellat! Corrupti maxime voluptate atque iste assumenda
      temporibus autem odit, libero nam enim maiores, quas sint. In error,
      accusantium ea consectetur facere consequatur, asperiores amet
      distinctio eaque repellat perferendis libero obcaecati nihil. Repellat
      consequuntur vero dicta tempore impedit exercitationem!`,
  },
  {
    title: "Blog Vanilla JS",
    display: false,
    link: "https://thomas-dauriac.fr/blog-vanilla-js",
    img: "https://images.unsplash.com/photo-1658225595905-7bd75d10a265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
      quod totam repellat! Corrupti maxime voluptate atque iste assumenda
      temporibus autem odit, libero nam enim maiores, quas sint. In error,
      accusantium ea consectetur facere consequatur, asperiores amet
      distinctio eaque repellat perferendis libero obcaecati nihil. Repellat
      consequuntur vero dicta tempore impedit exercitationem!`,
  },
  {
    title: "ToDo",
    display: false,
    link: "https://thomas-dauriac.fr/todo",
    img: "https://images.unsplash.com/photo-1658137377207-c9bea7240457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
      quod totam repellat! Corrupti maxime voluptate atque iste assumenda
      temporibus autem odit, libero nam enim maiores, quas sint. In error,
      accusantium ea consectetur facere consequatur, asperiores amet
      distinctio eaque repellat perferendis libero obcaecati nihil. Repellat
      consequuntur vero dicta tempore impedit exercitationem!`,
  },
  {
    title: "Blog Django",
    display: false,
    link: "https://thomas-dauriac.fr/django-blog",
    img: "https://images.unsplash.com/photo-1658223255517-6a0b475fdd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
      quod totam repellat! Corrupti maxime voluptate atque iste assumenda
      temporibus autem odit, libero nam enim maiores, quas sint. In error,
      accusantium ea consectetur facere consequatur, asperiores amet
      distinctio eaque repellat perferendis libero obcaecati nihil. Repellat
      consequuntur vero dicta tempore impedit exercitationem!`,
  },
];

const body = document.querySelector("body");
let calc;
let modal;

const array = [
  project01,
  project02,
  project03,
  project04,
  project05,
  project06,
];

const container = document.querySelector(".container");

array.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    container.classList.toggle("blur");
    container.classList.toggle("no-blur");
    header.classList.toggle("blur");
    header.classList.toggle("no-blur");
    header.classList.toggle("z-index1");

    projects[index].display = true;
    openModal(projects);
    projects[index].display = false;
  });
});

const createCalc = () => {
  calc = document.createElement("div");
  calc.classList.add("calc");
  calc.addEventListener("click", () => {
    container.classList.toggle("blur");
    container.classList.toggle("no-blur");
    header.classList.toggle("blur");
    header.classList.toggle("no-blur");
    calc.remove();
  });
};

const createModal = (projects) => {
  modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
        <h2>${projects.title}</h2>
        <img
          src="${projects.img}"
          alt="screen du projet"
        />
        <p>${projects.content}</p>
    `;

  const divButton = document.createElement("div");
  const back = document.createElement("button");
  back.innerText = "Back";
  back.classList.add("btn", "btn-secondary");
  back.addEventListener("click", () => {
    container.classList.toggle("blur");
    container.classList.toggle("no-blur");
    header.classList.toggle("blur");
    header.classList.toggle("no-blur");
    header.classList.toggle("z-index1");
    calc.remove();
  });
  const link = document.createElement("button");
  link.classList.add("btn", "btn-primary");
  link.innerHTML = `
        <a href="${projects.link}" target="_blank">Link</a>
    `;
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  divButton.append(back, link);
  modal.append(divButton);

  return modal;
};

const openModal = (projects) => {
  createCalc();
  const projectsNode = projects
    .filter((project) => project.display === true)
    .map((project) => {
      return createModal(project);
    });
  calc.append(...projectsNode);
  body.append(calc);
};
