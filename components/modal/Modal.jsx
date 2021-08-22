const ModalComponent = ({ open, onCloseModal }) => {

  const start = ( ) => {
    setTimeout(() => {
      
      var swiper = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        initialSlide: 0,
        loop: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        // mousewheel: {
        //     // invert: false
        // },
        on: {
            init: function(){
                var index = this.activeIndex;
  
                var target = $('.product-slider__item').eq(index).data('target');
  
                console.log(target);
  
                $('.product-img__item').removeClass('active');
                $('.product-img__item#'+ target).addClass('active');
            }
        }
  
      });
  
      swiper.on('slideChange', function () {
          var index = this.activeIndex;
  
          var target = $('.product-slider__item').eq(index).data('target');
  
          console.log(target);
  
          $('.product-img__item').removeClass('active');
          $('.product-img__item#'+ target).addClass('active');
  
          if(swiper.isEnd) {
              $('.prev').removeClass('disabled');
              $('.next').addClass('disabled');
          } else {
              $('.next').removeClass('disabled');
          }
  
          if(swiper.isBeginning) {
              $('.prev').addClass('disabled');
          } else {
              $('.prev').removeClass('disabled');
          }
      });
  
      $(".js-fav").on("click", function() {
          $(this).find('.heart').toggleClass("is-active");
      });
    }, 1);
  }

  return (
    <div className={`modalCard ${true && "change"}`}>
      {
        open && (
          <div onLoad={start}>
            <a
              onClick={onCloseModal}
              style={{
                position: "fixed",
                right: 15,
                top: 15,
                color: "black",
                zIndex: 99999999999999,
                cursor: "pointer",
                width: 30,
                height: 30,
                textAlign: 'center'
              }}
            >X</a>
            <div className="wrapper">
              <div className="content">
                <div className="bg-shape">
                  {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1536405214/starwars/logo.png" alt="" /> */}
                </div>
                <div className="product-img">
                  <div className="product-img__item" id="img1">
                    <img src="/icons/pngegg.png" alt="star wars" className="product-img__img" />
                  </div>
                  <div className="product-img__item" id="img2">
                    <img src="/icons/mozg-main.png" alt="star wars" className="product-img__img" />
                  </div>
                  <div className="product-img__item" id="img4">
                    <img src="/icons/pozvon.png" alt="star wars" className="product-img__img" />
                  </div>
                </div>
                <div className="product-slider">
                  <button className="prev disabled">
                    <span className="icon">
                      <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-left" /></svg>
                    </span>
                  </button>
                  <button className="next">
                    <span className="icon">
                      <svg className="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right" /></svg>
                    </span>
                  </button>
                  <div className="product-slider__wrp swiper-wrapper">
                    <div className="product-slider__item swiper-slide" data-target="img4">
                      <div className="product-slider__card">
                        {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1536405223/starwars/item-4-bg.jpg" alt="star wars" className="product-slider__cover" /> */}
                        <div className="product-slider__content">
                          <h1 className="product-slider__title">
                            МРТ <br />
                            ПОЗВОНОЧНИКА
                          </h1>
                          <span className="product-slider__price">$1.299,<sup>99</sup></span>
                          <div className="product-ctr">
                            <div className="product-labels">
                              <div className="product-labels__title">ДОПЫ</div>
                              <div className="product-labels__group">
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">УЗИ</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" defaultChecked />
                                  <span className="product-labels__txt">ПРоцедура 1</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">ПРОЦЕДУРА 2</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                              </div>
                            </div>
                            
                            <div className="product-inf">
                              <div className="product-inf__percent">
                                <div className="product-inf__percent-circle">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                                    <defs>
                                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0c1e2c" stopOpacity={0} />
                                        <stop offset="100%" stopColor="#cb2240" stopOpacity={1} />
                                      </linearGradient>
                                    </defs>
                                    <circle cx={50} cy={50} r={47} strokeDasharray="240, 300" stroke="#cb2240" strokeWidth={4} fill="none" />
                                  </svg>
                                </div>
                                <div className="product-inf__percent-txt">
                                  80%
                                </div>
                              </div>
                              <span className="product-inf__title">ПРОЦЕНТ ЛЕТАЛА</span>
                            </div>
                          </div>
                          <div className="product-slider__bottom">
                            <button className="product-slider__cart">
                              ДОБАВИТЬ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-slider__item swiper-slide" data-target="img1">
                      <div className="product-slider__card">
                        {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1536405223/starwars/item-4-bg.jpg" alt="star wars" className="product-slider__cover" /> */}
                        <div className="product-slider__content">
                          <h1 className="product-slider__title">
                            МРТ <br />
                            ПЕчЕНИ
                          </h1>
                          <span className="product-slider__price">$1.299,<sup>99</sup></span>
                          <div className="product-ctr">
                            <div className="product-labels">
                              <div className="product-labels__title">ДОПЫ</div>
                              <div className="product-labels__group">
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">УЗИ</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" defaultChecked />
                                  <span className="product-labels__txt">ПРоцедура 1</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">ПРОЦЕДУРА 2</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                              </div>
                            </div>
                            
                            <div className="product-inf">
                              <div className="product-inf__percent">
                                <div className="product-inf__percent-circle">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                                    <defs>
                                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0c1e2c" stopOpacity={0} />
                                        <stop offset="100%" stopColor="#cb2240" stopOpacity={1} />
                                      </linearGradient>
                                    </defs>
                                    <circle cx={50} cy={50} r={47} strokeDasharray="240, 300" stroke="#cb2240" strokeWidth={4} fill="none" />
                                  </svg>
                                </div>
                                <div className="product-inf__percent-txt">
                                  80%
                                </div>
                              </div>
                              <span className="product-inf__title">ПРОЦЕНТ ЛЕТАЛА</span>
                            </div>
                          </div>
                          <div className="product-slider__bottom">
                            <button className="product-slider__cart">
                              ДОБАВИТЬ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-slider__item swiper-slide" data-target="img2">
                      <div className="product-slider__card">
                        {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1536405223/starwars/item-4-bg.jpg" alt="star wars" className="product-slider__cover" /> */}
                        <div className="product-slider__content">
                          <h1 className="product-slider__title">
                            МРТ <br />
                            ГОЛОВНОГО МОЗГА
                          </h1>
                          <span className="product-slider__price">$1.299,<sup>99</sup></span>
                          <div className="product-ctr">
                            <div className="product-labels">
                              <div className="product-labels__title">ДОПЫ</div>
                              <div className="product-labels__group">
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">УЗИ</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" defaultChecked />
                                  <span className="product-labels__txt">ПРоцедура 1</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">ПРОЦЕДУРА 2</span>
                                </label>
                                <label className="product-labels__item">
                                  <input type="radio" className="product-labels__checkbox" name="type5" />
                                  <span className="product-labels__txt">АДЗИП</span>
                                </label>
                              </div>
                            </div>
                            
                            <div className="product-inf">
                              <div className="product-inf__percent">
                                <div className="product-inf__percent-circle">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100">
                                    <defs>
                                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0c1e2c" stopOpacity={0} />
                                        <stop offset="100%" stopColor="#cb2240" stopOpacity={1} />
                                      </linearGradient>
                                    </defs>
                                    <circle cx={50} cy={50} r={47} strokeDasharray="240, 300" stroke="#cb2240" strokeWidth={4} fill="none" />
                                  </svg>
                                </div>
                                <div className="product-inf__percent-txt">
                                  80%
                                </div>
                              </div>
                              <span className="product-inf__title">ПРОЦЕНТ ЛЕТАЛА</span>
                            </div>
                          </div>
                          <div className="product-slider__bottom">
                            <button className="product-slider__cart">
                              ДОБАВИТЬ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg className="hidden" hidden>
              <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z" />
              </symbol>
              <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z" />
              </symbol>
            </svg>
          </div>
        )
      }
    </div>
  )
}

export default ModalComponent