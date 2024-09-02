<script>
  export let slides = [
    {
      image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
      title: 'Returns',
      subtitle: 'Our returns policy ensures you have a seamless shopping experience...',
    },
  ];
  let currentIndex = 0;
</script>

<main class="flex flex-col justify-center items-center min-h-screen bg-[#0d0d0d] text-white text-center">
  <div class="relative w-full h-48">
  </div>
  <div class="relative w-full h-96">
    <img
      src="{slides[currentIndex].image}"
      alt="bg"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative flex flex-col items-center justify-center h-full">
      <h2 class="text-4xl md:text-6xl font-bold">{slides[currentIndex].title}</h2>
    </div>
  </div>

  <div class="relative my-8 p-6 max-w-4xl text-start">
    <h3 class="text-2xl font-bold mb-4">Returns Policy</h3>
    <p>If you are not completely satisfied with your purchase, you may return it to us within 30 days of receipt for a refund or exchange, provided that the item is in its original, unused condition and packaging.</p>
    <p class="mt-4">Please note that certain items are non-returnable. This includes personalized items, perishable goods, and intimate or sanitary goods. These restrictions are clearly noted on the product page where applicable.</p>
    <p>To initiate a return, please contact our customer service team with your order number and details of the item you wish to return. We will provide you with a return authorization and instructions on how to send your item back to us.</p>
    <p class="mt-4">Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.</p>

    <h3 class="text-2xl font-bold mt-8 mb-4">Exchanges</h3>
    <p>If you need to exchange an item for a different size or color, please let us know and we will provide you with instructions on how to proceed. Items that are in stock will be processed and shipped as soon as the original item is received and inspected.</p>
    
    <h3 class="text-2xl font-bold mt-8 mb-4">Shipping for Returns</h3>
    <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
    <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary. Consider using a trackable shipping service or purchasing shipping insurance if you are returning an expensive item. We cannot guarantee that we will receive your returned item.</p>

    <h4 class="text-xl font-bold mt-4 mb-2">Damaged or Defective Items</h4>
    <p>If you receive a damaged or defective item, please contact us immediately with photos of the damage. We will arrange for a replacement or refund at no additional cost to you.</p>
    
    <h4 class="text-xl font-bold mt-4 mb-2">Non-Returnable Items</h4>
    <p>Several types of goods are exempt from being returned. This includes perishable goods, hazardous materials, and flammable liquids or gases. Personalized and custom-made items also cannot be returned. For further details, please refer to the product page or contact our support team.</p>
    
    <h4 class="text-xl font-bold mt-4 mb-2">Contact Us</h4>
    <p>If you have any questions about our returns policy, please contact us at support@example.com or call us at +123456789.</p>
  </div>
</main>
