<template>
    <transition name="slide">
        <div class="drop-menu-profile" v-if="onDropDown">
            <div class="drop-menu-profile__header">
                <h2>{{ guest.h2 }}</h2>
                <div/>
            </div>
            <div class="drop-menu-profile__body">
                <a href="#" 
                    @click.prevent="handleLoginClick">{{ guest.login }}</a>
                <a href="#"
                    @click.prevent="handleRegisterClick">{{ guest.register }}</a>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        onDropDown: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            guest: {
                h2: 'Profile',
                login: 'Log in',
                register: 'Register'
            }
        }
    },
    methods: {
        handleLoginClick() {
            this.$emit('update:onDropDown', false)
            this.$emit('open-login')
        },
        handleRegisterClick() {
            this.$emit('update:onDropDown', false)
            this.$emit('open-register')
        }
    }
}
</script>

<style lang="scss" scoped>
.drop-menu-profile {
    position: absolute;
    top: 90px;
    right: 20px;
    z-index: 2;

    @include tablet {
        right: 80px;
    }

    width: 80px;
    height: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: $white;

    &__header {
        padding-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

        & h2 {
            font-family: $inter;
            font-weight: 700;
            font-size: 15px;
            line-height: 133%;
            color: $black;
        }

        & div {
            border: 1px solid $sand;
            width: 40px;
            height: 0px;
        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        & a {
            font-family: $inter;
            font-weight: 400;
            font-size: 15px;
            line-height: 133%;
            color: $black;

            &:hover {
                color: $sand;
            }
        }
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease;
    transform: translateY(0);
}

.slide-enter,
.slide-leave-to {
    transition: transform 0.5s ease;
    transform: translateY(-300%);
}
</style>