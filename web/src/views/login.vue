<template>
    <div>
        <div class="bgimg">
        </div>
        <div class="bgimg-second"></div>
        <form class="form_container">
            <div class="logo_container">
                <img src="../src/assets/media/logo.png" alt="">
            </div>
            <div class="title_container">
                <p class="title">Olá!</p>
                <span class="subtitle">Entre com sua conta da Unicamp para ter acesso aos serviços SAR.</span>
            </div>
            <div id="buttonDiv"></div>
            <p class="note" id="ajuda">Ajuda</p>
        </form>

        <div id="login-failed">
            <div id="login-failed-content">
                <div id="login-failed-header">
                    <h2 class="login-failed-title">Erro de Login</h2>
                    <button id="login-failed-close">&times;</button>
                </div>
                <p class="login-failed-description">Não foi possível efetuar o login. Verifique suas credenciais e tente
                    novamente.</p>
            </div>
        </div>
        <div class="popup" id="popup">
            <div class="popup-content">
                <div class="popup-header">
                    <h2>Ajuda?</h2>
                </div>
                <div class="popup-description">
                    <p>Você deve entrar com a sua conta institucional <b>Unicamp</b> para ter acesso aos serviços SAR, como
                        abrir chamados técnicos na plataforma HelpDesk.</p>
                    <p>Em caso de problemas, contate um administrador.</p>
                </div>
                <button class="ok-button" onclick="hidePopup()">Ok</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    created() {
        this.$emit('hideNavbar', true); // Emitir o evento para ocultar a navbar
    },
    destroyed() {
        this.$emit('hideNavbar', false); // Emitir o evento para mostrar a navbar novamente
    },
}
</script>

<style src="../assets/login.css"></style>
