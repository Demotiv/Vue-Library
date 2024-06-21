<template>
    <transition name="descent">
        <div class="buy-card">
            <img 
                :src="closeBtn.src" 
                :alt="closeBtn.alt">
            <ModalBuyCardTitle/>
            <ModalBuyCardForm/>
        </div>
    </transition>
</template>

<script>
import closeBtn from '@/assets/img/modal/close_btn-white.png'
import ModalBuyCardTitle from '@/components/modal/buy-card/ModalBuyCardTitle.vue'
import ModalBuyCardForm from '@/components/modal/buy-card/ModalBuyCardForm.vue'

export default {
    components: {
        ModalBuyCardTitle,
        ModalBuyCardForm
    },
    data() {
        return {
            closeBtn: {
                src: closeBtn,
                alt: 'close-btn'
            }
        }
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
    background-color: $white;
    z-index: 3;

    & img {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
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