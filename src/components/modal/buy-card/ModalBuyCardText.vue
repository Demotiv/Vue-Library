<template>
    <div class="buy-card-info">
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: `If you are live, work, attend school, 
                or pay property taxes in New York State, 
                you can get a $25 digital library card 
                right now using this online form. 
                Visitors to New York State can also use 
                this form to apply for a temporary card.`
        }
    }
}
</script>

<style lang="scss" scoped>
.buy-card-info {
    width: 330px;
    height: 160px;
    
    & p {
        font-family: $inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 133%;
        letter-spacing: 0.13em;
        color: $grey;
    }
}
</style>