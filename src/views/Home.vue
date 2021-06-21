<template>
    <div class="home-container">
        <p class="fw-light" style="font-size: 4em; margin-top: 0.8em;">ABC RESTAURANT</p>

        <h3>Scan QR CODE</h3>
        <div class="qrcode-container">
            <img class="qrcode" src="../assets/img/scanqrcode.png" style="width: 200px;" alt="QRCode">
        </div>
        <br>
        <h3 style="margin-bottom: 0.7em;">Hoặc nhập mã bàn tại đây:</h3>
        <div style="text-align: center;">
            <input style="font-size: 1.5em;" class="table-code" type="Mã bàn" placeholder="Mã bàn" aria-label="Mã bàn" v-model="code">
            <br>
            <button class="btn btn-outline-success" style="font-size: 1.2em; margin-top: 0.3em;" v-on:click="chonBan()">Đồng ý</button>
        </div>
    </div>
</template>

<script>
    import APIService from '../api-service';

    export default {
        name: "Home",
        data() {
            return {
                result: null,
                code: 'UKAFdxvm9U'
            }
        },
        methods: {
            chonBan() {
                let data = {
                    code: this.code
                }
                APIService.chonBan(data).then((result) => {
                    if (result.code != null && result.code == 1) {
                        alert('Chọn bàn thành công!');
                        this.$router.push('chon-mon/'+this.$data.code);
                    } else {
                        alert('Chọn bàn thất bại! Mã bàn không tồn tại hoặc bàn đã có người ngồi!');
                    }
                });
            }
        },
    }
</script>

<style>
    .home-container {
        text-align: center;
        padding-top: 0.8em;
        height: 100vh;
    }
    .table-code {
        padding: .375rem .75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .fw-light {
        color: rgb(10, 112, 112);
        font-size: 4em;
    }
</style>