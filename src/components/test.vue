<template>
    <div class="carousel">
        <CarouselImages :current-index="currentIndex" />
        <CarouselBtn @selected-btn="selectedBtn" />
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
            currentIndex: 0,
        }
    },
    methods: {
        selectedBtn(index) {
            this.currentIndex = index
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

//------------------------------//

<template>
    <div class="carousel__wrapper" ref="carousel">
        <div class="carousel__images" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt">
        </div>
    </div>
</template>

<script>
import c1 from '@/assets/img/about/carousel/c1.png'
import c2 from '@/assets/img/about/carousel/c2.png'
import c3 from '@/assets/img/about/carousel/c3.png'
import c4 from '@/assets/img/about/carousel/c4.png'
import c5 from '@/assets/img/about/carousel/c5.png'

export default {
    data() {
        return {
            images: [
                {
                    src: c1,
                    alt: 'c1'
                },
                {
                    src: c2,
                    alt: 'c2'
                },
                {
                    src: c3,
                    alt: 'c3'  
                },
                {
                    src: c4,
                    alt: 'c4'
                },
                {
                    src: c5,
                    alt: 'c5'
                },
            ],
        }
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0,
        }
    },
    watch: {
        currentIndex(newIndex) {
            this.$refs.carousel.style.transform = `translateX(-${newIndex * 100}%)`
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel__wrapper {
    display: flex;
    gap: 25px;
    width: 100%;
    height: 562.67px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.carousel__images {
    flex: 0 0 100%;
}
</style>

//------------------------------//

<template>
    <div class="carousel__btn-container">
        <button class="carousel__btn selected" @click="selectedBtn(0)" :class="{selected: currentIndex === 0}"></button>
        <button class="carousel__btn" @click="selectedBtn(1)" :class="{selected: currentIndex === 1}"></button>
        <button class="carousel__btn" @click="selectedBtn(2)" :class="{selected: currentIndex === 2}"></button>
    </div>
</template>

<script>
export default {
    props: {
        currentIndex: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        selectedBtn(index) {
            this.$emit('selected-btn', index)
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel__btn-container {
    display: flex;
    gap: 10px;
}

.carousel__btn {
    width: 16px;
    height: 16px;
    border-radius: 50px;
    border: none;
    background: $dark;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &.selected {
        background: $sand;
    }
}
</style>

//------------------------------//

<template>
    <div class="carousel__wrapper">
        <transition-group name="slide" tag="div" class="slide-group">
            <div class="carousel__images" 
            v-for="(image, index) in images" 
            :key="index"
            :class="{ 'active': index === currentIndex }"
            :style="{ transform: `translateX(-${currentIndex * 105.5}%)` }">
            
                <img class="carousel__img" 
                    :src="image.src" 
                    :alt="image.alt">
            </div>
        </transition-group>
    </div>
</template>

<script>
import c1 from '@/assets/img/about/carousel/c1.png'
import c2 from '@/assets/img/about/carousel/c2.png'
import c3 from '@/assets/img/about/carousel/c3.png'
import c4 from '@/assets/img/about/carousel/c4.png'
import c5 from '@/assets/img/about/carousel/c5.png'

export default {
    data() {
        return {
            images: [
                {
                    src: c1,
                    alt: 'c1'
                },
                {
                    src: c2,
                    alt: 'c2'
                },
                {
                    src: c3,
                    alt: 'c3'  
                },
                {
                    src: c4,
                    alt: 'c4'
                },
                {
                    src: c5,
                    alt: 'c5'
                },
            ],
        }
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel__wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter {
  transform: translateX(105.5%);
}

.slide-leave-to {
  transform: translateX(-105.5%);
}
.slide-group {
    display: flex;
    gap: 25px;
}
.carousel__images {
    transition: transform 0.3s ease-in-out;
}
  
.active {
    z-index: 1;
}
</style>