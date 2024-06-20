<template>
    <div class="carousel__wrapper">

        <div class="tablet-btn" @click="onLeft">
            <img :src="btns.left.src" :alt="btns.left.alt">
        </div>

        <transition-group 
            class="slide-group" 
            tag="div">

            <div 
                class="carousel__images" 
                v-for="(image, index) in images" 
                :key="index"
                v-bind="{
                    style: {
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${currentIndex * 105.5}%)`
                    }
                }">

                <img 
                    class="carousel__img" 
                    :src="image.src" 
                    :alt="image.alt">
            </div>
        </transition-group>

        <div class="tablet-btn" @click="onRight">
            <img :src="btns.right.src" :alt="btns.right.alt">
        </div>

    </div>
</template>

<script>
import c1 from '@/assets/img/about/carousel/c1.png'
import c2 from '@/assets/img/about/carousel/c2.png'
import c3 from '@/assets/img/about/carousel/c3.png'
import c4 from '@/assets/img/about/carousel/c4.png'
import c5 from '@/assets/img/about/carousel/c5.png'
import left from '@/assets/img/about/carousel/carret_left.png'
import right from '@/assets/img/about/carousel/carret_right.png'


export default {
    data() {
        return {
            images: [
                { src: c1, alt: 'c1' },
                { src: c2, alt: 'c2' },
                { src: c3, alt: 'c3' },
                { src: c4, alt: 'c4' },
                { src: c5, alt: 'c5' }
            ],
            btns: {
                left: { src: left, alt: 'left'},
                right: { src: right, alt: 'right'}
            }
        }
    },
    props: {
        currentIndex: {
            type: Number,
            default: 0
        }
    },
    methods: {
        onLeft() {
            if (this.currentIndex > 0) {
                this.$emit('on-left')
            }
        },
        onRight() {
            if (this.currentIndex < this.images.length - 1) {
                this.$emit('on-right')
            }     
        },
    }
}
</script>

<style lang="scss" scoped>
.carousel__wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;

    @include tablet {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 58px;
    }
    
}

.tablet-btn {
    display: none;

    @include tablet {
        display: block;
        cursor: pointer;
    }
}

.slide-group {
    display: flex;
    gap: 25px;

    @include tablet {
        max-width: 450px;
        overflow: hidden;

        & div {
            position: relative;
        }
    }
}

.carousel__images {
    transition: transform 0.3s ease-in-out;
}
</style>