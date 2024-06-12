<template>
    <div class="btns-container">
        <h3 class="btns-container__title">{{ items.title }}</h3>
        <form class="btns-container__form">
            <fieldset class="btns-container__wrapper">

                <div class="btns-container__btn-wparrer">
                    <input 
                        type="radio" 
                        id="winter" 
                        name="season" 
                        checked 
                        @click="changeSeason('winter')">
                    <label for="winter">{{ buttons.btn1 }}</label>
                </div>
                
                <div class="btns-container__btn-wparrer">
                    <input 
                        type="radio" 
                        id="spring" 
                        name="season" 
                        @click="changeSeason('spring')">
                    <label for="spring">{{ buttons.btn2 }}</label>
                </div>
                
                <div class="btns-container__btn-wparrer">
                    <input 
                        type="radio" 
                        id="summer" 
                        name="season" 
                        @click="changeSeason('summer')">
                    <label for="summer">{{ buttons.btn3 }}</label>
                </div>
                
                <div class="btns-container__btn-wparrer">
                    <input 
                        type="radio" 
                        id="autumn" 
                        name="season" 
                        @click="changeSeason('autumn')">
                    <label for="autumn">{{ buttons.btn4 }}</label>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: {
                title: 'Pick favorites of season'
            },
            buttons: {
                btn1: 'Winter',
                btn2: 'Spring',
                btn3: 'Summer',
                btn4: 'Autumn'
            }
        }
    },
    methods: {
        changeSeason(season) {
            this.$emit("season-changed", season)
        }
    }
}
</script>

<style lang="scss" scoped>
.btns-container {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    &__title {
        font-family: $inter;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        color: $black;
    }

    &__wrapper {
        display: flex;
        gap: 90px;
    }

    &__btn-wparrer {
        display: flex;
        gap: 20px;
    }

    & input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 17px;
        height: 17px;
        border: 2px solid $black;
        border-radius: 50%;
        appearance: none;
        cursor: pointer;

        &:checked {
            &::before {
                width: 7px;
                height: 7px;
                background-color: $black;
                border-radius: 50%;
                content: "";
            }
        }
    }

    input[type="radio"]:checked + label {
        font-weight: bold;
    }

    & label {
        font-family: $inter;
        font-weight: 400;
        font-size: 20px;
        color: $black; 
    }
}
</style>