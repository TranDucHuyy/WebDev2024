const arrowsLeft = document.querySelectorAll(".arrow-left");
const arrowsRight = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelectorAll('.container, .movie-list-title, .sidebar, .navbar-container, .left-menu-icon, .toggle-ball');

    //====================== Phần này Tuấn làm ====================== 

    // Đóng dropdown khi click ra ngoài
    window.addEventListener('click', function(e) {
    const genreDropdown = document.querySelector('.dropdown-menu');
    const genreButton = document.querySelector('.menu-list-item');
    
    if (!genreButton.contains(e.target)) {
        genreDropdown.style.display = 'none';
    }
    });

    // Hiển thị dropdown khi click vào nút Genre
    document.querySelector('.menu-list-item').addEventListener('click', function(e) {
    const genreDropdown = document.querySelector('.dropdown-menu');
    genreDropdown.style.display = genreDropdown.style.display === 'block' ? 'none' : 'block';
    });


    // Thêm sự kiện cho từng mục trong dropdown menu
    const dropdownItems = document.querySelectorAll('.dropdown-item a');

    dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Ngăn không cho sự kiện click ảnh hưởng đến dropdown
        window.location.href = this.href; // Điều hướng đến URL trong href
    });
    });

    //======================  hết phần của Tuấn ====================== 
