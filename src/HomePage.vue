<template>
<div class="home_container">
    <!-- <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div> -->

    <header class="header">
        <div class="container">
            <section class="header--main">
                <div class="mobile-menu">
                    <input id="menu__toggle" class="open-nav" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
                </div>
                <div class="header--logo">
                    <!-- <a href="./"><span>Ora</span> Watches &amp Jewelery</a> -->
                    <a href="./">
                        <img src="./assets/img/light-logo.png" class="nav-logo" alt="Ora Watches &amp; Jewelery | Logo">
                    </a>
                </div>
                <nav class="menu js-menu">
                    <ul class="ul-menu">
                        <li class="menu-item">
                            <a href="./" class="active">Home</a>
                        </li>
                        <li class="menu-item menu-item-child">
                            <a href="#" class="js-sub_menu">Products <i class="uil uil-angle-down"></i></a>
                            <ul class="sub-menu">
                                <li class="sub-menu-item"><a href="./products/products.html">All Products</a></li>
                                <li class="sub-menu-item"><a href="./products/single-products.html">Product Details</a></li>
                            </ul>
                        </li>
                        <li class="menu-item menu-item-child">
                            <a href="#" class="js-sub_menu">Pages <i class="uil uil-angle-down"></i></a>
                            <ul class="sub-menu">
                                <li class="sub-menu-item"><a href="./log-in.html">Log In</a></li>
                                <li class="sub-menu-item"><a href="./sign-up.html">Sign Up</a></li>
                                <li class="sub-menu-item"><a href="./blog.html">Blog</a></li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a href="./about.html">About Us</a>
                        </li>
                        <li class="menu-item">
                            <a href="./contact.html">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div class="darkLight-searchBox">
                    <div class="dark-light">
                        <!-- <i class="fa-solid fa-moon moon"></i> -->
                        <!-- <i class="fa-solid fa-sun"></i> -->
                        <i class="uil uil-moon moon"></i>
                        <i class="uil uil-sun sun"></i>
                    </div>
                    <div class="searchBox">
                        <div class="searchToggle">
                            <!-- <i class="fa-solid fa-xmark cancel"></i> -->
                            <!-- <i class="fa-solid fa-magnifying-glass search"></i> -->
                            <i class="uil uil-times cancel"></i>
                            <i class="uil uil-search search"></i>
                        </div>

                        <div class="search-field">
                            <input type="text" placeholder="Search..." />
                            <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
                            <i class="uil uil-search-alt"></i>
                        </div>
                    </div>
                    <div class="cart-checkout">
                        <i class="uil uil-shopping-bag shopping-cart"></i>
                    </div>
                    <!-- <i class="fa-solid fa-bars open-nav"></i> -->
                </div>
            </section>
            <div class="progress"></div>
        </div>
    </header><!-- header-end ./ -->

    <main class="wrapper">
        <section class="carousel">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="./assets/img/slider/1.jpg" class="d-block w-100" alt="Dhurat&euml; q&euml; ja Vlen!">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./assets/img/slider/2.jpg" class="d-block w-100" alt="Citizen">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->                            
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/slider/3.jpg" class="d-block w-100" alt="Jacques Lemans">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/slider/4.jpg" class="d-block w-100" alt="Quantum">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/slider/5.jpg" class="d-block w-100" alt="Pierre Cardin">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/slider/6.jpg" class="d-block w-100" alt="Lee Coper">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/slider/7.jpg" class="d-block w-100" alt="Roamer">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./assets/img/slider/8.jpg" class="d-block w-100" alt="Riparim dhe Servisim Profesional | Ora-Ks.com">
                        <div class="carousel-caption d-none d-md-block text-white">
                            <h5>ORA - Exclusive distributor for Kosovo.</h5>
                            <!-- <p></p> -->
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section><!-- wrapper&carousel-end ./ -->

        <section class="products-categories">
            <div class="container">
                <article class="product-box">
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/swatch.png" alt="Swatch" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/jacques-lemans.png" alt="Jacques Lemans" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/citizen.png" alt="Citizen" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/zeppelin.png" alt="Zeppelin" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/roamer.png" alt="Roamer" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/LC.png" alt="Lee Cooper" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/pcd.png" alt="Pierre Cardin" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/gant.png" alt="Gant" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/quantum.png" alt="Quantum" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/danish.png" alt="Danish Design" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/Originals.png" alt="Lee Cooper | Originals" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/adorat.png" alt="Adora" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/esprit.png" alt="Esprit" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/armani.png" alt="Emporio Armani" />
                        </a>
                    </div>
                    <div class="cat-box">
                        <a href="#">
                            <img src="./assets/img/categories/guess.png" alt="Guess" />
                        </a>
                    </div>
                </article>
            </div>
        </section><!-- cats-end ./ -->

        <section class="products pm">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <article class="title text-center">
                            <h2 class="title-sec">Products</h2>
                            <p class="sub-title">Prefered <i class="uil uil-list-ui-alt"></i></p>
                        </article>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-25%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="./assets/img/products/quantum.png" alt="Ore Quantum PWG927.650">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum PWG927.650</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">169.00&euro;</span>135.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-15%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="./assets/img/products/quantum2.png" alt="Ore Quantum HNG949.652">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum HNG949.652</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">179.00&euro;</span>143.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-50%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="./assets/img/products/armani.png" alt="Ore Armani AR5886">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Emporio Armani</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Armani AR5886</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">279.00&euro;</span>139.50&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/A%20GANT/G121004%20=%20229%20EURO-340x340.jpg" alt="Gant G121004">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Gant</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Gant G121004</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">229.00&euro;</span>183.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item">
                            <div class="product-item-inner">
                                <!-- <span class="discount">0%</span> -->
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20LEE%20COOPER/LCFW2018/LC06713.740%20=%2079%20EURO-340x340.jpg" alt="Lee Cooper LC06713.740">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Cooper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Lee Cooper LC06713.740</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4>79.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item">
                            <div class="product-item-inner">
                                <!-- <span class="discount">0%</span> -->
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/A%20LC%20SS2021/LC07200.651%20=%2069%20EURO-340x340.jpg" alt="Lee Cooper LC07200.651">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Cooper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Lee Cooper LC07200.651</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4>69.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item">
                            <div class="product-item-inner">
                                <!-- <span class="discount">0%</span> -->
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AA%20LC2019/LC06846.040%20=%2079%20EURO-340x340.jpg" alt="Lee Cooper LC06846.040">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Cooper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Lee Cooper LC06846.040</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4>79.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item">
                            <div class="product-item-inner">
                                <!-- <span class="discount">0%</span> -->
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AA%20LC2019/LC06851.060%20=%2059%20EURO-340x340.jpg" alt="Lee Cooper LC06851.060">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Coper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Lee Cooper LC06851.060</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4>59.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AA%20PC/PC3/PC902731F07%20=%20159%20EURO-340x340.jpg" alt="Pierre Cardin PC902731F07">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Pierre Cardin</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Pierre Cardin PC902731F07</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">159.00&euro;</span>127.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/A%20QUANTUM/ADG950.090%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG950.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG950.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.990%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG679.990">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.990</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.990%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG679.990">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.990</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.990%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG679.990">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.990</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.990%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG679.990">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.990</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-10%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                </div>
                <div class="row">
                    <div class="col-12 text-center mt-5 mx-auto">
                        <a href="./products/products.html" class="btn btn-theme">View All Products <i class="uil uil-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </section><!-- products-end ./ -->

        <section class="product-support">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6 col-lg-12">
                        <h4>Repair &amp; Support - Services</h4>
                        <h2>Up to <span>50% off</span> - All Watches &amp; Accessories</h2>
                        <button class="btn-normal">Explore More</button>
                    </div>
                </div>
            </div>
        </section><!-- product support-end -->

        <section class="products pm">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <article class="title text-center">
                            <h2 class="title-sec">Products</h2>
                            <p class="sub-title">Latest <i class="uil uil-list-ui-alt"></i><i class="uil uil-watch-alt"></i></p>
                        </article>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-50%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20LEE%20COOPER/LCFW2018/LC06713.740%20=%2079%20EURO-340x340.jpg" alt="Lee Cooper LC06713.740">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Cooper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Lee Cooper LC06713.740</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">150.00&euro;</span>80.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-50%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/A%20LC%20SS2021/LC07200.651%20=%2069%20EURO-340x340.jpg" alt="Lee Cooper LC07200.651">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Cooper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Lee Cooper LC07200.651</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">189.00&euro;</span>89.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-50%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AA%20LC2019/LC06846.040%20=%2079%20EURO-340x340.jpg" alt="Lee Cooper LC06846.040">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Lee Cooper</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Lee Cooper LC06846.040</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">199.00&euro;</span>100.00&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-25%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/A%20QUANTUM/ADG950.090%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG950.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG950.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <i class="uil uil-favorite"></i>
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-25%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.990%20=%20149%20EURO-340x340.jpg" alt="Quantum ADG679.990">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.990</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <i class="uil uil-favorite"></i>
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-item discount">
                            <div class="product-item-inner">
                                <span class="discount">-25%</span>
                                <a href="./products/product-details.html" class="link">
                                    <figure class="img-box">
                                        <img src="https://ora-ks.com/image/cache/data/AAA%20QUANTUM/ADG679.090%20=%20149%20EURO-340x340.jpg" alt="Ore Quantum ADG679.090">
                                    </figure>
                                </a>
                                <div class="details">
                                    <span class="cat"><i class="uil uil-tag-alt"></i> Quantum</span>
                                    <a href="./products/product-details.html" class="link">
                                        <h5 class="title">Ore Quantum ADG679.090</h5>
                                    </a>
                                    <div class="star">
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star" />
                                        <font-awesome-icon icon="fa-solid fa-star-half-stroke" />
                                        <h4><span class="old-prc">149.00&euro;</span>119.20&euro;</h4>
                                    </div>
                                    <a href="./products/single-products.html" class="go-to-cart"><div class="shopping-cart cart">
                                        <font-awesome-icon icon="fa-solid fa-cart-plus" />
                                    </div></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- products-end ./ -->
                </div>
                <div class="row">
                    <div class="col-12 text-center mt-5 mx-auto">
                        <a href="./products/products.html" class="btn btn-theme">View All Products <i class="uil uil-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </section><!-- products-end ./ -->

        <section class="banner">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <article class="banner-img">
                            <div class="circle-img">
                                <div class="circle-img-inner">
                                    <div class="img-circle"></div>
                                    <div class="c-gift">
                                        <article class="banner-text">
                                            <h2 class="mb-3">An investment in good products saves your work, time &amp; money.</h2>
                                            <h1 class="mb-3">Best online shopping web for Watches!</h1>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Alias commodi, architecto labore minima distinctio aliquam 
                                                voluptates dolor delectus temporibus, iusto corporis perferendis? 
                                                Dignissimos unde blanditiis dolorum, omnis alias voluptatibus doloremque.
                                            </p>
                                            <span>You Can:</span>
                                            <a href="#" class="btn btn-theme mx-2">Log In!</a>
                                            <span>or:</span>
                                            <a href="#" class="btn btn-theme mx-2">Register for Free!</a>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section><!-- banner-end ./ -->

        <section class="feature">
            <div class="container">
                <div class="fe-box">
                    <figure class="feature-box">
                        <img src="./assets/img/features/free_shipping.png" alt="" />
                        <figcaption>Free Shipping</figcaption>
                    </figure>
                </div>
                <div class="fe-box">
                    <figure class="feature-box">
                        <img src="./assets/img/features/shopping.gif" alt="" />
                        <figcaption>Online Order</figcaption>
                    </figure>
                </div>
                <div class="fe-box">
                    <figure class="feature-box">
                        <img src="./assets/img/features/safe-box.gif" alt="" />
                        <figcaption>Save Money</figcaption>
                    </figure>
                </div>
                <div class="fe-box">
                    <figure class="feature-box">
                        <img src="./assets/img/features/shopping-online.png" alt="" />
                        <figcaption>Promotions</figcaption>
                    </figure>
                </div>
                <div class="fe-box">
                    <figure class="feature-box">
                        <img src="./assets/img/features/computer.png" alt="" />
                        <figcaption>Happy Sell</figcaption>
                    </figure>
                </div>
                <div class="fe-box">
                    <figure class="feature-box">
                        <img src="./assets/img/features/social-care.gif" alt="" />
                        <figcaption>24/7 Support</figcaption>
                    </figure>
                </div>
            </div>
        </section><!-- features-end ./ -->

        <section class="sales">
            <div class="container">
                <article class="box py-2">
                    <div class="row text-center">
                        <div class="col-md-6 col-lg-3">
                            <div class="sales-count">
                                <h2 class="c-1">196k+</h2>
                                <p>Followers / Visitors</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="sales-count">
                                <h2 class="c-2">10k +</h2>
                                <p>Products</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="sales-count">
                                <h2 class="c-3">3</h2>
                                <p>Countries</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <div class="sales-count">
                                <h2 class="c-4">3</h2>
                                <p>Shops</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section><!-- sales - end ./ -->

        <section class="product-support">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-12">
                        <h4>Repair &amp; Support - Services</h4>
                        <h2>Up to <span>50% off</span> - All Watches &amp; Accessories</h2>
                        <button class="btn-normal">Explore More</button>
                    </div>
                </div>
            </div>
        </section><!-- product support-end -->

        <section class="collection my-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6 c-box-img">
                        <div class="c-box">
                            <h4>Crazy Deals</h4>
                            <h2>Buy 1 get 1 Free</h2>
                            <span>The best class watch is on sale at Ora Watches &amp; Jewelery.</span>
                            <button class="btn-coll">Learn More</button>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 c-box-img">
                        <div class="c-box">
                            <h4>Spring / Summer</h4>
                            <h2>Upcomming Season</h2>
                            <span>The best class watch is on sale at Ora Watches &amp; Jewelery.</span>
                            <button class="btn-coll">Collection</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container xs-c-oll">
                <div class="row">
                    <div class="col-lg-4 col-md-6 c-box-img">
                        <div class="c-box">
                            <h4>SEASONAL SALE</h4>
                            <h2>Men Watches, Jewelery & Accessories</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 c-box-img">
                        <div class="c-box">
                            <h4>SEASONAL SALE</h4>
                            <h2>Women Watches, Jewelery & Accessories</h2>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 c-box-img">
                        <div class="c-box">
                            <h4>SEASONAL SALE</h4>
                            <h2>Child Watches & Accessories</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="newsletter">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 col-lg-8">
                        <div class="newstext">
                            <h4>Sign Up For Newsletters!</h4>
                            <p>Get E-Mail updates about our Latest Products and <span>special offers</span>.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="n-form">
                            <input type="text" placeholder="Your E-Mail Address...">
                            <button class="btn-normal">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main><!-- main-body-end ./ -->


    <footer class="footer">
        <div class="container-footer">
            <div class="row">
                <div class="col-lg-4 col-md-6 contact1">
                    <img src="./assets/img/light-logo.png" class="footer-logo" alt="Ora - Logo">
                    <h4>Contact</h4>
                    <p><span class="fw-bold">Address:</span> Rr. Ferid Curri, 10000, Prishtina</p>
                    <p><span class="fw-bold">Tel:</span> +383 (0) 49 77 80 80</p>
                    <p><span class="fw-bold">Open:</span> 07:00 - 22:00, Monday - Friday</p>
                    <div class="social-fllw">
                        <h4>Follow us</h4>
                        <div class="icons d-flex justify-content-between align-items-center">
                            <a href="https://m.facebook.com/page">
                                <i class="uil uil-facebook"></i>
                            </a>
                            <a href="https://instagram.com/page">
                                <i class="uil uil-instagram"></i>
                            </a>
                            <a href="https://twitter.com/page">
                                <i class="uil uil-twitter-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-2 contact2">
                    <h4>About</h4>
                    <a href="./about.html">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms&amp;Conditions</a>
                    <a href="./contact.html">Contact Us</a>
                </div>

                <div class="col-md-6 col-lg-2 contact3">
                    <h4>My Account</h4>
                    <a href="./sign-in.html">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">My Wishlist</a>
                    <a href="#">My Order</a>
                    <a href="./help.html">Help?</a>
                </div>

                <div class="col-lg-4 col-md-6 install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div class="download-on">
                        <img src="./assets/img/buttons/app-store.png" alt="">
                        <img src="./assets/img/buttons/google-play.png" alt="">
                    </div>
                    <p>Secured Payment Getaway</p>
                    <div class="payment">
                        <i class="uil uil-master-card"></i>
                        <i class="uil uil-paypal"></i>
                        <i class="uil uil-transaction"></i>
                        <i class="uil uil-bill"></i>
                        <i class="uil uil-credit-card-search"></i>
                        <i class="uil uil-university"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="copyright">
                <p class="copy">&copy;<span id="year">. My Web Name.</span></p>
                <a href="https://my-site.com/" class="go-to-link">
                    <p class="by">By:</p>
                    <span id="author">Web Studio</span>
                </a>
            </div>
        </div>

        <button class="back-to-top hidden">
            <i class="uil uil-angle-up"></i>
        </button>

        <!-- <div class="cookie">
            <div class="welcome-alert alert alert-dismissible fade show" role="alert">
                <section class="ms">
                    <strong>Hello, Welcome to Ora-Ks.com!</strong>
                    <h1 id="author">By: <strong>Web Studio</strong></h1>
                </section>
                <button type="button" class="btn-close welcome"></button>
            </div>
            <div>
                <img src="./assets/img/other/cookie.png" alt="Cookie Png" />
            </div>
            <div class="content">
                <h1>Cookies Content</h1>
                <p>We use Cookies to ensure you get the best experience while shooping!</p>
                <a href="#" class="item">Learn more</a>
            </div>
            <div class="btn-actions">
                <button class="item">I Understand</button>
            </div>
        </div> -->
    </footer>
</div>
</template>
<script>

</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

@import "./assets/css/vars.css";

/*===> All Styles
 *
 *  
 *   General   */

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: break-all;
    word-wrap: break-word;
}

*::selection {
    color: var(--WHITE);
    background-color: var(--black-high);
}

/* width */
::-webkit-scrollbar {
    width: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--black-high); 
    /* box-shadow: var(--shadow); */
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--brown-mode); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--white); 
}

html {
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body {
    color: var(--black-med);
    background-color: var(--body-bg-color);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    min-height: 100vh;
    overflow-y: auto !important;
    overflow-x: hidden;
}

a {
    color: var(--black-high);
    text-decoration: none;
}

a:hover {
    color: var(--blue-mad);
}

a:active {
    color: var(--main-color) !important;
}

h1,h2,h3,h4,h5,h6 {
    color: var(--black-high);
    line-height: 1.3;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

/* body-general */
.page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    margin: 0px auto;
    background-color: var(--white);
    z-index: 99999;
}

.page-loader.off {
    display: none;
    opacity: 0;
    transition: all 0.6s ease;
}

.cmps {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.cmps span {
    position: relative;
    font-size: 1.5rem;
}

.cmps span > b {
	position: absolute;
    bottom: -10px;
	display: inline-block;
	background: var(--black-high);
	width: 20%;
	height: 5.5%;
	border-radius: 100px;
}
.cmps span > b:nth-of-type(1) {
	left: 0;
}
.cmps span > b:nth-of-type(2) {
	left: 40%;
}
.cmps span > b:nth-of-type(3) {
	right: 0;
}

/* Animation */
.cmps span > b {
	animation-name: loading;
	animation-duration: 1.5s;
	animation-iteration-count: infinite;
	animation-fill-mode: both;
}
.cmps span > b:nth-of-type(2) {
	animation-delay: .2s;
}
.cmps span > b:nth-of-type(3) {
	animation-delay: .4s;
}

/* Keyframes */
@keyframes loading {
	0% { opacity: 1; }
	50% { opacity: 0; }
	100% { opacity: 1; }
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    25%, 50% {
        transform: rotate(180deg);
    }
    75%, 100% {
        transform: rotate(360deg);
    }
}

@keyframes loaderIn {
    0%, 25%, 100% {
        height: 0%;
    }
    50%, 75% {
        height: 100%;
    }
}

@keyframes updown {
    0% {
        transform: translateY(10);
    }
    25%, 50% {
        transform: rotate(180deg);
    }
    75%, 100% {
        transform: rotate(360deg);
    }
}

.container {
    margin: 0 auto !important;
    --bs-gutter-x: 15px !important;
    max-width: 1150px !important;
}

.container-footer {
    width: 100%;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
    margin-right: auto;
    margin-left: auto;
}

.row {
    --bs-gutter-x: 30px;
}

.box {
    padding: 30px;
    border-radius: 5px;
    box-shadow: var(--shadow);
    background-color: var(--white);
}

.btn {
    color: var(--black-high) !important;
    box-shadow: var(--btn-shadow) !important;
}

.btn-normal {
    padding: 12px 30px;
    font-size: 1rem;
    font-weight: 600;
    color: var(--black-high);
    background-color: var(--white);
    box-shadow: var(--btn-shadow) !important;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: .2s;
}

.btn:active
.btn-normal:active {
    color: var(--black-high) !important;
    box-shadow: var(--shadow-outer) !important;
}

.btn-coll {
    padding: 11px 18px;
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    border: var(--btn-coll-border);
    outline: none;
    transition: .2s;
}

.btn-coll:hover {
    color: black;
    background-color: white;
}

.f-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--nav-color) !important;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
    rgba(0, 0, 0, 0.09) 0px 16px 8px, 
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: all .1s ease;
    z-index: 99999;
}

.carousel-inner,
.carousel-item img {
    height: 70vh !important;
    min-height: 328px !important;
    background: no-repeat center center scroll !important;
    -webkit-background-size: cover !important;
    -moz-background-size: cover !important;
    -o-background-size: cover !important;
    background-size: cover !important;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
    filter: var(--filter) !important;
}

.carousel-dark .carousel-indicators [data-bs-target] {
    background-color: var(--carousel-in);
}

/* Header & Menu ( nav ) */
.header {
    background-color: var(--body-bg-color);
    height: 70px;
    border-bottom: 1px solid var(--border-color1);
    z-index: 9999 !important;
}

.header--main {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header--logo {
    height: auto;
}

.nav-logo,
.footer-logo {
    /* display: inline-block; */
    max-width: 100%;
    height: 40px;
}

.header--log,
.darkLight-searchBox,
.mobile-menu,
.header--logo {
    z-index: 9999 !important;
}

/* .header--logo > img {
    display: block;
    max-width: clamp(80%, 90%, 100%);
} 

.header--logo a {
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--black-high);
} 

.header--logo span {
    text-transform: uppercase;
    color: var(--main-color);
}   */

.open-nav,
.open {
    padding: 5px;
    color: var(--white);
    font-size: 25px;
    cursor: pointer;
    display: none;
}

.menu-item {
    position: relative;
    display: inline-flex;
    height: 100%;
    margin-left: 40px;
}

.menu-item:nth-of-type(1){
    margin-left: 0 !important;
}

.menu-item > a {
    display: block;
    line-height: 70px;
    padding: 0 20px;
    font-weight: bold;
    color: var(--black-high);
    text-transform: capitalize;
    transition: color .3s ease;
}

.menu-item > a:hover {
    color: var(--white);
    background-color: var(--black-high);
}

.menu-item > a.active::before {
    content: "";
    position: absolute;
    left: 16%;
    bottom: 20px;
    width: 30%;
    height: 3px;
    background-color: var(--blue-mad);
    border-radius: 5px;
    opacity: 1;
    transition: background-color .2s ease;
}

.menu-item > a.active:hover::before {
    all: unset;
}

.sub-menu-item > a:hover {
    color: var(--blue);
}

.menu-item > a i {
    font-weight: bolder !important;
    margin-left: 3px;
    pointer-events: none;
}

.menu-item .sub-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 222px;
    padding: 10px 0;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: var(--shadow);
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
    transition: all .3s ease;
}

.sub-menu-item a {
    display: block;
    color: var(--black-high);
    background-color: transparent;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-weight: 400;
    transition: color .3s ease;
    text-transform: capitalize;
}

.sub-menu-item a.active {
    color: var(--blue);
}

a.active-n {
    color: var(--blue) !important;
}

a.active-n:hover {
    color: #ffffff !important;
}

.sub-menu-item a.active::after {
    content: "";
    position: relative;
    display: block;
    width: 20%;
    height: 3px;
    background-color: var(--blue-mad);
    border-radius: 5px;
    opacity: 1;
    transition: background-color .2s ease;
}

.backdrop,
.header-nav-btn,
.close-btn {
    display: none;
}

.header--main .darkLight-searchBox {
    display: flex;
    align-items: center;
}

:is(.dark-light, .searchToggle, .cart-checkout) {
    width: 40px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
}

.dark-light i, 
.searchToggle i,
.cart-checkout i {
    position: relative;
    color: var(--white-icon);
    font-size: 22px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    text-align: center;
    margin: auto;
    line-height: 45px;
    border-radius: 50%;
    transition: all .3s, all .1s ease;
}

.dark-light i:hover, 
.searchToggle i:hover,
.cart-checkout i:hover {
    color: var(--white);
    background-color: var(--black-high);
}

.dark-light i.sun,
body.dark .dark-light i.moon,
.searchToggle i.cancel,
.searchToggle.active i.search {
    display: none;
    opacity: 0;
    pointer-events: none;
}

.dark-light i.moon,
body.dark .dark-light i.sun,
.searchToggle.active i.cancel {
    display: block;
    opacity: 1;
    pointer-events: auto;
}

/* body.dark .dark-light i.sun {
    opacity: 1;
    pointer-events: auto;
} */

/* body.dark .dark-light i.moon {
    opacity: 0;
    pointer-events: none;
} */

/* .searchToggle i.cancel {
    opacity: 0;
    pointer-events: none;
} */

/* .searchToggle.active i.cancel {
    opacity: 1;
    pointer-events: auto;
} */

/* .searchToggle.active i.search {
    opacity: 0;
    pointer-events: none;
} */

.searchBox {
    position: relative;
}

.search-field {
    position: absolute;
    right: 5px;
    bottom: -85px;
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    background-color: var(--search-color);
    padding: 3px;
    border-radius: 6px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
    opacity: 0;
    pointer-events: none;
    transition: all .3s ease-in-out;
}

.searchToggle.active ~ .search-field {
    bottom: -74px;
    opacity: 1;
    pointer-events: auto;
}

.search-field::before {
    content: "";
    position: absolute;
    top: -4px;
    right: 14px;
    width: 12px;
    height: 12px;
    background-color: var(--black-high);
    transform: rotate(-45deg);
    z-index: -1;
}

.search-field input {
    width: 100%;
    height: 100%;
    padding: 0px 45px 0 8px !important;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.3rem;
    border: 0;
    outline: none;
    border-radius: 4px;
    color: var(--search-color);
}

.search-field input:focus {
    color: var(--white);
    background-color: var(--black-high);
}

.search-field i {
    position: absolute;
    right: 15px;
    font-size: 22px;
    color: var(--search-color);
}

.mobile-menu {
    display: none;
}

.progress {
    position: fixed;
    top: 70px;
    left: 0;
    height: 4px;
    background: var(--blue-mad);
    box-shadow: var(--shadow);
    z-index: 99999 !important;
}

/* Categories */
.product-box {
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 33px;
    grid-auto-rows: repeat(5, minmax(80px, 100px));
}

.cat-box {
    width: auto;
    height: 70px;
    background-color: var(--gray);
    box-shadow: var(--cat-shadow);
    border-radius: 4px;
    transition: box-shadow .2s ease-in;
}

.cat-box:hover {
    box-shadow: var(--csh-hover);
}

.cat-box img {
    display: block;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
}

/* Products */
.products .pm {
    padding: 60px 0;
}

.product-item {
    position: relative !important;
    display: block;
    color: var(--white);
    text-align: center;
}

.product-item .discount {
    position: absolute;
    top: 3.5%;
    left: 3.5%;
    z-index: 2;
    text-align: center;
    font-size: 1.2rem;
    transform: rotate(-45deg);
}

.product-item.discount::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: var(--sale-bgr);
    clip-path: polygon(0% 100%, 0% 0%, 100% 100%);
    transform: rotate(90deg);
    border-radius: 0px 0px 0px 25px;
}

.product-item-inner {
    position: relative;
    width: 100%;
    min-width: 100%;
    margin: 15px 0;
    padding: 10px 12px;
    border: 1px solid var(--black-high);
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, .02);
    transition: .2s ease;
}

.product-item-inner:hover {
    box-shadow: 20px 20px 30px rgba(0, 0, 0, .06);
}

.title {
    margin: 40px auto;
}

.title-sec {
    font-size: 1.3rem !important;
    font-size: 20px;
    text-transform: capitalize;
}

.sub-title {
    color: var(--black-high);
    font-size: 2.1rem;
    font-weight: 600;
}

.img-box img {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
}

.details {
    text-align: start;
    padding: 10px 5px;
}

.details .cat {
    color: var(--black-high);
    font-size: 18px;
    line-height: 18px;
    transition: color .2s ease-in-out;
}

.details .cat:hover {
    color: var(--main-color);
}

.details .cat i {
    margin-right: 3.3px;
}

.details h5 {
    color: var(--black-high);
    padding-top: 7px;
    margin: 10px auto 15px auto;
    font-size: 20px;
}

.details i {
    font-size: 25px;
    color: rgb(243, 181, 25);
}

.details h4 {
    color: var(--black-high);
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
}

.details h4 .old-prc {
    position: relative;
    margin-right: 10px;
    line-height: 15px;
}

.details h4 .old-prc::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2.1px;
    background-color: var(--main-color2);
}

.details h4 .old-prc::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -.85em;
    width: 33%;
    height: 2px;
    transform: rotate(90deg);
    background-color: var(--main-color2);
}

.details a > .cart {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0;
    padding: 0;
    border-radius: 50px;
    color: var(--main-color);
    background-color: var(--gray);
    font-weight: 500;
    border: 1px solid #cce7d0;
}

.details a > .cart:hover {
    box-shadow: var(--cat-shadow);
}

/* Product Support */
.product-support {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
    text-align: center;
    background: linear-gradient(var(--blue-mad), var(--white)), url("./assets/img/banner/sale-product_support.jpg") no-repeat center center / cover;
    background-blend-mode: saturation;
}

.product-support .row {
    height: 100% !important;

}

.product-support h4 {
    color: #ffffff;
    font-size: 1.2rem;
}

.product-support h2 {
    color: #ffffff;
    font-size: 2rem;
    padding: 10px 0;
}


.product-support h2 span {
    color: red;
}


/* Banner */
.banner {
    display: block;
    width: 100%;
    height: 100%;
    margin: 100px auto;
    padding: 10px 0;
}

.banner .container {
    max-width: auto;
    padding: 0;
}

.banner .circle-img {
    cursor: pointer;
    transition: all .3s ease;
}

.banner .circle-img:focus:hover {
    box-shadow: rgba(0, 0, 0, .4) 5px 5px, 
    rgba(0, 0, 0, .3) 10px 10px, 
    rgba(0, 0, 0, .2) 15px 15px, 
    rgba(0, 0, 0, 0.1) 20px 20px, 
    rgb(75, 75, 72, .05) 25px 25px;
}

.circle-img {
    position: relative;
    margin: auto;
    z-index: 1;
}

.circle-img-inner {
    text-align: center;
    /* border-radius: 0 0 180px 180px; */
    overflow: hidden;
}

.img-circle {
    display: none;
    /* position: absolute;
    left: 8px;
    bottom: 10px;
    width: 100%;
    height: 320px;
    background-color: hsl(0, 0%, 0%, .5); */
}

.circle-img-inner .c-gift {
    width: 100%;
    background: linear-gradient(var(--blue-mad), var(--white)), url("./assets/img/banner/banner-img.jpg") no-repeat center center / cover;
    background-blend-mode: saturation;
    z-index: 1;
}

.banner-text * {
    color: var(--white) !important;
}

.banner-text {
    padding: 33px;
    background-color: var(--bg-gift);
    /* background: var(--black-high);
    background: var(--gradient-gift); */
}

/* Features */
.feature {
    overflow-y: auto;
    overflow-x: auto;
    margin: 50px 13.5px 50px 0px;
}

.feature .container {
    display: grid;
    column-gap: 25px;
    grid-template-columns: repeat(6, minmax(130px, 1fr));
    grid-template-rows: auto;
}

.fe-box {
    text-align: center;
    margin: 10px auto;
    padding: 15px 15px 0;
    box-shadow:  var(--cat-shadow);
    border-radius: 4px;
}

.fe-box:hover {
    cursor: pointer;
    box-shadow:  var(--hover);
}

.feature-box img {
    display: block;
    width: 100% !important;
    height: 100% !important;
    border-radius: 20px;
    margin: 0 auto;
}

.feature-box figcaption {
    display: inline-block;
    margin: 20px 0 0 0;
    padding: 9px 8px;
    line-height: 1;
    border-radius: 4px;
    color: var(--blue);
    background-color: var(--gray);
}

.feature .fe-box:nth-child(2) figcaption {
    color: #ffffff;
    background-color: var(--blue);
}

.feature .fe-box:nth-child(3) figcaption {
    color: #ffffff;
    background-color: var(--brown-mode);
}

.feature .fe-box:nth-child(4) figcaption {
    color: var(--white);
    background-color: var(--black-high);
} 

.feature .fe-box:nth-child(5) figcaption {
    color: #ffffff;
    background-color: var(--main-color2);
}

.feature .fe-box:nth-child(6) figcaption {
    color: #ffffff;
    background-color: var(--main-color);
}

/* Sales */
.sales-count {
    padding: 15px 0;
}

.sales-count h2 {
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
}

.sales-count p {
    margin: 0;
    text-transform: uppercase;
}

.sales-count .c-1 {
    color: var(--black-high);
}

.sales-count .c-2 {
    color: var(--green-light);
}

.sales-count .c-3 {
    color: var(--red-light);
}

.sales-count .c-4 {
    color: var(--orange-light);
}

/* Collection */
.collection {
    display: block;
    margin: 0 auto 100px 0 !important;
}

.collection .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(40vh, 1fr))!important;
    gap: 10px;
}

.collection .container:nth-child(2) {
    margin-top: 10px !important;
}

.collection .container:nth-child(2) .row {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(25vh, 1fr))!important;
}

.collection .c-box-img {
    width: 100%;
    height: 100%;
    padding: 0;
    background: url("./assets/img/banner/shopping.jpg") no-repeat center center / cover;
}

.collection .c-box-img:nth-child(2) {
    background: url("./assets/img/banner/shopping2.jpg") no-repeat center center / cover;
}

.xs-c-oll .c-box-img:nth-child(1) {
    background: url("./assets/img/banner/men-collection.jpg") no-repeat center center / cover;
}

.xs-c-oll .c-box-img:nth-child(2) {
    background: url("./assets/img/banner/women-collection.jpg") no-repeat center center / cover;
}

.xs-c-oll .c-box-img:nth-child(3) {
    background: url("./assets/img/banner/kid-collection.jpg") no-repeat center center / cover;
}

.collection .c-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 30px;
    background-color: hsl(0, 0%, 0%, .5);
}

.collection h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 300;
}

.collection h2 {
    color: #ffffff;
    font-size: 28px;
    font-weight: 800;
}

.collection span {
    color: #ffffff;
    font-size: 20px;
    padding-bottom: 15px;
}

/* Newsletter */
.newsletter {
    width: 100%;
    height: clamp(auto, 220px, auto);
    background-color: var(--blue-mad);
}

.newsletter * {
    color: #ffffff;
}

.newsletter div[class^="col"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 0px;
    height: clamp(auto, 220px, auto);
}

.newsletter h4 {
    font-size: 22px;
    font-weight: 700;
    background-color: transparent;
}

.newsletter p {
    font-size: 18px;
    font-weight: 600;
    margin: 0 !important;
}

.newstext p > span {
    color: var(--yellow-light);
}

.n-form {
    display: flex;
    width: auto;
}

.n-form input[type="text"] {
    color: #000000;
    width: 100%;
    height: 3.125rem;
    padding: 0 1.25rem;
    font-size: 18px;
    border: 1px solid transparent;
    border-radius: 4px 0px 0px 4px;
    outline: none;
}

.n-form button {
    color: #ffffff;
    background-color: #4b4b48;
    white-space: nowrap;
}

/* Footer */
.footer {
    margin-top: 0px !important;
    border-top: var(--footer-border);
}

.container-footer {
    margin: 50px auto;
}

.container-footer div[class^="col"] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding: 5px 50px 50px 50px;
    border-right: var(--footer-border);
}

.contact2, .contact3 {
    flex-shrink: 0;
    padding: 0 0px !important;
}

.footer .footer-logo {
    margin-bottom: 30px;
}

.footer h4 {
    font-size: 1.2rem;
    padding-bottom: 20px;
}

.footer p {
    font-size: 1rem;
    margin: 0 0 8px 0;
}

.contact1 p > span {
    display: block;
    text-align: center;
}

.contact1 p:nth-child(4) {
    margin: 15px auto !important;
} 

.contact1 p:nth-child(4) span {
    margin-right: 0px !important;
} 

.footer a {
    display: block;
    margin-bottom: 1.2rem;
    color: var(--black-high);
    font-size: 1rem;
    text-decoration: none;
    word-break: break-all !important;
}

.social-fllw {
    margin-top: 20px;
}

.social-fllw i {
    color: var(--black-med);
    padding-right: 4px;
    font-size: 1.5rem;
    cursor: pointer;
}

.download-on {
    width: 100%;
    height: 100px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.install img {
    margin: 10px;
    display: block;
    height: 50%;
    max-width: 100%;
    background-color: var(--gray);
    border-radius: 8px;
    cursor: pointer;
}

.install img:nth-child(1) {
    border-radius: 7.2px;
}

.install img:hover {
    box-shadow: var(--btn-shadow);
}

.install img:active {
    box-shadow: var(--shadow-outer);
}

.payment i {
    font-size: 1.5rem;
}

.copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    text-align: center;
    color: var(--black-high);
    background-color: var(--nav-color) !important;
    box-shadow: 0px -15px 15px 0px rgba(0,0,0,0.1);
}

@supports (backdrop-filter: blur(1rem)) {
    .copyright {
        backdrop-filter: blur(1rem) !important;
    }
}

.footer .copyright p {
    margin-bottom: 0;
}

.copyright * {
    font-size: 1rem !important;
    font-weight: bold;
}

.go-to-link {
    margin: 0 8px 0 33px !important;
}

.by {
    display: inline;
    cursor: text;
}

#author {
    color: var(--black-high);
    margin-left: 8px;
    transition: all .2s ease;
}

#author:hover {
    text-decoration: underline;
}

/* Back to Top */

.back-to-top {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    border-radius: 100%;
    background: var(--blue-mad);
    width: 45px;
    height: 45px;
    padding: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 100%;
    box-shadow: var(--shadow);
    transition: opacity 0.5s;
}

.back-to-top:hover {
    opacity: 60%;
}

.hidden {
    display: none;
}

.back-to-top i {
    height: 1.5rem;
    color: #ffffff;
}

/* Welcome & Cookie */

.cookie {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 22%;
    left: 0;
    bottom: 0;
    background: var(--black-high);
    text-align: center;
    padding: 25px 25px 30px 25px;
    z-index: 99999;
}

.cookie.hide {
    display: none;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease;
}

.welcome-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center !important;
    text-align: center;
    color: var(--white);
    background-color: var(--black-high);
    border: 0px;
    border-radius: 0px;
    margin: 0 !important;
    padding: 10px auto !important;
    z-index: inherit;
    transition: all .3s ease;
}

#author {
    margin: 10px auto !important;
    padding: 0 !important;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--dark);
}

.btn-close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px !important;
    height: 20px !important;
    display: block !important;
    margin: auto !important;
    padding: 5px !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background-color: var(--white) !important;
}

.cookie img {
    max-width: 90px;
    margin: auto;
}

.cookie .content {
    margin: 0px;
    padding: 0 20px;
}

.content h1 {
    color: var(--white);
    font-size: 25px;
    font-weight: 600;
}

.content p {
    color: #FCBA7F;
    margin: 5px 0 20px 0;
    padding: 0px !important;
}

.content a {
    color: #FCBA7F;
    margin: 0px !important;
    padding: 0px !important;
}

.btn-actions {
    display: block;
    align-items: center;
    justify-content: center;
}

.btn-actions .item {
    margin: 0 10px;
}

.btn-actions button {
    padding: 10px 20px;
    background: #FCBA7F;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: var(--white);
    border-radius: 5px;
}

/* Products Page */
.hero,
.blog-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
    background: url("./assets/img/banner/shopping2.jpg") repeat center center / contain;
}

.blog-hero {
    background: url("./assets/img/banner/shopping.jpg") repeat center center / contain;
}

.hero .container-fluid {
    padding: 100px 0;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 0%, .8);
}

.hero .row {
    margin: 0;
    padding: 20px 0;
}

.hero h2 {
    font-weight: bold;
}

.hero p {
    font-size: 1rem;
}

.hero h2,
.hero p {
    color: hsl(0, 0%, 100%);
}

.pagination {
    margin: 100px auto;
}

.pagination a {
    margin: 0 5px;
    /* padding: 10px 20px; */
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    background-color: var(--blue-mad);
    transition: background-color .3s ease;
}

.pagination a:hover {
    background-color: var(--blue);
}

.pagination a i {
    font-size: 1.1rem;
    font-weight: 600;
}

/* -> Single Page Product */
.product-details {
    margin: 33px auto;
    padding: 50px;
}

.product-details div[class^="col"] {
    padding: 0 !important;
}

.big-product {
    margin-bottom: 10px;
    background-color: var(--black-high);
}

.pro-img {
    display: block;
    width: 80%;
    margin: 0 auto;
    transition: all .3s ease;
}

.img-gr .img-col {
    flex-basis: 24%;
    cursor: pointer;
    background-color: var(--black-high);
}

.single-details {
    padding-top: 30px;
}

.single-details h4 {
    padding: 40px 0 20px 0;
}

.single-details h2 {
    font-size: 26px;
}

.single-details select {
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
    outline: none;
}

.single-details input {
    width: 50px;
    height: 47px;
    margin-right: 10px;
    padding-left: 10px;
    font-size: 22px; 
}

.single-details input[type=number]::-webkit-inner-spin-button {
    cursor: pointer;
} 

.single-details input:focus {
    outline: none;
}

.single-details .btn-normal {
    font-size: 20px !important;
    line-height: 20px !important;
    height: 47px !important;
}

.single-details span {
    line-height: 25px;
}

/* Blog */
.blog {
    margin: 100px auto;
}

.blog-post {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px !important;
}

.blog-post:last-child {
    margin-bottom: 0px;
}

.bog-img {
    width: 30%;
}

.bog-img img {
    display: block;
    width: 100%;
    height: auto;
}

.blog-details {
    width: 70%;
    height: auto;
}

.blog-details a {
    position: relative;
    display: block;
    width: 100%;
    color: var(--black-high);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    transition: color .2s ease;
}

.blog-details a::after {
    content: "";
    position: absolute;
    display: block;
    top: 11px;
    left: 100px;
    width: 50px;
    height: 1px;
    background-color: var(--black-high);
}

.blog-details a:hover::after {
    background-color: var(--blue-mad);
}

.blog-details a:hover {
    color: var(--blue-mad);
}

.blog-details h1 {
    position: absolute;
    top: -40px;
    left: 5px;
    color: var(--gray);
    font-size: 70px;
    font-weight: 700;
    z-index: -9;
}

/* About */
.about {
    margin: 50px auto;
}

.about-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: auto;
    background: url("./assets/img/banner/shopping.jpg") repeat center center / contain;
}

.about-head {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 90px;
}

.about-head img {
    display: block;
    width: 100%;
    height: 100%;
}

.who-we-are {
    padding: 0 20px;
}

.accordion-button {
    box-shadow: none !important;
}

.accordion-body {
    color: var(--white) !important;
    background-color: var(--black-high) !important;
}

marquee {
    width: 100%;
    padding: 10px 0;
    color: var(--black-high);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
}

/* .about-us h1 {
    padding: 10px 0;
    font-size: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
} */

.about-us .about-video video {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

/* Contact */
.contact-hero {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    text-align: center;
    background: url("./assets/img/banner/shopping2.jpg") repeat center center / contain;
}

.contact {
    margin: 50px auto;
}

.form-details {
    margin: 50px auto;
}

.form-details .container {
    padding: 40px;
    border: 1px solid var(--gray);
    border-radius: 8px;
}

.details {
    padding: 20px 30px;
}

.details span,
.form form span {
    font-size: 1.3rem;
}

.details h2,
.form form h2 {
    padding: 26px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 35px;
}

.details h3 {
    padding-bottom: 1rem;
    font-size: 1.2rem;
    line-height: 35px;
}

.details li {
    list-style: none;
    display: flex;
    padding: 10px 0;
}

.details li i {
    color: var(--blue);
    font-size: 17px;
    padding-right: 22px;
}

.details li p {
    margin: 0;
    font-size: 17px;
}

.map iframe {
    display: block;
    width: 100% !important;
    height: 100% !important;
}

/*      Contact -> Form */
.form form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.form form input,
.form form textarea {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px 15px;
    outline: none;
    border: 1px solid var(--gray);
    border-radius: 5px !important;
}

.form form textarea {
    resize: none;
}

.form form button {
    color: var(--black-high);
}

.people {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.people div {
    padding-bottom: 25px;
    display: flex;
    align-items: flex-start;
}

.people div img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
    object-fit: cover;
}

.people div p {
    margin: 0;
    font-size: 18px;
    line-height: 25px;
}

.people div p span {
    color: var(--black-high);
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
}

/* Cart */
.cart {
    font-size: 21px;
    margin: 50px auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}

.cart::-webkit-scrollbar,
.cart::-webkit-scrollbar-track,
.cart::-webkit-scrollbar-thumb,
.cart::-webkit-scrollbar-thumb:hover { 
    opacity: 0;
    visibility: hidden;
}

.cart table {
    width: 100% !important;
    border-collapse: collapse !important;
    /* table-layout: auto !important; */
    white-space: nowrap !important;
}

.cart table > *,
.cart table td {
    color: var(--black-high) !important;
}

.cart table > tbody{
    line-height: 70px;
}

.cart table img {
    display: block;
    width: 70px;
    height: 70px;
    line-height: auto;
    margin: 0px auto;
}

.cart table tr td input {
    width: 50px;
    height: 47px;
    line-height: 47px;
    margin-right: 10px;
    padding-left: 10px;
    font-size: 22px; 
}

.cart table tr td input[type=number]::-webkit-inner-spin-button {
    cursor: pointer;
} 

.cart table tr td input:focus {
    outline: none;
}

.cart table td:nth-child(1) {
    display: inline-block;
    width: 100%;
    text-align: center;
}

.cart table td:nth-child(2) {
    width: 150px;
    text-align: center;
}

.cart table td:nth-child(3) {
    width: 250px;
    text-align: center;
}

.cart table td:nth-child(4)
.cart table td:nth-child(5)
.cart table td:nth-child(6) {
    width: 150px;
    text-align: center;
}

.cart table td:nth-child(5) input {
    width: 70px;
    padding: 10px 5px 10px 15px;
}

/* cart p-2 */
.cart-add {
    margin: 50px auto;
}

.cupon h3 {
    padding-bottom: 15px;
}

.cupon input {
    width: 60%;
    margin-right: 10px;
    padding: 10px 20px;
    outline: none;
    border: 1px solid var(--gray);
}

.cupon button,
.subtotal button {
    padding: 12px 20px;
    color: var(--white);
    background-color: var(--black-high);
}

.subtotal {
    padding: 30px;
    border: 1px solid var(--black-high);
    border-radius: 5px;
}

.subtotal table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
}

.subtotal table > *,
.subtotal table td {
    color: var(--black-high) !important;
}

/* Media Queries */
@media screen and (max-width: 1050px) {
    .menu-item {
        margin-left: 10px;
    }

    .container-footer div[class^="col"] {
        border-bottom: 1px solid var(--border-color1);
    }

    .container-footer div[class^="col"]:nth-child(3) {
        padding-top: 50px;
    }
    .container-footer div[class^="col"]:nth-child(3),
    .container-footer div[class^="col"]:nth-child(4) {
        border-bottom: 0px;
    }
    
    .collection .row {
        flex-wrap: wrap !important;
    }

    .blog-post {
        flex-direction: column;
        padding: 0 20px;
    }

    .blog-details h1 {
        left: 20px;
    }
}

@media screen and (max-width: 917px) {
    .menu-item > a {
        padding: 0 10px;
    }

    .copyright * {
        font-size: 1.3rem !important;
    }

    .newsletter {
        padding: 0 0 0 33px;
    }

    .back-to-top {
        right: 1rem;
        bottom: 1rem;
    }

    .cookie {
        width: 300px;
        height: auto;
        margin: 10px;
        padding: 10px;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 5px;
    }

    .cookie img {
        max-width: 40px;
    }

    .cookie p,
    .cookie a,
    .cookie button,
    .content h1 {
        font-size: 18px !important;
    }

    .content a {
        padding-top: 0px !important;
    }

    .btn-actions button {
        padding: 10px;
        font-size: 15px !important;
    }
}

@media screen and (min-width: 819.50px) {
    .menu-item:hover > .sub-menu {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        z-index: 99999;
    }
}

@media screen and (max-width: 819.50px) {
    .container {
        max-width: auto !important;
    }

    .col-md-6 {
        margin: 0 auto;
    }

    .f-nav {
        z-index: 2;
        background-color: var(--body-bg-color) !important;
        backdrop-filter: unset !important;
    }

    .header--main {
        justify-content: space-around;
    }

    .header {
        /* height: 60px; */
    }

    .header--logo {
        margin-left: 50px;
    }

    .open-nav,
    .open {
        display: block !important;
    }

    /* .header {
        position: relative;
    } */

    .menu {
        z-index: 1;
        position: fixed;
        top: 0;
        left: -110%;
        width: 100%;
        height: 100% !important;
        padding: 0px 20px;
        z-index: 999;
        background: var(--bg-color);
        background: var(--bg-gradient-color);
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, 
        rgba(0, 0, 0, 0.09) 0px 4px 2px, 
        rgba(0, 0, 0, 0.09) 0px 8px 4px, 
        rgba(0, 0, 0, 0.09) 0px 16px 8px, 
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
        overflow: auto;
        transition: all .1s ease;
    }

    .menu::-webkit-scrollbar,
    .menu::-webkit-scrollbar-track,
    .menu::-webkit-scrollbar-thumb,
    .menu::-webkit-scrollbar-thumb:hover { 
        opacity: 0;
        visibility: hidden;
    }

    /* @supports (backdrop-filter: blur(1rem)) {
        .menu {
            background: hsl(0 0% 100% / 0.1) !important;
            backdrop-filter: blur(1rem) !important;
        }
    } */

    .menu.active {
        left: -0%;
    }

    .menu.active {
        transition: all .3s ease;
    }

    .ul-menu {
        margin: clamp(50px, 100px, 150px) auto;
    }

    .close-nav {
        color: var(--white);
        font-size: 24px;
        cursor: pointer;
    }

    .menu-item {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding-top: 30px;
    }

    .menu-item a {
        color: var(--black-high);
        font-size: 1.7rem;
        font-weight: bold;
    }

    .menu-item a.active {
        color: var(--blue) !important;
    }

    .menu-item a.active::before {
        all: unset;
    }

    .menu-item > a.active::after {
        content: "";
        position: relative;
        display: block;
        width: 100%;
        height: 3px;
        margin: 0px auto;
        background-color: var(--gray);
        border-radius: 5px;
        opacity: 1;
        transition: background-color .2s ease;    
    }
    

    .menu-item > a:hover {
        color: var(--blue);
        background-color: unset;
    }

    .sub-menu-item a.active {
        color: var(--gray) !important;
    }

    .sub-menu-item a.active::after {
        background-color: var(--gray);
        margin: 0px auto;
    }

    .open-nav{
        width: 40px;
        margin: 0 0 0 10px;
        position: relative;
        color: var(--white-icon);
        font-size: 22px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        display: block;
        z-index: 900;
    }

    /* Hamburger Menu */
    .mobile-menu {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #menu__toggle {
        opacity: 0;
    }
    
    #menu__toggle:checked ~ .menu__btn > span {
        transform: rotate(45deg);
    }
    #menu__toggle:checked ~ .menu__btn > span::before {
        top: 0;
        transform: rotate(0);
    }
    #menu__toggle:checked ~ .menu__btn > span::after {
        top: 0;
        transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
        visibility: visible;
        left: 0;
    }
    
    .menu__btn {
        display: flex;
        justify-content: baseline;
        align-items: center;
        position: absolute;
        width: 26px;
        height: 26px;
        line-height: 26px;
        cursor: pointer;
        z-index: 1;
    }
    
    .menu__btn > span,
    .menu__btn > span::before,
    .menu__btn > span::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--black-high);
        transition-duration: .25s;
    }
    .menu__btn > span::before {
        content: '';
        top: -8px;
    }
    .menu__btn > span::after {
        content: '';
        top: 8px;
    }

    .menu-item .sub-menu {
        transition: none;
    }

    .menu-item > .sub-menu.active {
        position: relative;
        display: block;
        margin: 0;
        padding: 20px 0;
        width: 70%;
        box-shadow: none;
        color: var(--white);
        background-color: var(--nav-drop);
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        z-index: 0;
    }

    .sub-menu.active > li {
        padding: 10px 0;
    }

    a.active-n:hover {
        color: unset !important;
    }
    
    .js-sub_menu {
        font-size: 2rem;
    }

    .js-sub_menu i {
        display: inline-block;
        transition: all .1s ease-in-out;
    }

    .js-sub_menu i.opened {
        transform: rotate(180deg) !important;
    }

    /* Other */

    .carousel-inner,
    .carousel-item img {
        height: 100% !important;
        min-height: 270px !important;
        background: no-repeat center center scroll !important;
        -webkit-background-size: cover !important;
        -moz-background-size: cover !important;
        -o-background-size: cover !important;
        background-size: cover !important;
    }

    .circle-img-inner img {
        margin-top: 30px;
    }

    /* Categories */
    .product-box {
        height: 328px;
        padding: 0;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: repeat(5, minmax(100px, 120px));
        overflow-y: auto;
    }

    .product-box::-webkit-scrollbar,
    .product-box::-webkit-scrollbar-track,
    .product-box::-webkit-scrollbar-thumb,
    .product-box::-webkit-scrollbar-thumb:hover { 
        opacity: 0;
        visibility: hidden;
    }

    /* Products */
    .product-item-inner {
        width: auto;
        min-width: auto;
    }

    .discount {
        top: 2%;
    }

    /* Features */
    .feature {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: -ms-autohiding-scrollbar;
    }

    .feature::-webkit-scrollbar,
    .feature::-webkit-scrollbar-track,
    .feature::-webkit-scrollbar-thumb,
    .feature::-webkit-scrollbar-thumb:hover { 
        opacity: 0;
        visibility: hidden;
    }

    /* Collection */
    .collection .row {
        grid-template-columns: repeat(1, 1fr);
    }

    .collection .container:nth-child(2) .row {
        margin-top: 10px;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 25vh);
    }   
    
    /* Newsletter */
    .n-form input[type="text"] {
        width: 55%;
    }

    /* Footer */
    .footer {
        margin-top: 0px !important;
    }

    .container-footer div[class^="col"] {
        margin-top: 20px;
        padding: 0 auto;
    }

    .container-footer div[class^="col"] {
        padding: 0 20px !important;
    }

    .container-footer div[class^="col"]:nth-child(3) {
        margin-top: 0px;
        padding-top: 50px;
    }

    .footer h4 {
        font-size: 1.5rem;
    }
    
    .footer p,
    .footer a {
        font-size: 1.2rem;
    }

    .social-fllw i {
        padding-right: 0px;
    }

    /* Contact */
    .contact div[class^="col"] {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }

    .form {
        position: relative;
        width: 100%;
        padding-bottom: 50px;
    }

    .details ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .details h3 {
        text-align: center;
    }
    
    .map iframe {
        height: 328px !important;
    }

    /*      Contact -> Form */

    .form-details .container {
        width: 98%;
        border: none;
    }

    .form {
        display: block;
        width: 100%;
        margin: 0 auto;
    }

    .form h3 {
        font-size: 20px;
    }

    .people {
        width: 100%;
        margin: 100px auto 50px auto;
    }

    /* Cart */
    .single-details input,
    .cart table tr td input {
        margin: auto !important;
        padding: 0px !important;
        font-size: auto !important;
        line-height: 47px !important;
    }  

    /* Blog */
    .blog-post {
        margin-bottom: 50px !important;
    }
}

@media screen and (max-width: 768px) {
    .products .row div[class^="col"] {
        width: 50% !important;
    }

    .container-footer div[class^="col"] {
        border: 0px;
    }

    .container-footer div[class^="col"]:nth-child(3) {
        padding-top: 0px;
    }

    .footer h4 {
        font-size: 1.8rem;
    }
    
    .footer p {
        font-size: 1.2rem;
    }
    
    .container-footer div[class^="col"] a, p {
        margin-bottom: 2rem;
        font-weight: 600;
    }

    .go-to-link {
        margin-bottom: 0px;
    }

    .newsletter div[class^="col"] {
        margin: 0px auto;
        justify-content: center;
    }

    /* Cart */
    .cart-add {
        width: 98%;
    }

    .cupon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .cupon div {
        display: flex;
    }

    .subtotal {
        margin: 50px auto;
    }
}

@media screen and (max-width: 600px) {
    .products .row div[class^="col"] {
        width: 80% !important;
    }
}

@media only screen and (max-device-width: 558px), screen and (max-width: 530px) {
    .header--logo {
        margin-left: 10px;
    }

    /* Categories */
    .product-box {
        height: auto !important;
        grid-template-columns: repeat(2, minmax(80px, 1fr)) !important;
        grid-template-rows: repeat(auto-fill, minmax(auto, 1fr)) !important;
        justify-content: center;
        justify-items: space-around;
        gap: 10px;
    }

    .cat-box {
        height: 50px;
    }

    .footer .copyright {
        display: block;
    }

    .by {
        margin: 0;
        display: inline-block;
    }

    /* Products */    
    .discount {
        top: 3%;
    }
}

@media screen and (max-width: 375px) {
    .header--logo {
        margin-left: 0px;
    }
}

@media screen and (max-width: 374px) {
    body {
        min-width: 375px;
    }
}
</style>