$(function () {
	$(document).ready(function () {
			// CSVファイルのパスを指定
			var csvFilePath = '\showfile.csv';

			// 特定の区分番号を設定
			var targetKubun = '4';

			// CSVファイルを非同期で読み込む
			$.ajax({
					type: "GET",
					url: csvFilePath,
					dataType: "text",
					success: function (data) {
							var lines = data.split('\n');
							var dataRows = [];

							for (var i = 1; i < lines.length; i++) { // ヘッダ行をスキップ
									var line = lines[i].split(',');
									dataRows.push({
											区分番号: line[0],
											区分別番号: line[1],
											ワード: line[3],
											URL: line[4]
									});
							}

							// 特定の区分番号のデータのみをフィルタリング
							var filteredData = dataRows.filter(function (item) {
									return item.区分番号 === targetKubun;
							});

							// データを区分別番号の小さい順にソート
							filteredData.sort(function (a, b) {
								return a.区分別番号 - b.区分別番号;
							});

							// フィルタリングされたデータをテーブルに追加
							displayFilteredData(filteredData);
					}
			});

			function displayFilteredData(data) {
					var table = $('#csvTable4');
					table.empty();

					// // ヘッダ行を追加
					// var headerRow = '<tr><th>番号</th><th>項目</th></tr>';
					// table.append(headerRow);
					// var headerRow = '<tr><th>区分番号</th><th>区分別番号</th><th>ワード</th><th>URL</th></tr>';
					// table.append(headerRow);

					// フィルタリングされたデータをテーブルに追加し、ワードをクリック可能なリンクとして表示
					for (var i = 0; i < data.length; i++) {
							var row = '<tr><td>' + data[i].区分別番号 + '</td><td><a href="' + data[i].URL + '" class="wordLink">' + data[i].ワード + '</a></td></tr>';
							table.append(row);
							// リストアイテムの数が１０を超える場合スクロールバーを表示
							if (data.length > 5) {
								table.parent().css('overflow');
							}
					}
			}
	});

	// リンクのクリックハンドラーを設定
	$(document).on('click', '.wordLink', function (e) {
			// リンクをクリックしても通常のページ遷移を行う
			return true;
	});
});