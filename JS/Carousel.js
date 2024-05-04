// Obtener el elemento ul donde se agregarán los iconos
const iconList = document.getElementById('icon-list');
const iconList2 = document.getElementById('icon-list2');
const iconList3 = document.getElementById('icon-list3');


// Array con los nombres de los archivos wepb (sin la extensión)
const Icons = ['HTML', 'CSS', 'TailWind', 'Bootstrap', 'VisualStudio', 'npm', 'JS', 'React', 'NextJS', 'NodeJS', 'TS', 'Angular', 'WebStorm', 'Java', 'SpringBoot', 'IntelliJ', 'Kotlin', 'Git', 'GitHub', 'Camunda', 'Postman', 'Figma', 'Docker'];
const Skills = ['HTML', 'CSS', 'Bootstrap', 'TailWind', 'npm', 'JS', 'TS', 'NodeJS', 'Java', 'Kotlin'];
const Tools = ['Git', 'VisualStudio', 'WebStorm', 'IntelliJ', 'Camunda', 'Postman', 'Figma', 'Docker'];


// Iterar sobre los nombres de los archivos wepb
Icons.forEach(iconName => {
    // Crear un elemento li para cada icono en la primera lista
    const li1 = document.createElement('li');

    const img1 = document.createElement('img');
    img1.src = `./Img/Icons/${iconName}.webp`;
    img1.alt = `Icono ${iconName}`;
    img1.classList.add('icon-wepb');
    img1.loading = 'lazy';

    const span1 = document.createElement('span');
    const strong1 = document.createElement('strong');
    strong1.textContent = iconName; // Agregar el texto al strong
    span1.classList.add('tooltip');
    span1.appendChild(strong1); // Agregar el strong como hijo del span
    
    

    li1.appendChild(img1);
    li1.appendChild(span1);

    iconList.appendChild(li1);

    
});

Skills.forEach(skill => {
// Crear un elemento li para cada icono en la segunda lista
const li2 = document.createElement('li');

const img2 = document.createElement('img');
img2.src = `./Img/Icons/${skill}.webp`;
img2.alt = `Icono ${skill}`;
img2.classList.add('icon-wepb');
img2.loading = 'lazy';

li2.appendChild(img2);

iconList2.appendChild(li2);

});

Tools.forEach(skill => {
    // Crear un elemento li para cada icono en la segunda lista
    const li3 = document.createElement('li');
    
    const img3 = document.createElement('img');
    img3.src = `./Img/Icons/${skill}.webp`;
    img3.alt = `Icono ${skill}`;
    img3.classList.add('icon-wepb');
    img3.loading = 'lazy';
    
    li3.appendChild(img3);
    
    iconList3.appendChild(li3);
    
    });
    
