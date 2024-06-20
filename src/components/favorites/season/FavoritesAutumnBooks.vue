<template>
    <div class="autumn-books">
        <FavoritesBook
            :staff="staff"
            :book="thirteenthBook"
            :img="thirteenthBook.img"
            :user-in="userIn"
            @open-login="$emit('open-login')"/>
        <FavoritesBook
            :staff="staff"
            :book="fourteenthBook"
            :img="fourteenthBook.img"
            :user-in="userIn"
            @open-login="$emit('open-login')"/>
        <FavoritesBook
            :staff="staff"
            :book="fifteenthBook"
            :img="fifteenthBook.img"
            :user-in="userIn"
            @open-login="$emit('open-login')"/>
        <FavoritesBook
            :staff="staff"
            :book="sixteenthBook"
            :img="sixteenthBook.img"
            :user-in="userIn"
            @open-login="$emit('open-login')"/>
    </div>
</template>

<script>
import ThirteenthBook from '@/assets/img/favorites/books/thirteenth-book.png'
import FourteenthBook from '@/assets/img/favorites/books/fourteenth-book.png'
import FifteenthBook from '@/assets/img/favorites/books/fifteenth-book.png'
import SixteenthBook from '@/assets/img/favorites/books/sixteenth-book.png'

import FavoritesBook from '../FavoritesBook'

export default {
    components: {
        FavoritesBook,
    },
    props: {
        userIn: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            staff: 'Staff Picks',
            thirteenthBook: {
                title: 'Casual Conversation',
                author: 'By Renia White',
                p: `White's impressive debut collection takes readers 
                through and beyond the concepts of conversation 
                and the casual - both what we say to each other and what 
                we don't, examining the possibilities around how we 
                construct and communicate identity.`,
                img: {
                    src: ThirteenthBook,
                    alt: 'thirteenth-book'
                }
            },
            fourteenthBook: {
                title: 'The Great Fire',
                author: 'By Lou Ureneck',
                p: `The harrowing story of an ordinary American and a 
                principled Naval officer who, horrified by the burning of Smyrna, 
                led an extraordinary rescue effort that saved 
                a quarter of a million refugees from the Armenian Genocide`,
                img: {
                    src: FourteenthBook,
                    alt: 'fourteenth-book'
                }
            },
            fifteenthBook: {
                title: 'Rickey: The Life and Legend',
                author: 'By Howard Bryant',
                p: `With the fall rolling around, one can't help but 
                think of baseball's postseason coming up! And what better 
                way to prepare for it than reading the biography of one of 
                the game's all-time greatest performers, the Man of Steal, 
                Rickey Henderson?`,
                img: {
                    src: FifteenthBook,
                    alt: 'fifteenth-book'
                }
            },
            sixteenthBook: {
                title: 'Slug: And Other Stories',
                author: 'By Megan Milks',
                p: `Exes Tegan and Sara find themselves chained together 
                by hairballs of codependency. A father and child experience 
                the shared trauma of giving birth to gods from their wounds.`,
                img: {
                    src: SixteenthBook,
                    alt: 'sixteenth-book'
                }
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.autumn-books {
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