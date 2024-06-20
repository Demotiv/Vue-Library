<template>
    <div class="visit-info">
        <div class="visit-info__visits">
            <span>{{ visits.title }}</span>
            <img :src="visits.img.src" :alt="visits.img.alt">
            <span>{{ visits.amount }}</span>
        </div>
        <div class="visit-info__bonuses">
            <span>{{ bonuses.title }}</span>
            <img :src="bonuses.img.src" :alt="bonuses.img.alt">
            <span>{{ bonuses.amount }}</span>
        </div>
        <div class="visit-info__books">
            <span>{{ books.title }}</span>
            <img :src="books.img.src" :alt="books.img.alt">
            <span>{{ books.amount }}</span>
        </div>
    </div>
</template>

<script>
import Visits from '@/assets/img/library-card/visits.png'
import Bonuses from '@/assets/img/library-card/bonuses.png'
import Books from '@/assets/img/library-card/books.png'

export default {
    props: {
        visitsInfo: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            visits: {
                title: 'Visits',
                img: {
                    src: Visits,
                    alt: 'visits-png'
                },
                amount: this.visitsInfo.visitsCounter
            },
            bonuses: {
                title: 'Bonuses',
                img: {
                    src: Bonuses,
                    alt: 'bonuses-png'
                },
                amount: this.visitsInfo.bonusesCounter
            },
            books: {
                title: 'Books',
                img: {
                    src: Books,
                    alt: 'books-png'
                },
                amount: '3'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.visit-info {
    margin-top: 15px;
    display: flex;
    gap: 35px;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
    }

    & img {
        width: 20px;
        height: 21px;
    }

    & span {
        font-family: $inter;
        font-weight: 400;
        font-size: 10px;
        line-height: 200%;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        text-align: center;
        color: $black;
    }
}
</style>