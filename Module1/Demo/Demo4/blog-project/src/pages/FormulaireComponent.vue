<template>
    <div id="divId">
        <form @SubmitEvent.prevent="submitForm">
            <input type="text" v-model="formData.field1" placeholder="Champ 1"/>
            <input type="text" v-model="formData.field2" placeholder="Champ 2"/>
            <button type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                field1: '',
                field2: '',
            }
        };
    },
    methods: {
        submitForm() {
            console.log('Données du formulaire', this.formData);

            this.formData = {
                field1: '',
                field2: '',
            };
        }
    }
};
</script>