const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = () => {
  const arr = [];
  Object.keys(dogs).forEach(el => {
    let tempLink = document.createElement("a");
    tempLink.href = dogs[el];
    tempLink.innerHTML = el;
    let tempLi = document.createElement("li");
    tempLi.className = "dog-link";
    tempLi.appendChild(tempLink);
    arr.push(tempLi);
  });
  return arr;
}

export const attachDogLinks = () => {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach(function(el) {
    ul.appendChild(el);
  });
}

function handleEnter() {
  let ul = document.querySelector('.drop-down-dog-nav').children[1];
  ul.className = '.drop-down-dog-list visible';
}


function handleLeave() {
  let ul = document.querySelector('.drop-down-dog-nav').children[1];
  ul.className = '.drop-down-dog-list hidden';
}

const dropdownNav = document.querySelector('.drop-down-dog-nav');
dropdownNav.addEventListener("mouseenter", handleEnter);
dropdownNav.addEventListener("mouseleave", handleLeave);