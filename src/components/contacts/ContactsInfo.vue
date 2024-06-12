<template>
    <div class="info">
        <div class="info__title">
            <p>{{ info.title }}</p>
        </div>
        <div class="info__phones">
            <a :href="info.phone1.tel">{{ info.phone1.text }}</a>
            <a :href="info.phone2.tel">{{ info.phone2.text }}</a>
            <a :href="info.phone3.tel">{{ info.phone3.text }}</a>
        </div>
        <div class="info__staffs">
            <p>{{ staff.title }}</p>
            <a :href="staff.email" v-html="staff.text"></a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                title: 'For all Library inquiries:',
                phone1: {
                    text: 'Please call (617) 730-2370',
                    tel: 'tel:+16177302370'
                },
                phone2: {
                    text: 'For TTY service, please call (617) 730-2370',
                    tel: 'tel:+16177302370'
                },
                phone3: {
                    text: 'Putterham Library: (617) 730-2385',
                    tel: 'tel:+16177302385'
                }
            },
            staff: {
                title: 'Senior Staff',
                text: `Library Director:
                        <span style="font-weight: bold;">Amanda Hirst</span>`,
                email: 'mailto:amandahirst@example.com'
            }
        }
    }     
}
</script>

<style lang="scss" scoped>
.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    &__title {
        font-family: $inter;
        font-weight: 700;
        font-size: 20px;
        line-height: 200%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
        text-align: center;
        color: $black;
    }

    &__phones {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        a {
            font-family: $inter;
            font-weight: 400;
            font-size: 20px;
            line-height: 200%;
            letter-spacing: 0.1em;
            text-transform: capitalize;
            text-align: center;
            color: $black;

            &:hover {
                color: $sand;
            }
        }
    }

    &__staffs {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        :first-child {
            font-family: $inter;
            font-weight: 700;
            font-size: 20px;
            line-height: 200%;
            letter-spacing: 0.1em;
            text-transform: capitalize;
            text-align: center;
            color: $black;
        }

        :last-child {
            font-family: $inter;
            font-weight: 400;
            font-size: 20px;
            line-height: 200%;
            letter-spacing: 0.1em;
            text-transform: capitalize;
            text-align: center;
            color: $black;

            &:hover {
                color: $sand;
            }
        }
    }

    &__bold {
        font-weight: bold;
    }
}
</style>