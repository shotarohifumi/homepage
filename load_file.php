<!-- <?php  -->
//新しいファイル名
// $filename = "csvfile_trial.csv"; 

// if (file_exists($filename)) {
// 	$data = file_get_contents($filename);
// 	echo $data;
// } else {
// 	echo "ファイルが見つかりません";
// }
// ?> 

<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (isset($_GET["fileName"])) {
        $fileName = $_GET["fileName"]; // ファイル名

        // ファイルが存在する場合、そのファイルの内容を返す
        if (file_exists($fileName)) {
            $data = file_get_contents($fileName);
            echo $data;
        } else {
            echo "ファイルが見つかりません";
        }
    } else {
        echo "ファイル名が指定されていません";
    }
} else {
    echo "無効なリクエスト";
}
?>
