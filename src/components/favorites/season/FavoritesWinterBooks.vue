<template>
    <div class="winter-books">
        <FavoritesBook 
            :staff="staff"
            :book="firstBook"
            :img="firstBook.img"/>
        <FavoritesBook
            :staff="staff"
            :book="secondBook"
            :img="secondBook.img"/>
        <FavoritesBook
            :staff="staff"
            :book="thirdBook"
            :img="thirdBook.img"/>
        <FavoritesBook
            :staff="staff"
            :book="fouthBook"
            :img="fouthBook.img"/>
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
    data() {
        return {
            staff: 'Staff Picks',
            firstBook: {
                title: 'The Book Eaters',
                author: 'By Sunyi Dean',
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
                author: 'By Rachel Harrison',
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
                author: 'By Erich Auerbach',
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
                author: 'By Clive Irving',
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
}
</style>