<template>
    <div class="card-number">
        <div>{{ title }}</div>
        <div>{{ userId.cardNumber }}</div>
        <img :src="icon.src" :alt="icon.alt">
    </div>
</template>

<script>
import iconCopy from '@/assets/img/modal/icon-copy.png'

export default {
    props: {
        userId: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            title: 'Card number',
            icon: {
                src: iconCopy,
                alt: 'icon-copy'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.card-number {
    display: flex;
    gap: 15px;

    & div {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        text-align: center;
        color: $sand; 
    }

    & div:first-child {
        color: $dark; 
    }
}
</style>