<template>
    <div class="spring-books">
        <FavoritesBook
            :staff="staff"
            :book="fifthBook"
            :img="fifthBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="sixthBook"
            :img="sixthBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="seventhBook"
            :img="seventhBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
        <FavoritesBook
            :staff="staff"
            :book="eighthBook"
            :img="eighthBook.img"
            :user-in="userIn"
            :user-id="userId"
            @update-new-user-id="$emit('update-new-user-id', $event)"
            @open-login="$emit('open-login')"
            @open-buy-card="$emit('open-buy-card')"/>
    </div>
</template>

<script>
import FifthBook from '@/assets/img/favorites/books/fifth-book.png'
import SixthBook from '@/assets/img/favorites/books/sixth-book.png'
import SeventhBook from '@/assets/img/favorites/books/seventh-book.png'
import EighthBook from '@/assets/img/favorites/books/eighth-book.png'

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
            fifthBook: {
                title: 'The Body',
                author: 'Stephen King',
                p: `Powerful novel that takes you back to a nostalgic time, 
                exploring both the beauty and danger and loss of innocence 
                that is youth.`,
                img: {
                    src: FifthBook,
                    alt: 'fifth-book'
                }
            },
            sixthBook: {
                title: 'Carry: A Memoir of Survival on Stolen Land',
                author: 'Toni Jenson',
                p: `This memoir about the author's relationship with gun 
                violence feels both expansive and intimate, resulting in a 
                lyrical indictment of the way things are.`,
                img: {
                    src: SixthBook,
                    alt: 'sixth-book'
                }
            },
            seventhBook: {
                title: 'Days of Distraction',
                author: 'Alexandra Chang',
                p: `A sardonic view of Silicon Valley culture, 
                a meditation on race, and a journal of displacement 
                and belonging, all in one form-defying package of spare prose.`,
                img: {
                    src: SeventhBook,
                    alt: 'seventh-book'
                }
            },
            eighthBook: {
                title: 'Dominicana',
                author: 'Angie Cruz',
                p: `A fascinating story of a teenage girl who marries 
                a man twice her age with the promise to bring her to America. 
                Her marriage is an opportunity for her family to eventually 
                immigrate. For fans of Isabel Allende and Julia Alvarez.`,
                img: {
                    src: EighthBook,
                    alt: 'eighth-book'
                }
            },
        }
    }     
}
</script>

<style lang="scss" scoped>
.spring-books {
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