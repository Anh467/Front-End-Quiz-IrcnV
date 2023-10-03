// const elements = document.querySelectorAll('.class-name')
// elements.forEach(element=>{
//     element.addEventListener("hover",(e)=>{
        
//     })
// })
// sự kiện khi 1 text sẽ được nhấn xem thêm 
$(document).ready(function() {
    $(".read-more").click(function(e) {
        e.preventDefault();
        var $paragraph = $(this).prev(".truncate-text"); // Thêm dấu chấm trước "truncate-text"
        $paragraph.toggleClass("expanded");
        if ($paragraph.hasClass("expanded")) {
            $(this).text("Rút gọn");
        } else {
            $(this).text("Xem thêm");
        }
    });
});
