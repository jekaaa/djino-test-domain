<template>
    <div class="services-item" @click="set({ field: 'description', value: description })">
        <div class="services__center" v-html="svg"></div>
        <p v-html="text"></p>
    </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
    props: {
        svg: {
            type: String
        },
        text: {
            type: String
        },
        description: {
            type: String
        }
    },
    methods: {
        ...mapActions([
            'set'
        ])
    }
}
</script>

<style scoped>
p {
    font-size: 20px;
    font-weight: normal;
    text-align: center;
}
.services-item {
    margin-right: 1%;
    width: 24%;
    cursor: pointer;
}
.services-item:last-child {
    margin-right: 0;
}
.services__center {
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 720px) {
    .services-item {
         width: 32.333%;
    }
    p {
        font-size: 14px;
    }
}
@media screen and (max-width: 480px) {
    .services-item {
         width: 49%;
    }
}
</style>

