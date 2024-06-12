<template>
    <div class="library-login">
        <h2 class="library-login__title">{{ libraryLogin.title }}</h2>
        <p class="library-login__p" v-html="libraryLogin.p"></p>
        <div class="library-login__btns">
            <button>{{ libraryLogin.buttons.singUp }}</button>
            <button>{{ libraryLogin.buttons.login }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            libraryLogin: {
                title: 'Get a reader card',
                p: '',
                buttons: {
                    singUp: 'Sign Up',
                    login: 'Log in'
                }
            },
            windowWidth: 0
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    },
    watch: {
    windowWidth(newWidth) {
      if (newWidth <= 768) {
        this.libraryLogin.p = `You will be able to see a reader card after 
            logging into 
            <br> 
            account or you can register a new account`
      } else {
        this.libraryLogin.p = `You will be able to see a reader card after 
            logging into account or you can register a new account`
      }
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