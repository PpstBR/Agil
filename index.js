"use strict";
const hw = "A Plataforma Imobiliária + Ágil do 🇧🇷";
const link = "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F05%2F05%2F21%2FLogo-267540_805942_215656330_1781493124.jpg";
const switcher = document.querySelector('.btns');
switcher === null || switcher === void 0 ? void 0 : switcher.addEventListener('click', function () {
    var _a, _b;
    const spech = document.getElementById("spech");
    const p = document.createElement("h1");
    p.textContent = hw;
    p.style.fontFamily = "Times New Roman";
    p.style.color = "white";
    spech === null || spech === void 0 ? void 0 : spech.appendChild(p);
    const anchor = document.getElementById("anchor");
    const a = document.createElement("a");
    a.href = "https://agil.net/";
    a.target = "_blank";
    a.textContent = "Veja mais em nosso site";
    a.style.color = "orange";
    a.style.position = "relative";
    a.style.left = "170px";
    anchor === null || anchor === void 0 ? void 0 : anchor.appendChild(a);
    const agil = document.getElementById("agil");
    const im = document.createElement("img");
    im.src = link;
    im.alt = "logo";
    im.style.position = "relative";
    im.style.left = "55px";
    im.style.width = "390px";
    im.style.height = "390px";
    im.style.objectFit = "none";
    agil === null || agil === void 0 ? void 0 : agil.appendChild(im);
    const button = (_a = document.getElementById("button")) === null || _a === void 0 ? void 0 : _a.remove();
    const spech2 = (_b = document.getElementById("imo")) === null || _b === void 0 ? void 0 : _b.remove();
});
