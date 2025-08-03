let questions = [
  { q: "What is 2 + 2?", options: ["1", "3", "5", "4"], correct: 3 },
  { q: "Capital of France?", options: ["London", "Paris", "Rome", "Berlin"], correct: 1 },
  { q: "Prime minister of India?", options: ["Narendra Modi", "Barack Obama", "Yogi Aadityanath", "Rahul Gandhi"], correct: 0 },
  { q: "Who is Virat Kohli?", options: ["Actor", "Politician", "Cricketer", "Comedian"], correct: 2 }
];

let current = 0, score = 0;
function showQuestion() {
  let q = questions[current];
  $("#question").text(q.q);
  $("#options").empty();
  q.options.forEach((opt, i) => {
    $("#options").append(
      `<button class="btn btn-outline-info d-block mt-2 option-btn" data-index="${i}">${opt}</button>`
    );
  });
}
$(document).on("click", ".option-btn", function () {
  let selected = $(this).data("index");
  if (selected == questions[current].correct) {
    score++;
    $(this).addClass("btn-success");
  } else {
    $(this).addClass("btn-danger");
  }
  $(".option-btn").prop("disabled", true);
});

$("#next-btn").click(function () {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    $("#quiz-box").hide();
    $("#result-box").removeClass("d-none").text(`Your Score:${score}/${questions.length}`);
    $("#result-box").css("font-weight","bold");
  }
});

$(document).ready(showQuestion);