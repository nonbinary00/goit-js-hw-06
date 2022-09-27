const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const listEl = document.querySelector(".gallery");

// const imagesEl = images.map((image) => {
//   return `<li><img src="${image.url}" alt="${image.alt}" width="400"></img></li>`;
// }).join("");

// listEl.insertAdjacentElement('afterbegin', imagesEl);

// console.log(imagesEl)


const gallery = document.querySelector(".gallery");

const li = images.map((image) => {
  return `<li><img src="${image.url}" alt="${image.alt}" width="400"></img></li>`;
});

gallery.insertAdjacentHTML("beforeend", li.join(""));

gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
// gallery.style.flexDirection = "column";
gallery.style.listStyle = "none";