import React from 'react'

export default function CategoryDetail() {
  return (
    <div style={{width: '100%' }}>
        <div className="breadcrumb_background">
          <div className="title_full">
            <div className="container a-center">
              <p className="title_page">Tp. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
        <div className="container">
          <section className="bread-crumb">
            <span className="crumb-border" />
            <div className="container-product-detail">
              <div className="row">
                <div className="col-xs-12 a-left">
                  <ul className="breadcrumb">
                    <li className="home">
                      <a href="#"><span>Trang chủ</span></a>
                      <span className="mr_lr">&nbsp;/&nbsp;</span>
                    </li>
                    <li>
                      <a href="#"><span>Tp. Hồ Chí Minh</span></a>
                      <span className="mr_lr">&nbsp;/&nbsp;</span>
                    </li>
                    <li><strong><span>Cho thuê căn hộ, biệt thự cao cấp</span></strong></li><li>
                    </li></ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}
