// 更新图片卡牌库，包含所有 7 张图片
const imageCards = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg'];

// 定义幸福名人名言数组
const happinessQuotes = [
    "幸福的秘诀是：让你的兴趣尽量的扩大，让你对人对物的反应，尽量地倾向于友善。 —— 罗素",
    "人类的一切努力的目的在于获得幸福。 —— 欧文",
    "幸福不在于拥有金钱，而在于获得成就时的喜悦以及产生创造力的激情。 —— 罗斯福",
    "真正的幸福只有当你真实地认识到人生的价值时，才能体会到。 —— 穆尼尔·纳素夫",
    "幸福是勇气的一种形式。 —— 杰克逊",
    "幸福并不取决于外在的条件，而是取决于内在的状态。 —— 奥普拉·温弗瑞",
    "幸福的家庭都是相似的；不幸的家庭各有各的不幸。 —— 列夫·托尔斯泰",
    "幸福的人由希望援助。 —— 米南德",
    "最幸福的似乎是那些并无特别原因而快乐的人，他们仅仅因快乐而快乐。 —— 威廉·拉尔夫·英奇",
    "幸福的首要条件在于健康。 —— 柯蒂斯",
    "幸福来自成就感，来自富有创造力的工作。 —— 富兰克林·D·罗斯福",
    "幸福存在于一个人真正的工作中。 —— 奥黛丽·赫本",
    "幸福是灵魂的一种香味，是一颗歌唱的心的和声。 —— 罗曼·罗兰",
    "只有认为自己幸福的人才能享受到幸福。 —— 塞·约翰逊",
    "幸福的真谛是：对自己满意，对别人宽容。 —— 未知",
    "幸福是一种心态，不是一种状态。 —— 玛莎·华盛顿",
    "幸福是生命的意义和使命，是人类存在的终极目标。 —— 亚里士多德",
    "幸福没有明天，也没有昨天，它不怀念过去，也不向往未来；它只有现在。 —— 屠格涅夫",
    "一个人成为他自己了，那就是达到了幸福的顶点。 —— 德西德里乌斯·伊拉斯谟",
    "幸福的生活存在于心绪的宁静之中。 —— 西塞罗",
    "幸福不在于事情，而在于我们自己。 —— 理查德·瓦格纳",
    "幸福是一种选择，而不是一种结果。 —— 未知",
    "快乐不是一件自我存在的东西，它仅是与其他不快乐事情的一个相对比照。 —— 威廉·萨默塞特·毛姆",
    "幸福是勇气的一种形式。 —— 辛尼加",
    "幸福的最大秘诀是：对任何事情都尽量从乐观的方面去想。 —— 佚名",
    "幸福是一种持续的状态，而不是一个转瞬即逝的时刻。 —— 米哈里·契克森米哈赖",
    "幸福是一个旅程，而不是终点站。 —— 玛格丽特·米切尔",
    "幸福的关键不在于找到一个完美的人，而在于学会用完美的眼光欣赏那个不完美的人。 —— 佚名",
    "幸福并不遥远，它就在我们身边，在我们每一个行动和每一个思想中。 —— 达赖喇嘛",
    "幸福是一种内心的稳定。 —— 杨绛"
];

// 定义幸福行动库
const happinessActions = [
    "给一位许久未联系的朋友发一条暖心的消息",
    "为自己做一顿丰盛的早餐",
    "在阳台上晒晒太阳，放松身心",
    "整理一下房间，扔掉不需要的物品",
    "学习一首新的歌曲并唱出来",
    "去户外拍一些美丽的风景照片",
    "做一组简单的瑜伽动作，舒展身体",
    "给家里的绿植浇浇水、修剪枝叶",
    "尝试一种新的手工制作，如编织或陶艺",
    "看一部喜剧电影，开怀大笑一场"
];


const drawButton = document.getElementById('drawButton');
const cardTypeElement = document.getElementById('cardType');
const cardContentElement = document.getElementById('cardContent');
const cardImageElement = document.getElementById('cardImage');
const happinessActionElement = document.getElementById('happinessAction');
const recordInput = document.getElementById('recordInput');
const saveRecordButton = document.getElementById('saveRecord');
const recordList = document.getElementById('recordList');

// ... existing code ...
// ... existing code ...

drawButton.addEventListener('click', () => {
    // 随机选择一张图片卡牌
    const randomIndex = Math.floor(Math.random() * imageCards.length);
    const cardImage = imageCards[randomIndex];

    // 随机选择一句幸福名人名言
    const randomQuoteIndex = Math.floor(Math.random() * happinessQuotes.length);
    const randomQuote = happinessQuotes[randomQuoteIndex];

    // 显示卡牌类型和名人名言
    cardTypeElement.textContent = `抽到的卡牌类型: 图片卡`;
    cardContentElement.textContent = randomQuote;

    // 显示图片并添加飞出来的动画
    cardImageElement.src = `images/${cardImage}`;
    cardImageElement.style.display = 'block';
    cardImageElement.classList.add('card-fly-in');

    // 移除动画类，以便下次点击可以再次触发
    cardImageElement.addEventListener('animationend', () => {
        cardImageElement.classList.remove('card-fly-in');
    }, { once: true });

    // 触发庆祝动画
    createConfetti(50);

    // 移除动态创建保存按钮的代码

    // 随机选择一个幸福行动
    const randomActionIndex = Math.floor(Math.random() * happinessActions.length);
    const randomAction = happinessActions[randomActionIndex];
    happinessActionElement.textContent = `幸福行动: ${randomAction}`;
});

// ... existing code ...

// ... existing code ...

// ... existing code ...

// 创建庆祝花的函数
function createConfetti(numConfetti) {
    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();
        document.body.appendChild(confetti);

        // 动画结束后移除元素
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

// ... existing code ...

// 添加一个新的函数用于保存图片
// ... existing code ...

// 添加一个新的函数用于保存图片
function saveAsImage() {
    // 直接使用原始的 cardResult 容器
    const targetElement = document.getElementById('cardResult');

    if (targetElement) {
        html2canvas(targetElement).then(canvas => {
            // 创建下载链接
            const link = document.createElement('a');
            link.download = 'happiness_card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(error => {
            console.error('保存图片时出错:', error);
            alert('保存图片时出错，请稍后重试。');
        });
    } else {
        console.error('未找到目标元素');
        alert('未找到要保存的内容，请稍后重试。');
    }
}

// ... existing code ...
// ... existing code ...
// 获取随机颜色的函数
function getRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd700', '#9b59b6', '#3498db'];
    return colors[Math.floor(Math.random() * colors.length)];
}

saveRecordButton.addEventListener('click', () => {
    const record = recordInput.value;
    if (record) {
        const listItem = document.createElement('li');
        listItem.textContent = record;
        recordList.appendChild(listItem);
        recordInput.value = '';
    }
});