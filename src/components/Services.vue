<template>
    <div class="container___services">
        <Dots :activeIndex="1" />
        <div class="container__grid">
            <Logo :colorLogo="'#b22725'" :color="'#333'" :top="'-68px'"/>
            <h3>Зарегистрировав у нас домен, вы&nbsp;получите</h3>
            <div class="container__services-items">
                <Card v-for="service of servicesTop" 
                      :text="service.text" 
                      :svg="service.svg" 
                      :description="service.description" 
                      :key="service.id"
                />
                <div class="services__description">
                    <p>{{description}}</p>
                </div>
                <Card v-for="service of servicesBottom" 
                      :text="service.text" 
                      :svg="service.svg" 
                      :description="service.description" 
                      :key="service.id"
                />
            </div>
            <ButtonCreate />
        </div>
    </div>
</template>

<script>
import { 
    SITE_SVG,
    DNS_SVG,
    CERTIFICATE_SVG,
    AUTORENEWAL_SVG,
    CLOUD_SVG,
    SSL_SVG,
    DNSSEC_SVG,
    REDIRECT_SVG
} from "@/const/svg"
import { 
    SITE_DESCRIPTION,
    DNS_DESCRIPTION,
    CERTIFICATE_DESCRIPTION,
    AUTORENEWAL_DESCRIPTION,
    CLOUD_DESCRIPTION,
    SSL_DESCRIPTION,
    DNSSEC_DESCRIPTION,
    REDIRECT_DESCRIPTION
} from "@/const/description"
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            servicesTop: [
                {
                    text: 'Сайт-визитка',
                    svg: SITE_SVG,
                    description: SITE_DESCRIPTION
                },
                {
                    text: 'Поддержка DNS',
                    svg: DNS_SVG,
                    description: DNS_DESCRIPTION
                },
                {
                    text: 'Сертификат о&nbsp;владении доменом',
                    svg: CERTIFICATE_SVG,
                    description: CERTIFICATE_DESCRIPTION
                },
                {
                    text: 'Автопродление',
                    svg: AUTORENEWAL_SVG,
                    description: AUTORENEWAL_DESCRIPTION
                }
            ],
            servicesBottom: [
                {
                    text: 'Облачное хранилище на&nbsp;20&nbsp;Гб',
                    svg: CLOUD_SVG,
                    description: CLOUD_DESCRIPTION
                },
                {
                    text: 'Бесплатный SSL-сертификат',
                    svg: SSL_SVG,
                    description: SSL_DESCRIPTION
                },
                {
                    text: 'DNSSEC в один клик',
                    svg: DNSSEC_SVG,
                    description: DNSSEC_DESCRIPTION
                },
                {
                    text: 'Перенаправление',
                    svg: REDIRECT_SVG,
                    description: REDIRECT_DESCRIPTION
                }
            ]
        }
    },
    computed: {
        ...mapGetters([
            'description'
        ])
    },
    components: {
        Card: () => import('./ServiceCard'),
        ButtonCreate: () => import('./ButtonCreate'),
        Logo: () => import('./Logo'),
        Dots: () => import('./Dots')
    }
}
</script>

<style>
h3 {
    margin-bottom: 60px;
}
.container___services {
    position: relative;
    width: 100%;
    background-color: #FFF;
    padding: 95px 0 86px 0;
}
.container__services-items {
    display: flex;
    flex-wrap: wrap;
}
.services__description {
    width: 100%;
    font-size: 16px;
    font-weight: normal;
    background-color: rgb(247, 247, 247);
    border: solid 1px rgb(175, 175, 175);
    border-radius: 8px;
    margin-bottom: 35px;
}
.services__description p {
    padding: 0 35px;
}
@media screen and (max-width: 859px) {
    h3 {
        font-size: 30px;
    }
}
@media screen and (max-width: 720px) {
    h3 {
        font-size: 23px;
        margin: 0 0 50px 0;
    }
}
@media screen and (max-width: 480px) {
    h3 {
        font-size: 20px;
        margin: 0 0 45px 0;
    }
    .services__description {
        font-size: 12px;
    }
    .services__description p {
        padding: 0 20px;
    }
}
</style>
