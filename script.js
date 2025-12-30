// Todas as telas
const telas = document.querySelectorAll(".tela");

// Telas
const telaInicial = document.getElementById("tela-inicial");
const telaVideo1  = document.getElementById("tela-video1");
const telaFinal   = document.getElementById("tela-final");
const telaVideo2  = document.getElementById("tela-video2");

// Elementos interativos
const imgInicio = document.getElementById("imgInicio");
const imgFinal  = document.getElementById("imgFinal");

// Vídeos
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");

// Função para trocar telas com transição
function mostrarTela(tela) {
  telas.forEach(t => t.classList.remove("ativa"));
  requestAnimationFrame(() => {
    tela.classList.add("ativa");
  });
}

/* ============================
   FLUXO DA APLICAÇÃO
   ============================ */

/* Imagem inicial → Vídeo 1 */
imgInicio.addEventListener("click", () => {
  mostrarTela(telaVideo1);
  video1.currentTime = 0;
  video1.play();
});

/* ✅ Transição automática SOMENTE quando o vídeo 1 terminar */
video1.addEventListener("ended", () => {
  mostrarTela(telaFinal);
});

/* Imagem final → Vídeo 2 (pedido) */
imgFinal.addEventListener("click", () => {
  mostrarTela(telaVideo2);
  video2.currentTime = 0;
  video2.play();
});