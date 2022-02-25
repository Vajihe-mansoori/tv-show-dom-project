window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const jsonData = async () => {
  try {
    const response = await fetch("data.json");
    const info = await response.json();
    jason_data(info);
  } catch (err) {
    return err;
  }
};
jsonData();

const jason_data = (info) => {
  let movie = document.getElementById("movies-content");
  for (const x of info) {
    let movie_box = document.createElement("div");
    movie_box.setAttribute("class", `${x.name}`);
    movie_box.classList.add("h-movie", "movie-box");
    movie.append(movie_box);

    let img_movie = document.createElement("img");
    img_movie.setAttribute("class", "movie-box-img");
    img_movie.src = x.image;
    movie_box.append(img_movie);

    let box_text = document.createElement("div");
    box_text.setAttribute("class", "box-text");
    movie_box.append(box_text);

    let title = document.createElement("h2");
    title.setAttribute("class", "movies-title");
    title.textContent = x.name;
    box_text.append(title);

    let movie_type = document.createElement("span");
    movie_type.setAttribute("class", "movie-type");
    movie_type.textContent = x.Genre;
    box_text.append(movie_type);

    let movie_rating = document.createElement("h3");
    movie_rating.setAttribute("class", "movie-type");
    movie_rating.textContent = x.rating;
    box_text.append(movie_rating);

    let allDiv = document.querySelectorAll(".movie-box");
    let input = document.getElementById("the-filter");
    input.addEventListener("keyup", () => {
      let value = input.value.toUpperCase();
      for (let x = 0; x <= allDiv.length - 1; x++) {
        let search = allDiv[x].className;
        if (search.toUpperCase().indexOf(value) > -1) {
          allDiv[x].style.display = "";
        } else {
          allDiv[x].style.display = "none";
        }
      }
    });

    const show_movie_container = document.getElementById(
      "show-movie-container"
    );
    const all_container = document.querySelector(".all-container");
    const search_box = document.querySelector(".search-box");
    const search_menu = document.querySelector(".search-menu");
    movie_box.addEventListener("click", () => {
      all_container.style.display = "none";
      search_box.style.display = "none";
      search_menu.style.display = "block";
      show_movie_container.classList.remove("show-movie-container");
      let search = movie_box.className;
      if (search.indexOf("Game Of Thrones") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/82/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("The Vampire Diaries") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/63/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("Dark") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/17861/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("The Nevers") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/37700/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("Sherlock") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/335/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("The Sopranos") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/527/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("Planet Earth II") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/22036/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("True Detective") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/5/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("Fresh Prince") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/582/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("The Wire") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/179/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("Mythbusters") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/379/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      } else if (search.indexOf("Scrapheap Challenge") > -1) {
        const getAPI = async () => {
          try {
            const response = await fetch(
              "https://api.tvmaze.com/shows/4729/episodes"
            );
            const data = await response.json();
            data_call(data);
          } catch (err) {
            return err;
          }
        };
        getAPI();
      }
    });

    const data_call = (data) => {
      let search_menu = document.getElementById("search-menu");
      let all_option = document.createElement("Option");
      all_option.textContent = "All Episodes";
      all_option.setAttribute("class", "option-menu");
      search_menu.append(all_option);

      let movie = document.getElementById("movie-content");
      for (const x of data) {
        let movie_box = document.createElement("div");
        movie.append(movie_box);
        movie_box.setAttribute("class", `${x.name}`);
        movie_box.classList.add("x-movie-box", "s-container", "h-container");

        let img_movie = document.createElement("img");
        if (x.image === null) {
          img_movie.src =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmO7XNXyqyin8_OmLk6MKHUwARqcWAY70tkw&usqp=CAU";
        } else {
          img_movie.src = x.image.medium;
        }

        movie_box.append(img_movie);
        img_movie.setAttribute("class", "movies-box-img");

        let box_text = document.createElement("div");
        movie_box.append(box_text);
        box_text.setAttribute("class", "x-box_text");

        let season = x.season;
        let number = x.number;
        let text_option = `S0${season}-E0${number}`;
        if (number >= 10) {
          text_option = `S0${x.season}-E${x.number}`;
        }

        box_text.innerHTML = `<h2  class="movie-title">${text_option} ${x.name}</h2> <a href= ${x.url} class="watch-btn play-btn link-epi"><i class="bx bx-right-arrow"></i></a> `;

        let summary_box = document.createElement("div");
        movie_box.append(summary_box);
        summary_box.setAttribute("class", "summary_box");
        let summary_movie = document.createElement("p");
        summary_movie.innerHTML = x.summary;
        summary_box.append(summary_movie);

        let option_menu = document.createElement("option");
        option_menu.textContent = `${text_option} ${x.name} `;
        option_menu.setAttribute("class", "option-menu");
        search_menu.append(option_menu);

        search_menu.addEventListener("change", (e) => {
          let allDiv = document.querySelectorAll(".s-container");
          let value = e.target.value;
          let value_option = value.substring(8);
          for (let x = 0; x <= allDiv.length - 1; x++) {
            let search = allDiv[x].className;
            if (search.indexOf(value_option) > -1 || value === "All Episodes") {
              allDiv[x].style.display = "";
            } else {
              allDiv[x].style.display = "none";
            }
          }
        });
      }
    };
  }
};
