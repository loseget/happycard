// 模拟图片卡牌库，您需要替换为实际的图片文件名
const imageCards = ['image1.jpg', 'image2.jpg', /* ... 其他图片文件名 ... */];

const drawButton = document.getElementById('drawButton');
const cardTypeElement = document.getElementById('cardType');
const cardContentElement = document.getElementById('cardContent');
const cardImageElement = document.getElementById('cardImage');
const happinessActionElement = document.getElementById('happinessAction');
const recordInput = document.getElementById('recordInput');
const saveRecordButton = document.getElementById('saveRecord');
const recordList = document.getElementById('recordList');

drawButton.addEventListener('click', () => {
    // 随机选择一张图片卡牌
    const randomIndex = Math.floor(Math.random() * imageCards.length);
    const cardImage = imageCards[randomIndex];

    // 显示卡牌信息
    cardTypeElement.textContent = `抽到的卡牌类型: 图片卡`;
    cardContentElement.textContent = `卡牌图片: ${cardImage}`;

    // 显示图片
    cardImageElement.src = `images/${cardImage}`;
    cardImageElement.style.display = 'block';

    // 这里可以根据图片添加对应的幸福行动，暂时用通用提示
    const action = '观察图片，感受其中的幸福氛围';
    happinessActionElement.textContent = `幸福行动: ${action}`;
});

saveRecordButton.addEventListener('click', () => {
    const record = recordInput.value;
    if (record) {
        const listItem = document.createElement('li');
        listItem.textContent = record;
        recordList.appendChild(listItem);
        recordInput.value = '';
    }
});