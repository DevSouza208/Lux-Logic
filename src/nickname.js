// Shared school-safe nickname policy. Keep in sync with the ranking Worker.
export function normalizeNickname(value){return typeof value==='string'?value.normalize('NFC').trim().replace(/ +/g,' '):''}
const denied=new Set(['puta','puto','putinha','putaria','merda','merdinha','bosta','bostinha','caralho','caralhinho','porra','porrinha','fodase','foda','foder','fudido','fudida','fdp','vsf','vtnc','pqp','tnc','arrombado','arrombada','viado','viadinho','bicha','bichinha','vadia','vagabunda','vagabundo','otario','otaria','idiota','imbecil','retardado','retardada','babaca','burro','burra','cu','cuzinho','cuzao','cuzona','buceta','xota','pinto','piroca','cacete','corno','corna','nazista','hitler','nazi','racista','macaco','macaca','negrinho','negrinha','nigger','nigga','fuck','fucking','shit','bitch','asshole','whore','slut','porn','porno','pornografia','sex','sexo','seissete','sixseven']);
const phrases=['filhodaputa','filhadaputa','vaitefoder','vaitomarnocu','tomarnocu','paunocu','seufdp','seuidiota','seudebiloide'];
export function nicknameError(value){
 const name=normalizeNickname(value);
 if(name.length<2||name.length>24||!/^[\p{L}\p{N}]+(?:[ _-][\p{L}\p{N}]+)*$/u.test(name))return 'Use de 2 a 24 caracteres: letras, números, espaços, hífen ou sublinhado.';
 const plain=name.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase();
 const compact=plain.replace(/[^a-z0-9]/g,'');
 if(compact.includes('67'))return 'Escolha outro apelido, por favor.';
 const decode=s=>s.replace(/[01345789]/g,c=>({'0':'o','1':'i','3':'e','4':'a','5':'s','7':'t','8':'b','9':'g'})[c]);
 const tokens=plain.split(/[^a-z0-9]+/).filter(Boolean).map(decode);
 const joined=decode(compact);
 const bare=joined.replace(/(.)\1{2,}/g,'$1');
 if(tokens.some(t=>denied.has(t)||denied.has(t.replace(/(.)\1{2,}/g,'$1')))||denied.has(joined)||denied.has(bare)||phrases.some(t=>joined.includes(t))||['caralho','buceta','arrombado','fudido','putaria','nigger','fucking','cuzao','fodase','fdp','vtnc','vsf','pqp','porra','merda','nazista','hitler'].some(t=>joined.includes(t)))return 'Esse apelido não é adequado para o jogo. Escolha outro.';
 return '';
}
