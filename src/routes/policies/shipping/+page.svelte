<script>
    export let slides = [
      {
        image: 'https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H1-rev-img-2.jpg',
        title: 'Shipping',
        subtitle: 'At vero et justoprovident, similique sunt in culpa mi quis hendrerit...',
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
      <h3 class="text-2xl font-bold mb-4">Shipping Information</h3>
      <p>UK Shipping – £6 shipping within 2 working days with FedEx</p>
      <p>EU Shipping – £18 within 3 working days with DHL Express</p>
      <p>USA Shipping – £23 within 3 working days with DHL Express</p>
      <p>Shipping to the rest of the world – £23 within 4 working days with DHL Express</p>
      <p class="mt-4">Please note - this is based on when we will mark the order as despatched and we cannot guarantee delivery in this time due to factors sometimes out of our control.</p>
      <p>If you need special or non-standard shipping please let us know via the notes in your order and we will do our best to accommodate you.</p>
  
      <h3 class="text-2xl font-bold mt-8 mb-4">Orders and Shipping</h3>
      <p>These T&C are applied to services provided by Express Carrier DHL Express in respect of delivery of Express Shipments for personal use.</p>
      
      <h4 class="text-xl font-bold mt-4 mb-2">Terms used herein:</h4>
      <p><strong>Express Carrier:</strong> DHL Express is represented within the Russian Federation by two entities, DHL International AO and DHL Express OOO. DHL Express as well as third parties work together to deliver Express Shipments internationally and perform customs operations in respect of Express Shipments.</p>
      <p><strong>Customs Broker</strong> means DHL Express OOO performing customs operations in the name and on behalf of the customs applicant and other interested parties in accordance with the customs laws of the Customs Union.</p>
      <p><strong>Express Shipment</strong> means goods shipped in express mode by any means of transportation using electronic shipment organisation and tracking system on www.dhl.ru website to deliver those goods to the Consignee pursuant to an individual waybill within the shortest possible and/or fixed period of time.</p>
      <p><strong>Shipper</strong> means a legal entity, normally an online store, that handed Express Shipments over to the Express Carrier for delivery.</p>
      <p><strong>Consignee</strong> means an individual consignee of Express Shipment specified in the DHL Express waybill.</p>
  
      <h4 class="text-xl font-bold mt-4 mb-2">T&C Subject Matter</h4>
      <p>2.1. These T&C are a public offer and form a consensual type Delivery and Customs Operations Agreement in respect of Express Shipments by and between the Shipper/Consignee, the Express Carrier and the Customs Broker (“Agreement”).</p>
      <p>2.2. Consignee of Express Shipments accepts the provisions of this Agreement for themselves and for other directly or indirectly interested parties, including the Shipper, by pressing a button, ticking a box or putting any other sign in the box “I accept terms and conditions of the Public Offer,” as well as/or by any other means of actual confirmation of their consent when ordering goods at the Shipper’s website.</p>
      <p>2.3. Under the applicable legislation in Russian Federation Express Carrier and Customs Broker shall have the right to demand from Consignee documents and information necessary for international delivery of Express Shipments and customs operations in respect of Express Shipment, including those containing information comprising commercial, bank and other secrets protected by law, or other confidential information, and obtain such documents and information within the time limits ensuring observance of the requirements specified in the applicable legislation.</p>
      <p>Express Carrier and Customs Broker hereby acknowledge and confirm that the obtained information comprising state, commercial, bank and other secrets protected by the law or other confidential information must not be disclosed or used by Express Carrier and Customs Broker and their employees for their own purposes, handed over to other persons, except for the cases envisaged in the applicable legislation in Russian Federation other cases when disclose of the information is required for international delivery of Express Shipments and customs operations in respect of Express Shipment.</p>
      
      <h4 class="text-xl font-bold mt-4 mb-2">DHL Express Network Terms and Conditions of Carriage</h4>
      <p>3.1. The Shipper and the Consignee acknowledge that normal DHL Express Delivery Terms and Conditions apply to carriage of goods via DHL Express network; the key provisions thereof that are essential for the Consignee are listed below:</p>
      <p class="my-2"><strong>Deliveries and Undeliverables</strong></p>
      <p>Shipments cannot be delivered to PO Boxes or postal codes. Shipments are delivered to the Receiver’s address given by Shipper but not necessarily to the named Receiver personally. Shipments to addresses with a central receiving area will be delivered to that area.</p>
      <p>DHL may notify Receiver of an upcoming delivery or a missed delivery. Receiver may be offered alternative delivery options such as delivery on another day, no signature required, redirection or collection at a DHL Service Point. Shipper may exclude certain delivery options on request.</p>
      <p>If the Shipment is deemed to be unacceptable as described in Section 2, or it has been undervalued for customs purposes, or Receiver cannot be reasonably identified or located, or Receiver refuses delivery or to pay Customs Duties or other Shipment charges, DHL shall use reasonable efforts to return the Shipment to Shipper at Shipper’s cost, failing which the Shipment may be released, disposed of or sold without incurring any liability whatsoever to Shipper or anyone else, with the proceeds applied against Customs Duties, Shipment charges and related administrative costs with the balance of the proceeds of a sale to be returned to Shipper. DHL shall have the right to destroy any Shipment which any law prevents DHL from returning to Shipper as well as any Shipment of Dangerous Goods.</p>
      <p class="my-2"><strong>Inspection</strong></p>
      <p>DHL has the right to open and inspect a Shipment without notice for safety, security, customs or other regulatory reasons.</p>
      <p class="my-2"> <strong>DHL’s Liability</strong></p>
      <p>DHL’s liability in respect of any one Shipment transported by air (including ancillary road transport or stops en route) is limited by the Montreal Convention or the Warsaw Convention, as applicable, or in absence of such Convention, to the lower of (i) the current market or declared value, or (ii) 19 Special Drawing Rights per kilogram (approximately $US 26.00 per kilogram). Such limits shall also apply to all other forms of transportation, except where Shipments are carried only by road, when the limits below apply.</p>
      <p>For cross border Shipments transported by road, DHL’s liability is or shall be deemed to be limited by the Convention for the International Carriage of Goods by Road (CMR) to the lower of (i) current market value or declared value, or (ii) 8.33 Special Drawing Rights per kilogram (approximately $US 14.00 per kilogram). Such limits will also apply to national road transportation in the absence of any mandatory or lower liability limits in the applicable national transport law.</p>
      <p>If Shipper regards these limits as insufficient it must make a special declaration of value and request insurance as described in Section 8 or make its own insurance arrangements.</p>
      <p>DHL’s liability is strictly limited to direct loss and damage to a Shipment only and to the per kilogram limits in this Section 6. All other types of loss or damage are excluded (including but not limited to lost profits, income, interest, future business), whether such loss or damage is special or indirect, and even if the risk of such loss or damage was brought to DHL’s attention.</p>
      <p>DHL will make every reasonable effort to deliver the Shipment according to DHL’s regular delivery schedules, but these schedules are not binding and do not form part of the contract. DHL is not liable for any damages or loss caused by delay, but for certain Shipments, Shipper may be able to claim limited delay compensation under the Money Back Guarantee terms and conditions, which are available on the DHL website at www.dhl.com or from Customer service.</p>
      <p class="my-2"><strong>Claims</strong></p>
      <p>All claims must be submitted in writing to DHL within thirty (30) days from the date that DHL accepted the Shipment, failing which DHL shall have no liability whatsoever. Claims are limited to one claim per Shipment, settlement of which will be full and final settlement for all loss or damage in connection therewith.</p>
      <p class="my-2"><strong>Insurance</strong></p>
      <p>DHL can arrange insurance for Shipper covering the actual cash value in respect of loss of or physical damage to the Shipment, provided the Shipper so instructs DHL in writing, including by completing the insurance section on the front of the Waybill or by DHL’s automated systems and pays the applicable premium. Shipment insurance does not cover indirect loss or damage, or loss or damage caused by delays.</p>
      <p class="my-2"><strong>Delayed Shipments and Money-Back Guarantee</strong></p>
      <p>DHL will make every reasonable effort to deliver the Shipment according to DHL’s regular delivery schedules, but these schedules are not binding and do not form part of the contract. DHL is not liable for any damages or loss caused by delay, but for certain Shipments, Shipper may be able to claim limited delay compensation under the Money Back Guarantee terms and conditions, which are available on the DHL website at www.dhl.com or from Customer service.</p>
    </div>
  </main>
  