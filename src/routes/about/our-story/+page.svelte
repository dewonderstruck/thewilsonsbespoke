<style>
    #our-story {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #0d0d0d;
      color: white;
      text-align: center;
      padding-left: 5vw;
      padding-right: 5vw;
      padding-top: 14vw;
      padding-bottom: 10vh;
      line-height: 1.618; /* Golden Ratio for line spacing */
      font-family: 'Times New Roman', serif;
    }
  
    .title {
      font-size: 2.618rem; /* Golden Ratio for main title */
      margin-bottom: 1.618rem; /* Golden Ratio for spacing */
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  
    .content {
      text-align: justify;
      max-width: 70ch; /* Ideal line length for readability */
      font-size: 1.618rem; /* Golden Ratio for body text */

    }
  
    .highlight {
      font-style: italic;
      color: #f5c518; /* A touch of gold color to accentuate key points */
    }
  
    @media (max-width: 768px) {
      #our-story {
        padding: 3vw;
      }
      .title {
        font-size: 2rem;
        margin-bottom: 1.2rem;
      }
      .content {
        font-size: 1.2rem;
      }
    }
  </style>
  <div class="flex flex-col items-center min-h-screen bg-[#0d0d0d] text-white text-center">
  <div id="our-story">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-6xl uppercase mb-16 cormorant-garamond text-white tracking-wider title">Our Story</h1>
    </div>
    <p class="content">
      At <span class="highlight">The Wilson's</span>, each garment is more than just a piece of clothing — it's a work of art, meticulously crafted to perfection. From selecting the finest fabrics sourced from renowned mills to hand-stitching every seam with precision and care, our artisans pour their expertise and passion into every stitch, ensuring that each creation embodies the highest standards of quality and refinement.
    </p>
    <p class="content">
      Over the years, <span class="highlight">The Wilson's</span> has become synonymous with unparalleled craftsmanship and uncompromising quality. Our commitment to perfection extends beyond the finished product to the entire customer experience, where personalized service and attention to detail are paramount. From innovative fabric blends to modern interpretations of timeless designs, we strive to push the boundaries of sartorial elegance.
    </p>
    <p class="content">
      At the heart of <span class="highlight">The Wilson's</span> philosophy lies the belief that true style is a reflection of individuality. Whether it's a bespoke suit tailored to perfection or a statement accessory that adds a touch of personality, each piece is designed to empower our clientele to express their unique sense of style with confidence and grace.
    </p>
    <p class="content">
      With a legacy built on timeless elegance and a vision that looks towards the future, we invite you to join us in celebrating the art of sartorial craftsmanship and the enduring power of style.
    </p>
  </div>
  </div>
  