let weight; //変数 体重
let time; //変数 時間
let par; //変数 度数

//関数作成
function func() {

    weight = document.getElementById('weight').value; //体重の値を取得
    time = document.getElementById('time').value; //時間の値を取得
    par = document.getElementById('par').value; //度数の値を取得

    //入力した値が0以上の場合計算処理する
    if (parseFloat(weight) > 0 && parseFloat(time) > 0) {  //parseFloat(文字列変数)⇒数値に変換

        //時間計算
        let alco = (1000/12 + 15*(time -1))*weight;

        //ほろよい結果表示
        document.getElementById("par_value").value = par; 
        document.getElementById("cas_value").value = Math.round(alco/par * 100) / 100; 
        document.getElementById("beer_value").value = Math.round(alco/5 * 100) / 100;  
        document.getElementById("sp_value").value = Math.round(alco/96 * 100) / 100;
        document.getElementById("wine_value").value = Math.round(alco/12 * 100) / 100;   
    }
    //入力された値が0以上でない場合エラー
    else {
        //エラー表示
        alert("値エラー");
    }


}
