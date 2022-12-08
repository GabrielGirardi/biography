$(document).ready(function() {
    let searchBar = $('.search-bar');
    let searchButton = $('.icon-search');
    let filter = $('.filter-box');

    searchButton.click(function() {
        searchBar.toggleClass('active');
        filter.toggleClass('active');

        $('header').click(function() {
            if(searchBar.is(':focus')) {
                filter.addClass('active');
            } else {
                filter.removeClass('active');
            }
        });
    });
});



function myFunction() {
      // Declare variables
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById('search-bar');
      filter = input.value.toUpperCase();
      ul = document.getElementById("myUL");
      li = ul.getElementsByTagName('li');
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }