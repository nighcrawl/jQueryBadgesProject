$(function() {

  // your code will go here
  jQuery.ajax({
    url: "https://www.codeschool.com/users/nighcrawl.json",
    dataType: "jsonp",
    success: function(response) {
      console.log(response.courses.completed);
      jQuery.each(response.courses.completed, function(i, course) {
        jQuery("#badges").append("<div class='course'><h3>" + course.title + "</h3><img src='" + course.badge + "' title='" + course.title + "' /><a href='" + course.url + "' target='_blank' class='btn btn-primary'>See Course</a></div>");
      });
    }
  });
});
