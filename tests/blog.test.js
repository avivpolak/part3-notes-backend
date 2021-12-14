const listHelper = require("../utils/list_helper");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const helper = require("./blog_test_helpers");
const api = supertest(app);

const Blog = require("../models/blog");
const { result } = require("lodash");

test("dummy returns one", () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
});
describe("total likes", () => {
    const listWithOneBlog = [
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0,
        },
    ];
    const listWithTwoBlog = [
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Essadasdasdsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 6,
            __v: 0,
        },
        {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0,
        },
    ];
    const answer = {
        title: "Go To Statement Considered Harmful",
        author: "Essadasdasdsger W. Dijkstra",
        likes: 6,
    };
    const mostBlogs = {
        author: "Essadasdasdsger W. Dijkstra",
        blogs: 11,
    };
    const mostLikes = {
        author: "Essadasdasdsger W. Dijkstra",
        likes: 66,
    };

    beforeEach(async () => {
        await Blog.deleteMany({});

        const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog));
        const promiseArray = blogObjects.map((blog) => blog.save());
        await Promise.all(promiseArray);
    });

    test("blogs are returned as json", async () => {
        await api
            .get("/api/blogs")
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });
    test("blogs have id", async () => {
        // await api.get("/api/blogs").expect(response.body._id).toBeDefined();
        const response = await api.get("/api/notes");
        console.log(response.body);
    });

    // test("all notes are returned", async () => {
    //     const response = await api.get("/api/notes");

    //     expect(response.body).toHaveLength(helper.initialNotes.length);
    // });

    // test("a specific note is within the returned notes", async () => {
    //     const response = await api.get("/api/notes");

    //     const contents = response.body.map((r) => r.content);

    //     expect(contents).toContain("Browser can execute only Javascript");
    // });

    // test("a valid note can be added ", async () => {
    //     const newNote = {
    //         content: "async/await simplifies making async calls",
    //         important: true,
    //     };

    //     await api
    //         .post("/api/notes")
    //         .send(newNote)
    //         .expect(200)
    //         .expect("Content-Type", /application\/json/);

    //     const notesAtEnd = await helper.blogsInDb();
    //     expect(notesAtEnd).toHaveLength(helper.initialNotes.length + 1);

    //     const contents = notesAtEnd.map((n) => n.content);
    //     expect(contents).toContain("async/await simplifies making async calls");
    // });

    // test("note without content is not added", async () => {
    //     const newNote = {
    //         important: true,
    //     };

    //     await api.post("/api/notes").send(newNote).expect(400);

    //     const notesAtEnd = await helper.blogsInDb();

    //     expect(notesAtEnd).toHaveLength(helper.initialNotes.length);
    // });

    // test("a specific note can be viewed", async () => {
    //     const notesAtStart = await helper.blogsInDb();

    //     const noteToView = notesAtStart[0];

    //     const resultNote = await api
    //         .get(`/api/notes/${noteToView.id}`)
    //         .expect(200)
    //         .expect("Content-Type", /application\/json/);

    //     const processedNoteToView = JSON.parse(JSON.stringify(noteToView));

    //     expect(resultNote.body).toEqual(processedNoteToView);
    // });

    // test("a note can be deleted", async () => {
    //     const notesAtStart = await helper.blogsInDb();
    //     const noteToDelete = notesAtStart[0];

    //     await api.delete(`/api/notes/${noteToDelete.id}`).expect(204);

    //     const notesAtEnd = await helper.blogsInDb();

    //     expect(notesAtEnd).toHaveLength(helper.initialNotes.length - 1);

    //     const contents = notesAtEnd.map((r) => r.content);

    //     expect(contents).not.toContain(noteToDelete.content);
    // });

    test("when list has only one blog, equals the likes of that", () => {
        const result = listHelper.totalLikes(listWithOneBlog);
        expect(result).toBe(5);
    });
    test("search for the heighst", () => {
        const result = listHelper.favoriteBlog(listWithTwoBlog);
        expect(result).toEqual(answer);
    });
    test("search for the most blogs", () => {
        const result = listHelper.mostBlogs(listWithTwoBlog);
        expect(result).toEqual(mostBlogs);
    });
    test("search for author with the most likes", () => {
        const result = listHelper.mostLikes(listWithTwoBlog);
        expect(result).toEqual(mostLikes);
    });
    afterAll(() => {
        mongoose.connection.close();
        app.killServer();
    });
});
