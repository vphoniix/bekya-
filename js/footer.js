const creatfooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="f-content">
            <img src="" alt="footer's logo" class="logo">
        </div>
        <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter-square"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
    `
}

creatfooter();