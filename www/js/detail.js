var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var url = new URL(window.location);
        console.log(window.location);
        console.log(url);
        var index = url.search.substring(7);
        var movie = trailers.getMovie(index);

        document.title = movie.title;
        var titleTag = document.getElementsByTagName("title");
        titleTag.innerHTML = movie.title;

        var title = document.getElementById("title");
        title.innerHTML = movie.title;

        var poster = document.getElementById("poster");
        poster.src = movie.poster;
        poster.alt = "Poster " + movie.title;

        var actors = document.getElementById("actors");
        movie.actors.forEach(function (actor) {
            var li = document.createElement("li");
            li.innerHTML = actor;
            actors.appendChild(li);
        });

        var genres = document.getElementById("genres");
        movie.genre.forEach(function (genre) {
            var li = document.createElement("li");
            li.innerHTML = genre;
            genres.appendChild(li);
        });
    }

};

app.initialize();