loadMenu();

function loadMenu() {
  let t = document.getElementsByClassName("pMenu")[0];
  t.innerHTML = ` <div class="logo"> 
           <a href="index.html" class="fa-solid fa-house-chimney" ></a> </div>
        <div class="menu">
          <ul class="menuTop">
            <li><a href="#" class="menu1-default">Menu1 </a></li>
            <li>
              <a href="#" class="Menu2">Menu2 </a>
              <ul class="subMenu2">
                <li><a href="#">menu 21</a></li>
                <li><a href="#">menu 22</a></li>
                <li><a href="#">menu 23</a></li>
                <li><a href="#">menu 24</a></li>
                <li><a href="#">menu 25</a></li>
              </ul>
            </li>
            <li><a href="thoigianKM.html">Thời gian khuyến mãi</a></li>
            <li><a href="#">Menu4 </a></li>
            <li><a href="#">Menu5 </a></li>
          </ul>
        </div>
        <div class="DangNhapGioHangTongSL">
          <div class="DangNhap">
            <i class="fa-regular fa-user"></i>
          </div>
          <div class="GioHang">
            <a href="giohang.html" class="fa-solid fa-cart-shopping"></a> 
          </div>
          <div class="TongSL">
            0
          </div>
        </div>`;
}
