<template>
    <div class="favorites-books-wrapper">
        <transition name="fade">
            <FavoritesWinterBooks 
                v-if="currentSeason === 'winter'"
                :user-in="userIn"
                :user-id="userId"
                :current-season="currentSeason"
                @update-new-user-id="$emit('update-new-user-id', $event)"
                @open-login="$emit('open-login')"
                @open-buy-card="$emit('open-buy-card')"/>
            <FavoritesSpringBooks 
                v-else-if="currentSeason === 'spring'"
                :user-in="userIn"
                :user-id="userId"
                :current-season="currentSeason"
                @update-new-user-id="$emit('update-new-user-id', $event)"
                @open-login="$emit('open-login')"
                @open-buy-card="$emit('open-buy-card')"/>
            <FavoritesSummerBooks 
                v-else-if="currentSeason === 'summer'"
                :user-in="userIn"
                :user-id="userId"
                :current-season="currentSeason"
                @update-new-user-id="$emit('update-new-user-id', $event)"
                @open-login="$emit('open-login')"
                @open-buy-card="$emit('open-buy-card')"/>
            <FavoritesAutumnBooks 
                v-else-if="currentSeason === 'autumn'"
                :user-in="userIn"
                :user-id="userId"
                :current-season="currentSeason"
                @update-new-user-id="$emit('update-new-user-id', $event)"
                @open-login="$emit('open-login')"
                @open-buy-card="$emit('open-buy-card')"/>
        </transition>
    </div>
</template>

<script>
import FavoritesWinterBooks from '@/components/favorites/season/FavoritesWinterBooks.vue'
import FavoritesSpringBooks from '@/components/favorites/season/FaworitesSpringBooks.vue'
import FavoritesSummerBooks from '@/components/favorites/season/FavoritesSummerBooks.vue'
import FavoritesAutumnBooks from '@/components/favorites/season/FavoritesAutumnBooks.vue'

export default {
    components: {
        FavoritesWinterBooks,
        FavoritesSpringBooks,
        FavoritesSummerBooks,
        FavoritesAutumnBooks
    },
    props: {
        currentSeason: {
            type: String,
            required: true
        },
        userIn: {
            type: Boolean,
            default: false
        },
        userId: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 0.5;
}
</style>