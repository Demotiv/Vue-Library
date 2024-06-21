<template>
    <transition name="descent">
        <div 
            class="profile"
            v-if="profileModal"
            v-clickaway="closeProfile">
            <img 
                :src="closeBtn.src" 
                :alt="closeBtn.alt" 
                @click="$emit('close-profile')">
            <div class="profile__user-icon">
                <div class="profile__wrapper">
                    <div class="profile__logo">{{ userInitials }}</div>
                    <div class="profile__name">{{ userId.fullName }}</div>
                </div>
            </div>
            <div class="profile__info">
                <h2>{{ title }}</h2>
                <LibraryCardVisitsInfo
                    :user-in="userIn"
                    :user-id="userId"/>
                <ModalProfileBooksContainer :user-id="userId"/>
                <ModalProfileCardNumber :user-id="userId"/>
            </div>
        </div>
    </transition>   
</template>

<script>
import { directive as Clickaway } from 'vue-clickaway'
import closeBtn from '@/assets/img/modal/close_btn.png'
import LibraryCardVisitsInfo from '@/components/library-card/LibraryCardVisitsInfo.vue'
import ModalProfileBooksContainer from '@/components/modal/profile/ModalProfileBooksContainer.vue';
import ModalProfileCardNumber from '@/components/modal/profile/ModalProfileCardNumber.vue'

export default {
    directives: {
        Clickaway
    },
    components: {
        LibraryCardVisitsInfo,
        ModalProfileBooksContainer,
        ModalProfileCardNumber
    },
    props: {
        userIn: {
            type: Boolean,
            default: false
        },
        userId: {
            type: Object,
            default: () => ({})
        },
        profileModal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            title: 'My profile',
            userInitials: '',
            closeBtn: {
                src: closeBtn,
                alt: 'close-btn'
            },
        }
    },
    watch: {
        userId: {
            handler(newVal) {
                if (newVal['first-name'] && newVal['last-name']) {
                    this.userInitials = `${newVal['first-name'].charAt(0)}${newVal['last-name'].charAt(0).toUpperCase()}`
                } else {
                    this.userInitials = ''
                }
            },
            immediate: true
        }
    },
    methods: {
        closeProfile() {
            if (this.profileModal) {
                this.$emit('click-out-side-profile')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.profile {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    display: flex;
    background-color: $white;
    z-index: 3;

    & img {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    &__wrapper {
        margin: 0px 25px 0px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    &__user-icon {
        display: flex;
        align-items: center;
        background-color: $black;
    }

    &__logo {
        width: 80px;
        height: 80px;
        align-content: center;
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        text-transform: capitalize;
        text-align: center;
        color: $sand;
        background-color: $white;
    }

    &__name {
        width: 120px;
        height: 30px;
        align-content: center;
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        text-transform: uppercase;
        text-align: center;
        color: $black;
        text-transform: capitalize;
        background-color: $white;
    }

    &__info {
        padding: 40px 60px 39px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        & h2 {
            font-family: $forum;
            font-weight: 400;
            font-size: 40px;
            line-height: 50%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: $black;
        }
    }

    ::v-deep .visit-info {
        padding-top: 20px;
        gap: 20px;

        & div {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        & span:first-child {
            font-size: 20px;
            line-height: 100%;
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