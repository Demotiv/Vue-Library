<template>
    <div id="favorites">
        <TitleComponent :title="favorites.title"/>
        <FavoritesBtns @season-changed="currentSeason = $event"/>
        <FavoritesBooksWrapper :current-season="currentSeason"/>
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