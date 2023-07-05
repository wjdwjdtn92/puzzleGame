import gameData from "./gameData.js";
import { swapElments } from "./utils.js";

function handleClick(event) {
  const $currentElement = event.target;

  if (!gameData.$previouslySelectedElement) {
    gameData.updatePreviouslySelectedElement($currentElement);
    gameData.$previouslySelectedElement.style.opacity = 0.3;
    gameData.$previouslySelectedElement;
    return;
  }

  if (gameData.$previouslySelectedElement === $currentElement) {
    gameData.$previouslySelectedElement.style.opacity = 1;
    gameData.updatePreviouslySelectedElement(null);
    gameData.$previouslySelectedElement;
    return;
  }

  swapElments(gameData.$previouslySelectedElement, $currentElement);
  gameData.$previouslySelectedElement.style.opacity = 1;
  gameData.updatePreviouslySelectedElement(null);
}

export { handleClick };
