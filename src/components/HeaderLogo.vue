<template>
    <div class="header-logo__wrapper">
        <img class="header-logo" style="height: 60px" src="@/assets/images/logo.svg" alt="Prosto Loft">
        <div class="header-logo__content">
            <p class="header-logo__title">
                Prosto Loft
            </p>
            <p class="header-logo__caption">
                Мастерская современной мебели
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderLogo"
}
</script>

<style lang="scss" scoped>
.header-logo {
    display: block;
    margin-right: 10px;    
    padding-right: 10px;
    border-right: 3px solid #000;

    &__wrapper {
        display: flex;
        flex-direction: row;
    }

    &__content {
        display: flex;
        flex-direction: column;
    }

    &__title {
        margin: 0;
        font-size: 20px;
        line-height: 1.2;
        font-weight: bold;
        text-transform: uppercase;
    }

    &__caption {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;
    }
}
</style>