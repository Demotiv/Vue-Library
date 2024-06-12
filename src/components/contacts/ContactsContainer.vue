<template>
    <div id="contacts">
        <TitleComponent :title="contacts.title"/>
        <div class="contacts__wrapper">
            <Contactsinfo/>
            <ContactsMap/>
        </div>
    </div>
</template>

<script>
import TitleComponent from '@/components/shared/TitleComponent.vue'
import Contactsinfo from '@/components/contacts/ContactsInfo.vue'
import ContactsMap from '@/components/contacts/ContactsMap.vue'

export default {
    components: {
        TitleComponent,
        Contactsinfo,
        ContactsMap
    },
    data() {
        return {
            contacts: {
                title: 'Our Contacts'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#contacts {
    padding: 20px;
}

.contacts__wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}
</style>