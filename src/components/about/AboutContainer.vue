<template>
    <div id="about">
        <TitleComponent 
            :title="about.title"  
            :p="about.p"/>
        <CarouselContainer/>
    </div>
</template>

<script>
import TitleComponent from '@/components/shared/TitleComponent.vue'
import CarouselContainer from '@/components/about/carousel/CarouselContainer.vue'

export default {
    components: {
        TitleComponent,
        CarouselContainer,
    },
    data() {
        return {
            about: {
                title: 'About',
                p: `The Brooklyn Library is a free workspace, 
                    a large number of books and a cozy coffee shop inside`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#about {
    padding: 20px 20px 40px 20px;
}
</style>