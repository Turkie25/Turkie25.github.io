<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/Styles/style.css">
    <link rel="stylesheet" href="./assets/Styles/style-mobile.css">
    <title>Slijpen Autos</title>
</head>

<body>

    <header>
        <h1>Slijpen Auto's</h1>
    </header>


    <section id="Home">
        <h1 class="h1Home">Welkom bij Slijpen Auto's</h1>
        <p class="pHome">Uw vertrouwde partner voor auto reparatie</p>

        <button class="contactButton">
            <lord-icon class="PhoneIcon" src="https://cdn.lordicon.com/srsgifqc.json" trigger="loop" delay="2000"
                colors="primary:#ffffff">
            </lord-icon>
            Contacteer Ons</button>
    </section>


    <main>
        <section id="Openingstijden">

            <div class="openingTimesCard">

                <h2 class="OtijdenH2"><lord-icon class="ClockIcon" src="https://cdn.lordicon.com/kgdqzapd.json"
                        trigger="loop" delay="2000" colors="primary:#ffffff">
                    </lord-icon> Openingstijden</h2>

                <br>
                <?php
                include './assets/OpeningsTijden.php';
                
                foreach ($opening_Tijden as $day => $time) {
                    echo '<div class="day">' . $day . '</div>';
                    echo '<div class="times">' . $time . '</div>';
                }
                ?>
            </div>



            <div class="googleMap">
                <h2 class="GoogleH2"><i class="fa-solid fa-location-dot LocatieIcon"></i> Locatie</h2>
                <br><br>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.347221832723!2d6.160062777327758!3d51.37829617178429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c75ac8dd1f357b%3A0xe86c6660c63d2e15!2sRudolf%20Dieselweg%2032%2C%205928%20RA%20Venlo!5e0!3m2!1snl!2snl!4v1704649407412!5m2!1snl!2snl"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>


        </section>

        <section id="services">
            <h2>Onze Diensten</h2>

            <img src="./assets/images/_240bf4b7-6c3c-4612-9b66-cd86d39c6464.jpg" alt="">

            <div class="ServiceList">
                <p>Wij bieden een breed scala aan diensten aan voor uw auto. <i class="fa-solid fa-arrow-down"></i></p>
                <br>
                <div class="listP">
                    <p><i class="fa-solid fa-gear"></i> Kleine & grote reparaties</p>
                    <p><i class="fa-solid fa-droplet"></i> Oliebeurten</p>
                    <p><i class="fa-solid fa-fire"></i> Bouggie's verwisselen</p>
                    <p><i class="fa-solid fa-car"></i> Banden en wielen</p>
                    <p><i class="fa-solid fa-euro"></i> Inkoop van auto's</p>
                    <p><i class="fa-solid fa-hand"></i> Vrijwaren</p>
                    <p><i class="fa-solid fa-thumbs-up"></i> Prosfessionele service</p>
                </div>
            </div>
        </section>

        <section id="Bezoeken">
            <div class="banner">
                <div class="BannerText">
                    <h2>Wilt u op een ander tijdstip op locatie langskomen?</h2>
                    <p>Neem dan contact met ons op via de de telefoon.</p>
                </div>
                <button class="contactButton">
                    <lord-icon class="PhoneIcon" src="https://cdn.lordicon.com/srsgifqc.json" trigger="loop"
                        delay="2000" colors="primary:#ffffff">
                    </lord-icon>
                    0643666309</button>
            </div>
        </section>

    </main>

    <footer>
        <p>&copy; 2024 Slijpen Auto's. All rights reserved.</p>
    </footer>

</body>
<script src="https://cdn.lordicon.com/lordicon.js"></script>
<script src="https://kit.fontawesome.com/172475f835.js" crossorigin="anonymous"></script>

</html>