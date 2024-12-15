const newsData = {
    1: { src: './img/news1.jpg', title: 'News 1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    2: { src: './img/news2.jpg', title: 'News 2', text: 'tempora quod sunt consectetur sint, soluta possimus similique harum fugit distinctio corrupti magnam ullam?' },
    3: { src: './img/news3.jpg', title: 'News 3', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempore ' },
    4: { src: './img/news4.jpg', title: 'News 4', text: 'tempore eligendi eaque dolor ab voluptas, tempora quod sunt consectetur sint' },
    5: { src: './img/news5.jpg', title: 'News 5', text: 'eaque dolor ab voluptas, tempora quod sunt consectetur sint, soluta possimus' },
};
function news(number) {
    const newsItem = newsData[number];
    if (newsItem) {
        $(".news-img").attr('src', newsItem.src);
        $(".news-h5").text(newsItem.title);
        $(".news-p").text(newsItem.text);
    }
}