const dummy = (blogs) => {
    return 1;
};
const totalLikes = (blogs) => {
    let sum = 0;
    for (let blog of blogs) {
        sum += blog.likes;
    }
    return sum;
};
const favoriteBlog = (blogs) => {
    arrayofLikes = [];
    for (const blog of blogs) {
        arrayofLikes.push(parseInt(blog.likes));
    }
    let highets = Math.max(...arrayofLikes);
    for (let blog of blogs) {
        let { title, author, likes } = blog;
        if (blog.likes === highets) {
            return { title, author, likes };
        }
    }
};
const mostBlogs = (blogs) => {
    let authors = {};
    for (const blog of blogs) {
        if (authors[blog.author]) authors[blog.author] += 1;
        else {
            authors[blog.author] = 1;
        }
    }
    let arrayofblog = [];
    for (const author in authors) {
        arrayofblog.push(parseInt(authors[author]));
    }
    let highets = Math.max(...arrayofblog);
    for (let author in authors) {
        if (authors[author] === highets) {
            return { author, blogs: highets };
        }
    }
};
const mostLikes = (blogs) => {
    let authors = {};
    for (const blog of blogs) {
        if (authors[blog.author]) authors[blog.author] += blog.likes;
        else {
            authors[blog.author] = blog.likes;
        }
    }
    let arrayofblog = [];
    for (const author in authors) {
        arrayofblog.push(parseInt(authors[author]));
    }
    let highets = Math.max(...arrayofblog);
    for (let author in authors) {
        if (authors[author] === highets) {
            return { author, likes: highets };
        }
    }
};

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes,
};
