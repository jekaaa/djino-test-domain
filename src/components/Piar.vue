<template>
    <div class="container__piar">
        <Dots :activeIndex="2" />
        <div class="container__grid">
            <Logo :top="'-70px'" />
            <h3>Почему стоит выбрать «Джино»?</h3>
            <h2>«Джино» более 18 лет на рынке, имеет&nbsp;270 000 довольных клиентов, собственную&nbsp;панель управления и&nbsp;многое&nbsp;другое.</h2>
            <ButtonCreate />
            <div class="container__plus">
                <p>Вы получите <b>1000 баллов</b> в системе лояльности <a href="/">Джино.Плюсы</a>, зарегистрировавшись в течении <b>24 часов</b> после посещения данной страницы</p>
                <h2 class="logo__plus">
                    <span>1000</span>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="35" height="35"><path fill="#FFF" d="M511.874 201.258l-2.316 82.488c0 7.91-8.107 16.95-16.213 16.95l-186.452 9.04-22.004 180.795c-1.158 9.04-9.265 16.95-19.687 16.95L185.294 512c-9.265 0-16.213-6.78-15.055-15.82l22.004-179.665-176.029 9.04c-9.265 0-16.213-6.78-16.213-15.82l3.474-81.358c1.158-9.04 8.107-18.08 17.371-18.08l185.294-9.04 22.004-180.795c1.158-9.04 9.265-15.82 19.687-16.95l79.908-3.39c9.265-1.13 16.213 5.65 15.055 14.69l-23.162 179.665 177.187-9.04c9.264.001 16.213 6.781 15.055 15.821z"/></svg>
                </h2>
            </div>
            <div class="confidential__piar">
                © «<a href="/">Джино</a>», 2003–2017. «Джино» является зарегистрированным товарным знаком. Лицензия на телематические услуги связи № 97495 от 09.03.2012. <a href="/">Правовая информация</a>.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        ButtonCreate: () => import('./ButtonCreate'),
        Logo: () => import('./Logo'),
        Dots: () => import('./Dots')
    }
}
</script>


<style scoped>
.container__piar {
    position: relative;
    width: 100%;
    background-image: url('../assets/background2.jpg');
    background-size: cover;
    background-position: center;  
    color: #FFF;
    padding: 95px 0 50px 0;
}
h3 {
    margin: 0;
}
h2 {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 90px 0 18px 0;
}
h2 svg {
    margin-left: 9px;
}
.logo__plus {
    display: flex;
    align-items: center;
    margin: 30px 34px;
}
.container__plus {
    display: flex;
    width: 100%;
    margin-top: 40px;
    background-color: #df4a5e;
}
a {
    color: #FFF;
    text-decoration: none;
    border-bottom: solid 1px #FFF;
}
p {
    font-size: 22px;
    font-weight: normal;
    margin: 30px 0 30px 36px;
    border-right: solid 1px #e56e7e;
}
.confidential__piar {
    margin-top: 40px;
    opacity: 0.3;
    font-weight: normal;
}
@media screen and (max-width: 859px) {
    h3 {
        font-size: 28px;
    }
    h2 {
        font-size: 40px;
        margin: 70px 0 15px 0;
    }
    p {
        font-size: 19px;
    }
}
@media screen and (max-width: 720px) {
    h3 {
        font-size: 23px;
    }
    h2 {
        font-size: 27px;
        margin: 50px 0 12px 0;
    }
    p {
        font-size: 18px;
        margin: 36px 30px;
        border: none;
    }
    .logo__plus {
        display: none;
    }
    .confidential__piar {
        margin-top: 30px;
        font-size: 11px;
    }
}
@media screen and (max-width: 480px) {
    h3 {
        font-size: 17px;
    }
    h2 {
        font-size: 19px;
        margin: 40px 0 10px 0;
    }
    p {
        font-size: 13px;
        margin: 20px;
        border: none;
    }
    .confidential__piar {
        margin-top: 20px;
    }
}
</style>
