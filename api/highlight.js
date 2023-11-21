




function Highlight(){
 // if(globalThis.HighlightRunning){return;}
 // globalThis.HighlightRunning=true;
function arraySelectorAll(css){

  return Array.from(document.querySelectorAll(css));

}

  //if(document.querySelector('.block')){return;}
  let tks=arraySelectorAll('pre:has(.block)');
  for(let i=0 ; i<tks.length ; i++){try{
    tks[i].setAttribute('highlight-done','true');
  }catch(e){continue;}}

  if((!(document.querySelector('[highlight-count]')))||(document.querySelector('highlight-me'))){
  tks=arraySelectorAll(':not(.block)>[class*="token"]');
  for(let i=0 ; i<tks.length ; i++){try{

    tks[i].setAttribute('class',tks[i].getAttribute('class').replaceAll('token','')+' poop');
  }catch(e){continue;}}
  }
  function stripCodes(){
  let doublecodes=arraySelectorAll('code>code');
  let doublecodes_length=doublecodes.length;
  for(let i=0;i<doublecodes_length;i++){try{

    let htm = doubleCodes[i].innerHTML.toString();
    doublecodes[i].parentElement.innerHTML=htm;

  }catch(e){continue;}}

    doublecodes=arraySelectorAll('pre>pre');
    doublecodes_length=doublecodes.length;
    for(let i=0;i<doublecodes_length;i++){try{
      let htm = doubleCodes[i].innerHTML.toString();
      doublecodes[i].parentElement.innerHTML=htm;

    }catch(e){continue;}}

    doublecodes=document.querySelectorAll('code>*>code');
    doublecodes_length=doublecodes.length;
    for(let i=0;i<doublecodes_length;i++){try{
      let htm=doubleCodes[i].innerHTML.toString();
      doublecodes[i].parentElement.parentElement.innerHTML=htm;

    }catch(e){continue;}}

    doublecodes=document.querySelectorAll('pre>*>pre');
    doublecodes_length=doublecodes.length;
    for(let i=0;i<doublecodes_length;i++){try{
      let htm=doubleCodes[i].innerHTML.toString();
      doublecodes[i].parentElement.parentElement.innerHTML=htm;

    }catch(e){continue;}}

    doublecodes=arraySelectorAll('pre:has(.token)');
    doublecodes_length=doublecodes.length;
    for(let i=0;i<doublecodes_length;i++){try{

      if(doublecodes[i].innerHTML.includes('≺')){
        doublecodes[i].innerHTML=doublecodes[i].innerHTML.toString().replaceAll('≺','<span class="token operator">&lt;</span>');
      }

    }catch(e){continue;}}

  }
  stripCodes();
  setInterval(function(){stripCodes();},100);

  globalThis.R=`
  `.split(' ')[0];


  function unlight(){

    let startH=arraySelectorAll('[highlighted]');
    let startH_length=startH.length;
    for(let i=0;i<startH_length;i++){

      startH[i].removeAttribute('highlighted');

    }
  }

  function unlightEmpty(){

    let startH=arraySelectorAll('[highlighted]:not([highlight-done])');
    let startH_length=startH.length;
    for(let i=0;i<startH_length;i++){

      if((startH[i].children.length<2)
      &&((startH[i].innerText.includes(R))
      ||(startH[i].innerText.trim().length>50))){
        startH[i].removeAttribute('highlighted');
        //startH[i].setAttribute('highlight-count','0');
      }

    }
  }

setInterval(function(){unlightEmpty();},500);


  unlight();
  setTimeout(function(){unlight();},1000);
  setTimeout(function(){unlight();},2000);
  setTimeout(function(){unlight();},3000);

globalThis.sleep=function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function highlighter(){
  if(document.querySelector('highlight-me')){
    try{
    if(Prism){
      let hs=arraySelectorAll('[highlight-count]:not(:has(.token))');
      for(let i=0 ; i<hs.length ; i++){try{
        Prism?.highlightElement?.(hs[i]);
      }catch(e){continue;}}
      }
      }catch(e){}
  }
}

  function highlighterSelect(){

    let hs=arraySelectorAll('[highlight-count]:not(:has(.token))');
    for(let i=0 ; i<hs.length ; i++){try{
      Prism?.highlightElement?.(hs[i]);
    }catch(e){continue;}}
  }

void async function getPrism(){

  addEventListener("DOMContentLoaded", (event) => {
    getp();
  });  

getp();
setTimeout(function(){getp();},1);
  setInterval(function(){getp();},1000);
}();


async function getp(){
  stripCodes();
/*if(window.location.href.includes('/docs/handbook/declaration-files/dts-from-js.html')){return;}

if(window.location.href.includes('/docs/handbook/tsconfig-json.html')){return;}*/

/*if((!window.location.href.includes('/dev/typescript-vfs'))
&&(!window.location.href.includes('/dev/sandbox'))){return;}*/
  let faces=arraySelectorAll(`
  __div[id^="method_"]>div[class^="tw-"]:not([highlighted]),
  __div[id^="prop_"]>div[class^="tw-"]:not([highlighted]),
  __div[id^="variable_"]>div[class^="tw-"]:not([highlighted]),
  __div[id^="function_"]>div[class^="tw-"]:not([highlighted]),
  __div[id^="ctor_"]>div[class^="tw-"]:not([highlighted]),
  pre:has(.poop),
  li>code:not([highlighted]),
  [class="font-mono"]:not([highlighted])`);
  let faces_length=faces.length;
  for(let i=0;i<faces_length;i++){
    if(faces[i].outerHTML.toString().includes('highlight-me')){highlighter();continue;}
    if(!(faces[i].hasAttribute('class'))){
      faces[i].setAttribute('class','font-mono'+' language-typescript');
    }
    if(faces[i].getAttribute('class').includes('font-mono')){
      faces[i].setAttribute('class','font-mono'+' language-typescript');
    }


    if(faces[i].getAttribute('class').includes('tw-')||faces[i].getAttribute('class').includes('font-mono')){faces[i].outerHTML=('<pre style="border-radius:1vmax;" class="'+faces[i].getAttribute('class')+'" highlight-count=0><code highlighted=true><highlight-me></highlight-me>'+faces[i].outerHTML.toString().replaceAll('&lt;','≺')+'</code></pre>')
      .replace('<code highlighted=true><highlight-me></highlight-me><pre','<pre')
      .replace('<code><pre','<pre').replace('</pre></code>','</pre>');
    faces[i].setAttribute('highlighted','true');
  }
  }

  let thisLang = 'typescript';
  let codes=arraySelectorAll(':not(pre) code>pre:not([highlighted]),:not(pre,code) pre:not([highlighted]):has(code.html-code),:not(pre,code) pre:not([highlighted]):has(code)');
  let codes_length=codes.length;
  for(let i=0;i<codes_length;i++){
    if(codes[i].innerHTML.toString().includes('highlight-me')){highlighter();continue;}
    let hlc = 0;
    if(codes[i].hasAttribute('highlight-count')){
      hlc=parseInt(codes[i].getAttribute('highlight-count'));
      if(hlc>30){continue;}
      if(hlc>=5){
        codes[i].setAttribute('highlighted','true');
        if(codes[i].firstElementChild){
          codes[i].firstElementChild.appendChild(document.createElement('highlight-me'));
          hlc++;
          codes[i].setAttribute('highlight-count',hlc);
        }else{
          codes[i].appendChild(document.createElement('highlight-me'));
        }
        highlighter();
        if(hlc>50){
          codes[i].setAttribute('highlight-done',true);
          hlc++;
          codes[i].setAttribute('highlight-count',hlc);
         // window.stop();
         // return;
        }
        if(hlc>40){
          codes[i].setAttribute('highlight-done',true);
          hlc++;
          codes[i].setAttribute('highlight-count',hlc);
         // return;
        }
        if(hlc>30){
          codes[i].setAttribute('highlight-done',true);
          hlc++;
          codes[i].setAttribute('highlight-count',hlc);
          break;
        }
        if(hlc>20){
          codes[i].setAttribute('highlight-done',true);
          hlc++;
          codes[i].setAttribute('highlight-count',hlc);
          continue;
        }
      }else{
        hlc++;
        codes[i].setAttribute('highlight-count',hlc);
      }
    }else{
      codes[i].setAttribute('highlight-count',hlc);
    }
    let mylang='language-'+thisLang;
    let preclass=codes[i].getAttribute('class');
  if(preclass&&preclass.includes('language-')){
    mylang=('language-'+preclass.split('language-')[1].split(' ')[0])
      .replace('jsonc','json')
      .replace('json','banana')
      .replace('jsx','typescript')
      .replace('js','typescript')
      .replace('tsx','typescript')
      .replace('ts','typescript')
      .replace('javascript','typescript')
      .replace('elisp','typescript')
      .replace('toml','typescript')
      .replace('banana','yaml')
      .replace('graphql','yaml')
      .replace('-shell','apple')
      .replace('-sh','-typescript')
      .replace('-bash','-typescript')
      .replace('apple','-shell')
      .replace('terminal','typescript')
      .replace('-text','-typescript')
      .replace('-none','-typescript')
      .replace('-lua','-typescript')
      .replace('-rust','-clike')
      .replace('-cpp','-clike')
      .replaceAll(',','')
      ;//.replace('shell','docker');
  }  
    codes[i].setAttribute('class',mylang);
    let codetext='<code class="'+mylang+'" highlighted=true><highlight-me></highlight-me>'+codes[i].innerHTML.toString()
      .replaceAll('<br>',R).trim()+
      '</code>';
    if(!(codetext.includes(R))){
      codetext=codetext.replaceAll(';',`;`+R)
      .replaceAll('{',`{`+R)
      .replaceAll('}',R+`}`+R)
      .replaceAll(R+R,R);
    }
    codes[i].innerHTML=codetext.trim();

    codes[i].setAttribute('highlighted','true');
  }
  try{
  if(Prism){
    highlighter();if(hlc<=5){highlighterSelect();}
    }
    }catch(e){}
  if(!document.querySelector('[id="prismmincss"]')){
  let l=document.createElement('link');
  l.href='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css';
  l.rel='stylesheet';
  l.id="prismmincss";
if(document.body){
  document.body.appendChild(l);
  }else{
  await sleep(500);
  document.body.appendChild(l);
  }
  }

  if(!document.querySelector('[id="prismminjs"]')){
  let m=document.createElement('script');
  m.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js';
  m.id="prismminjs";
  m.onload=async function(){

    await addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-jsx.min.js');
     await addScript('https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-yaml.min.js');
    if(!document.querySelector('[id="prismgominjs"]')){
    let g=document.createElement('script');
    g.src='https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-typescript.min.js';
    g.id="prismgominjs";
    g.onload=function(){

    globalThis.Prism=Prism;highlighter();highlighterSelect();

    let ss = document.createElement('style');
    ss.innerHTML='code[class*="language-"], pre[class*="language-"]{color:blue;}  .line>span[style="color: #008000"]:first-child{text-wrap:pretty;} .line>span{--background-color:#f5f8ff;} .language-shell [class="token operator"]{color:green !important;} pre,code{text-shadow:none !important;} pre[clsee*="language-typescript"]{color:blue;} code[clsee*="language-typescript"]{color:blue;}';
    document.body.appendChild(ss);
    };
  document.body.appendChild(g); 
    }  
  };



document.body.appendChild(m);

}

  async function addScript(s){
    let jsx=document.createElement('script');
    if(document.querySelector('script[id="'+s+'"]')){return;}
    jsx.id=s;
    let aspromise = new Promise(resolve=>{jsx.resolve=resolve})
      jsx.src=s;
      jsx.onload=function(){jsx.resolve();}
      document.body.appendChild(jsx);
    await aspromise;
    return aspromise;
    }





  }




}

globalThis.highlight=`<scr`+`ipt>void `+Highlight+`();</scr`+`ipt>`;

if(window?.location){
  Highlight();
  //setTimeout(function(){Highlight();},2000);
}

