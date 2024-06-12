<template>
    <div id="header">
        <HeaderLogo/>
        <div class="nav-n-profile">
            <NavigationBlock/>
            <UserProfile/>
            <HeaderHamburger/>
        </div>
    </div>
</template>

<script>
import HeaderLogo from '@/components/header/HeaderLogo.vue'
import NavigationBlock from '@/components/header/NavigationBlock.vue'
import UserProfile from '@/components/header/UserProfile.vue'
import HeaderHamburger from '@/components/header/header-tablet/HeaderHamburger.vue'

export default {
    components: {
        HeaderLogo,
        NavigationBlock,
        UserProfile,
        HeaderHamburger,
    }
}
</script>

<style lang="scss" scoped>
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: $dark;
}

.nav-n-profile {
    display: flex;
    align-items: center;
    gap: 40px;
}

HeaderHamburger {
    display: none;
}
</style>