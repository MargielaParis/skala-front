function checkGrade() {
    var subjects = ["HTML", "CSS", "JavaScript"];
    var scores = [];
    var total = 0;

    for (var i = 0; i < subjects.length; i = i + 1) {
        var typedScore = prompt(subjects[i] + " 점수를 입력해 주세요. (0 ~ 100)");
        var score = Number(typedScore);

        if (isNaN(score)) {
            alert("올바른 숫자가 입력되지 않아 계산을 취소합니다.");
            return;
        }

        scores.push(score);
    }

    for (var j = 0; j < scores.length; j = j + 1) {
        total = total + scores[j];
    }

    var average = total / subjects.length;
    var result = "";

    if (average >= 60) {
        result = "🎉 합격입니다! 우수자로 선정되었습니다.";
    } else {
        result = "❌ 불합격입니다. 다음 기회에 힘내세요!";
    }

    var message = "====== 📊 성적 결과표 ======\n";
    message = message + "• 총점: " + total + "점\n";
    message = message + "• 평균: " + average.toFixed(1) + "점\n";
    message = message + "---------------------------\n";
    message = message + "• 결과: " + result;

    alert(message);
}
