const btn = document.getElementById('btn');
const result = document.getElementById('result');
const message = document.getElementById('message');
const sound = new Audio('sounds/omikuji.mp3');

const fortunes = ['大吉 🎉', '中吉 😊', '小吉 🙂', '末吉 😌', '凶 😱'];
const messages = {
    '大吉 🎉': '今日は何をやってもうまくいきそう！',
    '中吉 😊': '悪くない日。ほどよく楽しもう！',
    '小吉 🙂': '地味だけど、意外と大事な日かも。',
    '末吉 😌': '何事も控えめが吉。落ち着いてね。',
    '凶 😱': 'こんな日もあるさ。明日に期待！'
};

btn.addEventListener('click', () => {
    result.classList.remove('show');
    void result.offsetWidth; // 強制再描画

    // 一時的な表示
    result.textContent = 'おみくじを引いています...';
    result.style.opacity = '1';
    result.style.transform = 'none';
    message.textContent = ''; // メッセージを一旦空に

    sound.currentTime = 0;
    sound.play();

    sound.addEventListener('ended', () => {
        const random = Math.floor(Math.random() * fortunes.length);
        const fortune = fortunes[random];

        result.textContent = fortune;
        message.textContent = messages[fortune]; // メッセージをセット

        // フェードイン演出を追加
        result.classList.remove('show');
        void result.offsetWidth; // 再描画でアニメーション再適用
        result.classList.add('show');
        
        message.classList.remove('show');
        void message.offsetWidth; // 強制再描画
        message.classList.add('show');
    }, { once: true });
});
