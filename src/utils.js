function createPuzzleImageSrc(imageSet, index) {
  return `./data/image${imageSet}/image${index}.jpg`;
}

function loadPuzzleImages(imageSet, imageArrayIndexes) {
  const puzzleIamges = document.querySelectorAll(".container img");

  puzzleIamges.forEach((image, index) => {
    image.src = createPuzzleImageSrc(imageSet, imageArrayIndexes[index]);
  });
}

function createImageContainer(imagePath) {
  const $div = document.createElement("div");
  $div.classList.add("image-container");

  const $image = document.createElement("img");
  $image.src = imagePath;

  $div.appendChild($image);

  return $div;
}

function swapElments(element1, element2) {
  const parent1 = element1.parentNode;
  const parent2 = element2.parentNode;

  parent1.removeChild(element1);
  parent2.removeChild(element2);

  parent1.appendChild(element2);
  parent2.appendChild(element1);
}

export {
  loadPuzzleImages,
  createImageContainer,
  swapElments,
  createPuzzleImageSrc,
};
