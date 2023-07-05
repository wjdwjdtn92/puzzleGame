const gameData = {
  $previouslySelectedElement: null,
  imageSet: 1,
  shuffledIndex: [],
  $originalImage: document.getElementById("originalImage"),

  changeOriginalImageset: function () {
    this.imageSet = Math.floor(Math.random() * 3) + 1;
    const imagePath = `./data/image${this.imageSet}/originalImage.png`;
    this.$originalImage.src = imagePath;
  },

  genrateImageIndexes: function () {
    this.shuffledIndex = Array.from({ length: 9 }, (_, i) => i + 1);

    for (let i = this.shuffledIndex.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledIndex[i], this.shuffledIndex[j]] = [
        this.shuffledIndex[j],
        this.shuffledIndex[i],
      ];
    }
  },

  updatePreviouslySelectedElement: function ($newElement) {
    this.$previouslySelectedElement = $newElement;
  },
};

export default gameData;
