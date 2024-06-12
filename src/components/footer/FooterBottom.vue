<template>
    <div class="footer-bottom">
        <span class="footer-bottom__year">{{ info.year }}</span>
        <span class="footer-bottom__school">{{ info.school }}</span>
        <span class="footer-bottom__user">{{ users.guest }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                year: '2024',
                school: 'The Kislov School'
            },
            users: {
                guest: 'Username',
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & span {
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-align: center;
        color: $white;
    }

    & span:last-child {
        line-height: 200%;
    }
}
</style>