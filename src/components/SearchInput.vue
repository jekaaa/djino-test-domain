<template>
    <div class="container__search">
        <input type="text" @input="show = false" v-model="text">
        <button class="button__search" @click="show = true">Проверить</button>
        <div v-if="show" class="status__search">
            Домен {{text}} — свободен. <a href="/">Зарегистрировать&nbsp;за&nbsp;39₽</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            text: ''
        }
    }
}
</script>


<style scoped>
.container__search {
    width: 65.666%;
    margin-left: auto;
    margin-right: auto;
    height: 78px;
    position: relative;
}
.container__search input {
    position: relative;
    z-index: 1;
    width: calc(100% - 229px);
    height: 100%;
    font-size: 24px;
    background-color: #FFF;
    color: #333;
    border-radius: 5px;
    border: none;
    padding: 0 191px 0 38px;
    outline: none;
}
.button__search {
    cursor: pointer;
    position: absolute;
    top: 13px;
    right: 13px;
    font-size: 22px;
    font-weight: normal;
    background-color: #5f6062;
    border: none;
    border-radius: 5px;
    color: #FFF;
    padding: 14px 27px;
    outline: none;
    z-index: 2;
}
.button__search:hover {
    background-color: #515255;
}
.status__search {
    position: absolute;
    top: 73px;
    padding: 16px 5px;
    width: calc(100% - 10px);
    color: #f4f7fb;
    background-color: rgba(55, 55, 55, 0.8);
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    z-index: 0;
}
a {
    color: #77b53c;
    border-bottom: solid 1px #77b53c; 
    text-decoration: none;
}
@media screen and (max-width: 720px) { 
    .container__search {
        width: 90%;
    }
}
@media screen and (max-width: 520px) {
    .button__search {
        top: 10px;
        right: 10px;
        font-size: 18px;
        padding: 10px 20px;
    }
    .container__search {
        width: 100%;
        height: 62px;
    }
    .status__search {
        top: 57px;
        padding: 10px 5px;
    }
    .container__search input {
        width: calc(100% - 179px);
        font-size: 20px;
        padding: 0 151px 0 28px;
    }
}
</style>
