function trocarTab(nome, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + nome).classList.add('active');
    if (btn) btn.classList.add('active');
  }
  function trocarTabEIr(nome) {
    const mapa = { dassu: 0, branco: 1, grandes: 2 };
    const btns = document.querySelectorAll('.tab-btn');
    trocarTab(nome, btns[mapa[nome]]);
    ir('marcas');
  }
  function ir(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function abrirModal() { document.getElementById('modal').classList.add('open'); }
  function fecharModal() { document.getElementById('modal').classList.remove('open'); }
  function fecharModalFora(e) { if (e.target === document.getElementById('modal')) fecharModal(); }