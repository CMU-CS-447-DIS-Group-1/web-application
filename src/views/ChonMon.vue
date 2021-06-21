<template>
    <main>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3 flex-wrap">
                    <template v-for="item in mon">
                        <div class="col" :key="item.key">
                            <div class="card shadow-sm h-100">
                                <img src="../assets/img/tacos.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="">
                                <div class=" card-body mb-5">
                                    <h2 style="text-align: center; font-weight: bolder; color: rgb(49, 2, 6);">{{ item.name }}</h2>
                                    <p class="card-text">{{ item.description.substring(0,50)+'...' }}</p>
                                    <div class="d-flex position-absolute bottom-0 w-100 justify-content-between align-items-center" style="left: 0; padding: 20px;">
                                        <small class="price">${{ item.price }}</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-primary btn-chonmon" @click="addOrder(item.id, item.name, item.price)">Thêm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <h1 style="text-align: center;"></h1>
                    <h1 style="text-align: center; color: rgb(49, 2, 6); font-weight: bold; margin-top: 1.5em;">Giỏ hàng</h1>
                    <table class="table" style="font-size: 1.5em;">
                        <thead class="thead-dark" style="background-color: rgb(10, 112, 112); color: white;">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên</th>
                                <th scope="col" style="width: 33%;">Giá</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Công cụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in orders">
                                <tr :key="index">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.price }}</td>
                                    <td class="cart-quantity cart-column">
                                        <input class="cart-quantity-input form-control" type="number" v-model="item.quantity">
                                    </td>
                                    <td>
                                        <button class="btn btn-danger" type="button" @click="deleteOrder(index)">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                        <tfoot v-if="orders.length != 0">
                            <tr>
                                <th colspan="3">Thành tiền</th>
                                <th>${{ cost }}</th>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="w-100">
                        <button type="button" class="float-end btn btn-lg btn-outline-success" style="font-size: 1.3em;" @click="order()">Đặt món</button>
                    </div>
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
                mon: [],
                orders: [],
                cost: 0
            }
        },
        watch: {
            orders: {
                deep: true,
                handler() {
                    this.orders.forEach(order => {
                        this.cost += order.price * order.quantity;
                    });
                }
            }
        },
        methods: {
            getMon() {
                APIService.getMon().then((result) => {
                    this.$data.mon = result.data;
                });
            },
            addOrder(id, name, price) {
                let found = false;
                if (this.$data.orders != null) {
                    this.$data.orders.find(order => {
                        if (order.id == id) {
                            order.quantity++;
                            found = true;
                        }
                    });
                }
                if (found == false) {
                    let quantity = 1;
                    this.$data.orders.push({ id, name, price, quantity });
                }
            },
            order() {
                let i = 1;
                let orders = this.$data.orders;
                let count = orders.length;
                this.orders.forEach((order) => {
                    let tableCode = this.$route.params.code;
                    let data = {
                        dish_id: order.id,
                        quantity: order.quantity,
                        price: order.price
                    };
                    APIService.order(tableCode, data).then(function (result) {
                        if (i == count) {
                            if (result.code == null || result.code == 0) {
                                alert('Đặt món thất bại!');
                            } else {
                                alert('Đặt món thành công!');
                                orders.splice(0);
                            }
                        }
                        i++;
                    });
                });
            },
            deleteOrder(index) {
                let conf = confirm('Bạn có muốn xóa món này ra khỏi giỏ hàng?');
                if (conf == true) {
                    if (this.$data.orders[index] != null) {
                        this.orders.splice(index, 1);
                    }
                }
            }
        },
        mounted() {
            this.getMon();
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