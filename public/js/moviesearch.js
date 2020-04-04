$(document).ready(function () {
  // const movie needs to be read in from form upon submit button????? also we must add a + between words if title is more than 1 word
  $('#movie-search').on('click', function (event) {
    event.preventDefault();
    let movie = $('#movie-input').val().trim();
    //movie = queryFormatter(movie);

    var queryURL =
      'https://api.themoviedb.org/3/movie/550?api_key=b4cf32bed876d97cc4ef65987205c624';
    var queryURL2 =
      'https://api.themoviedb.org/3/movie/550/credits?api_key=b4cf32bed876d97cc4ef65987205c624';
    var queryURL3 =
      'https://api.themoviedb.org/3/search/movie?api_key=b4cf32bed876d97cc4ef65987205c624&query=' +
      movie;

    $.ajax({
      url: queryURL3,
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      var movie1 = response.results[0].title;
      console.log(movie1);
      var movie2 = response.results[1].title;
      console.log(movie2);
      var movie3 = response.results[2].title;
      console.log(movie3);
      //userpick must be assigned when client confirms which movie was correct one, currently its hardcoded
      const userpick = response.results[0].id;
      getID(userpick);
    });
    function getID(userpick) {
      var queryURL2 =
        'https://api.themoviedb.org/3/movie/' +
        userpick +
        '/credits?api_key=b4cf32bed876d97cc4ef65987205c624';
      $.ajax({ url: queryURL2, method: 'GET' }).then(function (credits) {
        console.log(credits);
        var role1 = credits.cast[0].character;
        var actor1 = credits.cast[0].name;
        console.log(role1);
        console.log(actor1);

        var role2 = credits.cast[1].character;
        var actor2 = credits.cast[1].name;
        console.log(role2);
        console.log(actor2);

        var role3 = credits.cast[2].character;
        var actor3 = credits.cast[2].name;
        console.log(role3);
        console.log(actor3);

        var role4 = credits.cast[3].character;
        var actor4 = credits.cast[3].name;
        console.log(role4);
        console.log(actor4);
      });
    }
  });

  //function that will run to make the search-term palatable for query search
  //unction queryFormatter(movieTitle) {
  //  let formatted = movieTitle.split(' ').join('+');
  //  return formatted;
  //}
});
