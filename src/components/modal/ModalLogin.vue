<template>
    <transition name="descent">
        <div 
            class="modal-login" 
            id="login"
            v-if="loginModal"
            v-clickaway="closeLogin">
            <img 
                :src="closeBtn.src" 
                :alt="closeBtn.alt" 
                @click="$emit('close-login')">
            <div class="modal-login__wrapper">
                <h2>{{ loginForm.title }}</h2>
                <form 
                    action="#" 
                    method="get" 
                    class="modal-login__form"
                    @submit="handleLogin">
                    <label for="email-login">{{ loginForm.email }}</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email-login" 
                        required>
                    <label for="password-login">{{ loginForm.password }}</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password-login" 
                        required>
                    <button>{{ loginForm.button }}</button>
                </form>
            </div>
            <div class="modal-login__register-link">
                <p>{{ registerLink.p }}</p>
                <a 
                    @click.prevent="toggleModal('register')"
                    :href="`#${registerLink.link}`">{{ registerLink.register }}</a>
            </div>
        </div>
    </transition>
</template>

<script>
import closeBtn from '@/assets/img/modal/close_btn.png'
import { getUserByEmail } from '@/storage'
import { increaseVisitsCounter } from '@/storage'
import { directive as Clickaway } from 'vue-clickaway'

export default {
    directives: {
        Clickaway
    },
    props: {
        loginModal: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            closeBtn: {
                src: closeBtn,
                alt: 'close-btn'
            },
            loginForm: {
                title: 'LOGIN',
                email: 'E-mail or readers card',
                password: 'Password',
                button: 'Log In'
            },
            registerLink: {
                p: 'Don’t have an account?',
                register: 'Register',
                link: 'register'
            }
        }
    },
    methods: {
        toggleModal(modal) {
            this.$emit('toggle-modal', modal)
        },
        closeLogin() {
            if (this.loginModal) {
                this.$emit('click-out-side-login-modal')
            }
        },
        handleLogin(event) {
            event.preventDefault()

            const form = event.target
            const formData = new FormData(form)
            const userData = Object.fromEntries(formData.entries())

            const userId = getUserByEmail(userData.email)

            if (userId.email === userData.email && userId.password === userData.password) {
                this.$emit('close-login')
                this.$emit('user-in', userId)

                increaseVisitsCounter(userData.email)

                form.reset()
            } else {
                alert('Неверный адрес электронной почты или пароль')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.modal-login {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 25px 20px 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: $white;
    z-index: 3;

    & img {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        & h2 {
            font-family: $forum;
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: $black;
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-family: $inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 133%;
        letter-spacing: 0.02em;
        color: $black;

        & input {
            width: 200px;
            height: 20px;
        }

        & button {
            width: 75px;
            height: 30px;
            margin-top: 10px;
            font-weight: 700;
            font-size: 10px;
            letter-spacing: 0.1em;
            text-align: center;
            color: $dark;
            border: 1px solid $dark;
            border-radius: 2px;
            cursor: pointer;

            &:hover {
                background-color: $sand;
            }
        }
    }

    &__register-link {
        display: flex;
        gap: 10px;
        font-family: $inter;
        font-weight: 400;
        font-size: 10px;
        color: $black;

        & a {
            font-family: $inter;
            font-weight: 700;
            font-size: 10px;
            letter-spacing: 0.1em;
            text-decoration: underline;
            text-decoration-skip-ink: none;
            text-align: center;
            color: $dark;

            &:hover {
                color: $sand;
            }
        }
    }
}

.descent-enter-active, 
.descent-leave-active { 
    transition: opacity 0.5s ease;
    opacity: 1;
} 
.descent-enter, 
.descent-leave-to { 
    transition: opacity 0.5s ease;
    opacity: 0;
}
</style>