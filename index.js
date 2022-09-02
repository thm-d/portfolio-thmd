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
    link: "http://thomas-dauriac.fr/wine-bar",
    img: "./assets/wine-bar.jpg",
    content: `Ce premier projet en partie responsive m'a permis d'explorer et de pratiquer activement le html et le css dans ses versions les plus simples. 
    J'ai pu y manipuler du float pour le placement de certains éléments, même si aujourd'hui, nous disposons d'outils plus puissants comme le flex et le grid.`,
  },
  {
    title: "Climb Gr",
    display: false,
    link: "http://thomas-dauriac.fr/climbgr",
    img: "./assets/climb-gr.jpg",
    content: `Pour ce deuxième projet, encore en partie responsive, j'y pratique une nouvelle fois du html & css mais cette fois ci en utilisant les flex qui permettent une mise en place plus efficace du layout.
    J'ai pu continuer à travailler ma gestion de l'organisation du code en essayant de structurer celui ci d'une manière la plus pratique possible.`,
  },
  {
    title: "Bloblog News",
    display: false,
    link: "http://thomas-dauriac.fr/bloblog-news",
    img: "./assets/bloblog-news.jpg",
    content: `Ce troisième projet m'a été utile pour m'améliorer sur l'aspect layout.
    Plus complexe que les deux premiers projets, j'ai principalement pu apprendre à composer avec le flex et le grid.
    J'ai une nouvelle fois pu y travailler la responsivité.`,
  },
  {
    title: "ToDo",
    display: false,
    link: "http://thomas-dauriac.fr:4001",
    img: "./assets/todo.jpg",
    content: `Pour ce projet ToDo, le javascript m'offre de nouvelles possibilités. 
    J'ai pu ici manipuler le DOM, par la création d'une "ToDo List" sur laquelle vous pourrez tester un panel de quelques fonctionnalités. 
    De plus, j'ai pu commencer à travailler une configuration projet avec Webpack et Babel plus en adéquation avec celle retrouvée en milieu professionnel.`,
  },
  {
    title: "Blog Vanilla JS",
    display: false,
    link: "http://thomas-dauriac.fr:4000",
    img: "./assets/blog-vanilla-js.jpg",
    content: `Lors de ce projet blog, un peu plus complexe à mettre en place, j'ai pu toujours avec Webpack et Babel m'initier à structurer mon project de manière plus professionnelle, en séparant mon code dans plusieurs fichiers afin de le rendre plus facile à maintenir.
    De plus, j'ai pu m'exercer au css avec sass et j'ai fait le choix de rester sur du javascript natif afin de bien en comprendre les mécanismes, avant de me lancer tête baissée sur les différents frameworks à disposition.`,
  },
  {
    title: "Snake",
    display: false,
    link: "http://thomas-dauriac.fr:3310",
    img: "./assets/snake.jpg",
    content: `Génération 2000, on a sans doute tous connu le Nokia 3310 et son jeu emblématique du serpent. 
    Ce petit projet <strong>(version desktop)</strong> m'a permis de continuer à éveiller ma logique de programmation et de manipuler de plus près l'API Canvas, bien utile ici.
    Le jeu s'adaptera à tous les tailles d'écrans et j'espère que vous amuserez bien quelques minutes.
    À vos claviers, ENJOY !!`,
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
