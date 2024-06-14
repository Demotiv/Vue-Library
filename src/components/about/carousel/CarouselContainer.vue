<template>
    <div class="carousel">
        <CarouselImages
            @on-left="left"
            @on-right="right"
            :current-index="currentIndex"/>
        <CarouselBtn 
            @selected-btn="selectedBtn" 
            :current-index="currentIndex"/>
    </div>
</template>

<script>
import CarouselImages from '@/components/about/carousel/CarouselImages.vue'
import CarouselBtn from '@/components/about/carousel/CarouselBtn.vue'

export default {
    components: {
        CarouselImages,
        CarouselBtn,
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        selectedBtn(index) {
            this.currentIndex = index
        },
        left() {
            this.currentIndex = this.currentIndex - 1
        },
        right() {
            this.currentIndex = this.currentIndex + 1
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}
</style>