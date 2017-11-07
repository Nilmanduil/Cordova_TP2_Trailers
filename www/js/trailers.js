var trailers = {
    getMovies: function () {
        const url = "http://10.1.0.177:8080/trailers";
        var result = [];

        const req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.send(null);

        if (req.status === 200) {
            result = JSON.parse(req.responseText);

            var storage = window.localStorage;
            storage.setItem("movies", req.responseText);
        } else {
            throw new Error("Can't reach server, error " + req.status);
        }

        return result;
    },

    getMovie: function (index) {
        var storage = window.localStorage;
        var movies = (storage.getItem("movies") ? JSON.parse(storage.getItem("movies")) : this.getMovies());

        return movies[index];
    }
}