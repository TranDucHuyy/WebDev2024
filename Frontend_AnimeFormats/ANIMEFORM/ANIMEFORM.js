   // Lấy số trang hiện tại từ thuộc tính data-current-page
   const paginationDiv = document.querySelector('.pagination');
   const currentPage = paginationDiv.getAttribute('current-page');

   // Tìm tất cả các phần tử a với class "page-link"
   const pageLinks = document.querySelectorAll('.page-link');

   // Lặp qua từng liên kết và so sánh với số trang hiện tại
   pageLinks.forEach(link => {
       if (link.textContent === currentPage) {
           link.classList.add('active');
       }
});