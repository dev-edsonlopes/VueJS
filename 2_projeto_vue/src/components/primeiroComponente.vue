<template>
    <div>
        <h1>Hello vue!</h1>
        <p>Hello! My name is {{ namePerson }}, and I'm a {{ professionPerson }}</p>
    </div>
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data() {
            return {
                namePerson: "Edson",
                professionPerson: "Developer Front-end and Back-end"
            }
        }
    }

</script>