$(document).ready(function() {
    //	Set variable to equal max number of correct answers.
    var winner = 14;

    // Variable to hold correct answers, incorrect answer, unanswered questions.
    var correct;
    var incorrect;
    var unanswered;


    //  Set our number counter to 120.
    var number = 20;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //	hides the question on page load. Currently the test div isn't hidden when page loads. 
    $("#question").hide();

    // 	id has be select so when user clicks button the start game button hides, count down timer begins and, questions appear.
    $("button").click(function() {
    	intervalId = setInterval(decrement, 1000);
        //  start button hides
        $("#starter").hide();
        //	test div shows
        $("#question").show();
    });

    //  The decrement function.
    function decrement() {
        
        //  Decrease number by one.
        number--;

        //  Show the number in the #timer tag.
        $(".timer").html("<h2>" + number + "</h2>");


        //  Once number hits zero...
        if (number <= 0) {

            // 	run the stop function.
            stop();

            //  displays score. 
            alert("Time Up!");

            //	hide questions and then show results
            $(".timer").hide();
            $("#question").hide();
            $("#results").show();

        }
    }



//$('.myCheckbox').click(function() {
//$(this).siblings('input:checkbox').prop('checked', false);
//});


//Every checkboxes in the page
$('.selectme input:checkbox').click(function() {
    $('.selectme input:checkbox').not(this).prop('checked', false);
});                   

    //render the value of 
    function getAnswer() {

        var renderValue = $(this).attr('data-answer').val();

        if (renderValue = pass) {

            correct++;

            var resultDiv = $("<div class='results'>");

            var correctAnswer = correct++;

            var pOne = $("<p>").html(correctAnswer);

        } else if (renderValue = fail) {

            incorrect++;

            var incorrectAnswer = incorrect++;

            var pTwo = $("<p>").html(incorrect);

        } else {

            unanswered++;

            var unansweredQuestion = unanswered++;

            var Three = $("<p>").html("unanswered" + unanswered);
        }

        resultDiv.prepend(pOne);
        resultDiv.prepend(pTwo);
        resultDiv.prepend(pThree);

        $("#results").prepend(resultDiv);

    };
    //  The stop function
    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
    }
});
