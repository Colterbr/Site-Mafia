const perfis = {

marina:{

nome:"Marina",

cargo:"Criador de Conteúdo",

foto:"https://cdn.discordapp.com/attachments/1432105374860705983/1512993446703661222/Screenshot_2026-06-06-21-34-45-840_com.instagram.android2.jpg?ex=6a261c73&is=6a24caf3&hm=7ccc2e5f49f4fbd6dd5eb1d21d29d095c0df0d14a0ac187aaae2edfb0a48c5c8&",

bio:"Criadora oficial da comunidade MAFIA. Responsável por criar eventos, disputas e proporcionar entretenimento único para todos os membros.",

instagram:"#",

discord:"#",

youtube:"#",

tiktok:"https://www.tiktok.com/@lais_dorman"

},

kael:{

nome:"Kael",

cargo:"Criador de Conteúdo",

foto:"https://cdn.discordapp.com/attachments/1432105374860705983/1512991807464669214/6A8B3155-2FF7-4B57-8CD8-B917B1C0AF13.png",

bio:"Criador oficial da comunidade MAFIA. Ajuda a organizar eventos e criar conteúdo engajante para toda a família.",

instagram:"#",

discord:"#",

youtube:"#",

tiktok:"#"

},

shadow:{

nome:"Shadow",

cargo:"Criador de Conteúdo",

foto:"https://cdn.discordapp.com/attachments/1432105374860705983/1512991807464669214/6A8B3155-2FF7-4B57-8CD8-B917B1C0AF13.png",

bio:"Criador oficial da comunidade MAFIA. Auxilia na criação de eventos e no suporte à comunidade.",

instagram:"#",

discord:"#",

youtube:"#",

tiktok:"#"

}

};

function abrirModal(id){

const p = perfis[id];

document.getElementById("modal").style.display = "flex";

document.getElementById("modalBody").innerHTML = `

<div class="modal-foto">

<img src="${p.foto}" alt="${p.nome}">

</div>

<h2>${p.nome}</h2>

<h3>${p.cargo}</h3>

<p>${p.bio}</p>

<div class="social-user">

<a href="${p.instagram}" target="_blank">
Instagram
</a>

<a href="${p.discord}" target="_blank">
Discord
</a>

<a href="${p.youtube}" target="_blank">
YouTube
</a>

<a href="${p.tiktok}" target="_blank">
TikTok
</a>

</div>

`;

}

function fecharModal(){

document.getElementById("modal").style.display = "none";

}

const btnRedes = document.getElementById("btnRedes");

const btnRedesFooter = document.getElementById("btnRedesFooter");

btnRedes.addEventListener("click",()=>{

document.getElementById("modalRedes").style.display="flex";

});

btnRedesFooter.addEventListener("click",()=>{

document.getElementById("modalRedes").style.display="flex";

});

function fecharRedes(){

document.getElementById("modalRedes").style.display="none";

}

document.getElementById("btnConheca").addEventListener("click",()=>{

document.getElementById("sobre").scrollIntoView({behavior:"smooth"});

});

document.getElementById("btnCriadores").addEventListener("click",()=>{

document.getElementById("criadores").scrollIntoView({behavior:"smooth"});

});

window.onclick = function(e){

const modal = document.getElementById("modal");

const redes = document.getElementById("modalRedes");

if(e.target === modal){

fecharModal();

}

if(e.target === redes){

fecharRedes();

}

};