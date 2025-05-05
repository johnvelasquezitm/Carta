
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('openBtn');
    const resetBtn = document.getElementById('resetBtn');
    const letterContent = document.getElementById('letterContent');
    const heartsContainer = document.getElementById('heartsContainer');
    
    openBtn.addEventListener('click', () => {
        envelope.classList.add('open');
        createFloatingHearts();
    });
    
    resetBtn.addEventListener('click', () => {
        envelope.classList.remove('open');
        clearHearts();
    });
    
    function createFloatingHearts() {
        clearHearts();
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                heart.style.animationDelay = (Math.random() * 2) + 's';
                heartsContainer.appendChild(heart);
            }, i * 200);
        }
    }
    
    function clearHearts() {
        heartsContainer.innerHTML = '';
    }