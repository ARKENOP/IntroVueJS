<template>
    <div>
        <h2>{{ currentValue }}</h2>
        <div>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>
    </div>
</template>

<script>
export default {
    date() {
        return {
            currentValue: 0
        }
    },
    methods: {
        increment() {
            this.currentValue++;
        },
        decrement() {
            this.currentValue--;
        }
    }
}
</script>