<template>
    <div>
        <h1>Login</h1>
        <input v-model="message">
        <button @click="send">send</button>
        <p>{{ error }}</p>
    </div>
</template>


<script>
export default {
    data () {
        return {
            message: '',
            error: ''
        }
    },
    methods: {
        send: function() {
            if (this.message === 'test') {
                this.$router.push('/main')
            }
            else if (this.message === '') {
                this.error = ''
            }
            else {
                
                this.error = `Error: wrong word - ${this.message}`
            }
        }
    }
    
}

</script>

<style>
    p{
        color: rgb(204, 0, 0);
        font-size: 2em
    }
    
</style>