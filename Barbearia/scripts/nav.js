// nav.js — Menu desktop + Sidebar mobile

document.addEventListener('DOMContentLoaded', () => {

    // ---- Menu desktop: garante fechado ao carregar ----
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) navMenu.classList.remove('aberto');

    // ---- Sidebar mobile ----
    const btnAbrir  = document.getElementById('btn-menu-sidebar');
    const sidebar   = document.getElementById('sidebar');
    const overlay   = document.getElementById('sidebar-overlay');
    const btnFechar = document.getElementById('sidebar-fechar');

    function abrirSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.add('aberto');
        overlay.classList.add('aberto');
        document.body.style.overflow = 'hidden';
    }

    function fecharSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.remove('aberto');
        overlay.classList.remove('aberto');
        document.body.style.overflow = '';
    }

    if (btnAbrir)  btnAbrir.addEventListener('click', abrirSidebar);
    if (btnFechar) btnFechar.addEventListener('click', fecharSidebar);
    if (overlay)   overlay.addEventListener('click', fecharSidebar);

    // Fecha ao clicar em qualquer link da sidebar
    document.querySelectorAll('#sidebar-nav a').forEach(link => {
        link.addEventListener('click', fecharSidebar);
    });

    // ---- Marca página atual como ativa (desktop e sidebar) ----
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul a, #sidebar-nav a').forEach(link => {
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('ativo');
        }
    });
});
