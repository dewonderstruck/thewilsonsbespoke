/** @type {import('./$types').LayoutLoad} */

export async function load({ url }: { url: URL }) {
  return {
    url: url.pathname
  };
}
