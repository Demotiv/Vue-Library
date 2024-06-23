<template>
    <div id="favorites">
        <TitleComponent :title="favorites.title"/>
        <FavoritesBtns @season-changed="currentSeason = $event"/>
        <FavoritesBooksWrapper 
            :current-season="currentSeason"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
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
        },
        userId: {
            type: Object,
            default: () => ({})
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