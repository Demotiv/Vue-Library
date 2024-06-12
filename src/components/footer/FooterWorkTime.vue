<template>
    <div class="work-time">
        <div class="work-time__weekdays">
            <span>{{ weekdays.dayFirst }} - {{ weekdays.dayLast }}</span>
            <span>{{ weekdays.timeFirst }} - {{ weekdays.timeLast }}</span>
        </div>
        <div class="work-time__weekend">
            <span>{{ weekend.dayFirst }} - {{ weekend.dayLast }}</span>
            <span>{{ weekend.timeFirst }} - {{ weekend.timeLast }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weekdays: {
                dayFirst: 'Mon',
                dayLast: 'Fri',
                timeFirst: '08:00 am',
                timeLast: '07:00 pm'
            },
            weekend: {
                dayFirst: 'Sat',
                dayLast: 'Sun',
                timeFirst: '10:00 am',
                timeLast: '06:00 pm'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.work-time {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    &__weekdays,
    &__weekend {
        display: flex;
        flex-direction: column;
    }

    & span {
        font-family: $inter;
        font-weight: 400;
        font-size: 15px;
        line-height: 133%;
        text-align: right;
        color: $white;
    }
}
</style>