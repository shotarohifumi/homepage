// $(function() {
//     $(document).ready(function() {
//         var dropboxFolderLink = "https://www.dropbox.com/sh/i7rqce2hit8qp71/AAAQj6qJrNOM-8jBfLHqKLqIa/00%20%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B?dl=0&subfolder_nav_tracking=1"

//         function openFolderLink() {
//             window.open(dropboxFolderLink, "_blank");
//         }

//         $("#folder-link").on("click", openFolderLink);
//     })
// })

// function DropboxDownload() {
//     axios({
//         method: 'post',
        
//     })
// }

// $.ajax({
//     url: 'https://www.dropbox.com/sh/i7rqce2hit8qp71/AAAQj6qJrNOM-8jBfLHqKLqIa/00%20%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B?dl=0&subfolder_nav_tracking=1', //アクセスするURL
//     type: 'get',     //post or get
//     cache: false,        //cacheを使うか使わないかを設定
//     dataType:'json',     //data type script・xmlDocument・jsonなど
//     data:data,           //アクセスするときに必要なデータを記載      
//     })
//     .done(function(response) { 
//      //通信成功時の処理
//      //成功したとき実行したいスクリプトを記載
//     })
//     .fail(function(xhr) {  
//      //通信失敗時の処理
//      //失敗したときに実行したいスクリプトを記載
//     })
//     .always(function(xhr, msg) { 
//     //通信完了時の処理
//     //結果に関わらず実行したいスクリプトを記載
// });   

// 〒api
// $(function () {
// 	// console.log("Hello world");
// 	// $(jqueryオブジェクト).val()で入力された値を取得
// 	// console.log($(".post").val());
// 	$(".btn").on("click", function () {
// 		let postNum = $(".post").val();
// 		// dataは必ず連想配列で渡すことが決められている
// 		let data = {
// 			zipcode: postNum,
// 		}
// 		// ここから非同期通信
// 		$.ajax({
// 			url: 'https://zipcloud.ibsnet.co.jp/api/search', //アクセスするURL
// 			type: 'get', //post or get
// 			cache: false,  //cacheを使うか使わないかを設定
// 			dataType: 'json',  //data type script・xmlDocument・jsonなど
// 			data: data,  //アクセスするときに必要なデータを記載      
// 		})
// 			.done(function (response) {
// 				//通信成功時の処理
// 				//成功したとき実行したいスクリプトを記載
// 				// console.log(response);
//   			// 連想配列の引き出しの中身は連想配列名.キー名
// 				// console.log(response.results);
// 				// 配列の引き出しの中身は配列[番号]
// 				// console.log(response.results[0]);
// 				// console.log(response.results[0].address1);
// 				// console.log(response.results[0].address2);
// 				// console.log(response.results[0].address3);
// 				// $(".result").html(response.results[0].address1)
// 				// $(".result").text(response.results[0].address1)
// 				// $(".result").append(`<p>${response.results[0].address1}</p>`);
// 				// $(".result").append(`<p>${response.results[0].address2}</p>`);
// 				// $(".result").append(`<p>${response.results[0].address3}</p>`);
// 				let addressNum=4;
// 				for(let i=1; i<addressNum; i++){
// 					// console.log(i);
// 					$(".result").append(`<p>${response.results[0]["address"+i]}</p>`);
// 				}
// 			})
// 			.fail(function (xhr) {
// 				//通信失敗時の処理
// 				//失敗したときに実行したいスクリプトを記載
// 			})
// 			.always(function (xhr, msg) {
// 				//通信完了時の処理
// 				//結果に関わらず実行したいスクリプトを記載
// 			});
// 	});
// })


$(document).ready(function () {
    var accessToken = 'sl.BnxZfJ3F_04ChD-3mu9D2rats1IPAoAb-920rUYcYMpyEn8Z2GRaQcAAKhCSYpvIsfoKDr3_HmIf0DU4iVhGfVyasjUtzcJtOpWQx8AEPVfabdjhTdwYCQVtDkcT4Eeyu6xDl9RJ02dn';
    var folderPath = 'C:\Desktop\Dropbox';

    $.ajax({
        url: 'https://www.dropbox.com/scl/fo/vgs04agmj7i3ug7a5h2dm/h?rlkey=q0kw94fd0fag3r5ogfshtdob3&dl=0',
        type: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            "path": folderPath
        }),
        success: function (data) {
            // Process and display the folder contents on your website
            var fileList = $('#file-list');
            data.entries.forEach(function (entry) {
                if (entry[".tag"] === "file") {
                    fileList.append('<li><a href="' + entry.path_display + '">' + entry.name + '</a></li>');
                }
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
});
console.log("123");

const ACCESS_TOKEN = 'sl.Bn1PImTTl2_9EV8-zaCN39XRb7JSR0dHpM_oeu6uHkhxnrB2eQtiWNWC3LMgzUvN5kc-tg_3XLUaLetZKPZ207I4QtVedh8QDcCkEGjV4cYbEmXmVLbveOErajN9yAhc8SDqzQI3fYPM';

$('#fetchData').click(function() {
	$.ajax({
		url: 'https://www.dropbox.com/oauth2/authorize?client_id=4hdmjghwoyc2ysf&token_access_type=offline&response_type=code',
		type: 'POST',
		headers: {
			'Authorization': 'Bearer ' + ACCESS_TOKEN,
			'Content-Type': 'application/json'
		},
		data: JSON.stringify({
			path: '/nebit/お知らせ',  // Specify the Dropbox path you want to list
			recursive: false,
			include_media_info: false,
			include_deleted: false,
			include_has_explicit_shared_members: false,
			include_mounted_folders: true
		}),
		success: function(data) {
			displayFileList(data.entries);
		},
		error: function(error) {
			console.error('Error fetching data from Dropbox:', error);
		}
	});
});

function displayFileList(entries) {
	const fileList = $('#fileList');
	fileList.empty();

	entries.forEach(function(entry) {
		if (entry['.tag'] === 'file') {
			fileList.append('<li>' + entry.name + '</li>');
		}
	});
}