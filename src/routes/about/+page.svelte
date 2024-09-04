<script>
  import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte'
  import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-svelte'
  import OurStory from '$lib/component/ourstory.svelte'
  let name = "Sujeeth Marc";
  let profession = "Entrepreneur";
  let description = "Sujeeth Marc, a mechanical engineer turned fashion creator, followed his passion for fashion after working with luxury brands in Hyderabad. Since 2017, he has been catering to customers on private appointments, offering bespoke outfits and accessories for men and women through his atelier at Road Number 10, Jubilee Hills, Hyderbad.";
  let email = "sujeeth.marc@example.com";
  let phone = "+91 98765 43210";
  let address = "Road Number 10, Sravanthi Nagar, ICRISAT Colony, Jubilee Hills, Hyderabad, India";
</script>

<main class="flex manrope flex-col items-center min-h-screen bg-[#0C0404] text-white text-center">
  <div class="relative bg-black w-full h-48"></div>
  <div class="flex flex-col md:flex-row text-white p-8 items-top justify-center min-h-screen">
    <div class="w-full m-0 p-0 md:w-1/2 m-8 md:m-24 pr-0 md:pr-8">
      <img src="https://th-i.thgim.com/public/life-and-style/fashion/kt4qbg/article29449698.ece/alternates/FREE_1200/hym19Mallik-Wilson-2" alt={name} class="w-full h-1/2 object-cover rounded-lg">
    </div>
    <div class="w-full md:w-1/2 mt-8 md:mt-24 py-12 text-start">
      <h1 class="text-4xl font-serif mb-2"><span class="italic">{name}</span></h1>
      <h2 class="text-xl mb-4"><span class="italic">{profession}</span></h2>
      <p class="mb-8">{description}</p>
      <h3 class="text-xl mb-4">Information</h3>
      <div class="space-y-2">
        <div class="flex items-center">
            <svelte:component this={IconMail} class="mr-2" />{email}
        </div>
        <div class="flex items-center">
          <svelte:component this={IconPhone} class="mr-2" />{phone}
        </div>
        <div class="flex items-center">
            <svelte:component this={IconMapPin} class="mr-2" />{address}
        </div>
      </div>
      <div class="flex space-x-4 mt-8">
        <svelte:component this={IconBrandLinkedin} />
        <svelte:component this={IconBrandInstagram} />
      </div>
    </div>
  </div>
</main>
