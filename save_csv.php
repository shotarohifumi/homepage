<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// POSTリクエストからCSVデータを取得
	$csvData = $_POST['csvData'];
	// CSVデータをファイルに保存（上書き）
	file_put_contents('showfile.csv', $csvData);
	echo "CSVデータが保存されました。";
}
?>