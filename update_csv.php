<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// POSTリクエストから新しい行と更新されたCSVデータを取得
	$newDataRow = $_POST['newDataRow'];
	$updatedCSVData = $_POST['updatedCSVData'];
	// 新しい行をCSVデータに追加
	$updatedCSVData .= $newDataRow;
	// CSVデータをファイルに保存（上書き）
	file_put_contents('csvfile_trial.csv', $updatedCSVData);
	echo "新しい行がCSVデータに追加されました。";
}
?>