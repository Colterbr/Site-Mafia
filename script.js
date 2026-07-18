const perfis = {
    Mafia: {
        nome: "Mafia",
        cargo: "Eu sou a Mafia", // Atualizado com a Cordel!
        foto: "criadores/mafia.png",
        bio: "A Mafia nasceu para deixar sua marca em MetaCity. Cada conquista é resultado de lealdade, estratégia e respeito. Aqui não existem peças descartáveis, apenas pessoas que carregam o mesmo nome e defendem o mesmo legado.",
        instagram: "https://www.instagram.com/realmafiatop1/",
        discord: "", // Deixando vazio para esconder
        youtube: "", // Deixando vazio para esconder
        tiktok: "https://www.tiktok.com/@realmafia071"
    },

    Marina: {
        nome: "Marina",
        cargo: "Fundadora da Mafia",
        foto: "criadores/Marina.png",
        bio: "Marina foi quem transformou uma ideia em uma família. Conhecida pela calma nas decisões e pela firmeza quando necessário, construiu a MM sobre respeito, confiança e união. Sua liderança continua sendo a base do legado que a facção carrega.",
        instagram: "https://www.instagram.com/lais_dorman/",
        discord: "",
        youtube: "",
        tiktok: "https://www.tiktok.com/@lais_dorman"
    },

    Colter: {
        nome: "Colter",
        cargo: "Conhecida por muitos. Esquecida por ninguém.",
        foto: "criadores/Colter.png",
        bio: "Morgana se tornou um dos rostos mais reconhecidos da Mafia. Com presença marcante, postura impecável e decisões estratégicas, conquistou respeito dentro e fora da facção. Para muitos ela é apenas Morgana. Para quem conhece sua história, ela sempre será a Lady Dimitrescu.",
        instagram: "https://www.instagram.com/syncmorgana/", 
        discord: "",   // Não tem, fica oculto automaticamente
        youtube: "",   // Não tem, fica oculto automaticamente
        tiktok: "https://www.tiktok.com/@colterbr"
    },

    NortZz7: {
        nome: "NortZz7",
        cargo: "01 da Mafia",
        foto: "criadores/NortZz7.png",
        bio: "Nortz é o 01 da Mafia e uma das principais peças da organização. Sempre presente nas operações e na administração da família, é conhecido pela lealdade, comprometimento e por estar ao lado da liderança em qualquer situação.",
        instagram: "",
        discord: "",
        youtube: "",
        tiktok: "https://www.tiktok.com/@nortzz7"
    }
};

function abrirModal(id) {
    const p = perfis[id];
    
    // Cria a estrutura base do modal
    let botoesHtml = "";

    // LÓGICA INTELIGENTE: Só adiciona o HTML do botão se o link não estiver vazio e não for "#"
    if (p.instagram && p.instagram !== "#") {
        botoesHtml += `<a href="${p.instagram}" target="_blank" class="btn-instagram">Instagram</a>`;
    }
    if (p.discord && p.discord !== "#") {
        botoesHtml += `<a href="${p.discord}" target="_blank" class="btn-discord">Discord</a>`;
    }
    if (p.youtube && p.youtube !== "#") {
        botoesHtml += `<a href="${p.youtube}" target="_blank" class="btn-youtube">YouTube</a>`;
    }
    if (p.tiktok && p.tiktok !== "#") {
        botoesHtml += `<a href="${p.tiktok}" target="_blank" class="btn-tiktok">TikTok</a>`;
    }

    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalBody").innerHTML = `
        <div class="modal-foto">
            <img src="${p.foto}" alt="${p.nome}">
        </div>
        <h2>${p.nome}</h2>
        <h3>${p.cargo}</h3>
        <p>${p.bio}</p>
        <div class="social-user">
            ${botoesHtml}
        </div>
    `;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Eventos dos botões de redes gerais do site
const btnRedes = document.getElementById("btnRedes");
const btnRedesFooter = document.getElementById("btnRedesFooter");

if (btnRedes) {
    btnRedes.addEventListener("click", () => {
        document.getElementById("modalRedes").style.display = "flex";
    });
}

if (btnRedesFooter) {
    btnRedesFooter.addEventListener("click", () => {
        document.getElementById("modalRedes").style.display = "flex";
    });
}

function fecharRedes() {
    document.getElementById("modalRedes").style.display = "none";
}

// Cliques de rolagem da página
const btnConheca = document.getElementById("btnConheca");
if (btnConheca) {
    btnConheca.addEventListener("click", () => {
        document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
    });
}

const btnCriadores = document.getElementById("btnCriadores");
if (btnCriadores) {
    btnCriadores.addEventListener("click", () => {
        document.getElementById("criadores").scrollIntoView({ behavior: "smooth" });
    });
}

// Fechar os modais ao clicar fora deles
window.onclick = function (e) {
    const modal = document.getElementById("modal");
    const redes = document.getElementById("modalRedes");

    if (e.target === modal) {
        fecharModal();
    }
    if (e.target === redes) {
        fecharRedes();
    }
};