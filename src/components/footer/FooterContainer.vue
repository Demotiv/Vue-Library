<template>
    <div id="footer">
        <div class="footer-top">
            <FooterSocialMedia/>
            <FooterWorkTime/>
        </div>
        <hr class="footer-line">
        <FooterBottom/>
    </div>
</template>

<script>
import FooterSocialMedia from '@/components/footer/FooterSocialMedia.vue'
import FooterWorkTime from '@/components/footer/FooterWorkTime.vue'
import FooterBottom from '@/components/footer/FooterBottom.vue'

export default {
    components: {
        FooterSocialMedia,
        FooterWorkTime,
        FooterBottom
    }
}
</script>

<style lang="scss" scoped>
#footer {
    padding: 20px;
    background: $dark;
}

.footer-top {
    display: flex;
    justify-content: space-between;
}

.footer-line {
    margin-top: 30px;
    border: 1px solid $white;
    width: 1400px;
    height: 0px;    
}
</style>