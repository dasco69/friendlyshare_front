<template>
    
    <div class=" relative ">
        <label for="name-with-label" class="text-black-700">
            {{ label }}
        </label>
        <input
            v-model="valueSync" 
            @input="$emit('valueSynced')"
            type="text" 
            id="name-with-label" 
            class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
            :name="value" 
            :placeholder="value"/>
    </div>

</template>

<script>
    export default {
        name: 'InputForm',
        props: {
            label: {
                type: String
            },
            value: {
                type: String
            },
            valueSync: {
                type: String
            } 
        },
    }
</script>

<style scoped>

</style>