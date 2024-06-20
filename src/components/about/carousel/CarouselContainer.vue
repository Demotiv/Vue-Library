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
    props: {
        isTablet: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    watch: {
        isTablet: function(newVal) {
            if (!newVal) {
                if (this.currentIndex === 4) {
                    this.currentIndex = this.currentIndex - 2
                } else if (this.currentIndex === 3) {
                    this.currentIndex = this.currentIndex - 1
                } else {
                    this.currentIndex
                }
            }
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