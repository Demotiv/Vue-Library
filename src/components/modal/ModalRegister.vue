<template>
    <transition name="descent">
        <div 
            class="modal-register" 
            id="register"
            v-if="registerModal">
        <img 
            :src="closeBtn.src" 
            :alt="closeBtn.alt"
            @click="$emit('close-register')">
        <div class="modal-register__wrapper">
            <h2>{{ registerForm.title }}</h2>
            <form 
                action="#" 
                method="get" 
                class="modal-register__form"
                @submit="handleRegister">
                <label for="first-name">{{ registerForm.firstName }}</label>
                <input 
                    type="text" 
                    name="first-name" 
                    id="first-name" 
                    pattern="[A-Za-z]+"
                    required>
                <label for="last-name">{{ registerForm.lastName }}</label>
                <input 
                    type="text" 
                    name="last-name" 
                    id="last-name" 
                    pattern="[A-Za-z]+"
                    required>
                <label for="email-register">{{ registerForm.email }}</label>
                <input 
                    type="email"
                    name="email"
                    id="email-register"
                    required>
                <label for="password-register">{{ registerForm.password }}</label>
                <input 
                    type="password" 
                    name="password"
                    id="password-register"
                    pattern="^[A-Za-z0-9]{8,}$"
                    required>
                <button>{{ registerForm.button }}</button>
            </form>
        </div>
        <div class="modal-register__login-link">
            <p>{{ loginLink.p }}</p>
            <a 
                @click.prevent="toggleModal('login')"
                :href="`#${loginLink.link}`">{{ loginLink.login }}</a>
        </div>
    </div>
    </transition>
</template>

<script>
import closeBtn from '@/assets/img/modal/close_btn.png'
import { addUserData } from '@/storage'

export default {
    props: {
        registerModal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            closeBtn: {
                src: closeBtn,
                alt: 'close-btn'
            },
            registerForm: {
                title: 'Register',
                firstName: 'First name',
                lastName: 'Last name',
                email: 'E-mail',
                password: 'Password',
                button: 'Sign Up'
            },
            loginLink: {
                p: 'Already have an account?',
                login: 'Login',
                link: 'login'
            }
        }
    },
    methods: {
        toggleModal(modal) {
            this.$emit('toggle-modal', modal)
        },
        handleRegister(event) {
            event.preventDefault()

            const form = event.target
            const formData = new FormData(form)
            const userData = Object.fromEntries(formData.entries())

            const randomCardNumber = Math.floor(Math.random() * 0x1000000000).toString(16).padStart(9, '0').toUpperCase()
            const randomBonuses = Math.floor(1000 + Math.random() * 9000)

            userData.cardNumber = randomCardNumber
            userData.bonuses = randomBonuses
            
            addUserData(userData.email, userData)

            const userId = userData

            this.$emit('close-register')

            form.reset()

            this.$emit('user-in', userId)
        }
    }     
}
</script>

<style lang="scss" scoped>
.modal-register {
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

    &__login-link {
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