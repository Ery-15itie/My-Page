document.addEventListener('DOMContentLoaded', () => {
    // --- 1. タイピングアニメーション ---
    const roomTitle = document.querySelector('.room-title');
    if (roomTitle) { // roomTitle要素が存在するか確認
        const textToType = roomTitle.textContent;
        roomTitle.textContent = ''; // 初期表示は空にする
        
        let charIndex = 0;
        const typingSpeed = 150; // 1文字表示する間隔（ミリ秒）

        function typeWriter() {
            if (charIndex < textToType.length) {
                roomTitle.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            }
        }

        setTimeout(() => {
            roomTitle.style.opacity = '1'; // CSSでopacity:0にしている場合、表示
            typeWriter();
        }, 500); // 0.5秒後にタイピング開始
    }

});
