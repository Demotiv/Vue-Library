<template>
    <nav>
        <ul>
            <li 
                class="list-item" 
                v-for="(item, index) in navItems" 
                :key="index">
                <a :href="`#${item.href}`">{{ item.label }}</a>
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
    }        
}
</script>

<style lang="scss" scoped>
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
}
</style>