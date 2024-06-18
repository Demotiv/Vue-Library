<template>
    <nav class="navigation">
        <ul>
            <li 
                class="list-item" 
                v-for="(item, index) in navItems" 
                :key="index">
                <a 
                    @click="handleLinkClick"
                    :href="`#${item.href}`">{{ item.label }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                { 
                    label: 'About', 
                    href: 'about' 
                },
                { 
                    label: 'Favorites', 
                    href: 'favorites' 
                },
                { 
                    label: 'Coffee shop', 
                    href: 'coffee-shop' 
                },
                { 
                    label: 'Contacts', 
                    href: 'contacts' 
                },
                { 
                    label: 'Library Card',
                    href: 'library-card' 
                },
            ]
        }
    },
    methods: {
        handleLinkClick() {
            this.$emit('close-hamburger')
        }
    }       
}
</script>

<style lang="scss" scoped>
.navigation {
    ul {
        display: flex;
        flex-direction: row;
        gap: 30px;
    
        & a {
            font-family: $inter;
            font-weight: 400;
            font-size: 20px;
            line-height: 250%;
            color: $white;
    
            &:hover {
                color: $sand;
            }
        }

        @include tablet {
            display: none;
        }
    }
}
</style>