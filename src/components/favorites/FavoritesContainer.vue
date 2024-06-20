<template>
    <div id="favorites">
        <TitleComponent :title="favorites.title"/>
        <FavoritesBtns @season-changed="currentSeason = $event"/>
        <FavoritesBooksWrapper 
            :current-season="currentSeason"
            :user-in="userIn"
            @open-login="$emit('open-login')"/>
    </div>
</template>

<script>
import TitleComponent from '@/components/shared/TitleComponent.vue'
import FavoritesBtns from '@/components/favorites/FavoritesBtns.vue'
import FavoritesBooksWrapper from '@/components/favorites/FavoritesBooksWrapper.vue'

export default {
    components: {
        TitleComponent,
        FavoritesBtns,
        FavoritesBooksWrapper,
    },
    props: {
        userIn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            favorites: {
                title: 'Favorites'
            },
            currentSeason: 'winter'
        }
    }
}
</script>


<style lang="scss" scoped>
#favorites {
    padding: 20px;
}
</style>