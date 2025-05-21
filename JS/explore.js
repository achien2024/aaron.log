function filterArticles(query) {
    const articles = document.querySelectorAll('.read_button');
    query = query.toLowerCase();

    articles.forEach(article => {
        const title = article.querySelector('.title').textContent.toLowerCase();
        if (title.includes(query)) {
            article.style.display = 'inline';
        } else {
            article.style.display = 'none';
        }
    });
}
