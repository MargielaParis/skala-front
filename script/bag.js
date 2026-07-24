function showMyBag() {
    var myBag = [
        { name: "여권 ✈️", count: 1 },
        { name: "스마트폰 📱", count: 2 },
        { name: "지갑 💳", count: 1 }
    ];

    var resultText = "🎒 [내 가방 속 물품 목록]\n";
    resultText = resultText + "-----------------------\n";

    var i = 0;
    while (i < myBag.length) {
        var thing = myBag[i];
        resultText = resultText + "- ";
        resultText = resultText + thing.name;
        resultText = resultText + " : ";
        resultText = resultText + thing.count;
        resultText = resultText + "개\n";
        i = i + 1;
    }

    resultText = resultText + "-----------------------\n";
    resultText = resultText + "총 물품 종류: " + myBag.length + "가지";
    alert(resultText);
}
