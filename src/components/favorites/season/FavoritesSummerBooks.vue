<template>
    <div class="summer-books">
        <FavoritesBook
            :staff="staff"
            :book="ninthBook"
            :img="ninthBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="tenthBook"
            :img="tenthBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="eleventhBook"
            :img="eleventhBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="twelfthBook"
            :img="twelfthBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
    </div>
</template>

<script>
import NinthBook from '@/assets/img/favorites/books/ninth-book.png'
import TenthBook from '@/assets/img/favorites/books/tenth-book.png'
import EleventhBook from '@/assets/img/favorites/books/eleventh-book.png'
import TwelfthBook from '@/assets/img/favorites/books/twelfth-book.png'

import FavoritesBook from '../FavoritesBook'

export default {
    components: {
        FavoritesBook,
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
            staff: 'Staff Picks',
            ninthBook: {
                title: 'Crude: A Memoir',
                author: 'Pablo Fajardo & ​​Sophie Tardy-Joubert',
                p: `Drawing and color by Damien Roudeau | This book illustrates 
                the struggles of a group of indigenous Ecuadoreans 
                as they try to sue the ChevronTexaco company for damage their oil 
                fields did to the Amazon and her people`,
                img: {
                    src: NinthBook,
                    alt: 'ninth-book'
                }
            },
            tenthBook: {
                title: 'Let My People Go Surfing',
                author: 'Yvon Chouinard',
                p: `Chouinard—climber, businessman, environmentalist—shares tales 
                of courage and persistence from his experience of founding and 
                leading Patagonia, Inc. Full title: Let My People Go Surfing: 
                The Education of a Reluctant Businessman, 
                Including 10 More Years of Business Unusual.`,
                img: {
                    src: TenthBook,
                    alt: 'tenth-book'
                }
            },
            eleventhBook: {
                title: 'The Octopus Museum: Poems',
                author: 'Brenda Shaughnessy',
                p: `This collection of bold and scathingly beautiful feminist 
                poems imagines what comes after our current age of environmental 
                destruction, racism, sexism, and divisive politics.`,
                img: {
                    src: EleventhBook,
                    alt: 'eleventh-book'
                }
            },
            twelfthBook: {
                title: 'Shark Dialogues: A Novel',
                author: 'Kiana Davenport',
                p: `An epic saga of seven generations of one family encompasses 
                the tumultuous history of Hawaii as a Hawaiian woman gathers her 
                four granddaughters together in an erotic tale of villains and dreamers, 
                queens and revolutionaries, lepers and healers.`,
                img: {
                    src: TwelfthBook,
                    alt: 'twelfth-book'
                }
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.summer-books {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 220px;
    grid-row-gap: 40px;
    right: 0px;

    @include tablet {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>