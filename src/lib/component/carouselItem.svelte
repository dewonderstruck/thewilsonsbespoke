<script>
   const items = [
    {
      images: [
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg"
      ],
      text: "Singer Machine",
      subtitle: "Custom Tailored"
    },
    {
      images: [
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg"
      ],
      text: "Body Measure",
      subtitle: "Custom Tailored"
    },
    {
      images: [
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg"
      ],
      text: "Dress Tailor",
      subtitle: "Dress Tailor"
    },
    {
      images: [
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg",
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/main-home-img-5.jpg"
      ],
      text: "Design Sketches",
      subtitle: "Design"
    }];
  let currentIndex = 0;

  function prev() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  }

  function next() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  }
</script>

<div class="carousel">
  <div class="carousel-container" style="transform: translateX(-{currentIndex * 100}%);">
    {#each items as item}
      <div class="carousel-item">
        {#each item.images as image}
          <div class="image-container">
            <img src={image} alt={item.text} />
            <div class="text-container">
              <p class="title">{item.text}</p>
              <p class="subtitle">{item.subtitle}</p>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    min-width: 100%;
    display: flex;
    flex-direction: row; 
    justify-content: space-around; 
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    box-sizing: border-box;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  .carousel-item img {
    height: auto;
    max-width: 95%;
    border-radius: 8px;
  }

  .text-container {
    text-align: center;
    margin-top: 5px; 
  }

  .title {
    font-style: normal;
    font-size: 20px;
    margin: 0;
    color: #333;
  }

  .subtitle {
    font-family: "myriad-pro", sans-serif;
    font-style: italic;
    font-size: 16px;
    margin: 0;
    color: #666;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }

  .carousel-button.left {
    left: 10px;
  }

  .carousel-button.right {
    right: 10px;
  }

  .carousel-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }

  .carousel-dots span {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }

  .carousel-dots span.active {
    background-color: #333;
  }
</style>
