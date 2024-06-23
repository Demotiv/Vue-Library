<template>
    <div class="winter-books">
        <FavoritesBook 
            :staff="staff"
            :book="firstBook"
            :img="firstBook.img"
            :user-in="userIn"
            :user-id="userId"
            :current-season="currentSeason"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="secondBook"
            :img="secondBook.img"
            :user-in="userIn"
            :user-id="userId"
            :current-season="currentSeason"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="thirdBook"
            :img="thirdBook.img"
            :user-in="userIn"
            :user-id="userId"
            :current-season="currentSeason"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="fouthBook"
            :img="fouthBook.img"
            :user-in="userIn"
            :user-id="userId"
            :current-season="currentSeason"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
    </div>
</template>

<script>
import FirstBook from '@/assets/img/favorites/books/first-book.png'
import SecondBook from '@/assets/img/favorites/books/second-book.png'
import ThirdBook from '@/assets/img/favorites/books/third-book.png'
import FouthBook from '@/assets/img/favorites/books/fouth-book.png'

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
        },
        currentSeason: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            staff: 'Staff Picks',
            firstBook: {
                title: 'The Book Eaters',
                author: 'Sunyi Dean',
                p: `An unusual sci-fi story about a book eater woman 
                    who tries desperately to save her dangerous mind-eater 
                    son from tradition and certain death. 
                    Complete with dysfunctional family values, 
                    light Sapphic romance, and a strong, complex protagonist. 
                    Not for the faint of heart.`,
                img: {
                    src: FirstBook,
                    alt: 'first-book'
                }
            },
            secondBook: {
                title: 'Cackle',
                author: 'Rachel Harrison',
                p: `Are your Halloween movies of choice The Witches of Eastwick 
                and Practical Magic? Look no further than here - where a woman 
                recovering from a breakup moves to a quaint town in upstate 
                New York and befriends a beautiful witch.`,
                img: {
                    src: SecondBook,
                    alt: 'second-book'
                }
            },
            thirdBook: {
                title: 'Dante: Poet of the Secular World',
                author: 'Erich Auerbach',
                p: `Auerbach's engaging book places the 'Comedy' 
                within the tradition of epic, tragedy, and philosophy in general, 
                arguing for Dante's uniqueness as one who raised the individual 
                and his drama of soul into something of divine significance—an 
                inspired introduction to Dante's main themes.`,
                img: {
                    src: ThirdBook,
                    alt: 'third-book'
                }
            },
            fouthBook: {
                title: 'The Last Queen',
                author: 'Clive Irving',
                p: `A timely and revelatory new biography of Queen Elizabeth 
                (and her family) exploring how the Windsors have evolved 
                and thrived as the modern world has changed around them.`,
                img: {
                    src: FouthBook,
                    alt: 'fouth-book'
                }
            }
        }
    }  
}
</script>

<style lang="scss" scoped>
.winter-books {
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