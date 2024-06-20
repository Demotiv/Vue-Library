<template>
    <div class="profile">
        <div class="profile__user-icon">
            <div class="profile__wrapper">
                <div class="profile__logo">{{ userInitials }}</div>
                <div class="profile__name">{{ userId.fullName }}</div>
            </div>
        </div>
        <div class="profile__info">
            <h2>My profile</h2>
        </div>
    </div>
</template>

<script>
// import LibraryCardVisitsInfo from '@/components/library-card/LibraryCardVisitsInfo.vue'

export default {
    props: {
        userId: {
            type: Object,
            default: () => ({})
        },
    },
    data() {
        return {
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
    }
}
</script>

<style lang="scss" scoped>
.profile {
    width: 600px;
    height: 400px;
    display: flex;

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
}
</style>