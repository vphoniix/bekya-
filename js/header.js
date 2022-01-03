const creatnav = ()=> {
    let header = document.querySelector('.navbar');

    header.innerHTML= `
    <a href="index.html">
            <img src="images/alihatemlogo.png" alt="bekya" class="logo" width="137" height="70">
        </a>
        <nav class="navigation">
            <div class="lang-menu">
                <div class="selected-lang">
                    En
                </div>
                <ul>
                    <li>
                        <a class="en">En</a>
                    </li>
                    <li>
                        <a class="ar">Ar</a>
                    </li>
                </ul>
            </div>
            <a href="login.html">Login</a>
            <a href="#"><img src="images/cart.png" alt=""></a>
        </nav>
    `

}

creatnav();