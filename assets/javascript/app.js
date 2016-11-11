//questions bank each has a question and 4 choices. then the correct answer and video from the embed section of youtube. I also added the auto play code at the end of the video link so it can automatic play when the page is loaded
var questions = [{
		question: "What did Tyrion Lannister demand during his trial for Joffrey Baratheon's death?",
		choices: ["He demanded to be free", "He demanded for wine and whores", "He demanded a trial by combat", "He didn't demanded, but he pleaded guilty"],
		answer: "He demanded a trial by combat",
		video: "assets/videos/trial.m4v",
		time: 1000*62
	},{
		question: "What was the main reason why Walder Frey allow the massacre at The Red Wedding?",
		choices: ["Because Rob Stark broke his promise", "The Lannister persuade him to", "He enjoys the smell of death", "He wanted to end the war"],
		answer: "Because Rob Stark broke his promise",
		video: "assets/videos/redWedding.m4v",
		time: 1000*88
	},{
		question: "What does Tyrion Lannister do?",
		choices: ["He drink and he know things", "He is a gigolo", "He is a dwarf entertainer", "He is the King of the Seven Kingdom"],
		answer: "He drink and he know things",
		video: "https://www.youtube.com/embed/55-B_EICis8?autoplay=1&cc_load_policy=1",
		time: 1000*28
	},{
		question: 'Who does Petyr Baelish "Littlefinger" love his entire life?',
		choices: ["Sansa Stark", "Lysa Tully", "Brienne of Tarth", "Catelyn Stark"],
		answer: "Catelyn Stark",
		video: "https://www.youtube.com/embed/vcvE-nS159w?autoplay=1&cc_load_policy=1",
		time: 1000*61
	},{
		question: "What is the name of Arya Stark's sword?",
		choices: ["Pointy Thing", "Killer", "Master Sword", "Needle"],
		answer: "Needle",
		video: "https://www.youtube.com/embed/Pr828tpnyII?autoplay=1&cc_load_policy=1",
		time: 1000*62
	},{
		question: 'According to Petyr Baelish "Littlefinger", chaos is what?',
		choices: ["Chaos is a gaping pit", "Chaos is a ladder", "Chaos is order", "Chaos is fair"],
		answer: "Chaos is a ladder",
		video:"https://www.youtube.com/embed/8QSZ7EqyUHc?autoplay=1&cc_load_policy=1",
		time: 1000*60
	},{
		question: "How did Eddard Stark die?",
		choices: ["He was beheaded", "He died in battle", "He died in a hunting accident", "He died by poison"],
		answer: "He was beheaded",
		video: "assets/videos/nedDeath.m4v",
		time: 1000*62
	},{
		question: "Who was the first to stab Jon Snow?",
		choices: ["Bowen Marsh", "Othell Yarwyck", "Alliser Thorne", "Olly the Steward"],
		answer: "Alliser Thorne",
		video: "assets/videos/jonDeath.m4v",
		time: 1000*82
	},{
		question: "According to Cercie Lannister, what is power?",
		choices: ["Knowledge is power", "Power is power", "Money is power", "Work over time is power"],
		answer: "Power is power",
		video: "https://www.youtube.com/embed/6Pvlylkpv6A?autoplay=1&cc_load_policy=1",
		time: 1000*41
	},{
		question: 'Why does Hodor only say "Hodor"?',
		choices: ["He was born with saying Hodor", "He was punished into only knowing Hodor", "He was suppose to hold the door", "He has been pretending this whole time"],
		answer: "He was suppose to hold the door",
		video: "https://www.youtube.com/embed/wWH8QGgixfI?autoplay=1&cc_load_policy=1",
		time: 1000*63
	}];

//keeping track on which is the next question and keeping track of the number of correct answers
var whichQ = 0;
var rightCount = 0;
var unanswered = 0;
var alertCount=0;
var qPageTime = 30;
var pageCountDown;

$("document").ready(function(){


	//display count down on the question page and if time runs out automaticly go to answer page and plus 1 to unanswered
	function qPageCount() {
		console.log(qPageTime);
		$("#elem").text("Time Remaining: "+qPageTime);
		qPageTime--;
		if(qPageTime<-1){
			unanswered++;
			$("#rightWrong").text("You took to long. The answer is: ");
			$(".qPage").hide();
			$(".aPage").show();
			$("#video").attr("src",questions[whichQ].video);
			$("#elem").text("Time Remaining: "+30);
			clearTimeout(pageCountDown);
			qPageTime = 29;
			pageCountDown = setTimeout(toQ, questions[whichQ].time);
		};
	};

	//button to go back to qPage for the next question
	function toQ(){
		whichQ++;
		pageCountDown = setInterval( qPageCount,1000);
		if(whichQ<questions.length){
			nextQ();
			$(".aPage").hide();
			$(".qPage").show();
		} else {
			$(".aPage").hide();
			$(".gameOver").show();
			clearTimeout(pageCountDown);
			$("#right").text("You got "+rightCount+" out of "+questions.length+" correct.");
			$("#unanswered").text("You got "+unanswered+" out of "+questions.length+" unanswered answered.")
			$("#wrong").text("You got "+(10-rightCount-unanswered)+" out of "+questions.length+" wrong.")
		}
	};

	//starting the game
	$(".btn-danger").on("click",function(){
		if(alertCount==0){
			alert("If you are planning to watch or have not caught up with Game of Thrones. This trivia will contain spoilers. Abort if you do not want to continue.");
			alertCount++;
		} else if(alertCount==1){
			alert("OH and this trivia will contain some nudity, gore, lots of people dying, and maybe make you emotional. Abort if you can't handle this.");
			alertCount++;
		} else if(alertCount==2){
			alert("OH and this trivia will be about 15 minutes.");
			alertCount++;
		} else if(alertCount==3){
			alert("Last chance to abort. After this they will be no more alerts.");
			alertCount++;
		} else if(alertCount==4){
			alert("LOL one more ;). Let the Game of Trivia Begin")
			$(".sPage").hide();
			$(".qPage").show();
			pageCountDown = setInterval( qPageCount,1000);
		}//closing if/else
	});//closing starting game button

	//changing the background color whenever the mouse is hovering
	$(".choice").hover(
		function(){
			$(this).css("background-color","green");
		},//closing to green

		function(){
			$(this).css("background-color","gray");
		}//closing to gray
	);//closing hover

	//chaning the mouse cursor to pointer when it is over the choices
	$(".choice").css('cursor','pointer');

	//function to adding/change questions and answers
	function nextQ() {
		$("#newQ").text(questions[whichQ].question);
		$("#rAnswer").text(questions[whichQ].answer);
		for(var i=0; i<questions[whichQ].question.length; i++){
			$('[data-value='+i+']').text(questions[whichQ].choices[i]);
		}
	};//closing nextQ

	nextQ();


	//showing a video on the answer page if the answer was right or wrong
	$(".choice").on("click",function(){
		var num = $(this).data('value');
		if(questions[whichQ].choices[num]==questions[whichQ].answer){
			$("#rightWrong").text("You are correct. The answer is: ");
			rightCount++;
		} else {
			$("#rightWrong").text("You are wrong. The answer is: ");
		}
		$(".qPage").hide();
		$(".aPage").show();
		$("#video").attr("src",questions[whichQ].video);
		clearTimeout(pageCountDown);
		pageCountDown = setTimeout(toQ, questions[whichQ].time);
		$("#elem").text("Time Remaining: "+30);
		qPageTime = 29;
	});//closing choice button

	//restart the trivia questions again starting with the first question
	$(".btn-primary").on("click",function(){
		whichQ = 0;
		rightCount = 0;
		unanswered = 0;
		pageCountDown = setInterval( qPageCount,1000);
		$(".gameOver").hide();
		nextQ();
		$(".qPage").show();
	});


});