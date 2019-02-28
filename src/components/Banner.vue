<template>
    <div class="container__banner">
        <Dots :activeIndex="0" />
        <div class="container__grid">
            <Logo :fontWeight="'bold'" />
            <h4>Только до 31 января</h4>
            <h1>Честная цена за&nbsp;домен&nbsp;.RU&nbsp;–&nbsp;39&nbsp;₽</h1>
            <SeacrhInput />
            <ButtonCreate :marginTop="'80px'" />
            <div class="banner__arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        SeacrhInput: () => import('./SearchInput'),
        ButtonCreate: () => import('./ButtonCreate'),
        Logo: () => import('./Logo'),
        Dots: () => import('./Dots')
    }
}
</script>


<style scoped>
.container__banner {
    position: relative;
    padding: 35px 0 62px 0;
    width: 100%;
    background-image: url('../assets/background1.jpg');
    background-size: cover;
    background-position: center;  
}
h4 {
    margin-top: 0;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
}
h1 {
    margin: 100px 0 60px 0;
    text-align: center;
    color: #FFF;
    font-family: "PT Sans Caption", Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 80px;
}
.banner__text span {
    font-size: 19px;
}
.banner__arrow {
    width: 33px;
    height: 50px;
    background: url('../assets/down.png') no-repeat;
    margin: 135px auto 0 auto;
}
@media screen and (max-width: 859px) {
    h1 {
        margin: 80px 0 50px 0;
        font-size: 68px;
    }        
    .banner__arrow {
        margin: 105px auto 0 auto;
    }
}
@media screen and (max-width: 720px) {
    h1 {
        margin: 70px 0 45px 0;
        font-size: 44px;
    }
    .banner__arrow {
        margin: 85px auto 0 auto;
    } 
}
@media screen and (max-width: 480px) {
    h1 {
        margin: 60px 0 40px 0;
        font-size: 30px;
    }
    h4 {
        margin-top: 14px;
        font-size: 10px;
    }  
    .banner__arrow {
        margin: 75px auto 0 auto;
    }
}
</style>

