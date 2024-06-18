<template>
    <div 
        class="user-profile" 
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
            require: true
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
    methods: {
        toogleDropDown() {
            this.$emit('toogle-drop-down')
        },
        userIcon() {
            this.userInitials = this.userId.firstName[0] + this.userId.lastName[0]
        }
    },
    watch: {
        userIn(newValue) {
            if (newValue) {
                this.userIcon()
            }
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
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: $white;
}
</style>