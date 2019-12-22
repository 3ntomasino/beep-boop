$(document).ready(function()  {
  $("form").submit(function(event)  {
    event.preventDefault();

    var num = parseInt($("input#number")).val();

    function robotTalk(num) {
      var stringOfNums = ('');
      for (var i = 0; i <= num; i++) {
        stringOfNums += i + (',');
      }

      var arrayOfNums = stringOfNums.split(',');

      for (var i = 0; i < arrayOfNums.length; i++) {
        var singleNum = arrayOfNums[i];

        if (singleNum.includes(1) && singleNum.includes(2)) {
          singleNum = "Boop";
      } else if (singleNum.includes(1) && singleNum.includes(3)) {
        singleNum = "I'm sorry, Dave. I'm afraid I can't do that.";
      }

      arrayOfNums.forEach(function(element) {
        $("ul#result").append("<li>" + element + "</li>");
      });

    }

  });
});
