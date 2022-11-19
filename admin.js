function switchProduct(){
    main = document.querySelector('.main');
    main.innerHTML = `<div class='main-top'>
                        <div class="productManagement">
                            <h1>Quản lý sản phẩm</h1>
                            <div class="formAddProduct">
                                <form action="">
                                    <label for="idProduct">Mã sản phẩm</label>
                                    <input id="idProduct" type="text">
                                    <label for="nameProduct">Tên sản phẩm</label>
                                    <input id="nameProduct" type="text">
                                    <label for="priceProduct">Giá tiền</label>
                                    <input id="priceProduct" type="number">
                                    <label for="imgProduct">Hình ảnh</label>
                                    <input id="imgProduct" type="file">
                                    <input type="submit">
                                </form>
                            </div>
                        </div>

                        <div class="searchProduct">
                            <input onmouseup="" type="search" placeholder="Tìm kiếm sản phẩm....">
                            <button>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>

                        <div class="listProduct">
                            <table class="container-list">
                                <thead>
                                    <tr>
                                        <th><h1 class="heading-list">Hình ảnh</h1></th>
                                        <th><h1 class="heading-list">Mã sản phẩm</h1></th>
                                        <th><h1 class="heading-list">Tên sản phẩm</h1></th>
                                        <th><h1 class="heading-list">Số lượng</h1></th>
                                        <th><h1 class="heading-list">Đơn giá</h1></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><img src="Picture/Lap 1.png" alt="" class="listProduct-img"></td>
                                        <td>001</td>
                                        <td>MSI KATANA</td>
                                        <td>1</td>
                                        <td>44.000.000đ</td>
                                        <td>
                                            <button>Sửa</button>
                                            <button>Xóa</button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><img src="Picture/Lap 2.png" alt="" class="listProduct-img"></td>
                                        <td>002</td>
                                        <td>GIGABYTE G5</td>
                                        <td>1</td>
                                        <td>44.000.000đ</td>
                                        <td>
                                            <button>Sửa</button>
                                            <button>Xóa</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>`
}

function switchUser(){
    main = document.querySelector('.main');
    main.innerHTML = "<div class='main-top'>"+
                        "<h1>Quản lý tài khoản</h1>"+
                       "</div>"
}