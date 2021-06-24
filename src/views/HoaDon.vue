<template>
    <main>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <h1 style="text-align: center;"></h1>
                    <h1 style="text-align: center; color: rgb(49, 2, 6); font-weight: bold; margin-top: 1.5em;">Hóa đơn</h1>
                    <table class="table" style="font-size: 1.5em;">
                        <thead class="thead-dark" style="background-color: rgb(10, 112, 112); color: white;">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col" style="width: 33%;">Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in orders">
                                <tr v-if="orders != null" :key="index">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ item.name }}</td>
                                    <td class="cart-quantity cart-column">
                                        <input class="cart-quantity-input form-control" type="number" v-model="item.quantity" readonly>
                                    </td>
                                    <td>{{ item.price }} VNĐ</td>
                                </tr>
                            </template>
                        </tbody>
                        <tfoot v-if="orders.length > 0">
                            <tr>
                                <th colspan="3">Thành tiền</th>
                                <th>{{ cost }} VNĐ</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import APIService from '../api-service'

    export default {
        data() {
            return {
                cost: 0,
                orders: []
            }
        },
        watch: {
            orders() {
                this.cost = 0;
                this.orders.forEach(order => {
                    this.cost += order.price * order.quantity;
                });
            }
        },
        methods: {
            get() {
                let tableCode = this.$route.params.code;
                let data = this.$data;
                APIService.getHoaDon(tableCode).then(function (result) {
                    data.orders = result.data;
                });
            }
        },
        mounted() {
            this.get();
        },
    }

</script>
<style>
    .logo {
        width: 200px;
        height: 150px;
    }

    .price {
        color: rgb(10, 112, 112);
        font-size: xx-large;
        font-weight: bold;
    }

    .btn-chonmon {
        font-size: 1.5em;
    }

    .cart-column {
        margin-right: 0em;
    }

    .cart-quantity {
        width: 20%;
    }

    .btn-danger {
        color: white;
        background-color: #eb5757;
        border: none;
        border-radius: 0.3em;
        font-weight: bold;
        margin-bottom: 0.5em;
    }

    .btn-danger:hover {
        background-color: #cc4c4c;
    }

    .cart-quantity-input {
        height: 34px;
        width: 50px;
        border-radius: 5px;
        border: 1px solid #56ccf2;
        background-color: #eee;
        color: #333;
        padding: 0;
        text-align: center;
        font-size: 1.2em;
        margin-right: 25px;
    }
</style>