<template>
    <div v-show="active">
        <Modal>
            <template v-slot:title>
                <h2 class="text-xl font-bold">Vous voulez créer un album ?</h2>
            </template>
            <template v-slot:form>
                <input-form value="Nom d'album" label="Nom de l'album"/>
            </template>
            <template v-slot:button>
                <button-base @click.native="$emit('sendNameAlbum')" label="Créer" width="" bg="bg-green-400 hover:bg-green-600"/>
                <button-base @click.native="$emit('modalHidden')" label="annuler" width="" bg="bg-red-400 hover:bg-red-600"/>
            </template>
        </Modal>
    </div>
</template>

<script>
import Modal from '../../template/Modal.vue'
import InputForm from '../UI/Input.vue'
import ButtonBase from './ButtonBase.vue'
    export default {
        components: {
            Modal,
                InputForm,
                ButtonBase
        },
        props: {
            active: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>