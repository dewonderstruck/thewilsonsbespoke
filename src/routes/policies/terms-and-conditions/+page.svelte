<script>
    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Terms and Conditions',
        subtitle: 'Please read these terms and conditions carefully before using our services...',
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
      <h3 class="text-2xl font-bold mb-4">Introduction</h3>
      <p>Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully, as they contain important information regarding your legal rights, remedies, and obligations.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Order Process</h3>
      <p>All orders are subject to acceptance and availability. Once an order is placed, you will receive an email confirmation. This email does not constitute acceptance of your order, but is a confirmation that we have received your request.</p>
      <p>Orders for bespoke suits and custom clothing are final sale once production begins. Changes or cancellations may be requested within 24 hours of placing your order. After 24 hours, we cannot guarantee any modifications or cancellations.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Payment</h3>
      <p>We accept payments via PayPal and Razorpay for your convenience and security. Payment is required at the time of order placement. All prices are listed in the local currency and include applicable taxes unless otherwise stated.</p>
      <p>By providing your payment information, you authorize us to charge the designated payment method for the total amount of your purchase. We reserve the right to change pricing at any time without prior notice.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Custom Orders</h3>
      <p>As all our suits are bespoke and made to measure, it is crucial that you provide accurate measurements and specifications. We are not responsible for incorrect measurements provided by the customer. Please follow our measurement guide carefully or visit a local tailor to ensure accuracy.</p>
      <p>We strive to deliver products that match the specifications and expectations of our customers. However, slight variations in color, fabric, or design may occur due to the bespoke nature of the products.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Shipping and Delivery</h3>
      <p>We offer worldwide shipping using trusted carriers. Shipping costs and delivery times vary based on the destination and shipping method chosen at checkout. All orders are processed within 2-3 business days, except for bespoke items, which may take up to 4-6 weeks to manufacture.</p>
      <p>We are not responsible for delays caused by customs, postal delays, or other circumstances beyond our control. Tracking information will be provided once your order is shipped.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Returns and Exchanges</h3>
      <p>Due to the bespoke nature of our products, we do not offer returns or exchanges on custom orders. If you receive a defective or incorrect item, please contact us within 7 days of receipt to arrange for a repair or replacement.</p>
      <p>For non-bespoke items, returns are accepted within 30 days of delivery, provided the items are in their original, unused condition. Please see our Returns Policy for more details.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Intellectual Property</h3>
      <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of our company or our content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or otherwise use any content without our express written consent.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Privacy Policy</h3>
      <p>We value your privacy and are committed to protecting your personal information. Please review our Privacy Policy for detailed information on how we collect, use, and safeguard your data.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h3>
      <p>We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use our services or for any errors or inaccuracies in the content provided on our website.</p>
      <p>Our liability is limited to the maximum extent permitted by law. If you are dissatisfied with our services or any terms and conditions, your sole remedy is to discontinue using our website.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Governing Law</h3>
      <p>These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established. Any disputes arising from these terms shall be resolved exclusively in the courts of that jurisdiction.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Amendments</h3>
      <p>We reserve the right to amend these terms and conditions at any time without prior notice. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.</p>
      
      <h3 class="text-2xl font-bold mt-8 mb-4">Contact Us</h3>
      <!-- TODO: Add contact details -->
      <p>If you have any questions or concerns about these terms and conditions, please contact us at support@example.com or call us at +123456789.</p>
    </div>
</main>
