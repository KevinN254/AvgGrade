$(document).ready(function()
{

	function printToPage (msg)
	{
		var message = "<p>" + msg + "<\p>";
		$("#mainSection").append (message);
	}

	// list of quiz scores
	var scores = [46, 41, 34, 33, 30, 30, 28, 27, 25, 21];
	var totalScore = 0;
	// this function takes in a scores array and base or max score
	// it iterates over all scores determining the grade, adds all the scores and returns 
	// the average of all scores
	function determineAverage(scoresArray, maxScore)
	{
		
		//finding the sum for the scores
		for(var i = 0; i<scoresArray.length;i++){

		totalScore += (Math.round(scoresArray[i]/maxScore * 100));

		}
		printToPage("There are " + scores.length + " records of grades.")
		printToPage ( "The total sum of all scores is " + totalScore);
		
		//finding the average
		var avg = (Math.round(totalScore/scoresArray.length));

		return avg;

		

	}

	printToPage ("The average result is " +  determineAverage(scores, 55) + "%");

});