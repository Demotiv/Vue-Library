<template>
    <div class="library-login">
        <h2 
            class="library-login__title"
            >{{ userIn ? libraryForUser.title : libraryLogin.title }}</h2>
        <p 
            class="library-login__p"
            >{{ userIn ? libraryForUser.p : libraryLogin.p }}</p>
        <div 
            class="library-login__btns"
            v-if="userIn">
            <button @click="handleOpenProfile">{{ libraryForUser.button }}</button>
        </div>
        <div 
            class="library-login__btns"
            v-else>
            <button
                @click="handleRegisterClick">{{ libraryLogin.buttons.singUp }}</button>
            <button
                @click="handleLoginClick">{{ libraryLogin.buttons.login }}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userIn: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            libraryLogin: {
                title: 'Get a reader card',
                p: `You will be able to see a reader card after 
                    logging into account or you can register a new account`,
                buttons: {
                    singUp: 'Sign Up',
                    login: 'Log in'
                }
            },
            libraryForUser: {
                title: 'Visit your profile',
                p: `With a digital library card you get 
                free access to the Library’s wide array 
                of digital resources including e-books, 
                databases, educational resources, and more.`,
                button: 'Profile'
            }
        }
    },
    methods: {
        handleRegisterClick() {
            this.$emit('open-register')
        },
        handleLoginClick() {
            this.$emit('open-login')
        },
        handleOpenProfile() {
            this.$emit('open-profile')
        }
    }
}
</script>

<style lang="scss" scoped>
.library-login {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 35px;

    @include tablet {
        align-items: center;
    }

    &__title {
        font-family: $forum;
        font-weight: 400;
        font-size: 30px;
        letter-spacing: 0.02em;
        color: $black;
    }

    &__p {
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 200%;
        letter-spacing: 0.02em;
        text-align: right;
        color: $black;

        @include tablet {
            text-align: center;
        }
    }

    &__btns {
        display: flex;
        gap: 20px;

        & button {
            width: 75px;
            height: 30px;
            font-family: $inter;
            font-weight: 700;
            font-size: 10px;
            letter-spacing: 0.1em;
            text-align: center;
            color: $dark;
            border: 1px solid $dark;
            border-radius: 2px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;

            &:hover {
                background-color: $sand;
            }
        }
    }
}
</style>