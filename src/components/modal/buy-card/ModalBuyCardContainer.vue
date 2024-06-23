<template>
    <transition name="descent">
        <div 
            class="buy-card"
            v-if="buyCardModal"
            v-clickaway="closeBuyCard">
            <img 
                :src="closeBtn.src" 
                :alt="closeBtn.alt"
                @click="$emit('close-buy-card')">
            <ModalBuyCardTitle/>
            <div class="buy-card__wrapper">
                <ModalBuyCardForm 
                    :user-id="userId"
                    @close-buy-card="closeBuyCard"
                    @update-new-user-id="$emit('update-new-user-id', $event)"/>
                <ModalBuyCardText/>
            </div>
        </div>
    </transition>
</template>

<script>
import closeBtn from '@/assets/img/modal/close_btn-white.png'
import ModalBuyCardTitle from '@/components/modal/buy-card/ModalBuyCardTitle.vue'
import ModalBuyCardForm from '@/components/modal/buy-card/ModalBuyCardForm.vue'
import ModalBuyCardText from '@/components/modal/buy-card/ModalBuyCardText.vue'
import { directive as Clickaway } from 'vue-clickaway'

export default {
    directives: {
        Clickaway
    },
    components: {
        ModalBuyCardTitle,
        ModalBuyCardForm,
        ModalBuyCardText
    },
    props: {
        buyCardModal: {
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
            closeBtn: {
                src: closeBtn,
                alt: 'close-btn'
            }
        }
    },
    methods: {
        closeBuyCard() {
            if (this.buyCardModal) {
                this.$emit('click-out-side-buy-card')
            }
        },

    }
}
</script>

<style lang="scss" scoped>
.buy-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    background-color: $white;
    z-index: 3;

    & img {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
    }

    &__wrapper {
        padding: 30px 40px 40px 40px;
        display: flex;
        gap: 40px;
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