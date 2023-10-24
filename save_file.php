<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fileName = $_POST["fileName"]; // 新しいファイル名
    $editedCSVData = $_POST["editedData"]; // 編集されたCSVデータ

    // 新しいファイルにデータを保存
    file_put_contents($fileName, $editedCSVData);

    echo "ファイルが保存されました";
} else {
    echo "無効なリクエスト";
}
?>
