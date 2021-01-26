　function janken(myhand) {
	var hand = [ "ぐー", "ちょき", "ぱー" ];
	var aihand = Math.floor(3*Math.random());
	var result = "";
	if( myhand == 0 ) {
		if( aihand == 0 ) {
			result = "引き分け";
		} else if( aihand == 1 ) {
			result = "勝ち！！";
		} else {
			result = "負け...";
        }
    }
    else if( myhand == 1 ) {
        if( aihand == 0 ) {
            result = "負け...";
        } else if( aihand == 1 ) {
            result = "引き分け";
        } else {
            result = "勝ち！！";
        }
    }
     else {
        if( aihand ==0 ) {
            result = "勝ち！！";
        } else if( aihand == 1 ) {
            result = "負け...";
        } else {
            result = "引き分け"
        }
     }
alert("自分の手："+hand[myhand]+"\n相手の手："+hand[aihand]+"\n結果："+result);
 }
