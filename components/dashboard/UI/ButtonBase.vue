<template>
    <button 
        type="button" 
        class="py-2 px-4 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        :class="`${width} ${bg}`"
        >
        {{ label}}
    </button>
</template>

<script>
    export default {
        props: {
            label: {
                type: String
            },
            width : {
                type: String,
                default: 'w-1/6'
            },
            bg: {
                type: String
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>