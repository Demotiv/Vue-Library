<template>
    <div id="library-card">
        <TitleComponent :title="libraryCard.title"/>
        <div class="library-card__wrapper">
            <LivraryCardForm 
                :user-in="userIn"
                :user-id="userId"/>
            <LibraryCardLogin
                :user-in="userIn"
                @open-profile="$emit('open-profile')"
                @open-register="$emit('open-register')"
                @open-login="$emit('open-login')"/>
        </div>
    </div>
</template>

<script>
import TitleComponent from '@/components/shared/TitleComponent.vue'
import LivraryCardForm from '@/components/library-card/LibraryCardForm.vue'
import LibraryCardLogin from '@/components/library-card/LibraryCardLogin.vue'


export default {
    components: {
        TitleComponent,
        LivraryCardForm,
        LibraryCardLogin,
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
            libraryCard: {
                title: 'Digital Library Cards'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#library-card {
    padding: 20px;
}

.library-card__wrapper {
    display: flex;
    gap: 344px;

    @include tablet {
        flex-direction: column;
        gap: 21px;
        align-items: center;
    }
}
</style>