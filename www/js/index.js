/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var movies = trailers.getMovies();
        var moviesList = document.getElementById("movies");

        var i = 1;
        movies.forEach(function (movie) {
            var li = document.createElement("li");
            li.id = "movie-" + i;
            moviesList.appendChild(li);

            var link = document.createElement("a");
            link.href = "detail.html?index=" + (i - 1);
            li.appendChild(link);

            var image = document.createElement("img");
            image.src = movie.poster;
            link.appendChild(image);

            var title = document.createElement("span");
            title.innerHTML = movie.title;
            link.appendChild(title);

            i++;
        });
    }

};

app.initialize();