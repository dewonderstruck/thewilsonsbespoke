<script>
    import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-svelte'
    import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-svelte'
  
    let name = "Amber Morison";
    let profession = "fashion creator";
    let description = "At vero eos et accusamus et justo odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti cupiditate non provident, similique sunt in culpa. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Fusce vel dui. Donec venenatis vulputate lorem, auctor augue. Suspendisse dapibus vitae.";
    let email = "tailor@example.com";
    let phone = "+ 345 8892 7413";
    let address = "35 Savile Row, London W1S";
  </script>
  
  <main class="flex manrope flex-col items-center min-h-screen bg-[#0d0d0d] text-white text-center">
  <div class="flex bg-gray-900 text-white p-8">
    <div class="w-1/2 pr-8">
      <img src="https://th-i.thgim.com/public/life-and-style/fashion/kt4qbg/article29449698.ece/alternates/FREE_1200/hym19Mallik-Wilson-2" alt={name} class="w-full h-auto rounded-lg">
    </div>
    <div class="w-1/2">
      <h1 class="text-4xl font-serif mb-2">Hello, I'm <span class="italic">{name}</span></h1>
      <h2 class="text-2xl mb-4">And I'm <span class="italic">{profession}</span></h2>
      <h3 class="text-xl mb-4">High Quality</h3>
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