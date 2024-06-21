<template>
    <transition name="slide">
        <div 
            class="drop-menu-profile" 
            v-if="onDropDown"
            v-clickaway="closeDropMenu">
            <div class="drop-menu-profile__header">
                <h2 
                v-if="userIn"
                style="font-size: 12px;">{{ user.h2 }}</h2>
                <h2 v-else>{{ guest.h2 }}</h2>
                <div/>
            </div>
            <div class="drop-menu-profile__body">
                <template v-if="userIn">
                    <a href="#" 
                        @click.prevent="handleProfileClick">{{ user.myProfile }}</a>
                    <a href="#"
                        @click.prevent="handleLogOutClick">{{ user.logOut }}</a>
                </template>
                <template v-else>
                    <a href="#" 
                        @click.prevent="handleLoginClick">{{ guest.login }}</a>
                    <a href="#"
                        @click.prevent="handleRegisterClick">{{ guest.register }}</a>
                </template>
            </div>
        </div>
    </transition>
</template>

<script>
import { directive as Clickaway } from 'vue-clickaway'

export default {
    directives: {
        Clickaway
    },
    props: {
        onDropDown: {
            type: Boolean,
            default: false
        },
        userIn: {
            type: Boolean,
            default: false
        },
        userId: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            guest: {
                h2: 'Profile',
                login: 'Log in',
                register: 'Register'
            },
            user: {
                h2: '',
                myProfile: 'My profile',
                logOut: 'Log Out'
            }
        }
    },
    watch: {
        userId: {
            handler(newVal) {
                if (newVal.cardNumber) {
                    this.user.h2 = newVal.cardNumber
                } else {
                    this.user.h2 = ''
                }
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
        },
        handleProfileClick() {
            this.$emit('update:onDropDown', false)
            this.$emit('open-profile')
        },
        handleLogOutClick() {
            this.$emit('update:onDropDown', false)
            this.$emit('log-out')
        },
        closeDropMenu() {
            if (this.onDropDown) {
                this.$emit('click-out-side-drop-menu')
            }
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