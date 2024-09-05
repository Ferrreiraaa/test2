function toggleFish(fishElement) {
    const id = fishElement.id;
    fishElement.classList.toggle('captured');

    // Atualiza o estado no armazenamento local
    let captured = JSON.parse(localStorage.getItem('capturedFishes')) || {};
    if (fishElement.classList.contains('captured')) {
        captured[id] = true;
    } else {
        delete captured[id];
    }
    localStorage.setItem('capturedFishes', JSON.stringify(captured));
}

// Função para carregar o estado dos peixes ao iniciar
function loadFishes() {
    const captured = JSON.parse(localStorage.getItem('capturedFishes')) || {};
    for (const id in captured) {
        if (captured[id]) {
            const fishElement = document.getElementById(id);
            if (fishElement) {
                fishElement.classList.add('captured');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', loadFishes);
