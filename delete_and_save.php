<?php
$originalFile = "csvfile_trial.csv";  // オリジナルのファイル名
$editedFile = "csvfile_trial.csv";  // 編集済みファイル名

// オリジナルファイルを削除
if (file_exists($originalFile)) {
    unlink($originalFile);
}

// 編集済みファイルを保存
$editedCSVData = $_POST['editedData'];
file_put_contents($editedFile, $editedCSVData);

echo "ファイルが削除され、新しいファイルが保存されました";
?>
