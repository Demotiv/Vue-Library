<template>
    <div 
        class="user-profile"
        ref="userProfile"
        @click="toogleDropDown"
        @mouseover="getFullName"
        v-if="userIn">{{ userInitials }}</div>
    <div 
        class="guest-profile"
        v-else
        @click="toogleDropDown">
        <img 
            :src="image.src" 
            :alt="image.alt">
    </div>
</template>

<script>
import img from '@/assets/img/header/icon-profile.png'

export default {
    props: {
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
            image: {
            src: img,
            alt: 'icone-profile'
            },
            userInitials: ''
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
        },
        userIn(newVal) {
            if (!newVal) {
                this.userInitials = ''
            }
        }
    },
    methods: {
        toogleDropDown() {
            this.$emit('toogle-drop-down')
        },
        getFullName() {
            const userProfile = this.$refs.userProfile
            userProfile.setAttribute('title', this.userId.fullName)
        }
    }
}
</script>

<style lang="scss" scoped>
.guest-profile {
    z-index: 3;
    cursor: pointer;
}

.user-profile {
    text-align: center;
    align-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: $white;
    z-index: 3;
    cursor: pointer;
}
</style>