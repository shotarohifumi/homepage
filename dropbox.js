$(function() {
    $(document).ready(function() {
        var dropboxFolderLink = "https://www.dropbox.com/sh/i7rqce2hit8qp71/AAAQj6qJrNOM-8jBfLHqKLqIa/00%20%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B?dl=0&subfolder_nav_tracking=1"

        function openFolderLink() {
            window.open(dropboxFolderLink, "_blank");
        }

        $("#folder-link").on("click", openFolderLink);
    })
})