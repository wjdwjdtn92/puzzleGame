import gameData from "./src/gameData.js";
import {
  createImageContainer,
  createPuzzleImageSrc,
  loadPuzzleImages,
} from "./src/utils.js";
import { handleClick } from "./src/eventHandlers.js";

const $container = document.querySelector(".container");
const $gameScreen = document.querySelector(".game-screen");
const $startScreen = document.querySelector(".start-screen");

const $startButton = $startScreen.querySelector("button");
const $changeImageButton = $gameScreen.querySelector("#changeImage");

// "시작하기" 버튼 클릭 시 이벤트 핸들러를 추가합니다.
$startButton.addEventListener("click", function () {
  // "start-screen" 요소를 숨깁니다.
  $startScreen.classList.add("hide");

  // "game-screen" 요소를 보이게 설정합니다.
  $gameScreen.classList.remove("hide");

  gameData.changeOriginalImageset();
  gameData.genrateImageIndexes();

  for (let i = 0; i < gameData.shuffledIndex.length; i++) {
    const imagePath = createPuzzleImageSrc(
      gameData.imageSet,
      gameData.shuffledIndex[i]
    );
    const $imageContainer = createImageContainer(imagePath);

    $imageContainer.addEventListener("click", handleClick);

    $container.appendChild($imageContainer);
  }
});

$changeImageButton.addEventListener("click", () => {
  gameData.changeOriginalImageset();
  loadPuzzleImages(gameData.imageSet, gameData.shuffledIndex);
});
