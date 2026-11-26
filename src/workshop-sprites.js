// Vite bundles source SVGs as text; no per-sprite HTTP requests.
const raw=import.meta.glob('../public/tiles/workshop/*.svg',{eager:true,query:'?raw',import:'default'});
export const workshopSprites=Object.fromEntries(Object.entries(raw).map(([path,svg])=>[path.split('/').pop().replace('.svg',''),'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg)]));
const retained=[];let warmed=false;
export function warmWorkshop(){if(warmed)return;warmed=true;for(const [name,src] of Object.entries(workshopSprites)){if(name==='cover')continue;const img=new Image();img.src=src;retained.push(img);if(img.decode)img.decode().catch(()=>{});}}
