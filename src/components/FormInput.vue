<template>
    <div>
        <input :type="type" :id="id" :placeholder="label" />
    </div>

</template>
<script>

export default {
  name: 'FormInput',
  props: {
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    id: {
        type: String,
        required: true
    }
  }
};
</script>

<style scoped>
input {
    width: 100%;
    height: 100%;
    padding: 8px;
    border: none;
    box-sizing: border-box;
}

input:focus {
    border: none;
    outline: none;
}

div {
    width: 100%;  
    height: 7vh; 
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1px;
    display: flex;
    margin-top: 5px;
}
</style>
